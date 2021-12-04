<template>
  <MainLayout>
    <div class="bg-gray-50 py-20 px-5 md:px-10 xl:px-20 2xl:px-40 min-h-screen">
      <!--cart -->
      <h1 class="text-4xl font-bold mb-5">Wishlist</h1>
      <!-- images-->
      <div class="lg:grid grid-cols-3 md:gap-5 xxl:gap-10 text-gray-600">
        <div class="col-span-2">

          <div v-if="wishlist.length < 1">
            <None text="No items have been added to cart!"></None>

            <div class="text-center mt-10">
              <router-link class="btn" :to="{name: 'Home'}"> Checkout Some products 😀.</router-link>
            </div>
          </div>

          <div v-else>
            <!--          items-->
            <template v-for="item in wishlist" :key="item.id">
              <WishlistItem :item="item" data-aos="fade-up"></WishlistItem>
            </template>
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
import WishlistItem from "@Modules/Home/Componets/WishlistItem.vue";
import None from "@/App/Common/Componets/Placeholders/None.vue";
import {Item} from "@/App/Common/Types/Item";

const store = useStore();

/**
 * @var Item[] items
 */
const wishlist = computed<Item[]>(() => {
  return store.getters.wishlist
})


</script>

<style scoped>

</style>