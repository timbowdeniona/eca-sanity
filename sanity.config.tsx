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
import logo from "./public/studio_logo.png";

const StudioLogo = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <img alt="AQA Logo" src={logo.src} width={25} height={25} />
    </div>
  );
};

export default defineConfig([
  // {
  //   basePath: "/studio",
  //   name: "aqa-corporate-website-studio",
  //   projectId,
  //   dataset: "replatform",
  //   schema,
  //   title: "AQA Corporate Website",
  //   icon: StudioLogo,
  //   plugins: [
  //     presentationTool({
  //       resolve,
  //         previewUrl: {
  //           previewMode: {
  //             enable: '/api/draft-mode/enable',
  //             disable: '/api/draft-mode/disable',
  //           },
  //         },
  //       }),
  //     structureTool({ structure }),
  //     media(),
  //     colorInput(),
  //     visionTool({ defaultApiVersion: apiVersion }),
  //     crossDatasetDuplicator({
  //       types: [],
  //     }),
  //   ],
  // },
  {
    basePath: "/studio",
    name: "aqa-microsite-studio",
    projectId,
    dataset,
    schema,
    title: "AQA Microsite Studio",
    icon: StudioLogo,
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
    auth: {
      projectId: projectId,
      dataset: dataset,
      redirectOnSingle: true,
      mode: "replace",
      providers: [
        {
          name: "saml",
          title: "Log in using AQA SSO",
          url: "https://api.sanity.io/v2021-10-01/auth/saml/login/5af2917e",
        },
      ]
    }
  }
]);
