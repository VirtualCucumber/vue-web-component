<template>
  <v-radio-group 
    :label="label"
    :required="required"
    :rules="rules" 
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  >
    <v-radio 
      v-for="option in options" 
      v-bind:key="option" 
      :label="option"
      :value="option">
    </v-radio>
  </v-radio-group>
</template>

<script setup>
import { FormFieldProps } from "../../utils/constants";

defineProps({
  ...{
    type: {
      type: String,
      default: "radio",
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: [],
    },
  },
  ...FormFieldProps,
});
</script>

<style></style>
