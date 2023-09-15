<template>
  <div>
    <ElmsInput placeholder="search by id" v-model="state.searchId" @update:modelValue="searchLift" />
    <ElmsButton text="search" @click="searchLift.refresh" />
    <ElmsList
      :items="
        useFragment(
          liftFragment,
          state.searchId && searchedLifts?.search
            ? searchedLifts.search.flatMap((item) => (item.__typename === 'Lift' ? [item] : []))
            : allLifts,
        )
      "
      :header="['id', 'name', 'capacity', 'status']"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ allLifts: FragmentType<typeof liftFragment>[] | undefined }>()

const liftFragment = graphql(`
  fragment LiftList_lift on Lift {
    id
    name
    capacity
    status
  }
`)

const state = ref({
  searchId: "",
})

const liftSearchVariables = ref({
  id: "",
})
const liftSearch = useQuery({
  query: graphql(`
    query liftSearch($id: String!) {
      search(term: $id) {
        ... on Lift {
          ...LiftList_lift
        }
      }
    }
  `),
  variables: liftSearchVariables,
  pause: true,
})
const searchedLifts = liftSearch.data

const _debouncer = new Debouncer(500)

const searchLift = (id: string) => {
  if (!id) {
    _debouncer.cancel()
    return
  }
  _debouncer.debounce(() => {
    liftSearchVariables.value.id = id
    nextTick(liftSearch.executeQuery)
  })
}

searchLift.refresh = () => {
  liftSearch.executeQuery({ requestPolicy: "network-only" })
}
</script>

<style scoped>
table {
  margin-top: 8px;
}
button {
  margin-left: 10px;
}
</style>
