// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
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
    industry: {
      type: "string"
    },
    client: {
      type: "string"
    },
    duration: {
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
  documentTypes: [OurWork]
});
export {
  OurWork,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HHQYPTJS.mjs.map
