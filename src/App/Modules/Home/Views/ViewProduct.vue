<template>
  <MainLayout>
    <!--product details-->
    <slot>
<!--      product detail container-->
      <div class="bg-white py-20 px-5 md:px-20 xl:px-40 2xl:px-60">
        <h1 class="text-4xl font-bold mb-5">Product Details</h1>

        <!--      product card-->
        <div class="lg:flex lg:space-x-10 2xl:space-x-20 ">

          <!--        product image-->
          <div class="max-w-3xl mb-10 z-30">
            <img src="/products/lebron6.png"
                 class="min-h-96 animate-all group-hover:-translate-y-14 product-image"
                 alt="lebron1">
          </div>

          <!--        product description-->
          <div class="w-full text-gray-500">

            <div class="border-b border-gray-400 mb-10 pb-5">
              <div class="mb-10">
                <h3 class="text-xl">Lebron soldier 10</h3>
                <small>By <span class="text-purple-500">Nike</span></small>
              </div>

              <h2 class="text-purple-500 mb-2">RAD 300</h2>

              <p class="mb-5">Available</p>

              <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo.
              </p>

              <p class="mb-5 font-bold"> <ShoppingCart class="inline" :size="20"/>
                Free Shipping
              </p>
            </div>

            <button class="btn">
              <ShoppingCart class="inline mr-2" :size="20"/> Add to cart  </button>


          </div>

        </div>
      </div>

<!--      additional details-->

      <div class=" py-20 px-5 md:px-20 xl:px-40 2xl:px-60">

        <div class="lg:flex lg:space-x-10 2xl:space-x-20 ">

          <div data-aos="fade-left" class="mb-10">
            <i class="ti-flickr text-6xl text-purple-800 mb-10 block"></i>
            <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">Long Lasting</h2>
            <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
              tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
          </div>


          <div data-aos="fade-left" class="mb-10">
            <i class="ti-timer text-6xl text-purple-800 mb-10 block"></i>
            <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">2 day replacement</h2>
            <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
              tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
          </div>


          <div data-aos="fade-left" class="mb-10">
            <i class="ti-rocket text-6xl text-purple-800 mb-10 block"></i>
            <h2 class="text-gray-500 text-2xl my-3 font-Dosis font-bold">Light</h2>
            <p class="text-gray-400 font-Dosis text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
              tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
          </div>
        </div>


      </div>

      <!--      related products-->

      <div class="bg-gray-50 py-20 px-5 md:px-20 xl:px-40 2xl:px-60">

        <h1 class="text-3xl font-bold mb-5 text-gray-500">Related Products</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-10">
          <RelatedProductCard data-aos="fade-down" name="Lebron Soldier 5"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                       image="/products/lebron8.png" price="$9.99"></RelatedProductCard>

          <RelatedProductCard data-aos="fade-down" name="Lebron Soldier 5"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                       image="/products/lebron7.png" price="$9.99"></RelatedProductCard>

          <RelatedProductCard data-aos="fade-down" name="Lebron Soldier 5"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eius tempor incididunt"
                       image="/products/lebron2.png" price="$9.99"></RelatedProductCard>

        </div>

      </div>
    </slot>

  </MainLayout>
</template>

<script lang="ts" setup>
import {ShoppingCart} from 'lucide-vue-next';
import MainLayout from "../../../Common/Componets/Layout/MainLayout.vue";
import RelatedProductCard from "../Componets/RelatedProductCard.vue";
</script>

<style scoped>
.product-image {
  width: 1200px;
}
</style>