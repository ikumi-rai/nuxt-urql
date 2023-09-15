<template>
  <h1>Snowtooth Mountain Lift Guide</h1>
  <LiftList :allLifts="lifts?.allLifts" />
</template>

<script setup lang="ts">
const { data: lifts } = useQuery({
  query: graphql(`
    query allLifts {
      allLifts {
        ...LiftList_lift
      }
    }
  `),
})
</script>

<style scoped>
div {
  margin-left: 10px;
}
</style>
