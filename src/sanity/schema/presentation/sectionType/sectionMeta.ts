import { defineField, defineType } from "sanity";

export type SanitySectionMeta = {
  id?: string;
};

export default defineType({
  type: "object",
  name: "sectionMeta",
  title: "Section Meta",
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "id",
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "Section Meta",
      };
    },
  },
});
