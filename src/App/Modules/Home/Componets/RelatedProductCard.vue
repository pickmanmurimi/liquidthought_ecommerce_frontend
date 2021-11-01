<template>
  <!--          product 1-->
  <div class="max-w-sm bg-gray-100 rounded-3xl p-4 text-left relative mb-10 shadow-xl
  hover:shadow-2xl">
    <!--            sale indicator-->
    <span v-if="isSale"
          class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>

    <h2 class="font-bold mt-10 mb-3 text-gray-500 text-center">{{ name }}</h2>

    <!--            img-->
    <div class="group relative cursor-pointer" @click="viewProduct('related-asjdd-alnmsd-sadsf-dfscvfdg')">
      <img :src="image" alt="lebron1" class="my-4 animate-all product-card-image
            transform scale-90 group-hover:scale-150 group-hover:-translate-y-10">
    </div>


    <div class="mb-5 text-gray-500 cursor-pointer text-center">
      <p class="font-bold ">{{ price }}</p>
    </div>

  </div>
</template>

<script lang="ts" setup>

import {Router, useRouter} from "vue-router";

const props = defineProps({
  isSale: {
    type: Boolean,
    default: () => false
  },
  image: {
    type: String,
    default: () => '/products/lebron1.png'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  }
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