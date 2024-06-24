#!/usr/bin/env -S deno run --allow-env --allow-read --node-modules-dir=false

/******************************************************************************
 * Universal Data Infrastructure (UDI) CLI controller
 * ----------------------------------------------------------------------------
 * We keep our SQL DDL in Deno modules because it allows the full power of
 * TypeScript/Javascript to generate and mix any number of DDL statements
 * dynamically.
 * ----------------------------------------------------------------------------
 * Policies and Guidelines:
 * - generate scripts which can be passed to bash/fish/etc. not execute-only
 * - keep dependencies to a minimum so that this script is self-contained
 * - keep all SQL idempotent (drop tables, do upserts, etc.)
 * - if anything is slow, use :memory: first then dump to disk
 * - use jtladeiras.vscode-inline-sql in VS Code to syntax highlight SQL
 ******************************************************************************/

import {
  cliffyANSI as ca,
  cliffyCmd as cli,
  duckDbSQLa as ddbSQLa,
  fs,
  path,
  SQLa,
} from "./deps.ts";

export interface Configuration {
  readonly baseFsPath: (relativePath: string) => string;
  readonly binFsPath: (relativePath: string) => string;
  readonly contentFsPath: (relativePath: string) => string;
}

export type EmitContext = SQLa.SqlEmitContext & Configuration;

export const configure = () => {
  const ib = ddbSQLa.integrationsBuilder<EmitContext>();
  const integrations = {
    excel: ib.excel({
      SCF: ib.factory.excel<
        | "Domains & Principles"
        | "SCF 2023.2"
        | "Assessment Objectives 2023.2"
        | "Privacy Management 2023.2"
        | "Authoritative Sources"
        | "Aicpa Soc2 Controls"
        | "HIPAA Security Rule Safeguards"
        | "Code Quality Infrastructure"
      >({
        xlsFsPath: (ctx) =>
          ctx.contentFsPath("secure-controls-framework-v2023.2.xlsx"),
      }),
    }),
    sqlite: ib.sqlite({
      PRIME: ib.factory.sqlite({
        sqliteDbFsPath: (ctx) => ctx.baseFsPath("udi-sii-prime.sqlite.db"),
        attachAs: `udi_sii_prime_sqlite`,
      }),
    }),
  };

  const prepare: (basePath: string) => Configuration = (basePath) => {
    const instance: Configuration = {
      baseFsPath: (relativePath) => path.join(basePath, relativePath),
      binFsPath: (relativePath) => path.join(basePath, "bin", relativePath),
      contentFsPath: (relativePath) =>
        path.join(basePath, "content", relativePath),
    };
    return instance;
  };

  const expectedPath = "udi-sii";
  const config = prepare(Deno.cwd().endsWith(expectedPath) ? "" : expectedPath);
  const emitCtx: EmitContext = {
    ...SQLa.typicalSqlEmitContext(),
    ...config,
  };
  const ddlOptions = SQLa.typicalSqlTextSupplierOptions<EmitContext>();

  return {
    ...config,
    integrations,
    emitCtx,
    ddlOptions,
  };
};

const duckDbDDL = (config = configure()) => {
  const {
    excel: { SCF },
    sqlite: { PRIME },
  } = config.integrations;
  const ddlDefn = SQLa.SQL<EmitContext>(config.ddlOptions)`
      ${[config.integrations.excel, config.integrations.sqlite]}

      -- DESCRIBE FROM ${SCF.from("Domains & Principles")};
      -- DESCRIBE FROM ${SCF.from("SCF 2023.2")};
      -- DESCRIBE FROM ${SCF.from("Assessment Objectives 2023.2")};
      -- DESCRIBE FROM ${SCF.from("Privacy Management 2023.2")};
      -- DESCRIBE FROM ${SCF.from("Authoritative Sources")};

      -- TODO: add version column so that multiple SCF versions can sit in the
      --       same database or same tables
      DROP TABLE IF EXISTS ${PRIME.attachAs}.scf_domain;
      CREATE TABLE ${PRIME.attachAs}.scf_domain AS
        SELECT * from ${SCF.from("Domains & Principles")};

UPDATE ${PRIME.attachAs}.scf_domain SET "SCF Identifier" = TRIM("SCF Identifier") WHERE "SCF Identifier" != TRIM("SCF Identifier");
      -- TODO: add version column so that multiple SCF versions can sit in the
      --       same database or same tables
      DROP TABLE IF EXISTS ${PRIME.attachAs}.scf;
      CREATE TABLE ${PRIME.attachAs}.scf AS
        SELECT * from ${SCF.from("SCF 2023.2")};

                UPDATE ${PRIME.attachAs}.scf
        SET "SCF #" = TRIM("SCF #")
        WHERE "SCF #" != '';

--       same database or same tables
      DROP TABLE IF EXISTS ${PRIME.attachAs}.aicpa_soc2_controls;
      CREATE TABLE ${PRIME.attachAs}.aicpa_soc2_controls AS
        SELECT * from ${SCF.from("Aicpa Soc2 Controls")};

      -- TODO: add alter statements to create Foreign Keys, Indexes, etc.
      --       same database or same tables
      DROP TABLE IF EXISTS ${PRIME.attachAs}.hipaa_security_rule_safeguards;
      CREATE TABLE ${PRIME.attachAs}.hipaa_security_rule_safeguards AS
        SELECT * from ${SCF.from("HIPAA Security Rule Safeguards")};

      -- TODO: add alter statements to create Foreign Keys, Indexes, etc.

       -- TODO: add alter statements to create Foreign Keys, Indexes, etc.
      --       same database or same tables
      DROP TABLE IF EXISTS ${PRIME.attachAs}.code_quality_infrastructure;
      CREATE TABLE ${PRIME.attachAs}.code_quality_infrastructure AS
        SELECT * from ${SCF.from("Code Quality Infrastructure")};

      -- TODO: add alter statements to create Foreign Keys, Indexes, etc.

      `;

  return ddlDefn.SQL(config.emitCtx);
};

const emitIngestSh = (options: {
  readonly destroyExisting?: boolean;
  readonly icdb: string;
}) => {
  const config = configure();
  const ingestDuckDbCmds: string[] = [];
  if (options.destroyExisting) {
    if (options.icdb != ":memory:") {
      ingestDuckDbCmds.push(`rm -f ${options.icdb}`);
    }

    ingestDuckDbCmds.push(
      `rm -f ${config.integrations.sqlite.PRIME.sqliteDbFsPath(
        config.emitCtx,
      )}`,
    );
  }

  ingestDuckDbCmds.push(
    `deno run -A ${config.baseFsPath(
      path.basename(import.meta.url),
    )} emit-duckdb-ddl | ${config.binFsPath("duckdb")} "${options.icdb}"`,
  );
  return ingestDuckDbCmds.join(" && ");
};

function generateGovnDocsSh(config = configure()) {
  const gsda = config.baseFsPath("governance/schema-doc-auto");
  return `cd ${gsda} && find . -name "*.tbls.yaml" -exec ${path.relative(
    gsda,
    config.binFsPath("tbls"),
  )} doc --rm-dist --config {} \\;`;
}

function extractVersionFromUrl(url: string): string | null {
  // Regular expression to match version patterns like v1.2.3, 1.2.3, 1.2, etc.
  const versionPattern = /v?(\d+\.\d+(\.\d+)?(-[\d.A-Za-z-]+)?)/;
  const match = url.match(versionPattern);

  return match ? match[1] : null;
}

if (import.meta.main) {
  const expectedPath = "udi-sii";
  if (
    !Deno.cwd().endsWith(expectedPath) &&
    !fs.existsSync(path.join(Deno.cwd(), expectedPath))
  ) {
    console.error(
      ca.colors.bold.red(
        `Expected to be in either project root or ${expectedPath}`,
      ),
    );
  }

  const help = new cli.HelpCommand().global();
  const CLI = new cli.Command()
    .name(path.basename(import.meta.url))
    .version(extractVersionFromUrl(import.meta.url) ?? "0.1.0")
    .description("Universal Data Infrastructure (CLI) controller.")
    .command("help", help)
    .command("completions", new cli.CompletionsCommand())
    .command(
      "emit-duckdb-ddl",
      new cli.Command()
        .description("To see the DuckDB SQL DDL that will be generated.")
        .action(() => console.log(duckDbDDL(configure()))),
    )
    .command(
      "governance-docs-sh",
      new cli.Command()
        .description("Generate schema and other governance documentation")
        .action(() => console.log(generateGovnDocsSh(configure()))),
    )
    .command(
      "emit-ingest-sh",
      new cli.Command()
        .description(
          "To see which commands will ingest and populate a DuckDB database.",
        )
        .option(
          "--icdb <ingestDuckDbDestFsPath>",
          "Name of the DuckDB intermediary database",
          {
            default: ":memory:",
          },
        )
        .option("--destroy-existing", "Remove the destination file(s) first.")
        .action((options) => console.log(emitIngestSh(options))),
    );

  CLI.parse(Deno.args).catch((error) => {
    if (error instanceof cli.ValidationError) {
      console.error(error.message);
      Deno.exit(1);
    }
    throw error;
  });
}
