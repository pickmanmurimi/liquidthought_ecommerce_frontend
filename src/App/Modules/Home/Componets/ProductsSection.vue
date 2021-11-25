<template>
  <!--      products-->
  <div class="text-center py-20 px-10 lg:px-20 xl:px-40 2xl:px-60 overflow-x-hidden" data-aos="fade-up">
    <h2 class="text-4xl font-semibold mb-10">Products</h2>
    <p class="font-light mb-20 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius</p>

    <!--      loader-->
    <div v-if="loading" class="flex justify-center py-20 w-full">
      <OrbitLoader></OrbitLoader>
    </div>

    <!--        product list-->
    <div id="item-list">
      <div v-if="items.length !== 0" class="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-10">

        <!--          product 1-->
        <template v-for=" item in products" :key="item.uuid">
          <ItemCard :item="item" data-aos="fade-left"></ItemCard>
        </template>
      </div>
    </div>


    <button class="btn" v-if="links?.next" @click="getItems(links?.next )">
      <span class="animate-pulse" v-if="loading"> loading . . . </span>
      <span v-else>Load More Products</span>
    </button>

  </div>
</template>

<script lang="ts" setup>
import ItemCard from "./ItemCard.vue";
import {useItems} from "@Modules/Home/Composables/useItems";
import {onMounted, ref, watch} from "vue";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";
import {Item} from "@/App/Common/Types/Item";

/**
 * get products
 */
const {getItems, items, loading, links} = useItems();

const products = ref<Array<Item>>([]);

onMounted(() => {
  getItems();
})

watch( items, (value) => {
  products.value.push(...value);
})


</script>

<style scoped>

</style>