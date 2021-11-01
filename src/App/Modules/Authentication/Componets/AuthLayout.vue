<template>
  <div class="h-screen">
    <NavTop></NavTop>
    <div class="bg-gray-100 bg-img h-full flex justify-center pt-10 items-start relative">
      <!--    <Logo class=" hidden lg:block absolute font-bold top-0 left-0 m-5"></Logo>-->
      <slot></slot>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script setup lang="ts">
// import Logo from "../../../Common/Componets/Logo/Logo.vue";
import NavTop from "@/App/Common/Componets/Layout/NavTop.vue";
import FooterNav from "@/App/Common/Componets/Layout/FooterNav.vue";
</script>

<style scoped>
.bg-img {
  background-image: url("@assets/images/hugewaves.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>