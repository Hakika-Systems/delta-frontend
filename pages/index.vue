<template>
  <NuxtLayout name="dashboard">
    
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <ul class="list-none p-0 m-0 flex flex-column md:flex-row">
  <li class="relative mr-0 md:mr-8 flex-auto">
    <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
      <i class="pi pi-truck  text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3 topicons"></i>
      <div>
        <div class="text-900 font-medium mb-1">FREE DELIVERY</div>
        <span class="text-600 text-sm hidden md:block">On Orders over $100</span>
      </div>
    </div>
    <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px;"></div>
  </li>
  <li class="relative mr-0 md:mr-8 flex-auto">
    <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
      <i class="pi pi-android topicons text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
      <div>
        <div class="text-600 font-medium mb-1">GET THE SHOPPER CHOICE APP</div>
        <span class="text-600 text-sm hidden md:block">Mall in your pocket</span>
      </div>
    </div>
    <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px;"></div>
  </li>
  <li class="relative flex-auto">
    <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
      <i class="pi pi-credit-card topicons  text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
      <div>
        <div class="text-900 font-medium mb-1">SHOP OVER 3000 PRODUCTS</div>
        <span class="text-600 text-sm hidden md:block">Using Shop Easy card</span>
      </div>
    </div>
  </li>
</ul>
</div>
<FeaturedStore />
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
.topicons {
    background-color: #f7941f !important;
    color: white !important;
    padding: 10px !important;
    border-radius: 35px !important;
}
</style>
