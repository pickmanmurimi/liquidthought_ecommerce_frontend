<template>
  <MainLayout>

<!--    loader-->
    <OrbitLoader full v-if="loading"></OrbitLoader>

    <div v-else>
      <!--      product detail container-->
      <div class="bg-white py-20 px-5 md:px-20 xl:px-40 2xl:px-60">

        <!--product details-->
        <h1 class="text-4xl font-bold mb-5">Product Details</h1>

        <!--      product card-->
        <div class="lg:flex lg:space-x-10 2xl:space-x-20 ">

          <!--        product image-->
          <div class="max-w-3xl mb-10 z-30 group">
            <img :src="item.image_url"
                 alt="lebron1"
                 class="min-h-96 animate-all transform group-hover:-translate-y-14 group-hover:scale-150 product-image">
          </div>

          <!--        product description-->
          <div class="w-full text-gray-500">

            <div class="border-b border-gray-400 mb-10 pb-5">
              <div class="mb-10">
                <h3 class="text-xl">{{ item.name }}</h3>
                <small>By <span class="text-purple-500">Nike</span></small>
              </div>

              <h2 class="text-purple-500 mb-2 uppercase">{{ item.currency }} {{ item.unit_price }}</h2>

              <p v-if="item.isAvailable" class="mb-5">Available</p>
              <p v-else class="mb-5 text-red-500">Sold out</p>

              <p class="mb-10">
                {{ item.description }}
              </p>

              <p class="mb-5 font-bold">
                <ShoppingCart :size="20" class="inline"/>
                Free Shipping
              </p>
            </div>

            <button class="btn">
              <ShoppingCart :size="20" class="inline mr-2"/>
              Add to cart
            </button>


          </div>

        </div>
      </div>

      <!--      additional details-->

      <div class=" py-20 px-5 md:px-20 xl:px-40 2xl:px-60 overflow-x-hidden">

        <div class="lg:flex lg:space-x-10 2xl:space-x-20 ">

          <div class="mb-10" data-aos="fade-left">
            <i class="ti-flickr text-6xl text-purple-800 mb-10 block"></i>
            <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">Long Lasting</h2>
            <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eius
              tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
          </div>


          <div class="mb-10" data-aos="fade-left">
            <i class="ti-timer text-6xl text-purple-800 mb-10 block"></i>
            <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">2 day replacement</h2>
            <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eius
              tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
          </div>


          <div class="mb-10" data-aos="fade-left">
            <i class="ti-rocket text-6xl text-purple-800 mb-10 block"></i>
            <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">Light</h2>
            <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eius
              tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
          </div>
        </div>


      </div>
    </div>

    <!--      related products-->
    <RelatedItemsSection></RelatedItemsSection>

  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "../../../Common/Componets/Layout/MainLayout.vue";
import {ShoppingCart} from "lucide-vue-next";
import {useCart} from "@Modules/Home/Composables/useCart";
import {useItems} from "@Modules/Home/Composables/useItems";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";
import RelatedItemsSection from "@Modules/Home/Componets/RelatedItemsSection.vue";

const route = useRoute();

/**
 * add item to cart
 */
const {addToCart} = useCart();

/**
 * get item
 */
const {getItem, item, loading} = useItems();

onMounted(() => {
  getItem(route.params.uuid.toString())
})

</script>

<style scoped>
.product-image {
  width: 1200px;
}
</style>