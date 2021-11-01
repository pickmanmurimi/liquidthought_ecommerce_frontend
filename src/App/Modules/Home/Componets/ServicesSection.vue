<template>
  <div data-aos="fade-up" class="md:flex justify-evenly lg:px-10 xl:px-60 px-10 py-20 bg-gray-50
      lg:space-x-10 xl:space-x-20 md:space-x-2">

    <div data-aos="fade-left" class="mb-10">
      <Send class="text-purple-500" :size="60"></Send>
      <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">Free Shipping</h2>
      <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
        tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
    </div>

    <div data-aos="fade-down" class="mb-10">
      <Smile class="text-purple-500" :size="60"></Smile>
      <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">Customer Support</h2>
      <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
        tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
    </div>

    <div data-aos="fade-right" class="mb-10">
      <CreditCard class="text-purple-500" :size="60"></CreditCard>
      <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">Secure Payments</h2>
      <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
        tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Smile, CreditCard, Send} from 'lucide-vue-next';

</script>

<style scoped>


</style>