<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <router-view :key="route.path" v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>