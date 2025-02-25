"use client";

import { defineConfig } from "sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schema/schema";
import { structureTool } from "sanity/structure";
import { structure } from "@/sanity/tools/structure";
import { colorInput } from "@sanity/color-input";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { resolve } from "@/sanity/tools/presentation/resolve";
import { media } from "sanity-plugin-media";
import { crossDatasetDuplicator } from "@sanity/cross-dataset-duplicator";
import logo from "./public/studio_logo.svg";

const StudioLogo = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <img alt="IONA Logo" src={logo.src} width={25} height={25} />
    </div>
  );
};

export default defineConfig({
  basePath: "/studio",
  icon: StudioLogo,
  projectId,
  dataset,
  schema,
  title: "IONA Sanity Demo",
  plugins: [
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
    structureTool({ structure }),
    media(),
    colorInput(),
    visionTool({ defaultApiVersion: apiVersion }),
    crossDatasetDuplicator({
      types: [],
    }),
  ],
});
