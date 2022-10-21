# :package: Vue WebForm Component

```sh
npm install
```

```sh
npm run dev
```

## Packages Used

- Lodash (object utils)
- Vuetify (material design)

## About

Uses one component for entry as WebComponent that takes in:

- fields : object
- heading : string
- onSubmit : function
- submitLabel : string
- submitIcon : string

## Field Object Schema

You can reference src/utils/form-presets.js for some form field templates. Below shows all the available fields for a field object:

```
{
    type: "email",
    label: "Email",
    icon: "mdi-account",
    required: true,
    rules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    options: { // If type has multiple like select, checkbox, or radio }
}
```

## Known Problems

- Refactor ChoiceField checkbox section to support multiple fields and errors that can be tracked on submision
- Using Material icons instead of Iconify
