<template>
  <div class="bg-gray-100">

    <NavTop></NavTop>

    <div class="min-h-screen bg-gray-100">

      <!--      content-->

      <slot></slot>

    </div>

    <FooterNav></FooterNav>

  </div>

</template>

<script setup lang="ts">
import NavTop from "./NavTop.vue";
import FooterNav from "./FooterNav.vue";
</script>

<style scoped>

</style>