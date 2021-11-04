<template>
  <MainLayout>
    <div class="bg-gray-50 py-20 px-5 md:px-10 xl:px-20 2xl:px-40 min-h-screen">
      <!--cart -->
      <h1 class="text-4xl font-bold mb-5">Checkout</h1>
      <div class="py-8">
        <div class="lg:flex md:space-x-5 xxl:space-x-10 text-gray-600">

          <!----------------------------------------------------------------------------------------------------------->
          <!--          Add new address-->
          <!----------------------------------------------------------------------------------------------------------->
          <AddAddress class="w-full h-full"></AddAddress>

          <!----------------------------------------------------------------------------------------------------------->
          <!--          summary-->
          <!----------------------------------------------------------------------------------------------------------->
          <div class="h-full">
            <!--        summary-->
            <div class="mt-10 lg:mt-0">
              <!--              delivery details-->
              <DeliveryDetails></DeliveryDetails>
            </div>

            <div class="w-full mt-10">
              <!--              price details-->
              <PriceDetails></PriceDetails>
            </div>
          </div>

        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "@/App/Common/Componets/Layout/MainLayout.vue";
import AddAddress from "@Modules/Checkout/Components/AddAddress.vue";
import DeliveryDetails from "@Modules/Checkout/Components/DeliveryDetails.vue";
import PriceDetails from "@Modules/Checkout/Components/PriceDetails.vue";</script>
<style scoped>

</style>