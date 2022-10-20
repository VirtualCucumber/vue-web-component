<template>
  <div class="field-container">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
});
</script>

<style>
.field-container {
  display: flex;
  flex-direction: column;
}
</style>
