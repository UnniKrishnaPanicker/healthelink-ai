/** integrations/astro-rehype-mermaid.js */

import { fromHtml } from "hast-util-from-html";
import { toHtml } from "hast-util-to-html";
import { toHast } from "mdast-util-to-hast";
import { visit } from "unist-util-visit";
import rehypeMermaid from "rehype-mermaid";

/** Transform a mermaid code block to HTML before it gets syntax highlighted to preserve its structure. */
const remarkMermaidToHtml = () => (tree) => {
  visit(tree, "code", (code, index, parent) => {
    if (index === undefined || !parent) return;
    if (code.lang === "mermaid") {
      const html = toHtml(toHast(code));
      parent.children.splice(index, 1, { type: "html", value: html });
    }
  });
};

/** Transform a raw HTML node created from a mermaid code block back to a full HAST. */
const rehypeMermaidRawToHast = () => (tree) => {
  visit(tree, "raw", (node, index, parent) => {
    if (index === undefined || !parent) return;
    if (node.value.startsWith('<pre><code class="language-mermaid"')) {
      const hast = fromHtml(node.value, { fragment: true });
      parent.children.splice(index, 1, hast);
    }
  });
};

/**
 * Astro integration to set up `rehype-mermaid` to render Markdown code blocks with the `mermaid` language.
 * @param {import('rehype-mermaid').RehypeMermaidOptions} options
 * @return {import('astro').AstroIntegration}
 */
export default function astroRehypeMermaid(options = {}) {
  return {
    name: "astro-mermaid",
    hooks: {
      "astro:config:setup"({ updateConfig }) {
        updateConfig({
          markdown: {
            remarkPlugins: [remarkMermaidToHtml],
            rehypePlugins: [rehypeMermaidRawToHast, [rehypeMermaid, options]],
          },
        });
      },
    },
  };
}
