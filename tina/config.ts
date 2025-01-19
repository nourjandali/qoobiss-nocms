import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: "tina-cms",

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "navigation",
        label: "Navigation",
        path: "content/navigation",
        format: "json",
        ui: {
          global: true,
        },
        fields: [
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            fields: [
              {
                type: "object",
                name: "navigationItems",
                label: "Navigation Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "Link",
                  },
                  {
                    type: "object",
                    name: "links",
                    label: "Dropdown Links",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "href",
                        label: "Link",
                        required: true,
                      },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "logo",
                label: "Logo",
                fields: [
                  {
                    type: "string",
                    name: "src",
                    label: "Source",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "ctaButton",
                label: "CTA Button",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Button Text",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "Button Link",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
