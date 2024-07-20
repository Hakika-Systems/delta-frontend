<template>
  <okMartShopHeader />
  <div class="surface-section h-30rem bg-no-repeat bg-cover bg-center flex align-items-center" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/okgrand.png?w=1060');">
  </div>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-between flex-wrap">
      <div class="flex align-items-center mb-4 md:mb-0">
        <div class="text-900 font-bold text-3xl">Featured Products</div>
      </div>
    </div>
    <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" styleclass="w-full border-gray-200" style="justify-content: center;">
      <!---->
    </div>
    <Carousel :value="dummyProducts" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 p-3">
          <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
            <img :src="slotProps.data.image" class="w-full h-full object-cover">
          </div>
          <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
          <div class="mb-4">
          </div>
          <div class="flex justify-content-between align-items-center">
            <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
            <Button @click="addToCart(slotProps.data.id)" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-between flex-wrap">
      <div class="flex align-items-center mb-4 md:mb-0">
        <div class="text-900 font-bold text-3xl">All Products</div>
      </div>
      <div>
        <button class="p-button p-component p-button-outlined p-button-secondary w-7rem p-2" type="button" aria-label="Sort By" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-right pi pi-sort-alt" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Sort By</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
    <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" styleclass="w-full border-gray-200" style="justify-content: center;">
      <!---->
    </div>
    <div class="flex ">
      <!-- <div class="col-4">
        <div class="side-banner ">
          <img src="/images/banner3.png" alt="Side Banner"  class="banner object-repeat">
        </div>
      </div> -->
      <div class="col-12 grid grid-nogutter align-items-center">
      <div class="col-12">
        <div class="grid">
          <div v-for="product in dummyProducts.slice(0,8)" :key="product.id" class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
              <div class="border-1 surface-border border-round m-2 p-3">
                <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                  <img :src="product.image" class="w-full h-full object-cover">
                </div>
                <div class="mb-3 font-medium nametext">{{ addEllipsis(product.name) }}</div>
                <div class="mb-4">
                </div>
                <div class="flex justify-content-between align-items-center">
                  <span class="font-bold text-900 ml-2">{{currency}}{{product.price ? formatCurrency(product.price) : formatCurrency(0)}}</span>
                  <Button @click="addToCart(product.id)" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                </div>
              </div>
            </div>
          </div>
          <div  class="col-8 md:col-6 lg:col-12">
            <img src="/images/middle_banner.jpg" alt="Side Banner" class="w-full"  >
          </div>
          <div v-for="product in dummyProducts.slice(3,11)" :key="product.id" class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
              <div class="border-1 surface-border border-round m-2 p-3">
                <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                  <img :src="product.image" class="w-full h-full object-cover">
                </div>
                <div class="mb-3 font-medium nametext">{{ addEllipsis(product.name) }}</div>
                <div class="mb-4">
                </div>
                <div class="flex justify-content-between align-items-center">
                  <span class="font-bold text-900 ml-2">{{currency}}{{product.price ? formatCurrency(product.price) : formatCurrency(0)}}</span>
                  <Button @click="addToCart(product.id)" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFrontStore } from '~/stores/front';
const toast = useToast()
const frontStore = useFrontStore()
const cart:any = storeToRefs(frontStore).cart
const responsiveOptions = ref([
  {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
  },
  {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
  },
  {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
  },
  {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
  }
]);
const dummyProducts = storeToRefs(frontStore).dummyProducts
const currency = ref("USD")
const addEllipsis = (str:string) => {
  return str.length > 23 ? str.slice(0, 23) + '...' : str;
};
const formatCurrency = (value:any) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: currency.value });
};

const addToCart = (product_id :any) => {
// Find the product in dummyProducts
const product = dummyProducts.value.find(prod => prod.id === product_id);

if (!product) {
  console.error('Product not found');
  return;
}

// Check if the product is already in the cart
const productInCart = cart.value.find((cartItem: any) => cartItem.id === product_id);

if (productInCart) {
  // Increase the quantity if the product is already in the cart
  productInCart.quantity += 1;
  toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Added', life: 3000 });
} else {
  // Add the product to the cart with quantity 1
  cart.value.push({ ...product, quantity: 1 });
  toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Added', life: 3000 });
}
};

</script>
<style>
.ripple {
position: absolute;
border-radius: 50%;
transform: scale(0);
animation: ripple-effect 0.6s linear;
background-color: rgba(255, 255, 255, 0.7);
pointer-events: none;
}

@keyframes ripple-effect {
to {
  transform: scale(4);
  opacity: 0;
}
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
img.w-full.h-full.object-cover.border-round {
  height: 100px !important;
  width: auto !important;
}
.banner{
  width: 100% !important;
  height: 100% !important
  ;
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
.side-banner {
    
    
    margin-top: 12px;
}
</style>