<template>
  <NuxtLayout name="dashboard">
    
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <ul class="list-none p-0 m-0 flex flex-column md:flex-row">
  <li class="relative mb-5 mr-0 md:mr-8 flex-auto">
    <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
      <i class="pi pi-truck  text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3 topicons"></i>
      <div>
        <div class="text-900 topcardstext font-medium mb-1">FREE DELIVERY</div>
        <span class="text-600 text-sm hidden md:block">On Orders over $100</span>
      </div>
    </div>
    <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px;"></div>
  </li>
  <li class="relative mb-5 mr-0 md:mr-8 flex-auto">
    <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
      <i class="pi pi-android topicons text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
      <div>
        <div class="text-900 topcardstext font-medium mb-1">GET THE SHOPPER CHOICE APP</div>
        <span class="text-600 text-sm hidden md:block">Mall in your pocket</span>
      </div>
    </div>
    <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px;"></div>
  </li>
  <li class="relative mb-5 flex-auto">
    <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
      <i class="pi pi-credit-card topicons  text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
      <div>
        <div class="text-900 topcardstext font-medium mb-1">SHOP OVER 3000 PRODUCTS</div>
        <span class="text-600 text-sm hidden md:block">Using Shop Easy card</span>
      </div>
    </div>
  </li>
</ul>
</div>
<FeaturedStore />
  </NuxtLayout>
</template>
<script setup>
useHead({
  title: "OK ShopEasy Zimbabwe",
  meta: [
    { name: "description", content: "Your number one e-commerce shopping destination in Zimbabwe" },
  ],
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
.layout-wrapper, body {
    background-color: #ffffff;
    font-family: "IBM Plex Sans" !important;
    color: #423939 !important;
}
.ibm-plex-sans-thin {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 100;
  font-style: normal;
}
.p-button-label {
  font-family: "IBM Plex Sans" !important;
}
.p-component {
    font-family: 'IBM Plex Sans' !important;
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    font-weight: normal;
}

.mb-3.font-medium.nametext {
   font-family: "IBM Plex Sans";
   color: #423939;
}

.ibm-plex-sans-extralight {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.ibm-plex-sans-light {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.ibm-plex-sans-regular {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.ibm-plex-sans-medium {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.ibm-plex-sans-semibold {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.ibm-plex-sans-bold {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.ibm-plex-sans-thin-italic {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.ibm-plex-sans-extralight-italic {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 200;
  font-style: italic;
}

.ibm-plex-sans-light-italic {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.ibm-plex-sans-regular-italic {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.ibm-plex-sans-medium-italic {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.ibm-plex-sans-semibold-italic {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 600;
  font-style: italic;
}

.ibm-plex-sans-bold-italic {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
}
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
.topcardstext {
    font-weight: 900 !important;
}
.text-900.topcardstext.font-medium.mb-1 {
    font-weight: 900 !important;
}
</style>
