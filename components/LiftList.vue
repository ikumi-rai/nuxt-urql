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

const searchLiftVars = ref({
  id: "",
})
const searchLiftRes = useQuery({
  query: graphql(`
    query searchLift($id: String!) {
      search(term: $id) {
        ... on Lift {
          ...LiftList_lift
        }
      }
    }
  `),
  variables: searchLiftVars,
  pause: true,
})
const searchedLifts = searchLiftRes.data

const _debouncer = new Debouncer(500)

const searchLift = (id: string) => {
  if (!id) {
    _debouncer.cancel()
    return
  }
  _debouncer.debounce(() => {
    searchLiftVars.value.id = id
    nextTick(searchLiftRes.executeQuery)
  })
}

searchLift.refresh = () => {
  searchLiftRes.executeQuery({ requestPolicy: "network-only" })
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
