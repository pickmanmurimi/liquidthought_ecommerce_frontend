<template>
  <div class="text-center text-gray-500">
    <i class="ti-cloud block text-4xl text-purple-500"></i>
    {{ text }}
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  text: {
    default: () => "No products added"
  }
})
</script>

<style scoped>

</style>