<template>
  <div class="bg-gray-100">

    <NavTop></NavTop>

    <div class="min-h-screen bg-gray-100">

      <!--      content-->

      <slot></slot>

    </div>

  </div>

</template>

<script setup lang="ts">
import NavTop from "./NavTop.vue";
</script>

<style scoped>

</style>