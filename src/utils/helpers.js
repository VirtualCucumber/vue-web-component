import { defineAsyncComponent } from '@vue/runtime-core';

/**
 * Maps to a Vue component based on a component type to be used as in a dynamic
 * component
 */
export const componentTypeMap = {
    email: defineAsyncComponent(() => import('../components/fields/InputField.vue')),
    text: defineAsyncComponent(() => import('../components/fields/InputField.vue')),
    password: defineAsyncComponent(() => import('../components/fields/InputField.vue')),
    select: defineAsyncComponent(() => import('../components/fields/SelectField.vue')),
    checkbox: defineAsyncComponent(() => import('../components/fields/ChoiceField.vue')),
    radio: defineAsyncComponent(() => import('../components/fields/ChoiceField.vue')),
}