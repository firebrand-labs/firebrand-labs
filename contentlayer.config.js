import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { type } from "os";
import { resolve } from "path";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => {
      console.log("✅ Contentlayer found:", doc._raw.sourceFilePath);
      return `/${doc._raw.flattenedPath}`;
    },
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readTime: {
    type: "number",
    resolve: (doc) => {
      const textContent = doc._raw;
      return textContent;
    },
  },
};

export const OurWork = defineDocumentType(() => ({
  name: "OurWork",
  filePathPattern: `our-work/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    image: {
      type: "string",
    },
    industry: {
      type: "string",
    },
    client: {
      type: "string",
    },
    duration: {
      type: "string",
    },
    tech: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

export const OurBlogs = defineDocumentType(() => ({
  name: "OurBlogs",
  filePathPattern: `our-blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    image: {
      type: "string",
    },
    category: {
      type: "string",
    },
    author: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [OurWork, OurBlogs],
});
