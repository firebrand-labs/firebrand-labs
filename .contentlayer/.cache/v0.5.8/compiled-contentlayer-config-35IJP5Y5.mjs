// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { type } from "os";
import { resolve } from "path";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => {
      console.log("\u2705 Contentlayer found:", doc._raw.sourceFilePath);
      return `/${doc._raw.flattenedPath}`;
    }
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  readTime: {
    type: "number",
    resolve: (doc) => {
      const textContent = doc._raw;
      return textContent;
    }
  }
};
var OurWork = defineDocumentType(() => ({
  name: "OurWork",
  filePathPattern: `our-work/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    image: {
      type: "string"
    },
    industry: {
      type: "string"
    },
    client: {
      type: "string"
    },
    duration: {
      type: "string"
    },
    tech: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields
}));
var OurBlogs = defineDocumentType(() => ({
  name: "OurBlogs",
  filePathPattern: `our-blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    image: {
      type: "string"
    },
    category: {
      type: "string"
    },
    author: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [OurWork, OurBlogs]
});
export {
  OurBlogs,
  OurWork,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-35IJP5Y5.mjs.map
