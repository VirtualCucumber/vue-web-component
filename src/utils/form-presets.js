export const loginFormFields = {
  email: {
    type: "email",
    label: "Email",
    icon: "mdi-account",
    required: true,
    rules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  },
  password: {
    type: "password",
    label: "Password",
    icon: "mdi-lock",
    required: true,
    rules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be more than 6 characters",
    ],
  },
};

export const registrationFormFields = {
  fullName: {
    type: "text",
    label: "Full name",
    required: true,
  },
  email: {
    type: "email",
    label: "Email",
    required: true,
    rules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  },
  password: {
    type: "password",
    label: "Password",
    required: true,
    rules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be more than 6 characters",
    ],
  },
  confirmPassword: {
    type: "password",
    label: "Confirm Password",
    required: true,
    rules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be more than 6 characters",
    ],
  },
  gender: {
    type: "select",
    label: "Gender",
    required: true,
    rules: [(v) => v.length > 0 || "Gender is required"],
    options: ["Male", "Female", "Prefer not to say"],
  },
  food: {
    type: "radio",
    label: "Favorite food",
    required: true,
    rules: [
      (v) => !!v || "Everyone has a favorite food",
      (v) => v === "pizza" || "Not pizza",
    ],
    options: ["pizza", "steak", "vietnamese"],
  },
  consent: {
    type: "checkbox",
    label: "Consent",
    required: true,
    options: ["Consent"],
  },
};
