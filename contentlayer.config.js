// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

/**
 * Case‑study MDX files live under:
 *   content/case-studies/**\/*.mdx
 * Adjust `filePathPattern` or `contentDirPath`
 * if your folder structure is different.
 */
export const CaseStudy = defineDocumentType(() => ({
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

    featured: { type: "boolean", default: false },
  },

  /** ─────────── Derived values ─────────── */
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) =>
        `/case-studies/${doc._raw.flattenedPath.replace("case-studies/", "")}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) =>
        doc._raw.flattenedPath // e.g. "case-studies/design/awesome‑project"
          .split("/") // -> ["case-studies", "design", "awesome‑project"]
          .slice(1) // remove the top‑level folder
          .join("/"), // -> "design/awesome‑project"
    },
  },
}));

/**
 * Export the Contentlayer source definition.
 * Add remark/rehype plugins here if you need them.
 */
export default makeSource({
  contentDirPath: "content", // root‑relative path to your MDX content
  documentTypes: [CaseStudy],
});
