// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: "case-studies/**/*.mdx",
  contentType: "mdx",
  /** ─────────── Front‑matter fields ─────────── */
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    image: { type: "string" },
    date: { type: "date", required: true },
    client: { type: "string" },
    industry: { type: "string" },
    duration: { type: "string" },
    featured: { type: "boolean", default: false }
  },
  /** ─────────── Derived values ─────────── */
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/case-studies/${doc._raw.flattenedPath.replace("case-studies/", "")}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
      // -> "design/awesome‑project"
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [CaseStudy],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  CaseStudy,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-26WRQAWB.mjs.map
