<template>
    <!-- Top Bar -->
    <DeltaHeader/>
    <!-- Hero Section -->
    <Hero/>
    <!-- Featured Products -->
    <div  class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center mb-3" style="color: #0958A9;">Featured Products</h2>
        <div class="col-12 grid grid-nogutter align-items-center">
        <div class="col-12">
          <div class="grid">
            <div v-for="product in products" :key="index" class="col-12 md:col-6 lg:col-3">
              <div class="p-2">
                <div class="border-1 surface-border border-round m-2 p-3" style="min-height: 350px; display: flex; flex-direction: column; justify-content: space-between;">
                  <div  class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                    <img class="product_image object-cover" :placeholder="[50, 50, 50, 50]"   :src="product.image" :alt="product?.name" loading="lazy" />
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ product.name}}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">${{ product.price.toFixed(2) }}</span>
                  </div>
                  <Button icon="pi pi-cart-arrow-down" label="GO TO SHOP" class="cart mt-3 okaddtocart w-full"/>
                </div>
              </div>
            </div>
            <!-- <div  class="col-8 md:col-6 lg:col-12">
              <img src="/images/middle_banner.jpg" alt="Side Banner" class="w-full"  >
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <DeltaFooter/>
</template>

<script setup>
import { ref } from 'vue'




const selectedShop = ref(null)


const products = [
  { name: 'NIKOLAI VODKA', price: 4.29, image: '/images/sminoff.png?height=10&width=200' },
  { name: 'JOHNNIE WALKER BLACK', price: 37.71, image: '/images/sminoff.png?height=10&width=200' },
  { name: 'REMY MARTIN VSOP', price: 65.14, image: '/images/sminoff.png?height=10&width=200' },
  { name: 'SMIRNOFF 1818', price: 6.86, image: '/images/sminoff.png?height=10&width=200' }
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

