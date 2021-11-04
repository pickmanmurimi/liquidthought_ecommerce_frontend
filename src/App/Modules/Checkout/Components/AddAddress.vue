<template>
  <div class="bg-white rounded-xl p-8 relative">

    <h1 class="text-xl text-purple-500 mb-2">Add New Address</h1>
    <p class="text-gray-500">This will be set as the default delivery location.</p>

    <div v-if="loading"
         class="absolute z-30 top-0 left-0 flex w-full justify-center h-full items-center bg-gray-200 bg-opacity-5">
      <OrbitLoader></OrbitLoader>
    </div>
    <!--          address form-->
    <form class="mt-8 md:grid md:grid-cols-2 gap-5">

      <!--          full_name-->
      <BaseInput v-model:form-error="formError" v-model:model-value="address.full_name" icon="ti-user" name="full_name"
                 placeholder="John Doe"
                 rules="required"
                 text="Full Name" type="text"/>

      <!--      Address input -->
      <div class="col-span-2 relative">
        <AddressInput v-model:form-error="formError" v-model:modelValue="address.address"
                      @addressSelected="setCountry"></AddressInput>
      </div>

      <!--          postal_code-->
      <BaseInput v-model:form-error="formError" v-model:model-value="address.postal_code" icon="ti-" name="postal_code"
                 placeholder="2351"
                 rules="required"
                 text="Postal Code" type="number"/>

      <!--          city-->
      <BaseInput v-model:form-error="formError" v-model:model-value="address.city" icon="ti-home" name="city"
                 placeholder="Cape Town"
                 rules="required" text="City"
                 type="text"/>

      <!--          state-->
      <BaseInput v-model:form-error="formError" v-model:model-value="address.state" icon="ti-server" name="state"
                 placeholder="State"
                 rules="required"
                 text="State/Province" type="text"/>

      <!--          country-->
      <BaseInput v-model:form-error="formError" v-model:model-value="address.country" icon="ti-globe" name="country"
                 placeholder="South Africa"
                 rules="required"
                 text="Country" type="text"/>

      <button class="btn" @click.prevent="createAddress(address)">Save address</button>
    </form>

  </div>

</template>

<script lang="ts" setup>
import BaseInput from "@/App/Common/Componets/Forms/BaseInput.vue";
import AddressInput from "@Modules/Checkout/Components/AddressInput.vue";
import {ref, watch} from "vue";
import {Address} from "@Modules/Checkout/Types/Address";
import {useAddress} from "@Modules/Checkout/Composables/useAddress";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";

const address = ref<Address>({})

const {loading, createAddress, formError, status} = useAddress();

const setCountry = (country: string): void => {
  address.value.country = country
}

const emit = defineEmits(['addressAdded'])
// watch the status to update other components when the address is added
watch( status, (value) => {
  if (value === 201 )
    emit('addressAdded', Math.random() * 1000 )
} )
</script>

<style scoped>

</style>