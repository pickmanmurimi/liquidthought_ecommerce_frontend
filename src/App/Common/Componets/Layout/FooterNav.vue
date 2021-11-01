<template>
  <!--    profile nav-->
  <div class="flex justify-between items-center bg-white py-5 px-2 lg:px-32 text-sm ">

    <div>
      <router-link :to="{name:'Home'}" class="text-2xl lg:text-3xl font-bold whitespace-nowrap">Liquid Shop <span
          class="font-bold text-5xl text-red-500">.</span></router-link>
    </div>

    <div class="text-left">
      <div>
        <a href="#" class="mr-2 lg:mr-4">Register</a>
        <span>|</span>
        <a href="#" class="mx-2 lg:mx-4">Login</a>
      </div>
      <div>
        <a href="tel:+27 (0) 10 005 7777">+27 (0) 10 005 7777</a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>