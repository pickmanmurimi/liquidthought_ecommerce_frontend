<template>
  <div class="w-full rounded-xl bg-white p-8 relative">
    <h1 v-if="loading" class="pb-5 border-gray-200 border-b">Getting Delivery Details ... </h1>
    <h1 v-else class="pb-5 border-gray-200 border-b">Delivery Details</h1>
    <!--loading icon-->
    <div v-if="loading" class="absolute top-0 left-0 h-full w-full flex items-center justify-center">
      <OrbitLoader></OrbitLoader>
    </div>

    <None text="No address details added!" v-if="!addresses.length && !loading"></None>

    <!--    details-->
    <div v-if="addresses.length && !loading" class="grid gap-5 grid-cols-2 pt-5">
      <div>
        <small>Full name</small>
      </div>
      <div class="text-right">
        <small>{{ addresses[0].full_name }}</small>
      </div>
      <div>
        <small>Address</small>
      </div>
      <div class="text-right">
        <small>{{ addresses[0].address }}</small>
      </div>
      <div>
        <small>Postal code</small>
      </div>
      <div class="text-right">
        <small>{{ addresses[0].postal_code }}</small>
      </div>
      <div>
        <small>City</small>
      </div>
      <div class="text-right">
        <small>{{ addresses[0].city }}</small>
      </div>
      <div>
        <small>State</small>
      </div>
      <div class="text-right">
        <small>{{ addresses[0].state }}</small>
      </div>
      <div>
        <small>Country</small>
      </div>
      <div class="text-right">
        <small>{{ addresses[0].country }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {useAddress} from "@Modules/Checkout/Composables/useAddress";
import {onMounted, watch} from "vue";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";
import None from "@/App/Common/Componets/Placeholders/None.vue";

const props = defineProps({
  trigger: {
    type: Number
  }
});

const {loading, getAddresses, addresses} = useAddress();

onMounted(() => {
  getAddresses()
})

watch( ()=> props.trigger, () => {
  getAddresses()
})

</script>

<style scoped>

</style>