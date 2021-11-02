<template>
  <!--      products-->
  <div data-aos="fade-up" class="text-center py-20 px-10 lg:px-20 xl:px-40 2xl:px-60 overflow-x-hidden">
    <h2 class="text-4xl font-semibold mb-10">Products</h2>
    <p class="font-light mb-20 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius</p>

    <!--        product list-->
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-10">

      <!--          product 1-->
      <ProductCard data-aos="fade-left" name="Lebron Soldier 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                   image="/products/lebron1.png" price="$9.99"></ProductCard>

      <ProductCard data-aos="fade-up" name="Lebron Soldier 2" is-sale
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                   image="/products/lebron2.png" price="$9.99"></ProductCard>

      <ProductCard data-aos="fade-right" name="Lebron Soldier 3"
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                   image="/products/lebron3.png" price="$9.99"></ProductCard>

      <ProductCard data-aos="fade-down" name="Lebron Soldier 4" is-sale
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                   image="/products/lebron4.png" price="$9.99"></ProductCard>

      <ProductCard data-aos="fade-down" name="Lebron Soldier 5"
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                   image="/products/lebron5.png" price="$9.99"></ProductCard>

      <ProductCard data-aos="fade-up" name="Lebron Soldier 6"
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                   image="/products/lebron7.png" price="$9.99"></ProductCard>

      <ProductCard data-aos="fade-up" name="Lebron Soldier 6"
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                   image="/products/lebron8.png" price="$9.99"></ProductCard>

      <ProductCard data-aos="fade-up" name="Lebron Soldier 6"
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                   image="/products/lebron6.png" price="$9.99"></ProductCard>

    </div>
  </div>
</template>

<script setup lang="ts">

import ProductCard from "./ProductCard.vue";
</script>

<style scoped>

</style>