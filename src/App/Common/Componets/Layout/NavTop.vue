<template>
  <!--    profile nav-->
  <div class="flex justify-between bg-white py-5 px-2 lg:px-32 text-sm ">
    <div>
      <a href="#" class="mr-2 lg:mx-4">My account</a>
      <span>|</span>
      <a href="#" class="mx-2 lg:mx-4">Login</a>
    </div>
    <div><a href="tel:+27 (0) 10 005 7777">+27 (0) 10 005 7777</a></div>
  </div>

  <!--    nav bar-->
  <nav class="py-8 px-2 lg:px-32 sticky top-0 z-10 bg-gray-50 shadow">
    <div class="flex mx-2 justify-between items-center">
      <div>
        <!--        Logo-->
        <!--          <i class="ti-flickr text-5xl text-purple-500"></i>-->
        <h1 class="text-2xl lg:text-3xl font-bold">Liquid Shop <span
            class="font-bold text-5xl text-red-500">.</span></h1>
      </div>

      <div>
        <!--        bag icon-->
        <div class="relative">
          <i class="ti-shopping-cart text-3xl lg:text-5xl"></i>
          <span class="h-5 w-5 lg:h-8 lg:w-8 block bg-purple-500 rounded-full absolute -top-2 -right-1
          flex items-center font-bold text-white justify-center">1</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>