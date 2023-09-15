<template>
  <table>
    <thead>
      <tr>
        <th v-for="head in header">{{ head }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td v-for="prop in header">{{ item[prop] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{ items: readonly Record<string, unknown>[] | nullish; header: string[] }>()
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th,
td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}
</style>
