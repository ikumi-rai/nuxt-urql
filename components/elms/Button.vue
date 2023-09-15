<template>
  <button>{{ text }}</button>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<style scoped>
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
