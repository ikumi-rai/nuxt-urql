import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  verbose: true,
  schema: "https://snowtooth.moonhighway.com/",
  documents: ["app.vue", "pages/**/*.vue", "components/**/*.vue", "composables/**/*.ts"],
  generates: {
    "graphql/generated/": {
      preset: "client",
      plugins: ["graphql/codegen/plugins/enums_as_const.js"],
      config: {
        enumsAsTypes: true,
      },
    },
  },
}

export default config
