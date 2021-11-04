<template>
  <div class="flex w-full h-screen justify-center items-center overflow-x-hidden p-8">
    <div class="text-gray-500" data-aos="fade-left">
      <h1 class="text-3xl font-bold mb-3">Your order has been placed!</h1>

      <p class="mb-3">This is a dummy checkout page, No payment method was added so we will assume this will be the end
        of our checkout process.</p>
      <p class="mb-3">Your cart was cleared, in case you want to do another run through the app.</p>

      <p class="mb-4 mt-10">Thank you for reviewing my work to this end. <span class="text-2xl">🤗 🙏</span></p>
      <p class="mb-3">Warm regards.</p>
      <p class="mb-3">Pickman Murimi. <small class="font-Dosis italic">you can call me optimus</small>😀</p>

      <div class="md:flex md:space-x-2 py-8">
        <div>
          <a class="mb-3 mt-3 btn text-purple-500" href="https://irup.io" target="_blank">Check out my featured work
            <i class="ti-hand-point-right"></i>
          </a>
        </div>
        <div class="mt-4 md:mt-0">
          <router-link class="btn" :to="{ name: 'Home'}"> I wanna go home</router-link>
        </div>
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>

import {useStore} from "@/store/store";
import {MutationTypes} from "@/store/mutation-types";

const store = useStore()

store.commit(MutationTypes.CLEAR_CART, undefined)

</script>
<style scoped>

</style>