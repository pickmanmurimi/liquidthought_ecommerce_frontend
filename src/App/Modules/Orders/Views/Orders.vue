<template>
  <MainLayout>
    <div class="bg-gray-50 py-20 px-5 md:px-10 xl:px-20 2xl:px-40 min-h-screen">
      <!--cart -->
      <h1 class="text-4xl font-bold mb-5">My Orders.</h1>

      <div class="text-gray-600">
        <div class="col-span-2">

          <!-- loading -->
          <template v-if="loading">
            <div class="flex justify-center py-20 w-full">
              <OrbitLoader></OrbitLoader>
            </div>
          </template>

          <!--          orders-->
          <template v-else>
            <!-- Orders -->
            <div v-for="order in loadedOrders" :key="order.uuid" data-aos="fade-right">

              <!-- order title-->
              <div class="mb-5 p-4 bg-white rounded-xl border-l-4 border-purple-400">
                <h4 class="font-bold text-purple-500">{{ order.created_at }}</h4>
                <p class="text-gray-400 py-2">
                  <i class="ti-location-pin text-purple-500"></i>
                  {{ order.address.address }}
                </p>
                <p>
                  Status: <span class="text-green-400">delivered</span>
                </p>
              </div>

              <!-- items-->
              <div v-for="orderItem in order.orderItems" class="md:flex md:justify-evenly">
                <OrderItem :order-item="orderItem" class="lg:w-11/12"/>
              </div>

            </div>

            <button class="btn" v-if="links?.next" @click="getOrders(links?.next )">
              <span class="animate-pulse" v-if="loading"> loading . . . </span>
              <span v-else>Load More Orders</span>
            </button>

          </template>

          <!--          none placeholder-->
          <None v-if="loadedOrders.length === 0" text="No orders avilable"></None>
        </div>

      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "@/App/Common/Componets/Layout/MainLayout.vue";
import {useOrders} from "@Modules/Orders/Composables/useOrders";
import {onMounted, ref, watch} from "vue";
import OrderItem from "@Modules/Orders/Components/OrderItem.vue";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";
import None from "@/App/Common/Componets/Placeholders/None.vue";
import {Order} from "@Modules/Orders/Types/Order";

const {loading, orders, getOrders, links} = useOrders();

const loadedOrders = ref< Array<Order>>([])

onMounted(() => {
  getOrders()
})

watch( orders, (value) => {
  loadedOrders.value.push(...value);
})

</script>

<style scoped>

</style>