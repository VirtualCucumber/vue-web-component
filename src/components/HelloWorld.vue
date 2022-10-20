<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <v-alert text="Dynamic WebForm component demo"></v-alert>
      </v-col>
      <v-col
        class="mb-5"
        cols="6"
      >
      <WebForm 
          ref="loginForm" 
          :fields="loginFormFields" 
          heading="Login"
          :onSubmit="submitLogin"
          submitLabel="Login"
          submitIcon="mdi-send-circle-outline"
        />

        <WebForm 
          ref="registrationForm" 
          :fields="registrationFormFields" 
          heading="Register"
          :onSubmit="submitRegistration"
          submitLabel="Register"
          submitIcon="mdi-send-circle-outline"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import logo from '../assets/logo.svg'
import WebForm from '../components/WebForm.vue'
import { ref } from "vue";
import { loginFormFields, registrationFormFields } from '../utils/form-presets'

const loginForm = ref(null);
const registrationForm = ref(null);

function submitLogin(e) {
  e.preventDefault();
  loginForm.value.form.resetValidation();
  
  // Logic after validation pass
}

function submitRegistration(e) {
  e.preventDefault();
  registrationForm.value.form.resetValidation();
  
  // Logic after validation pass
}


</script>
