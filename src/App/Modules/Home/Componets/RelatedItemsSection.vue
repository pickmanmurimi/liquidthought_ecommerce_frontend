<template>
  <!--      related products-->
  <div class="bg-gray-50 py-20 px-5 md:px-20 xl:px-40 2xl:px-60 overflow-x-hidden">

    <h1 id="related_products" class="text-3xl font-bold mb-5 text-gray-500">Related Products</h1>

    <!--      loader-->
    <div v-if="loading" class="flex justify-center py-20 w-full">
      <OrbitLoader></OrbitLoader>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-10">

      <!--      products-->
      <template v-for="item in items" :key="item.uuid">
        <RelatedItemCard :item="item" data-aos="fade-down"></RelatedItemCard>
      </template>

    </div>

  </div>
</template>

<script lang="ts" setup>
import RelatedItemCard from "@Modules/Home/Componets/RelatedItemCard.vue";
import {useItems} from "@Modules/Home/Composables/useItems";
import {onMounted} from "vue";
import OrbitLoader from "@/App/Common/Componets/Loaders/OrbitLoader.vue";
import {useRoute} from "vue-router";

/**
 * get related items
 */
const {getRelatedItems, items, loading} = useItems();
const route = useRoute();


onMounted(() => {
  getRelatedItems(route.params.uuid.toString())
})

</script>

<style scoped>

</style>