<template>
  <label
    >{{ label }}
    <input type="text" :placeholder="placeholder" :value="modelValue" @input="emitUpdate" />
  </label>
</template>

<script setup lang="ts">
defineProps<{ label?: string; modelValue?: string; placeholder?: string }>()
const emits = defineEmits<{
  "update:modelValue": [value: string]
}>()

const emitUpdate = (event: Event) => {
  if (event.target instanceof HTMLInputElement) emits("update:modelValue", event.target.value)
}
</script>

<style scoped>
input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex-grow: 1;
}
</style>
