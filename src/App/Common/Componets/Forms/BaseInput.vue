<template>
  <!--          type text, password, email, date-->
  <div class="mb-5">
    <label :for="id ? id :name" class="text-gray-500 text-sm">{{ props.text }}</label>
    <div class="relative focus-within:text-purple-500 flex text-gray-500 items-center">
      <input :type="props.type" :id="id ? id : name" :placeholder="placeholder"
             class="form-control text-gray-500">
      <i class="absolute right-2" :class="icon"></i>
    </div>
  </div>


</template>

<script setup lang="ts">
/**
 * props
 */
const props = defineProps({
  type : {
    type: String,
    default: () => 'text'
  },
  text: {
    type: String
  },
  icon: {
    type: String
  },
  placeholder: {
    type: String
  },
  name: {
    type: String
  },
  id: {
    type: String
  },
});

</script>

<style scoped>

</style>