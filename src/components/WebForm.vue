<template>
  <div v-if="heading" class="font-weight-thin text-h3 my-4">
    {{ heading }}
  </div>
  <v-form ref="form" @submit="onSubmit" novalidate class="mb-16">
    <component
      v-for="(field, key) in fields"
      :key="key"
      v-model="data[key]"
      :label="field.label"
      :required="field.required"
      :name="key"
      :options="field.options"
      :type="field.type"
      :icon="field.icon"
      :rules="field.rules"
      :is="componentTypeMap[field.type]"
    />
    <v-btn :append-icon="submitIcon" type="submit">
      {{ submitLabel }}
    </v-btn>
  </v-form>
</template>

<script setup>
import _ from "lodash";
import { onMounted, ref } from "vue";
import { componentTypeMap } from "../utils/helpers";

// Used to expose Vuetify's form functionality
const form = ref(null);
// Used to expose the data for each field mapped using the fields key
const data = ref({});

const props = defineProps({
  fields: {
    type: Object,
    required: true,
  },
  heading: {
    type: String,
  },
  onSubmit: {
    type: Function,
    required: true,
  },
  submitLabel: {
    type: String,
    default: "Submit",
  },
  submitIcon: {
    type: String,
    default: "",
  },
});

defineExpose({
  reset,
  data,
  form,
});

onMounted(() => {
  _.keys(props.fields).forEach((key) => {
    data.value[key] = "";
  });
});

/**
 * Will reset all field values
 * Will need to support all primitive types
 */
function reset() {
  _.keys(data.value).forEach((key) => {
    data.value[key] = "";
  });
}
</script>

<style scoped></style>
