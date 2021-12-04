<template>
  <!--          items-->
  <div class="rounded-xl bg-white mb-10">
    <div class="lg:grid grid-cols-7 lg:gap-x-10 p-2 md:p-8 lg:p-0">
      <div class="flex items-center justify-center p-2 col-span-2">
        <img :src="item.image_url"
             alt="lebron1"
             class="h-40 object-contain animate-all transform hover:-translate-y-5 hover:scale-150">
      </div>
      <!--              details-->
      <div class="col-span-3 lg:py-8 py-4">
        <div class="mb-10">
          <h3 class="text-xl">{{ item.name }}</h3>
          <small>By <span class="text-purple-500">Nike</span></small>

        </div>
        <div class="flex space-x-2 items-center">
        </div>
        <small class="text-gray-400">Express delivery</small>
      </div>

      <!--              pricing-->
      <div class="col-span-2 lg:border-l border-gray-200 text-center lg:py-8 lg:px-2 flex flex-col justify-between">
        <div>
          <p class="text-purple-500 font-bold"> <span class="text-gray-500">{{ item.currency }}</span> {{ item.unit_price }}</p>
          <small class=" "> Total {{ item.currency }} {{ item.unit_price }}</small>
        </div>

        <div>
          <small class="text-green-400">Free delivery</small>
          <button class="bt w-full mb-3" @click="viewProduct(item.uuid)"> view Product</button>
          <button class="btn-secondary w-full" @click="removeFromWishlist(item)">
            <i class="ti-trash"></i> Remove
          </button>
        </div>

      </div>

    </div>


  </div>
</template>

<script lang="ts" setup>

import {computed, PropType} from "vue";
import {useCart} from "@Modules/Home/Composables/useCart";
import {Router, useRouter} from "vue-router";
import {OrderItem} from "@/App/Common/Types/OrderItem";
import {Item} from "@/App/Common/Types/Item";
import {useWishlist} from "@Modules/Home/Composables/useWishlist";

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true
  }
})

/**
 * remove cart item
 */
const {removeFromWishlist} = useWishlist();


const router: Router = useRouter();
/**
 * view product
 */
const viewProduct = (uuid: string): void => {
  router.push({name: 'ViewProduct', params: {uuid: uuid}})
}

</script>

<style scoped>

</style>