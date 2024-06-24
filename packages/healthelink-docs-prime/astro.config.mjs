import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import * as ameRPU from "astro-markdown-experience/rewrite-previewable-url";
import tailwind from "@astrojs/tailwind";
//import remarkMermaid from "astro-diagram/remark-mermaid";
import astroRehypeMermaid from "./src/integrations/astro-rehype-mermaid";
import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      ameRPU.typicalRemarkRewritePreviewableURLsPlugin(),
      //remarkMermaid,
    ],
  },
  integrations: [
    astroRehypeMermaid({
      // rehype-mermaid options can be passed here
    }),
    starlight({
      title: "HEALTHeLINK™",
      customCss: ["./src/tailwind.css"],
      editLink: {
        baseUrl: "https://github.com/netspective/healthelink-docs-prime",
      },
      lastUpdated: true,
      social: {
        github: "https://github.com/netspective/healthelink-docs-prime",
      },
      head: [
        {
          tag: "script",
          attrs: {
            src: "/ua-scripts/typical.js",
          },
        },
        {
          tag: "script",
          attrs: {
            type: "application/json",
            class: "js-hypothesis-config",
          },
          content:
            '{ "openSidebar": false, "theme": "classic", "requestGroups": ["QkmLz9mv"] }',
        },
        {
          tag: "script",
          attrs: {
            src: "https://hypothes.is/embed.js",
            async: true,
          },
        },
      ],
      sidebar: [
        {
          label: "GPM Infrastructure",
          autogenerate: {
            directory: "gpm",
          },
          collapsed: true,
        },
        {
          label: "Legal and Compliance Center",
          autogenerate: {
            directory: "legal-and-compliance-center",
          },
        },
        {
          label: "Outcomes Center",
          autogenerate: {
            directory: "outcomes-center",
          },
        },
        {
          label: "Decisions Center",
          autogenerate: {
            directory: "decisions-center",
          },
          // collapsed: true,
          // items: [
          //   {
          //     label: "Home",
          //     link: "/decisions-center/home/",
          //   },
          //   {
          //     label: "Product Architecture",
          //     link: "/decisions-center/product-architecture",
          //   },
          //   {
          //     label: "AI Experiments Architecture",
          //     link: "/decisions-center/ai-experiments-architecture",
          //   },
          //   // {
          //   //   label: "Messaging",
          //   //   autogenerate: {
          //   //     directory: "/decisions-center/messaging",
          //   //   },
          //   //   collapsed: true,
          //   //   items: [
          //   //     {
          //   //       label: "Home",
          //   //       link: "/decisions-center/messaging/messaginghome",
          //   //     },
          //   //   ],
          //   // },
          // ],
        },
        {
          label: "Enterprise Reliability Center",
          autogenerate: {
            directory: "enterprise-reliability-center",
          },
          collapsed: true,
        },
        {
          label: "Customer Success Center",
          autogenerate: {
            directory: "customer-success-center",
          },
          collapsed: true,
        },
        {
          label: "Product Reliability Center",
          collapsed: true,
          items: [
            {
              label: "Home",
              link: "/product-reliability-center/product-reliability/home/",
            },
            {
              label: "Compliance Standards",
              link: "/product-reliability-center/product-reliability/compliance-standards/",
            },
            {
              label: "Customer Profiles",
              link: "/product-reliability-center/product-reliability/customer-profile/",
            },
            {
              label: "Product Architecture",
              link: "/product-reliability-center/product-reliability/product-architecture/",
            },
            {
              label: "Technology Stack",
              link: "/product-reliability-center/product-reliability/technology-stack/",
            },
            {
              label: "Change Management",
              autogenerate: {
                directory: "product-reliability-center/change-management",
              },
            },
            {
              label: "Quality Assurance",
              autogenerate: {
                directory: "product-reliability-center/quality-assurance",
              },
            },
            {
              label: "Reliability Engineering",
              autogenerate: {
                directory: "product-reliability-center/reliability-engineering",
              },
            },
          ],
        },
        {
          label: "Platform Engineering Center",
          autogenerate: {
            directory: "platform-engineering-center",
          },
          collapsed: true,
          items: [
            {
              label: "Home",
              link: "/platform-engineering-center/home/",
            },
            {
              label: "SRE & DevOpsHub",
              autogenerate: {
                directory:
                  "platform-engineering-center/site-reliability-engineering-hub",
              },
            },
          ],
        },
        {
          label: "Ideation & Exploration",
          autogenerate: {
            directory: "ideation-exploration",
          },
          collapsed: true,
          // items: [
          //   {
          //     label: "Home",
          //     link: "/ideation-exploration/home/",
          //   },
          //   {
          //     label: "Understanding CGM",
          //     link: "/ideation-exploration/understanding-cgm/understanding-cgm",
          //   },
          //   {
          //     label: "CGM Data and Specifications",
          //     link: "ideation-exploration/data-in-cgm-repo/data-in-cgm-repo",
          //   },
          //   {
          //     label: "CGM DataSet ",
          //     link: "/ideation-exploration/cgm-dataset/cgm-dataset",
          //   },
          //   {
          //     label: "CGM Data Sources",
          //     autogenerate: {
          //       directory: "/ideation-exploration/cgm-device",
          //     },
          //   },
          //   {
          //     label: "Ingested Datasets",
          //     autogenerate: {
          //       directory: "/ideation-exploration/ingested-dataset",
          //     },
          //   },
          //   {
          //     label: "The need for CGM Repository",
          //     link: "/ideation-exploration/need-for-cgm-repository/need-for-cgm-repository",
          //   },
          //   {
          //     label: "Pathway to building the Data Repository",
          //     link: "/ideation-exploration/pathway-to-newrepo/pathway-to-newrepo",
          //   },
          //   {
          //     label: "FAIR and TRUST principles",
          //     link: "/ideation-exploration/fair-trust-principle/fair-trust-principle",
          //   },
          //   {
          //     label: "Project Timeline",
          //     link: "/ideation-exploration/project-timeline/project-timeline",
          //   },
          //   {
          //     label: "Benefits to Novo Nordisk",
          //     link: "/ideation-exploration/benefit-novo-nordisk/benefit-novo-nordisk",
          //   },
          //   {
          //     label: "Product Description",
          //     link: "/ideation-exploration/product-description/product-description",
          //   },
          //   {
          //     label: "About the Metrics",
          //     autogenerate: {
          //       directory: "/ideation-exploration/metrics",
          //     },
          //   },
          //   {
          //     label: "Research Paper Analysis",
          //     link: "/ideation-exploration/research-paper-analysis/external-validation-of-a-classifier",
          //   },
          //   {
          //     label: "Product Implementation Strategy",
          //     link: "/ideation-exploration/project-implementation-strategy/project-implementation-strategy",
          //   },
          //   {
          //     label: "Initial project understanding workflow",
          //     link: "/ideation-exploration/initial-project-workflow/initial-project-workflow",
          //   },
          //   {
          //     label: "AGP Reports",
          //     link: "/ideation-exploration/agp-reports/agp-reports",
          //   },
          //   {
          //     label: "Comparison with similar repositories",
          //     autogenerate: {
          //       directory:
          //         "/ideation-exploration/potential-features-repositories",
          //     },
          //   },
          //   /*{
          //     label: "Data Producers MOU",
          //     link:
          //       "/ideation-exploration/data-producers-mou/data-producers-mou",
          //   },*/
          //   {
          //     label: "Using Research Hub Site",
          //     autogenerate: {
          //       directory: "/ideation-exploration/researchhub-usage",
          //     },
          //   },
          //   /*{
          //     label: "Using researchhub for file import",
          //     link:
          //       "/ideation-exploration/doltlab-file-import/doltlab-file-import",
          //   },
          //   */
          // ],
        },
        {
          label: "Disciplines",
          collapsed: true,
          items: [
            {
              label: "Home",
              link: "/disciplines/home/",
            },
            {
              label: "Meeting Minutes",
              link: "/disciplines/minutes-of-meeting/",
            },
            {
              label: "Queries and Clarifications",
              link: "/disciplines/queries-clarifications/",
            },
            {
              label: "Resource Details",
              link: "/disciplines/netspective-resource-details/",
            },
            // {
            //   label: "User Experience (UX)",
            //   autogenerate: {
            //     directory: "/disciplines/user-experience/",
            //   },
            // },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
    pageInsight({
      lh: {
        weight: 0.5,
        breakPoint: 1024,
      },
      firstFetch: "open",
      cache: true,
      build: {
        bundle: true, // You should get value from the environment variable. (e.g. process.env.STAGING === "true")
        showOnLoad: true, // This option is only available when `bundle` is `true`.
      },
    }),
  ],
});
