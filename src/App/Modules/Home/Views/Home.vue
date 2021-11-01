<template>

  <div class="bg-gray-100">
    <div class="flex justify-between bg-white py-5 px-2 lg:px-32 text-sm ">
      <div>
        <a href="#" class="mr-2 lg:mx-4">My cart</a>
        <span>|</span>
        <a href="#" class="mx-2 lg:mx-4">Login</a>
      </div>
      <div><a href="tel:+27 (0) 10 005 7777">+27 (0) 10 005 7777</a></div>
    </div>
    <div class="min-h-screen bg-gray-100">

      <!--    nav bar-->
      <nav class="py-8 px-2 lg:px-32 sticky top-0 z-10 bg-gray-50 shadow">
        <div class="flex mx-2 justify-between items-center">
          <div>
            <!--        Logo-->
            <!--          <i class="ti-flickr text-5xl text-purple-500"></i>-->
            <h1 class="text-2xl lg:text-3xl font-bold">Liquid Shop <span
                class="font-bold text-5xl text-red-500">.</span></h1>
          </div>

          <div>
            <!--        bag icon-->
            <div class="relative">
              <i class="ti-shopping-cart text-3xl lg:text-5xl"></i>
              <span class="h-5 w-5 lg:h-8 lg:w-8 block bg-purple-500 rounded-full absolute -top-2 -right-1
          flex items-center font-bold text-white justify-center">1</span>
            </div>
          </div>
        </div>
      </nav>

      <!--  hero-->

      <div class="bg-gray-200 px-8 bg-img 2xl:px-44 py-8 lg:pt-32 relative lg:flex justify-between relative overflow-hidden
      lg:overflow-visible">

        <!--        small img left-->
        <!--        <img src="/products/lebron4.png" class="lg:hidden min-h-32 absolute -right-32" style="" alt="lebron1">-->

        <div data-aos="fade-right" class="w-full lg:p-5">
          <h3 class="text-xl mb-5 font-Handlee text-gray-50 bg-purple-400 inline px-2"># New product</h3>
          <h1 class="text-5xl lg:text-6xl mb-5 font font-semibold text-gray-800 mt-10">Amazing Product</h1>

          <p class="font-light text-gray-500 text-xl max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do
            eius tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>

          <button class="text-2xl mt-10 rounded-xl border border-purple-400 text-purple-500 px-4 py-4 font-medium">
            SHOP NOW
          </button>
        </div>

        <!--        left image lg-->
        <div data-aos="fade-left" class="max-w-3xl hidden lg:block z-10">
          <img src="/products/lebron6.png" class="min-h-96 transform rotate-45 -translate-x-5" alt="lebron1">
        </div>

      </div>
      <!--      services-->
      <div data-aos="fade-up" class="md:flex justify-evenly lg:px-10 xl:px-60 px-10 py-20 bg-gray-50
      lg:space-x-10 xl:space-x-20 md:space-x-3">

        <div data-aos="fade-left" class="mb-10">
          <i class="ti-bag text-6xl text-purple-800"></i>
          <h2 class="text-gray-500 text-xl my-3 font-bold">Free Shipping</h2>
          <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
            tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
        </div>

        <div data-aos="fade-down" class="mb-10">
          <i class="ti-comments-smiley text-6xl text-purple-800"></i>
          <h2 class="text-gray-500 text-xl my-3 font-bold">Customer Support</h2>
          <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
            tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
        </div>

        <div data-aos="fade-right" class="mb-10">
          <i class="ti-briefcase text-6xl text-purple-800"></i>
          <h2 class="text-gray-500 text-xl my-3 font-bold">Secure Payments</h2>
          <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
            tempor incididunt ut labore et dolore, eius tempor incididunt ut labore et dolore.</p>
        </div>
      </div>


      <!--      products-->
      <div data-aos="fade-up" class="text-center py-20 px-10 lg:px-20 xl:px-60">
        <h2 class="text-4xl font-semibold mb-10">Products</h2>
        <p class="font-light mb-20 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius</p>

        <!--        product list-->
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-10">

          <!--          product 1-->
          <div data-aos="fade-up" class="max-w-sm bg-white rounded-3xl p-4 text-left relative mb-10 shadow-xl">
            <!--            sale indicator-->
            <span
                class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>
            <!--            like-->
            <span
                class="bg-gray-800 rounded-full h-8 w-8 block flex items-center justify-center absolute right-2 top-2">
              <i class="ti-heart text-white font-bold"></i>
            </span>

            <!--            img-->
            <img src="/products/lebron1.png" class="my-4" alt="lebron1">

            <div class="mb-5">
              <h2 class="font-bold mt-10 mb-3">Lebrons 10</h2>
              <small class="w-max-4 block mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius tempor incididunt</small>
              <p class="font-bold ">$9.99</p>
            </div>

            <!--            add to cart-->
            <div>
              <button class="btn">Add to cart</button>
            </div>

          </div>

          <!--          product 2-->
          <div data-aos="fade-up" class="max-w-sm bg-white rounded-3xl p-4 text-left relative mb-10 shadow-xl">
            <!--            sale indicator-->
            <span
                class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>
            <!--            like-->
            <span
                class="bg-gray-800 rounded-full h-8 w-8 block flex items-center justify-center absolute right-2 top-2">
              <i class="ti-heart text-white font-bold"></i>
            </span>

            <!--            img-->
            <img src="/products/lebron2.png" class="my-4" alt="lebron1">

            <div class="mb-5">
              <h2 class="font-bold mt-10 mb-3">Lebrons 10</h2>
              <small class="w-max-4 block mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius tempor incididunt</small>
              <p class="font-bold ">$9.99</p>
            </div>

            <!--            add to cart-->
            <div>
              <button class="btn">Add to cart</button>
            </div>

          </div>
          <!--          product 2-->
          <div data-aos="fade-up" class="max-w-sm bg-white rounded-3xl p-4 text-left relative mb-10 shadow-xl">
            <!--            sale indicator-->
            <span
                class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>
            <!--            like-->
            <span
                class="bg-gray-800 rounded-full h-8 w-8 block flex items-center justify-center absolute right-2 top-2">
              <i class="ti-heart text-white font-bold"></i>
            </span>

            <!--            img-->
            <img src="/products/lebron3.png" class="my-4" alt="lebron1">

            <div class="mb-5">
              <h2 class="font-bold mt-10 mb-3">Lebrons 10</h2>
              <small class="w-max-4 block mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius tempor incididunt</small>
              <p class="font-bold ">$9.99</p>
            </div>

            <!--            add to cart-->
            <div>
              <button class="btn">Add to cart</button>
            </div>

          </div>

          <!--          product 2-->
          <div data-aos="fade-up" class="max-w-sm bg-white rounded-3xl p-4 text-left relative mb-10 shadow-xl">
            <!--            sale indicator-->
            <span
                class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>
            <!--            like-->
            <span
                class="bg-gray-800 rounded-full h-8 w-8 block flex items-center justify-center absolute right-2 top-2">
              <i class="ti-heart text-white font-bold"></i>
            </span>

            <!--            img-->
            <img src="/products/lebron6.png" class="my-4" alt="lebron1">

            <div class="mb-5">
              <h2 class="font-bold mt-10 mb-3">Lebrons 10</h2>
              <small class="w-max-4 block mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius tempor incididunt</small>
              <p class="font-bold ">$9.99</p>
            </div>

            <!--            add to cart-->
            <div>
              <button class="btn">Add to cart</button>
            </div>

          </div>

          <!--          product 2-->
          <div data-aos="fade-up" class="max-w-sm bg-white rounded-3xl p-4 text-left relative mb-10 shadow-xl">
            <!--            sale indicator-->
            <span
                class="bg-purple-700 rounded-xl absolute font-medium left-2 top-2 text-white text-sm p-1 px-2"> Sale </span>
            <!--            like-->
            <span
                class="bg-gray-800 rounded-full h-8 w-8 block flex items-center justify-center absolute right-2 top-2">
              <i class="ti-heart text-white font-bold"></i>
            </span>

            <!--            img-->
            <img src="/products/lebron5.png" class="my-4" alt="lebron1">

            <div class="mb-5">
              <h2 class="font-bold mt-10 mb-3">Lebrons 10</h2>
              <small class="w-max-4 block mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius tempor incididunt</small>
              <p class="font-bold ">$9.99</p>
            </div>

            <!--            add to cart-->
            <div>
              <button class="btn">Add to cart</button>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">

</script>

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
    background-image: url("@assets/products/lebron4.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
    background-position: center;
  }
}


</style>
