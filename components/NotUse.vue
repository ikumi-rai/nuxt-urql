<template>
  <button @click="setLiftStatus('astra-express', 'OPEN')">OPEN</button>
  <button @click="setLiftStatus('astra-express', 'CLOSED')">CLOSED</button>
  {{ setLiftStatusRes.data }}
</template>

<script setup lang="ts">
import { LiftStatus } from "graphql/generated/graphql"

const setLiftStatusRes = useMutation(
  graphql(`
    mutation setLiftStatus($id: ID!, $status: LiftStatus!) {
      setLiftStatus(id: $id, status: $status) {
        id
        status
      }
    }
  `),
)

const setLiftStatus = (id: string, status: LiftStatus) => {
  setLiftStatusRes.executeMutation({
    id: id,
    status: status,
  })
}
</script>
