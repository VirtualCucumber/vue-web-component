<template>
  <v-select
    :label="label"
    :items="options"
    :rules="rules"
    :required="required"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    variant="solo"
  />
</template>

<script setup>
import { FormFieldProps } from "../../utils/constants";

defineProps({
  ...{
    options: {
      type: Array,
      default: [],
    },
  },
  ...FormFieldProps,
});
</script>

<style></style>
