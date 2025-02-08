<template>
    <div class="surface-ground">
    <!-- Top Bar -->
    <div class="text-white p-3" style="background-color: #0958A9;">
      <div class="container">
        <div class="flex justify-content-between align-items-center">
          <div class="flex align-items-center">
            <i class="pi pi-phone mr-2"></i>
            <span class="mr-3">+263 8688 003417 | +263 78 681 5772</span>
            <i class="pi pi-envelope mr-2"></i>
            <span>Email: info@deltastore.co.zw</span>
          </div>
          <div>
            <Dropdown v-model="selectedCurrency" :options="currencies" optionLabel="name" class="mr-2" />
            <Button label="Sign in" class="p-button-text p-button-plain mr-2" style="color: white;"/>
            <Button label="Create account" class="p-button-text p-button-plain" style="color: white;"/>
          </div>
        </div>
      </div>
    </div>
    <!-- Header -->
    <div class="surface-card shadow-2 p-3">
      <div class="container">
        <div class="flex justify-content-between align-items-center">
          <img src="/images/delta_logo.png"  style="width: 10%"/>
          <div>
            <Dropdown v-model="selectedShop" :options="shops" optionLabel="name" placeholder="Select Region to Explore" class="mr-2" />
          </div>
        </div>
      </div>
    </div>
    <Menubar :model="menuItems" class="border-none surface-card shadow-2" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedCurrency = ref({ name: 'USD $', code: 'USD' })
  const currencies = [
    { name: 'USD $', code: 'USD' },
    { name: 'ZWD $', code: 'ZWD' }
  ]
  
  const selectedShop = ref(null)
  const shops = [
    { name: 'Delta Beverages', code: 'delta' },
    { name: 'African Distillers', code: 'african' },
    { name: 'National Breweries', code: 'nat' }
  ]
  
  const menuItems = [
    { label: 'BEERS & CIDERS', icon: 'pi pi-fw pi-beer' },
    { label: 'SPIRITS', icon: 'pi pi-fw pi-glass' },
    { label: 'WINES', icon: 'pi pi-fw pi-wine' },
    { label: 'SHOOTERS', icon: 'pi pi-fw pi-bolt' },
    { label: 'MIXERS', icon: 'pi pi-fw pi-sliders-h' },
    { label: 'CIGARETTES', icon: 'pi pi-fw pi-box' },
    { label: 'DRINKS & JUICES', icon: 'pi pi-fw pi-apple' },
    { label: 'WATER', icon: 'pi pi-fw pi-water' },
    { label: 'SNACKS', icon: 'pi pi-fw pi-cookie' }
  ]
  
  const categories = [
    { title: 'BEERS & CIDERS', image: '/placeholder.svg?height=200&width=400', color: 'bg-primary' },
    { title: 'SPIRITS', image: '/placeholder.svg?height=200&width=400', color: 'bg-orange-500' },
    { title: 'WINES', image: '/placeholder.svg?height=200&width=400', color: 'bg-teal-500' },
    { title: 'SHOOTERS', image: '/placeholder.svg?height=200&width=400', color: 'bg-pink-500' },
    { title: 'MIXERS', image: '/placeholder.svg?height=200&width=400', color: 'bg-purple-500' },
    { title: 'DRINKS & JUICES', image: '/placeholder.svg?height=200&width=400', color: 'bg-cyan-500' }
  ]
  
  const products = [
    { name: 'NIKOLAI VODKA', price: 4.29, image: '/placeholder.svg?height=300&width=200' },
    { name: 'JOHNNIE WALKER BLACK', price: 37.71, image: '/placeholder.svg?height=300&width=200' },
    { name: 'REMY MARTIN VSOP', price: 65.14, image: '/placeholder.svg?height=300&width=200' },
    { name: 'SMIRNOFF 1818', price: 6.86, image: '/placeholder.svg?height=300&width=200' }
  ]
  </script>
  <style scoped>
  .hero-section {
    background-image: linear-gradient(rgba(9, 88, 169, 0.8), rgba(9, 88, 169, 0.8)), url('/placeholder.svg?height=800&width=1600');
    background-size: cover;
    background-position: center;
  }
  
  .category-card {
    transition: transform 0.3s ease;
  }
  
  .category-card:hover {
    transform: scale(1.05);
  }
  
  .product-card {
    transition: box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .p-tag {
      background: #003e95;
      color: #ffffff;
      text-transform: uppercase;
  }
  button.p-button.p-component.p-button-icon-only.ml-2.cart {
      background-color: #003e95;
      border-color: #003e95;
  }
  button.p-button.p-component.p-button-icon-only.p-button-secondary.p-button-outlined.whishlist {
      background-color: #d6200e;
      color: white;
  }
  .product_image {
      width: auto !important;
      height: 155px !important;
  }
  img.w-full.h-full.object-cover.border-round {
      height: 100px !important;
      width: auto !important;
  }
  img.w-full.h-full.object-cover {
      width: auto !important;
      height: 155px !important;
  }
  .okaddtocart {
    background-color: #0958A9;
    border: none;
  }
  .bonaddtocart {
      background-color: #a3c962;
      border: none;
  }
  .foodaddtocart {
      background-color: #01713f;
      border: none;
  }
  img.w-12rem.flex-shrink-0.mx-auto.md\:mx-0 {
      border-radius: 21px;
  }
  ul.p-carousel-indicators.p-reset {
      display: none;
  }
  .card.border-featured {
      border-radius: 10px !important;
  }
  img.shop_logo {
      width: auto;
      height: 43px;
  }
  button.p-button.p-component.ml-2.cart.tagee {
      background-image: linear-gradient(to right, #cb1400, #F44336) !important;
      border: none;
  }
  button.p-button.p-component.shopnow.feat {
      background-color: #dadada;
      border-radius: 30px;
      border: none;
      color: black;
  }
  .border-1.surface-border.border-round.p-3 {
      box-shadow: 0 5px 10px 0 rgba(41, 61, 102, .2) !important;
  }
  .okzimbabwe {
      background-color: red;
      padding: 10px;
      border-radius: 25px;
      color: white !important;
      font-weight: 900 !important;
      font-size: 25px !important;
  }
  button.p-button.p-component.ml-auto.cart {
      background-color: #f7941f;
      border: none;
      border-radius: 33px;
  }
  .bonmarche {
      background-color: red;
      padding: 10px;
      border-radius: 25px;
      color: white !important;
      font-weight: 900 !important;
      font-size: 25px !important;
  }
  button.p-button.p-component.ok.addtocart.w-full {
      border-radius: 20px;
      background-color: red ;
      border: none;
  }
  .foodlovers {
      background-color: red;
      padding: 10px;
      border-radius: 25px;
      color: white !important;
      font-weight: 900 !important;
      font-size: 25px !important;
  }
  .okmart {
      background-color: red;
      padding: 10px;
      border-radius: 25px;
      color: white !important;
      font-weight: 900 !important;
      font-size: 25px !important;
  }
  </style>
  