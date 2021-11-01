<template>
  <!--          product 1-->
  <div class="max-w-sm bg-white rounded-3xl p-4 text-left relative mb-10 shadow-xl">
    <!--            sale indicator-->
    <span v-if="isSale"
          class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>
    <!--            like-->
    <span
        class="bg-gray-800 rounded-full h-8 w-8 block flex items-center justify-center absolute right-2 top-2">
              <i class="ti-heart text-white font-bold"></i>
            </span>

    <!--            img-->
    <div class="group relative">
      <img :src="image" class="my-4 animate-all
            transform scale-90 group-hover:scale-150 group-hover:-translate-y-10" alt="lebron1">
    </div>


    <div class="mb-5">
      <h2 class="font-bold mt-10 mb-3">{{ name }}</h2>
      <small class="w-max-4 block mb-3">{{ description }}</small>
      <p class="font-bold ">{{ price }}</p>
    </div>

    <!--            add to cart-->
    <div>
      <button class="btn">Add to cart</button>
    </div>

  </div>
</template>

<script setup lang="ts">

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

</script>

<style scoped>

</style>