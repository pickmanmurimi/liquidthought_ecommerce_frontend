<template>
  <div class="w-full rounded-xl bg-white p-8 relative">
    <h1 v-if="loading" class="pb-5 border-gray-200 border-b">Getting Delivery Details ... </h1>
    <div v-else class="flex justify-between border-b border-gray-200 pb-5 text-sm">
      <h1>Delivery Details</h1>
      <button class="text-purple-500" @click="showAddresses = true">
        Change address <i class="ti-location-pin"></i>
      </button>
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
        <small>{{ defaultAddress?.full_name }}</small>
      </div>
      <div>
        <small>Address</small>
      </div>
      <div class="text-right">
        <small>{{ defaultAddress?.address }}</small>
      </div>
      <div>
        <small>Postal code</small>
      </div>
      <div class="text-right">
        <small>{{ defaultAddress?.postal_code }}</small>
      </div>
      <div>
        <small>City</small>
      </div>
      <div class="text-right">
        <small>{{ defaultAddress?.city }}</small>
      </div>
      <div>
        <small>State</small>
      </div>
      <div class="text-right">
        <small>{{ defaultAddress?.state }}</small>
      </div>
      <div>
        <small>Country</small>
      </div>
      <div class="text-right">
        <small>{{ defaultAddress?.country }}</small>
      </div>
    </div>

    <!--    modal-->
    <div v-if="showAddresses" class="fixed w-full h-full inset-0 z-50 flex justify-center items-center">
      <div class="lg:w-3/6 bg-white shadow-2xl border rounded-2xl p-5 pb-0 overflow-hidden mx-2">
        <div class="mb-2 flex justify-between">
          <h2 class="text-xl">Select Address</h2>
          <button @click="showAddresses = false"><i class="ti ti-close text-purple-500"></i></button>
        </div>
        <ul>
          <li v-for="address in addresses" :key="address.uuid"
              :class=" {' border border-l-4 border-purple-400' : address.default } "
              class="w-full p-3 mb-5 border rounded-xl flex justify-between items-center
              hover:shadow relative overflow-hidden">
            <div>
              <small class="block">{{ address?.full_name }}, {{ address?.postal_code }}</small>
              <small> <i class="ti ti-location-pin text-purple-500"></i>
                {{ address?.address }}
              </small>
            </div>
            <!--            actions-->
            <div>
              <button class="text-sm text-purple-500" @click="selectAddress(address)">
                <small class="block">  <i class="ti-location-pin"></i>  Select address</small>
              </button>
              <button v-if="!address?.default"
                      class="text-sm text-white ml-2 absolute top-0 right-0 bg-purple-400 rounded-bl px-1"
                      @click="changeDefaultAddress(address)">
                <small class="block"> <i class="ti-home"></i> Set as default</small>
              </button>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {useAddress} from "@Modules/Checkout/Composables/useAddress";
import {computed, onMounted, ref, watch} from "vue";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";
import None from "@/App/Common/Componets/Placeholders/None.vue";
import {useStore} from "@/store/store";
import {Address} from "@Modules/Checkout/Types/Address";
import {MutationTypes} from "@/store/mutation-types";

const props = defineProps({
  /**
   * trigger event to get new addresses
   */
  trigger: {}
});

const store = useStore();

const showAddresses = ref<boolean>(false)
const defaultAddress = computed<Address>(() => store.getters.defaultAddress);

/**
 * get addresses
 */
const {loading, getAddresses, addresses, setDefaultAddress} = useAddress();

/**
 * select the address to use when shipping
 * @param address
 */
const selectAddress = (address: Address) => {
  showAddresses.value = false
  store.commit(MutationTypes.SET_DEFAULT_ADDRESS, address)
};

/**
 * change the default address
 * @param address
 */
const changeDefaultAddress = async (address : Address) => {
  await  setDefaultAddress( address.uuid || '' )
  await getAddresses()
  selectAddress(address)
}

// get addresses
onMounted(async () => {
  await getAddresses()
  // set the selected address as the default address
  let selectedAddress = addresses.value.find( ( address ) => address.default);
  // if there is no default address, set the first address as the first address
  selectedAddress = selectedAddress ?? addresses.value[0]
  selectAddress(selectedAddress)
})

// get addresses
watch(() => props.trigger, async () => {
  await getAddresses()
  selectAddress(addresses.value[0])
})


</script>

<style scoped>

</style>