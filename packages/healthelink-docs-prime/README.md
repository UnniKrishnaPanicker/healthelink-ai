# HEALTHeLINK Governance, Planning and Management (`GPM`)

## Publishing

This repo automatically publishes content to Deno Deploy at the
`` endpoint whenever a `git push` is completed. The
GitHub Actions CI/CD infrastructure uses `.github/workflows/deploy.yml` as its
Infrastructure as Code (IaC) instructions.

## Lint and reformatting on Git Commit

This project uses [Husky Git Hooks](https://typicode.github.io/husky/) which
require Git commit messages in
[Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) format. If
you do not provide proper commit messages, Git commits may fail.

Files are also automatically formatted by Prettier and sometimes (rarely) it
might break Markdown formats so keep an eye on your content.

###### To enable Husky in the repository, follow these steps:

1. Open your terminal and run the following command:

```js
pnpm install
```

This command will install Husky, ESLint, Prettier, and ESLint plugins, as
specified in the `package.json` file. 2. After the installation process is
complete, you can verify whether Husky is properly installed in the repository
by running the following command:

```js
git config core.hookspath
```

If Husky is properly installed, this command will display `.husky` in the
terminal.

1. To ensure that Husky can execute properly, you need to grant read and write
   permissions to the `commit-msg` and `pre-commit`files. You can achieve this
   using the following commands:

```js
chmod + x.husky / commit - msg;
chmod + x.husky / pre - commit;
```

1. When you commit changes to the repository, the following command will run:

```js
pnpm run lint-staged
```

This command validates the files against the lint rules specified in the
`.eslintrc.cjs` file. You can configure which files are excluded from linting by
editing either the `.huskyrc` or `.eslintignore` file.

## 🚀 Project Structure

Inside of this project, you'll see the following folders and files:

```
.
├── .github/
│   ├── workflows/
│   │   └── deploy.yml   # GitHub Actions for authomatic Deno Deploy on push
├── deno-deploy/
|   ├── server.ts        # this serves files in Deno Deploy serverless environment
│   ├── dist/            # this is where `npm run deno-deploy` places HTML/CSS/etc.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/        # this is where authors place all their Markdown and other docs
│   │   └── config.ts
│   └── env.d.ts
├── .commitlintrc.cjs
├── .eslintrc.cjs
├── .huskyrc
├── .prettierrc.cjs
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

`GPM` looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each
file is exposed as a route based on its file name. If you change the location or
the name of a file its endpoint will automatically reflect the new location.

Using our `Previewable URLs` Markdown plugin, images that do not need to pre
processed or optimized should be stored in the same directory as their Markdown
whenever possible. However, if images need to be optimized or preprocessed may
be added to `src/assets/` and embedded in Markdown with a relative link as a
_component_.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Learn more about Astro Framework and Starlight Theme

Check out [Starlight’s docs](https://starlight.astro.build/), read
[the Astro documentation](https://docs.astro.build), or jump into the
[Astro Discord server](https://astro.build/chat).

