<template>
  <div class="bg-gray-100 h-screen flex justify-center items-center relative">
    <Logo class=" hidden lg:block absolute font-bold top-0 left-0 m-5"></Logo>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Logo from "../../../Common/Componets/Logo/Logo.vue";
</script>

<style scoped>

</style>