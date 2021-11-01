<template>
  <AuthLayout>
    <!--    login card-->
    <div class=" rounded-3xl bg-white flex shadow-2xl border overflow-hidden">
      <div class=" hidden lg:block max-w-lg bg-gray-100 items-center justify-center flex ">
        <img class="h-full w-full object-cover" src="@assets/images/img.png" alt="auth bg">
      </div>
      <div class="p-12 max-w-xl">
        <h1 class="text-3xl">Start shopping on Liquid 🚀</h1>
        <p class="text-gray-400 mt-2 font-light">Fill the form below to create your account.</p>
        <!--        login form-->
        <form class="mt-5 border-t pt-5">

          <!--          first_name-->
          <BaseInput name="first_name" text="First Name" type="text" icon="ti-user" placeholder="John" />

          <!--          last_name-->
          <BaseInput name="last_name" text="Last Name" type="text" icon="ti-user" placeholder="Doe" />

          <!--          email-->
          <BaseInput name="email" text="Email" type="email" icon="ti-email" placeholder="john@example.com" />

          <!--          password-->
          <BaseInput name="password" text="Password" type="password" icon="ti-lock" placeholder="secret" />

          <!--          password_confirmation-->
          <BaseInput name="password_confirmation" text="Password" type="password" icon="ti-lock" placeholder="secret" />

          <!--        signup button-->
          <button class="btn">Sign up</button>

          <div class="mt-5">
            <small>Already signed up?
              <router-link class="text-purple-500" :to="{ name: 'Login'}">Just login here.</router-link>
            </small>
          </div>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "../Componets/AuthLayout.vue";
import BaseInput from "../../../Common/Componets/Forms/BaseInput.vue";
import Logo from "../../../Common/Componets/Logo/Logo.vue";
</script>

<style scoped>

</style>
