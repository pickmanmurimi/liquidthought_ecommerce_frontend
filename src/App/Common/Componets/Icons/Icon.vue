<template>
  <i :class="props.icon"></i>
</template>

<script lang="ts" setup>

const props = defineProps({
  icon: {
    type: String
  }
});

</script>

<style scoped>

</style>