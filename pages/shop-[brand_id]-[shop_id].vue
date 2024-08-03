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
      <Carousel :value="products" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
    <template #item="{ data }">
      <div class="border-1 surface-border border-round m-2 p-3">
        <div @click="navigateTo(`/detail-${data.id}`)" class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto cursor-pointer">
          <img :src="data.images[0]" class="w-full h-full object-cover">
        </div>
        <div @click="navigateTo(`/detail-${data.id}`)" class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(data.name) }}</div>
        <div class="mb-4">
          <!-- Additional details if needed -->
        </div>
        <div class="flex justify-content-between align-items-center">
          <span class="font-bold text-900 ml-2">{{ currency }}{{ data.prices.length > 0 ? formatCurrency(data.prices[0].amount) : '0' }}</span>
          <Button @click="addToCart(data.id)" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
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
            <div v-for="product in products" :key="product.id" class="col-12 md:col-6 lg:col-3">
              <div class="p-2">
                <div class="border-1 surface-border border-round m-2 p-3">
                  <div @click="navigateTo(`/detail-${product.id}`)" class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                    <img :src="getParsedImages(product.images)" class="w-full h-full object-cover">
                  </div>
                  <div @click="navigateTo(`/detail-${product.id}`)" class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{currency}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                    <Button @click="addToCart(product.id)" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                  </div>
                </div>
              </div>
            </div>
            <div  class="col-8 md:col-6 lg:col-12">
              <img src="/images/middle_banner.jpg" alt="Side Banner" class="w-full"  >
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
  const brand_idd:any = storeToRefs(frontStore).brand_id
  const shop_idd:any = storeToRefs(frontStore).shop_id
  const {params:{brand_id,shop_id}} = useRoute()
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
  const products:any = storeToRefs(frontStore).products
  const currency = ref("USD")
  const addEllipsis = (str:string) => {
    return str.length > 23 ? str.slice(0, 23) + '...' : str;
  };
  const formatCurrency = (value:any) => {
    if(value === undefined) {
      return 0
    }
    return value.toLocaleString('en-US', { style: 'currency', currency: currency.value });
  };
const getParsedImages = (images: string) => {
  try {
    const parsedImages = JSON.parse(images);
    const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''));
    return cleanedString[0]
  } catch (error) {
    console.error('Error parsing images JSON:', error);
  }
  return null; // Return null if parsing fails or no images are found
};
  onMounted( async() => {
    brand_idd.value = brand_id
    shop_idd.value = shop_id
    let params = {
        page: 1,
        per_page: 10,
        shop_brand_id: brand_id,
        shop_id: shop_id
    }
    let productsd =  await frontStore.getProducts(params).then((data) => {
      products.value = data?.data?.products
    })
  })
  
  const addToCart = (product_id: any) => {
  // Find the product in products
  const productIndex = products.value.findIndex((prod:any) => prod.id === product_id);

  if (productIndex === -1) {
    console.error('Product not found');
    return;
  }

  const product = products.value[productIndex];
  const productPrice = product.prices.length > 0 ? product.prices[0].price : null;

  if (!productPrice) {
    toast.add({
      severity: 'warn',
      summary: 'Not added',
      detail: 'Product price not found',
      group: 'br',
      life: 3000,
    });
    console.error('Product price not found');
    return;
  }
  if (products.value[productIndex].details[0].quantity < 1) {
    toast.add({
      severity: 'warn',
      summary: 'Not added',
      detail: 'Product out of stock',
      group: 'br',
      life: 3000,
    });
  }

  // Check if the product is already in the cart
  const productInCart = cart.value.find((cartItem: any) => cartItem.id === product_id);

  if (productInCart) {
    // Increase the quantity if the product is already in the cart
    productInCart.quantity += 1;
    toast.add({
      severity: 'info',
      summary: 'Cart',
      detail: 'Product quantity increased',
      group: 'br',
      life: 3000,
    });
  } else {
    // Add the product to the cart with quantity 1
    cart.value.push({
      id: product.id,
      name: product.name,
      description: product.description,
      product_code: product.product_code,
      images: product.images,
      thumbnails: product.thumbnails,
      price: productPrice,
      quantity: 1,
    });
    toast.add({
      severity: 'info',
      summary: 'Cart',
      detail: 'Product Added',
      group: 'br',
      life: 3000,
    });
  }

  // Update the product quantity in products.value
 
  products.value[productIndex].details[0].quantity -= 1;
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