<template>
  <!--          product 1-->
  <div class="max-w-sm bg-white rounded-3xl p-4 text-left relative mb-10 shadow-xl
  hover:shadow-2xl">
    <!--            sale indicator-->
    <span v-if="item.isSale"
          class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>
    <!--            like-->
    <span
        class="bg-gray-800 rounded-full h-8 w-8 block flex items-center justify-center absolute right-2 top-2">
              <i class="ti-heart text-white font-bold"></i>
            </span>

    <!--            img-->
    <div class="group relative">
      <img :src="item.image_url" alt="lebron1" class="my-4 animate-all product-card-image
            transform scale-90 group-hover:scale-150 group-hover:-translate-y-10">
    </div>


    <div class="mb-5 text-gray-500">
      <h2 class="font-bold mt-10 mb-3">{{ item.name }}</h2>
      <small class="w-max-4 block mb-3">{{ item.description.substring(0, 80) }}.</small>
      <p class="font-bold "> {{item.currency}} {{ item.unit_price }}</p>
    </div>

    <!--            add to cart-->
    <div class="flex space-x-3">
      <button class="btn w-full" @click="viewProduct(item.uuid)">View</button>

<!--      <button class="btn w-full">Add to cart</button>-->
    </div>

  </div>
</template>

<script lang="ts" setup>

import {Router, useRouter} from "vue-router";
import {Item} from "@/App/Common/Types/Item";
import {PropType} from "vue";

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