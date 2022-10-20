<template>
  <v-radio-group
    v-if="type === 'radio'"
    :label="label"
    :required="required"
    :rules="rules"
    v-bind="$attrs"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  >
    <v-radio
      v-for="option in options"
      v-bind:key="option"
      :label="option"
      :value="option"
    >
    </v-radio>
  </v-radio-group>
  <v-checkbox
    v-else
    v-for="option in options"
    v-bind:key="option"
    :label="option"
    :required="required"
    :rules="[]"
    @click="(e) => $emit('update:modelValue', e.target.checked)"
  ></v-checkbox>
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
