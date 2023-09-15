import { createClient, mapExchange, cacheExchange, ssrExchange, fetchExchange } from "@urql/vue"

export default defineNuxtPlugin((nuxtApp) => {
  const client = createClient({
    url: "https://snowtooth.moonhighway.com/",
    exchanges: [
      mapExchange({
        onOperation(operation) {
          console.log({ operation })
        },
        onResult(result) {
          console.log({ result })
        },
      }),
      cacheExchange,
      ssrExchange({
        isClient: process.client,
      }),
      fetchExchange,
    ],
  })
  nuxtApp.provide("urql", client)
  nuxtApp.vueApp.provide("$urql", ref(client))
})
