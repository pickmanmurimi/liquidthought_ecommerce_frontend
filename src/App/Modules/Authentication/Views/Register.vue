<template>
  <div class="bg-gray-100 h-screen flex justify-center items-center relative">
    <Logo class="absolute hidden md:block font-bold top-0 left-0 m-5"></Logo>
    <!--    login card-->
    <div class=" rounded-3xl bg-white flex shadow-2xl border overflow-hidden">
      <div class=" hidden lg:block max-w-lg bg-gray-100 items-center justify-center flex ">
        <img class="h-full w-full object-cover" src="@assets/images/img.png" alt="auth bg">
      </div>
      <div class="p-12 max-w-xl">
        <Logo class="md:hidden logo-box"></Logo>

        <h1 class="text-3xl">Start shopping on Liquid 🚀</h1>
        <p class="text-gray-400 mt-2 font-light">Fill the form below to create your account.</p>
        <!--        login form-->
        <form class="mt-5 border-t pt-5">

          <!--          first_name-->
          <div class="mb-5">
            <label for="first_name" class="text-gray-500 text-sm">First Name</label>
            <div class="relative focus-within:text-purple-500 flex text-gray-500 items-center">
              <input type="text" id="first_name" placeholder="john"
                     class="form-control capitalize text-gray-500">
              <i class="ti-user absolute right-2"></i>
            </div>
          </div>

          <!--          first_name-->
          <div class="mb-5">
            <label for="last_name" class="text-gray-500 text-sm">Last Name</label>
            <div class="relative focus-within:text-purple-500 flex text-gray-500 items-center">
              <input type="text" id="last_name" placeholder="doe"
                     class="form-control capitalize text-gray-500">
              <i class="ti-user absolute right-2"></i>
            </div>
          </div>

          <!--          email-->
          <div class="mb-5">
            <label for="email" class="text-gray-500 text-sm">Email</label>
            <div class="relative focus-within:text-purple-500 flex text-gray-500 items-center">
              <input type="text" id="email" placeholder="john@example.com"
                     class="form-control text-gray-500">
              <i class="ti-email absolute right-2"></i>
            </div>
          </div>

          <!--        password-->
          <div class="mb-5">
            <label for="password" class="text-gray-500 text-sm">Password</label>
            <div class="relative focus-within:text-purple-500 flex text-gray-500 items-center">
              <input type="password" id="password" placeholder="secret"
                     class="form-control text-gray-500">
              <i class="ti-lock absolute right-2"></i>
            </div>
          </div>

          <!--        signup button-->
          <button class="bg-purple-500 px-2 py-2 rounded-xl text-white w-full hover:shadow-xl">Sign up</button>

          <div class="mt-5">
            <small>Already signed up?
              <router-link class="text-purple-500" :to="{ name: 'Login'}">Just login here.</router-link>
            </small>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "../../../Common/Componets/Logo/Logo.vue";
</script>

<style scoped>

</style>
