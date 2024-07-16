<template>
    <okMartShopHeader />
    <div class="surface-section h-30rem bg-no-repeat bg-cover bg-center flex align-items-center" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(&quot;/images/okgrand.png?w=1060&quot;);">
  <!-- <div class="px-4 mx-4 lg:px-6 lg:mx-6">
    <span class="block text-3xl text-white mb-4">New Trend</span>
    <span class="block text-5xl font-medium text-white mb-4">Special Collection</span>
    <a tabindex="0" class="py-2 w-13rem text-center block mb-4 text-xl text-white font-medium border-2 cursor-pointer surface-border-0 border-round bg-white-alpha-30 p-ripple" data-pd-ripple="true">Explore Collection <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
    </a>
  </div> -->
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

  <div class="grid grid-nogutter align-items-center">
    <div class="col-12 md:col-12 lg:col-12"">
        <div class="p-multiselect p-component p-inputwrapper p-inputwrapper-filled flex-auto lg:flex-1 mb-3 lg:mt-0 mr-0 lg:mr-4 text-900 w-16rem" data-pc-name="multiselect" data-pc-section="root">
      <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
        <input type="text" placeholder="Brand" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_4_list" data-pc-section="hiddeninput">
      </div>
      <div class="p-multiselect-label-container" data-pc-section="labelcontainer">
        <div class="p-multiselect-label" data-pc-section="label">Alfred, Hyper</div>
      </div>
      <div class="p-multiselect-trigger" data-pc-section="trigger">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-multiselect-trigger-icon" aria-hidden="true" data-pc-section="dropdownicon">
          <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <div class="p-multiselect p-component p-inputwrapper p-inputwrapper-filled flex-auto lg:flex-1 mb-3 lg:mt-0 mr-0 lg:mr-4 text-900 w-16rem" data-pc-name="multiselect" data-pc-section="root">
      <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
        <input type="text"  placeholder="Color" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_5_list" data-pc-section="hiddeninput">
      </div>
      <div class="p-multiselect-label-container" data-pc-section="labelcontainer">
        <div class="p-multiselect-label" data-pc-section="label">Black</div>
      </div>
      <div class="p-multiselect-trigger" data-pc-section="trigger">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-multiselect-trigger-icon" aria-hidden="true" data-pc-section="dropdownicon">
          <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <div class="p-multiselect p-component p-inputwrapper flex-auto lg:flex-1 mb-3 lg:mt-0 mr-0 lg:mr-4 text-900 w-16rem" data-pc-name="multiselect" data-pc-section="root">
      <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
        <input type="text"  placeholder="Price" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_6_list" data-pc-section="hiddeninput">
      </div>
      <div class="p-multiselect-label-container" data-pc-section="labelcontainer">
        <div class="p-multiselect-label p-placeholder" data-pc-section="label">Price</div>
      </div>
      <div class="p-multiselect-trigger" data-pc-section="trigger">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-multiselect-trigger-icon" aria-hidden="true" data-pc-section="dropdownicon">
          <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <div class="p-button ok p-togglebutton p-component p-highlight mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem" data-pc-name="togglebutton" data-pc-section="root" data-p-active="true" data-pd-ripple="true">
      <span class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
        <input type="checkbox" role="switch" class="" data-pc-section="hiddeninput" value="true">
      </span>
      <span class="p-button-icon p-button-icon-left pi pi-check" data-pc-section="icon"></span>
      <span class="p-button-label" data-pc-section="label">Sustainable</span>
      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
    </div>
    <div class="p-button ok p-togglebutton p-component mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem" data-pc-name="togglebutton" data-pc-section="root" data-p-active="false" data-pd-ripple="true">
      <span class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
        <input type="checkbox" role="switch" class="" data-pc-section="hiddeninput" value="false">
      </span>
      <span class="p-button-icon p-button-icon-left pi pi-times" data-pc-section="icon"></span>
      <span class="p-button-label" data-pc-section="label">Not Sale</span>
      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
    </div>
    <a tabindex="0" class="cursor-pointer flex=auto align-items-center mb-3 lg:mt-0 text-900 p-ripple" data-pd-ripple="true">Clear All <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
    </a>
    </div>
    
  <div v-for="product  in dummyProducts" class="col-12 md:col-6 lg:col-3">
    <div class="p-2">
      <div class="border-1 surface-border border-round m-2 p-3 ">
        <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
            <img :src="product.image" class="w-full h-full object-cover">
        </div>
        <div class="mb-3 font-medium nametext">{{ addEllipsis(product.name) }}</div>
        <div class="mb-4">
        </div>
        <div class="flex justify-content-between align-items-center">
            <span class="font-bold text-900 ml-2">{{currency}}{{product.price ? formatCurrency(product.price) :  formatCurrency(0)}}</span>
            <Button @click="addToCart(product.id)"  icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
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
img.w-full.h-full.object-cover {
    width: auto !important;
    height: 155px !important;
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