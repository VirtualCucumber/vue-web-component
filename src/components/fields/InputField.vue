<template>
  <v-text-field
    :label="label"
    :value="modelValue"
    :rules="rules"
    :required="required"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
    :prepend-inner-icon="icon"
    variant="solo"
  />
</template>

<script setup>
import { FormFieldProps } from "../../utils/constants";

defineProps(FormFieldProps);
</script>

<style></style>
