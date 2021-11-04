<template>
  <!--          product 1-->
  <div class="max-w-sm bg-gray-100 rounded-3xl p-4 text-left relative mb-10 shadow-xl
  hover:shadow-2xl">
    <!--            sale indicator-->
    <span v-if="item.isSale"
          class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>

    <h2 class="font-bold mt-10 mb-3 text-gray-500 text-center">{{ item.name }}</h2>

    <!--            img-->
    <div class="group relative cursor-pointer" @click="viewProduct(item.uuid)">
      <img :src="item.image_url" alt="lebron1" class="my-4 animate-all product-card-image
            transform scale-90 group-hover:scale-150 group-hover:-translate-y-10">
    </div>


    <div class="mb-5 text-gray-500 cursor-pointer text-center">
      <p class="font-bold ">{{ item.unit_price }}</p>
    </div>

  </div>
</template>

<script lang="ts" setup>

import {Router, useRouter} from "vue-router";
import {PropType} from "vue";
import {Item} from "@/App/Common/Types/Item";

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
})

const router: Router = useRouter();

/**
 * view product
 */
const viewProduct = (uuid: string): void => {
  router.push({name: 'ViewProduct', params: {uuid: uuid}})
}

</script>

<style scoped>

.product-card-image {
  min-height: 250px;
  width: auto;
  object-fit: contain;
}
</style>