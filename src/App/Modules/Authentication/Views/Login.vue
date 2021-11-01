<template>
  <AuthLayout>
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <!--    login card-->
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <div class=" rounded-3xl flex shadow-2xl overflow-hidden">

      <div class=" hidden lg:block max-w-lg bg-gray-100 items-center justify-center p-8 flex ">
        <img class="object-cover" src="@assets/products/lebron6.png" alt="auth bg">
      </div>

      <div class="p-12 max-w-xl bg-white opacity-95">
        <h1 class="text-3xl">Welcome to Liquid Shop 👋</h1>
        <p class="text-gray-400 mt-2 font-light">Please sign-in to your account.</p>

        <!-- ------------------------------------------------------------------------------------------------------- -->
        <!--    login form-->
        <!-- ------------------------------------------------------------------------------------------------------- -->
        <form class="mt-5 border-t pt-5">

          <BaseInput name="email" text="Email" type="email" icon="ti-email" placeholder="john@example.com" />

          <BaseInput name="password" text="Password" type="email" icon="ti-lock" placeholder="secret" />

          <button @click.prevent="login" class="btn w-full">
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

import {Router, useRouter} from "vue-router";
import BaseInput from "../../../Common/Componets/Forms/BaseInput.vue";
import AuthLayout from "../Componets/AuthLayout.vue";

const router: Router = useRouter();

/**
 * login
 * @return void
 */
const login = (): void => {
  router.push({
    name: 'Home'
  })
}
</script>

<style scoped>

</style>
