/**
 * Stores the barebone props for a field
 * Expand { ...additions, ...FormFieldProps }
 */
export const FormFieldProps = Object.freeze({
  label: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  rules: {
    type: Array,
    default: [(v) => !!v || "Field is required"],
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Boolean],
    default: false,
  },
});
