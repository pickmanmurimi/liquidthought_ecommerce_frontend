<template>
  <div class="bg-gray-100 h-screen flex justify-center items-center relative">
    <span class="absolute font-bold top-0 left-0 m-5 logo-box">Q</span>
    <!--    login card-->
    <div class=" rounded-xl bg-white flex shadow-2xl overflow-hidden">
      <div class=" hidden lg:block max-w-lg bg-gray-100 items-center justify-center p-8 flex ">
        <img class="object-cover" src="@assets/images/authbg.png" alt="auth bg">
      </div>
      <div class="p-12 max-w-lg">
        <h1 class="text-3xl">Welcome to Liquid</h1>
        <p class="text-gray-400 mt-2 font-light">Please sign-in to your account.</p>
        <!--        login form-->
        <form class="mt-5 border-t pt-5">
          <div class="mb-5">
            <label for="email" class="text-gray-500 text-sm">Email</label>
            <input type="text" id="email" placeholder="john@example.com"
                   class="form-control">
          </div>
          <div class="mb-5">
            <label for="password" class="text-gray-500 text-sm">Password</label>
            <input type="password" id="password" placeholder="secret"
                   class="form-control active:border-gray-100 focus:border-gray-100">
          </div>
          <button class="bg-purple-500 px-2 py-2 rounded-xl text-white w-full hover:shadow-xl">Login</button>

          <div class="mt-5">
            <small>New on our platform?
              <router-link class="text-purple-500" :to="{ name: 'Home'}">Create an account</router-link></small>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
