import { PluginFunction } from "@graphql-codegen/plugin-helpers"
import { GraphQLEnumType } from "graphql"

export const plugin: PluginFunction = (schema, documents, config, info) => {
  const result: string[] = []
  Object.entries(schema.getTypeMap()).forEach(([name, type]) => {
    if (type instanceof GraphQLEnumType && !name.startsWith("__")) {
      const values = type.getValues().map((enumElm) => enumElm.value)
      result.push(`export const ${name} = ${JSON.stringify(values)} as const`)
    }
  })
  return "\n" + result.join("\n") + "\n"
}
