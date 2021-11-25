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
              :disabled="!defaultAddress?.uuid"
              @click="checkout(order)">Checkout
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
import {Order} from "@Modules/Checkout/Types/Order";
import {Address} from "@Modules/Checkout/Types/Address";
import {useCheckout} from "@Modules/Checkout/Composables/useCheckout";

const store = useStore();
const { checkout, loading} = useCheckout()

/**
 * @var Item[] items
 */
const items = computed<OrderItem[]>(() => {
  return store.getters.cart
})
const defaultAddress = computed<Address>(() => {
  return store.getters.defaultAddress
})

// get the total price
const total = computed<number>(() => items.value
    .reduce((sum, currentItem) => sum + currentItem.quantity * currentItem.item.unit_price, 0))

const order = computed<Order>(() => {
  const orderItems:Order = { items: [], address_uuid: '' };
  orderItems['items'] = items.value.map((orderItems) => {
    return {
      item_id: orderItems.id,
      quantity: orderItems.quantity
    }
  });
  orderItems.address_uuid = defaultAddress.value.uuid;
  return orderItems;
})

</script>

<style scoped>

</style>