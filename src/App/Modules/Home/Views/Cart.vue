<template>
  <MainLayout>
    <div class="bg-gray-50 py-20 px-5 md:px-10 xl:px-20 2xl:px-40 min-h-screen">
      <!--cart -->
      <h1 class="text-4xl font-bold mb-5">Cart</h1>
      <!-- images-->
      <div class="lg:grid grid-cols-3 md:gap-5 xxl:gap-10 text-gray-600">
        <div class="col-span-2">

          <div v-if="items.length < 1">
            <None text="No items have been added to cart!"></None>

            <div class="text-center mt-10">
              <router-link class="btn" :to="{name: 'Home'}"> Checkout Some products 😀.</router-link>
            </div>
          </div>

          <div v-else>
            <!--          items-->
            <template v-for="item in items" :key="item.id">
              <CartItem :item="item" data-aos="fade-up"></CartItem>
            </template>
          </div>


        </div>

        <!--        summary-->
        <div v-if="items.length" class="w-full mt-10 lg:mt-0">
          <div class="w-full p-8 rounded-xl bg-white">
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

            <div class="grid gap-5 grid-cols-2">
              <div>
                <p class="font-bold">Total</p>
              </div>
              <div class="text-right">
                <p>{{ total }}</p>
              </div>
              <div class="col-span-2">
                <router-link v-if="store.getters.isAuthenticated" :to="{ name: 'Checkout'}"
                             class="btn w-full block text-center">Place order</router-link>
                <router-link v-else :to="{ name: 'Login', query: { checkout: 'Checkout'}}"
                             class="btn w-full block text-center">Place order</router-link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "@/App/Common/Componets/Layout/MainLayout.vue";
import {computed} from "vue";
import {useStore} from "@/store/store";
import CartItem from "@Modules/Home/Componets/CartItem.vue";
import {OrderItem} from "@/App/Common/Types/OrderItem";
import None from "@/App/Common/Componets/Placeholders/None.vue";

const store = useStore();

/**
 * @var Item[] items
 */
const items = computed<OrderItem[]>(() => {
  return store.getters.cart
})

const total = computed<number>(() => items.value
    .reduce((sum, currentItem) => sum + currentItem.quantity * currentItem.item.unit_price, 0))


</script>

<style scoped>

</style>