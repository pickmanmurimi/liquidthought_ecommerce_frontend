<template>
  <div class="w-full rounded-xl bg-white p-8 relative">
    <h1 v-if="loading" class="pb-5 border-gray-200 border-b">Getting Delivery Details ... </h1>
    <div v-else class="flex justify-between border-b border-gray-200 pb-5 text-sm">
      <h1>Delivery Details</h1>
      <button class="text-purple-500" @click="showAddresses = true">Use different address</button>
    </div>
    <!--loading icon-->
    <div v-if="loading" class="absolute top-0 left-0 h-full w-full flex items-center justify-center">
      <OrbitLoader></OrbitLoader>
    </div>

    <None v-if="!addresses.length && !loading" text="No address details added!"></None>

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

    <!--    modal-->
    <div v-if="showAddresses" class="fixed w-full h-screen top-0 left-0 z-50 flex justify-center items-center">
      <div class="w-2/6 bg-white shadow-2xl border rounded-2xl p-5 pb-0 overflow-hidden">
        <div class="mb-2 flex justify-between">
          <h2 class="text-xl">Select Address</h2>
          <button @click="showAddresses = false"><i class="ti ti-close text-purple-500"></i></button>
        </div>
        <ul>
          <li v-for="address in addresses" :key="address.uuid"
              class="w-full p-3 mb-5 border rounded-xl flex justify-between hover:shadow">
            <div>
              <p>{{ address.full_name }}, {{ address.postal_code }}</p>
              <small> <i class="ti ti-location-pin text-purple-500"></i> {{ address.address }}</small>
            </div>
            <button class="text-sm text-purple-500">Select address</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {useAddress} from "@Modules/Checkout/Composables/useAddress";
import {onMounted, ref, watch} from "vue";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";
import None from "@/App/Common/Componets/Placeholders/None.vue";

const props = defineProps({
  /**
   * trigger event to get new addresses
   */
  trigger: {}
});

const showAddresses = ref<boolean>(false)

/**
 * get addresses
 */
const {loading, getAddresses, addresses} = useAddress();

// get addresses
onMounted(() => {
  getAddresses()
})

// get addresses
watch(() => props.trigger, () => {
  getAddresses()
})

</script>

<style scoped>

</style>