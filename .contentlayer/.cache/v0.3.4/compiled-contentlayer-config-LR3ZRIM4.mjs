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
  disableImportAliasWarning: true,
  documentTypes: [CaseStudy]
});
export {
  CaseStudy,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LR3ZRIM4.mjs.map
