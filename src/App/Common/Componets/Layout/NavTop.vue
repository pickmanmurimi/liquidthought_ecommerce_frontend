<template>
  <!-- loading icon-->
  <div v-if="loading"
       class="absolute top-0 left-0 z-30 w-full h-screen bg-white bg-opacity-25 flex items-center justify-center">
    <OrbitLoader></OrbitLoader>
  </div>

  <!--    profile nav-->
  <div class="flex justify-between bg-white py-5 px-2 lg:px-32 text-sm ">
    <div class="whitespace-nowrap">
      <template v-if="store.getters.isAuthenticated">
        <a class="mr-2 lg:mx-4 block capitalize" href="#">Hello 👋
          {{ store.getters.authenticatedUser.first_name }}
        </a>
        <router-link :to="{name: 'Orders'}" class="lg:mx-4">My Orders</router-link>
        <a class="mx-2 lg:mx-4" href="#" @click="logout">Logout</a>
      </template>
      <template v-else>
        <router-link :to="{name: 'Register'}" class="mx-2 lg:mx-4">Create Account</router-link>
        <router-link :to="{name: 'Login'}" class="mx-2 lg:mx-4">Login</router-link>
      </template>

    </div>
    <div>
      <a class="" href="tel:+27 (0) 10 005 7777">+27 (0) 10 005 7777</a>
    </div>
  </div>

  <!--    nav bar-->
  <nav class="py-8 px-2 lg:px-32 sticky top-0 z-10 bg-gray-50 shadow">
    <div class="flex mx-2 justify-between items-center">
      <div>
        <!--        Logo-->
        <!--          <i class="ti-flickr text-5xl text-purple-500"></i>-->
        <router-link :to="{name:'Home'}" class="text-2xl lg:text-3xl font-bold">Liquid Shop <span
            class="font-bold text-5xl text-red-500">.</span></router-link>
      </div>

      <div>
        <!--        bag icon-->
        <div class="relative">
          <router-link :to="{name: 'Cart'}">
            <ShoppingBag :size="44"></ShoppingBag>
            <span class="h-5 w-5 lg:h-8 lg:w-8 block bg-purple-500 rounded-full absolute -top-2 -right-1
          flex items-center font-bold text-white justify-center">{{ cartItemsCount }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {ShoppingBag} from 'lucide-vue-next';
import {useStore} from "@/store/store";
import {computed} from "vue";
import {useAuthentication} from "@Modules/Authentication/Composables/useAuthentication";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";

const store = useStore()

const {logout, loading} = useAuthentication();

const cartItemsCount = computed(() => {
  return store.getters.cart.length
})

</script>

<style scoped>

</style>