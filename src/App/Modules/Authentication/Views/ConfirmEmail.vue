<template>
  <AuthLayout>
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <!--    login card-->
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <div class=" rounded-3xl flex shadow-2xl overflow-hidden">

      <div class=" hidden lg:block max-w-lg bg-gray-100 items-center justify-center p-8 flex ">
        <img class="object-cover" src="@assets/products/lebron6.png" alt="auth bg">
      </div>

      <div class="p-20 max-w-xl bg-white opacity-95 relative">
        <!--    loader-->
        <div v-if="loading" class="absolute z-30 top-0 left-0 justify-center flex w-full h-full items-center">
          <OrbitLoader></OrbitLoader>
        </div>

        <div data-aos="fade-up" v-if="status === 422">
          <p class="text-xl text-red-500 mb-3">Whoops! Your verification token expired!</p>
          <p class="text-purple-500 block mb-3">A new verification link has been sent to you.</p>
          <p class="text-gray-500 block">Kindly verify your email within an hour, before your token expires.</p>
        </div>

          <div class="mt-5">
            <small>New on our platform?
              <router-link class="text-purple-500" :to="{ name: 'Register'}">Create an account</router-link>
            </small>
          </div>

      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">

import {Router, useRoute, useRouter} from "vue-router";
import BaseInput from "../../../Common/Componets/Forms/BaseInput.vue";
import AuthLayout from "../Componets/AuthLayout.vue";
import {useAuthentication} from "@Modules/Authentication/Composables/useAuthentication";
import {AuthenticationUser} from "@Modules/Authentication/Types/AuthenticationUser";
import {onMounted, ref} from "vue";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";

const router: Router = useRouter();

/**
 * login
 * @return void
 */
const { verifyEmail, loading, status } = useAuthentication();

/** currentRoute */
const { token, uuid } = useRoute().params;

onMounted(() => {
  verifyEmail(token.toString() ,uuid.toString())
})

</script>

<style scoped>

</style>
