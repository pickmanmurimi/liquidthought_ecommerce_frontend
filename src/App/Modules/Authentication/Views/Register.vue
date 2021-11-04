<template>
  <AuthLayout>
    <!--    login card-->
    <div class=" rounded-3xl flex shadow-2xl border overflow-hidden">
      <div class=" hidden lg:block max-w-lg bg-gray-100  items-center justify-center flex ">
        <img alt="auth bg" class="h-full w-full object-contain" src="@assets/products/lebron7.png">
      </div>
      <div class="p-12 max-w-xl bg-white opacity-95 relative">
        <!--    loader-->
        <div v-if="loading" class="absolute z-30 flex justify-center w-full h-full items-center">
          <OrbitLoader></OrbitLoader>
        </div>

        <h1 class="text-3xl">Start shopping on Liquid 🚀</h1>
        <p class="text-gray-400 mt-2 font-light">Fill the form below to create your account.</p>
        <!--        login form-->
        <form class="mt-5 border-t pt-5">
          <!--          first_name-->
          <BaseInput v-model:form-error="formError" v-model:model-value="registrationData.first_name" icon="ti-user"
                     name="first_name"
                     placeholder="John" rules="required"
                     text="First Name" type="text"/>

          <!--          last_name-->
          <BaseInput v-model:form-error="formError" v-model:model-value="registrationData.last_name" icon="ti-user"
                     name="last_name"
                     placeholder="Doe" rules="required"
                     text="Last Name" type="text"/>

          <!--          email-->
          <BaseInput v-model:form-error="formError" v-model:model-value="registrationData.email" icon="ti-email"
                     name="email"
                     placeholder="john@example.com" rules="required|email" text="Email"
                     type="email"/>

          <!--          password-->
          <BaseInput v-model:form-error="formError" v-model:model-value="registrationData.password"
                     icon="ti-lock" name="password"
                     placeholder="secret" rules="required|minLength:6"
                     text="Password" type="password"/>

          <!--          password_confirmation-->
          <BaseInput v-model:form-error="formError" v-model:model-value="registrationData.password_confirmation"
                     icon="ti-lock"
                     name="password_confirmation"
                     placeholder="secret" rules="required|minLength:6" text="Password" type="password"/>

          <!--        signup button-->
          <button :disabled="formError.$anyInvalid" class="btn w-full" @click.prevent="register(registrationData)">
            Sign up
          </button>

          <div class="mt-5">
            <small>Already signed up?
              <router-link :to="{ name: 'Login'}" class="text-purple-500">Just login here.</router-link>
            </small>
          </div>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>

<script lang="ts" setup>
import AuthLayout from "../Componets/AuthLayout.vue";
import BaseInput from "../../../Common/Componets/Forms/BaseInput.vue";
import {useAuthentication} from "@Modules/Authentication/Composables/useAuthentication";
import {ref} from "vue";
import {AuthenticationUser} from "@Modules/Authentication/Types/AuthenticationUser";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";

const registrationData = ref<AuthenticationUser>({
  email: "", first_name: "", last_name: "", password: "", password_confirmation: ""
})

/**
 * login
 * @return void
 */
const {register, loading, formError} = useAuthentication();


</script>

<style scoped>

</style>
