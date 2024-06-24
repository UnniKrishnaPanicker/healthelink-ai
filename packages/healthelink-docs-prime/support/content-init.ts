function markdownGenerator(
  rootPath: string,
  dirsCreated: Record<
    string,
    {
      readonly fsPath: string;
      readonly humanPath: string;
    }
  >,
) {
  return async (humanPath: string) => {
    const humanPathParts = humanPath.split("/");
    const fsPathParts = humanPath
      .split("/")
      .map((part) =>
        part.toLowerCase().replaceAll(" & ", " and ").split(" ").join("-"),
      );
    const fsPath = fsPathParts.slice(0, -1).join("/");
    const filename = `${fsPathParts.at(-1)}.md`;
    const fullPath = `${rootPath}/${fsPath}/${filename}`;

    if (!dirsCreated[fsPath]) {
      const mkPath = fullPath.split("/").slice(0, -1).join("/");
      try {
        await Deno.mkdir(mkPath, { recursive: true });
      } catch (error) {
        if (!(error instanceof Deno.errors.AlreadyExists)) {
          console.error(`Error creating directory ${fsPath}: ${error}`);
        }
      }
      dirsCreated[fsPath] = {
        fsPath: mkPath,
        humanPath: humanPathParts.slice(0, -1).join("/"),
      };
    }

    const content = `---\ntitle: ${humanPathParts.at(-1)}\n---\n\n# TODO`;
    try {
      await Deno.writeTextFile(fullPath, content);
    } catch (error) {
      console.error(`Error creating file ${fullPath}: ${error}`);
    }
  };
}

const dirsCreated: Parameters<typeof markdownGenerator>[1] = {};
const generateMarkdown = markdownGenerator("../src/content/docs", dirsCreated);

await generateMarkdown("Product Overview/Introduction");
await generateMarkdown("Product Overview/Product Vision & Mission");
await generateMarkdown("Product Overview/Product Features and Capabilities");

await generateMarkdown("Governance/Governance Framework");
await generateMarkdown("Governance/Compliance and Standards");
await generateMarkdown("Governance/Decision-Making Processes");
await generateMarkdown("Governance/Risk Management");

await generateMarkdown("Planning/Product Roadmap");
await generateMarkdown("Planning/Release Planning");
await generateMarkdown("Planning/Sprint/Iteration Planning");
await generateMarkdown("Planning/Resource Allocation");

await generateMarkdown("Management/Project Management");
await generateMarkdown("Management/Stakeholder Management");
await generateMarkdown("Management/Quality Assurance & Testing");
await generateMarkdown("Management/Feedback Management");

await generateMarkdown("Code Quality and Repositories/Code Quality Standards");
await generateMarkdown("Code Quality and Repositories/Code Repositories");
await generateMarkdown("Code Quality and Repositories/Significant Assets");
await generateMarkdown(
  "Code Quality and Repositories/Collaboration Tools for Developers",
);
await generateMarkdown("Code Quality and Repositories/Environment Setup");

await generateMarkdown(
  "Teams and Roles/Product Management/Responsibilities & Duties",
);
await generateMarkdown(
  "Teams and Roles/Product Management/Team Members & Contacts",
);
await generateMarkdown(
  "Teams and Roles/Product Management/Collaboration with Other Teams",
);
await generateMarkdown(
  "Teams and Roles/Product Management/Key Deliverables & Timeline",
);
await generateMarkdown("Teams and Roles/Development/Responsibilities & Duties");
await generateMarkdown("Teams and Roles/Development/Team Members & Contacts");
await generateMarkdown(
  "Teams and Roles/Development/Collaboration Tools & Platforms",
);
await generateMarkdown("Teams and Roles/Development/Training & Resources");
await generateMarkdown("Teams and Roles/Development/Code Quality Standards");
await generateMarkdown(
  "Teams and Roles/Development/Feedback & Continuous Improvement",
);
await generateMarkdown(
  "Teams and Roles/QA and Testing/Responsibilities & Duties",
);
await generateMarkdown(
  "Teams and Roles/QA and Testing/Team Members & Contacts",
);
await generateMarkdown(
  "Teams and Roles/QA and Testing/Collaboration with Development",
);
await generateMarkdown("Teams and Roles/QA and Testing/Tools & Platforms Used");
await generateMarkdown(
  "Teams and Roles/QA and Testing/Test Planning & Execution",
);
await generateMarkdown(
  "Teams and Roles/Operations/Ops Team Structure & Responsibilities",
);
await generateMarkdown(
  "Teams and Roles/Operations/Incident Management Protocols",
);
await generateMarkdown("Teams and Roles/Operations/Infrastructure Management");
await generateMarkdown(
  "Teams and Roles/Operations/Security Protocols & Best Practices",
);
await generateMarkdown(
  "Teams and Roles/Sales & Marketing/Responsibilities & Duties",
);
await generateMarkdown(
  "Teams and Roles/Sales & Marketing/Team Members & Contacts",
);
await generateMarkdown(
  "Teams and Roles/Sales & Marketing/Product Demonstration & Training",
);
await generateMarkdown(
  "Teams and Roles/Sales & Marketing/Market Research & Feedback Collection",
);
await generateMarkdown(
  "Teams and Roles/Other Affiliated Professionals/Responsibilities & Duties",
);
await generateMarkdown(
  "Teams and Roles/Other Affiliated Professionals/Team Members & Contacts",
);
await generateMarkdown(
  "Teams and Roles/Other Affiliated Professionals/Collaboration Guidelines",
);
await generateMarkdown(
  "Teams and Roles/Other Affiliated Professionals/Key Deliverables & Timeline",
);

await generateMarkdown(
  "Collaboration & Communication/Collaboration Tools & Platforms",
);
await generateMarkdown("Collaboration & Communication/Meetings & Stand-ups");
await generateMarkdown("Collaboration & Communication/Internal Communications");

await generateMarkdown("Training & Resources/Onboarding Material");
await generateMarkdown("Training & Resources/Continuous Learning Resources");
await generateMarkdown("Training & Resources/FAQ Section");
await generateMarkdown("Training & Resources/Glossary of Terms");

await generateMarkdown("Feedback & Suggestions/Feedback Submission Form");
await generateMarkdown("Feedback & Suggestions/Previous Feedback & Responses");
await generateMarkdown("Feedback & Suggestions/Ongoing Discussions & Polls");

console.log(dirsCreated);
