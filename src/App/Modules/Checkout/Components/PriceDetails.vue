<template>
  <div class="w-full rounded-xl bg-white p-8">
    <h1 class="pb-5 border-gray-200 border-b">Price Details</h1>
    <div class="grid gap-5 grid-cols-2 pt-5 pb-5 border-gray-200 border-b mb-5">
      <div>
        <small>Total Price</small>
      </div>
      <div class="text-right">
        <small>{{ total }}</small>
      </div>
      <div>
        <small>Delivery Charges</small>
      </div>
      <div class="text-right">
        <small class="text-green-400">Free</small>
      </div>
    </div>
    <div class="col-span-2">
      <button class="btn w-full block text-center"
              @click="checkout">Checkout
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import swal from "sweetalert";
import {useRouter} from "vue-router";
import {computed} from "vue";
import {OrderItem} from "@/App/Common/Types/OrderItem";
import {useStore} from "@/store/store";

const store = useStore();

/**
 * @var Item[] items
 */
const items = computed<OrderItem[]>(() => {
  return store.getters.cart
})

const total = computed<number>(() => items.value
    .reduce((sum, currentItem) => sum + currentItem.quantity * currentItem.item.unit_price, 0))

const router = useRouter();

const checkout = () => {
  swal("Your order has been placed!", '', 'success').then(() => {
    router.push({name: 'PlaceOrder'})
  })
}

</script>

<style scoped>

</style>