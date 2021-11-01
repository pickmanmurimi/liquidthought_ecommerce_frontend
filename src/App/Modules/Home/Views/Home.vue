<template>

  <MainLayout>
    <template v-slot:default>
      <!--  hero-->
      <HeroSection></HeroSection>

      <!--      services-->
      <ServicesSection></ServicesSection>

      <!--      products-->
      <ProductsSection></ProductsSection>
    </template>



  </MainLayout>

</template>

<script setup lang="ts">

import ServicesSection from "../Componets/ServicesSection.vue";
import ProductsSection from "../Componets/ProductsSection.vue";
import HeroSection from "../Componets/HeroSection.vue";
import MainLayout from "../../../Common/Componets/Layout/MainLayout.vue";</script>
