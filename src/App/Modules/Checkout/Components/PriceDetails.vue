<template>
  <div class="w-full rounded-xl bg-white p-8">
    <h1 class="pb-5 border-gray-200 border-b">Price Details</h1>
    <div class="grid gap-5 grid-cols-2 pt-5 pb-5 border-gray-200 border-b mb-5">
      <div>
        <small>Total Price</small>
      </div>
      <div class="text-right">
        <small>Lk</small>
      </div>
      <div>
        <small>Delivery Charges</small>
      </div>
      <div class="text-right">
        <small class="text-green-400">Free</small>
      </div>
    </div>
    <div class="col-span-2">
      <button @click="checkout" class="btn w-full block text-center">Checkout</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import swal from "sweetalert";
import {useRouter} from "vue-router";

const router = useRouter();

const checkout = () => {
  swal("Your order has been placed!",'','success').then(() => {
    router.push({ name: 'PlaceOrder'})
  })
}

</script>

<style scoped>

</style>