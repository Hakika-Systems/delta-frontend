<template>
  <NuxtLayout name="dashboard">
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
  <div class="grid surface-card shadow-2" style="border-radius: 10px;">
    <div class="col-12 md:col-4 px-5 py-5">
      <i class="pi pi-truck text-4xl  mb-3"></i>
      <div class="text-900 font-bold text-4xl mb-3 line-height-3">FREE DELIVERY</div>
      <p class="text-700 m-0">On Orders over $100</p>
    </div>
    <div class="col-12 md:col-4 px-5 py-5">
      <i class="pi pi-android text-4xl  mb-3"></i>
      <div class="text-900 font-bold text-4xl mb-3 line-height-3">GET THE SHOPPER CHOICE APP</div>
      <p class="text-700 m-0">Mall in your pocket</p>
    </div>
    <div class="col-12 md:col-4 px-5 py-5">
      <i class="pi pi-shopping-cart text-4xl  mb-3"></i>
      <div class="text-900 font-bold text-4xl mb-3 line-height-3">SHOP OVER 3000 PRODUCTS</div>
      <p class="text-700 m-0">Using Shop Easy card</p>
    </div>
  </div>
</div>
  </NuxtLayout>
</template>
<script setup></script>
<style>
.surface-ground {
    background-color: #ffffff !important;
}
.text-900.font-bold.text-4xl.mb-3.line-height-3 {
    font-size: 18px !important;
}
</style>
