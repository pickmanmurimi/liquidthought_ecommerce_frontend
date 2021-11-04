<template>
  <!--    profile nav-->
  <div class="flex justify-between items-center bg-white py-5 px-2 lg:px-32 text-sm overflow-x-hidden ">

    <div>
      <router-link :to="{name:'Home'}" class="text-2xl lg:text-3xl font-bold whitespace-nowrap">Liquid Shop <span
          class="font-bold text-5xl text-red-500">.</span></router-link>
    </div>

    <div class="text-left">
      <div>
        <a v-if="store.getters.isAuthenticated" class="mr-2 lg:mx-4 capitalize" href="#">Hello 👋
          {{ store.getters.authenticatedUser.first_name }}</a>
        <router-link v-else :to="{name: 'Register'}" class="mx-2 lg:mx-4">Create Account</router-link>
        <router-link v-if="!store.getters.isAuthenticated" :to="{name: 'Login'}" class="mx-2 lg:mx-4">Login</router-link>
      </div>
      <div>
        <a href="tel:+27 (0) 10 005 7777">+27 (0) 10 005 7777</a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import {useStore} from "@/store/store";

const store = useStore();

</script>

<style scoped>

</style>