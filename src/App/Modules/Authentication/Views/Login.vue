<template>
  <AuthLayout>
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <!--    login card-->
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <div class=" rounded-3xl flex shadow-2xl overflow-hidden">

      <div class=" hidden lg:block max-w-lg bg-gray-100 items-center justify-center p-8 flex ">
        <img class="object-cover" src="@assets/products/lebron6.png" alt="auth bg">
      </div>

      <div class="p-12 max-w-xl bg-white opacity-95 relative">
        <!--    loader-->
        <div v-if="loading" class="absolute z-30 flex justify-center w-full h-full items-center">
          <OrbitLoader></OrbitLoader>
        </div>

        <h1 class="text-3xl" v-if="checkout === undefined">Welcome to Liquid Shop 👋</h1>
        <h1 class="text-3xl" v-else>Login to complete your order.</h1>
        <p class="text-gray-400 mt-2 font-light">Please sign-in to your account.</p>

        <!-- ------------------------------------------------------------------------------------------------------- -->
        <!--    login form-->
        <!-- ------------------------------------------------------------------------------------------------------- -->
        <form class="mt-5 border-t pt-5">
          <BaseInput name="email" v-model:model-value="loginData.email"
                     v-model:form-error="formError"
                     text="Email" type="email" rules="email|required" icon="ti-email" placeholder="john@example.com" />

          <BaseInput name="password" v-model:model-value="loginData.password"
                     rules="required"
                     v-model:form-error="formError"
                     text="Password" type="password" icon="ti-lock" placeholder="secret" />

          <button :disabled="formError?.$anyInvalid" @click.prevent="login(loginData, routeTo)" class="btn w-full">
            Login
          </button>

          <div class="mt-5">
            <small>New on our platform?
              <router-link class="text-purple-500" :to="{ name: 'Register'}">Create an account</router-link>
            </small>
          </div>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">

import {Router, useRoute, useRouter} from "vue-router";
import BaseInput from "../../../Common/Componets/Forms/BaseInput.vue";
import AuthLayout from "../Componets/AuthLayout.vue";
import {useAuthentication} from "@Modules/Authentication/Composables/useAuthentication";
import {AuthenticationUser} from "@Modules/Authentication/Types/AuthenticationUser";
import {ref} from "vue";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";

const router: Router = useRouter();

/** currentRoute */
const { checkout } = useRoute().query;
const routeTo:string =  checkout ? checkout.toString() : 'Home'

const loginData = ref<AuthenticationUser>({email: '', password: ''});

/**
 * login
 * @return void
 */
const { login, loading, formError } = useAuthentication();
</script>

<style scoped>

</style>
