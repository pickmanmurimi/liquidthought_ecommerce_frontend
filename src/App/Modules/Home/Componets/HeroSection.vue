<template>
  <!--  hero-->
  <div class="bg-gray-200 px-3 bg-img 2xl:px-44 py-8 lg:pt-32 relative lg:flex
      justify-between relative overflow-hidden lg:overflow-visible">

    <!--        small img left-->

    <div data-aos="fade-right" class="w-full p-5 md:p-10 lg:p-20 rounded-3xl shadow-2xl relative mb-20">
      <h3 class="text-xl mb-5 font-Handlee text-gray-50 bg-purple-400 inline px-2 z-10"># New arrival</h3>
      <h1 class="text-5xl lg:text-6xl mb-5 font-bold text-purple-9\00 mt-10">Signed Lebron Soldier 10</h1>

      <p class="font-light text-gray-900 text-xl max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do</p>

      <button class="text-3xl absolute flex items-center justify-center -bottom-8 right-5
          rounded-full border border-purple-400 bg-purple-500 text-gray-50 h-20 w-20 font-medium">
        <i class="ti-arrow-right mx-3"></i>
      </button>
    </div>

    <!--        left image lg-->
    <div data-aos="fade-left" class="max-w-3xl hidden lg:block z-10 group">
      <img src="/products/lebron6.png"
           class="min-h-96 transform rotate-45 -translate-x-10 animate-all group-hover:-translate-y-14"
           alt="lebron1">
    </div>

  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-img {
  background-image: url("@assets/images/hugewaves.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100vw;
}

@media screen and (max-width: 768px) {
  .bg-img {
    background-image: url("@assets/images/hugewaves.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
    background-position: center;
  }
}
</style>