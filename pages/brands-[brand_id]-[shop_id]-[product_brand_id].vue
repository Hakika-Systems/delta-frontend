<template>
   <okMartShopHeader  />
  <div class="surface-section h-30rem bg-no-repeat bg-cover bg-center flex align-items-center" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/se2.jpg?w=1060');">
  </div>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-between flex-wrap">
      <div class="flex align-items-center mb-4 md:mb-0">
        <div class="text-900 font-bold text-3xl">{{ brand_name ? brand_name : "All Products"}}</div>
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
                <div @click="goToDetailPage(product)" class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                  <NuxtImg :src="getParsedImages(product.images)" class="product_image object-cover" format="webp" loading="lazy" />
                </div>
                <div @click="goToDetailPage(product)" class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                <div class="mb-4">
                </div>
                <div class="flex justify-content-between align-items-center">
                  <span class="font-bold text-900 ml-2">{{findCurrency()}}{{product?.prices[0]?.price ? findConversionRatePrice(product.prices[0]?.price) : formatCurrency(0)}}</span>
                </div>
                <Button v-if="product?.details[0]?.quantity >= 1" :loading="current_id === product.id" @click="addToCart(product.id,product.prices[0]?.price)" icon="pi pi-cart-arrow-down" label="Add" class="mt-3 w-full cart"/>
                <Button v-else  icon="pi pi-cart-arrow-down" label="Out of Stock" class="mt-3 w-full cart" disabled/>
              </div>
            </div>
          </div>
          <div  class="col-8 md:col-6 lg:col-12">
            <NuxtImg src="/images/middle_banner.jpg" alt="Side Banner" class="w-full" format="webp" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFrontStore } from '~/stores/front';
import { createId } from '@paralleldrive/cuid2';
const toast = useToast()
const frontStore = useFrontStore()
useHead({
  title: "OK ShopEasy Zimbabwe - Brand Page",
  meta: [
    { name: "description", content: "OKshop makes shopping in Zimbabwe easy and convenient!" },
  ],
});
const mytoken = useCookie('token');
const name = useCookie('username');
const user_id = useCookie('user_id');
const loading = ref(false)
const cart_id = storeToRefs(frontStore).cart_id
const brand_idd:any = storeToRefs(frontStore).brand_id
const shop_idd:any = storeToRefs(frontStore).shop_id
const {params:{category_id,brand_id,shop_id,product_brand_id}} = useRoute()
const cart:any = storeToRefs(frontStore).cart
const guest_id:any = storeToRefs(frontStore).guest_id
const currencies:any = storeToRefs(frontStore).currencies
const selected_currency:any = storeToRefs(frontStore).selected_currency
const featured_products:any = ref()
const current_id:any = ref()
const cart_total = storeToRefs(frontStore).cart_total
const brand_name = ref()
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
const findCurrency = () => {
	const currenciess = currencies.value;
//@ts-ignore
    const currency = currenciess.find(item => item.currency_id === selected_currency.value);

return currency ? currency.currency.iso_code : null;

}
const findConversionRatePrice = (price:any) => {
    const currenciess = currencies.value;

    // Step 1: Find the default currency
	//@ts-ignore
    const defaultCurrency = currenciess.find(item => item.default === 1);
    if (!defaultCurrency) {
        return null; // Return null or handle error if no default currency is found
    }

    // Step 2: Find the selected currency
	//@ts-ignore
    const selectedCurrency = currenciess.find(item => item.currency_id === selected_currency.value);
    if (!selectedCurrency) {
        return null; // Return null or handle error if no selected currency is found
    }

    // Step 3: Determine the conversion rate
    const selectedRate = parseFloat(selectedCurrency.conversion_rate);

    // Multiply the price by the selected currency’s conversion rate
    const convertedPrice = price * selectedRate;

    // Return the converted price
    return convertedPrice.toFixed(2);
};
const goToDetailPage = (productt:any) => {
    // product.value = productt
    sessionStorage.setItem('product_detail',JSON.stringify(productt))
    navigateTo(`/detail-${productt.id}-${brand_id}-${shop_id}-${productt.category.id}`,{external:true})
  }
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
    
    // Check if parsedImages is not null or undefined before calling replace
    if (parsedImages) {
      const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''));
      return cleanedString[0];
    }
  } catch (error) {
    console.error('Error parsing images JSON:', error);
  }

  return '/images/placeholder.png'; // Return null if parsing fails or if parsedImages is null
};
const getBrandConfiguration = () => {
    if (typeof window !== 'undefined') {
        // Retrieve brand configuration from sessionStorage
        const storedConfig = sessionStorage.getItem('active_brand');
        
        if (!storedConfig) {
            // If no brand configuration is found, use navigateTo to redirect to the home page
            navigateTo('/',{external:true}); // Adjust the URL as needed
            return null;
        }
        
        return JSON.parse(storedConfig); // Return the parsed brand configuration
    }
    return null;
};


//@ts-ignore
const active_brand = ref(getBrandConfiguration())

const buttonColor = active_brand?.value?.button_color;
onMounted( async() => {
  brand_idd.value = brand_id
  shop_idd.value = shop_id
  let gi:any
    let current_cart_id:any
    if (typeof window !== 'undefined') {
        let current_cart_id:any
        gi  = sessionStorage.getItem('guest_id');
        current_cart_id = sessionStorage.getItem('cart_id');
    }
  guest_id.value = JSON.parse(gi)
  const related_params = {
    page: 1,
    per_page: 100,
    shop_brand_id: brand_id,
    shop_id: shop_id,
    brand_id: product_brand_id
}
await frontStore.getRelatedProductsByBrand(related_params).then((data) => {
    products.value = data?.data?.products
    brand_name.value = data?.data?.products[0]?.brand?.name
})
if (guest_id.value === null) {
      guest_id.value = createId()
      sessionStorage.setItem('guest_id', JSON.stringify(guest_id.value))
  }
 let cart_params = {
  shop_id: shop_id,
  user_id: user_id.value,
  guest_id: guest_id.value
 }
 if (current_cart_id) {
   let saved_cart  = await frontStore.getCartTwo(current_cart_id).then((data) => {
	  cart.value = data.data?.items
    cart_total.value = data?.data?.cart_total
    cart_id.value = current_cart_id
   })
 } else {
    let created_cart = await frontStore.createCart(cart_params).then((data) => {
	  cart.value = data?.data?.items
	  cart_total.value = data?.data?.cart_total
    cart_id.value = data?.data?.id
   }) 
 }  

})

const addToCart = async (product_id: any,price:any) => {
  current_id.value = product_id
  loading.value = true
// Find the product in products
const productIndex = products.value.findIndex((prod:any) => prod.id === product_id);

if (productIndex === -1) {
  console.error('Product not found');
  loading.value = false
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
  loading.value = false
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
  loading.value = false
}

// Check if the product is already in the cart
  // Add the product to the cart with quantity 1
  let qnty = 1
  let cart_item = {
  cart_id: cart_id.value,
  product_id: product_id,
  quantity: qnty,
  unit_price: Number(price),
  total_price: (qnty * price) 
  }
  let add_cart_item = await frontStore.addCartItem(cart_item).then( async (data) => {
    if (data?.status === "success") {
      loading.value = false
      current_id.value = null
      let new_cart = await frontStore.getCart().then((data) => {
        if (!user_id.value) {
					sessionStorage.setItem('cart_id', JSON.stringify(data?.data?.id))
					sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id))
					sessionStorage.setItem('current_cart_brand',JSON.stringify(brand_id))
				} else {
					sessionStorage.removeItem('cart_id');
					sessionStorage.removeItem('current_cart_shop_id');
					sessionStorage.removeItem('current_cart_brand');
				} 
        
        cart.value = data.data.items
        cart_total.value = data?.data?.cart_total
      })
      toast.add({
        severity: 'info',
        summary: 'Cart',
        detail: 'Product Added',
        group: 'br',
        life: 3000,
      });
    } else {
      toast.add({
        severity: 'warn',
        summary: 'Cart',
        detail: 'Could not add product',
        group: 'br',
        life: 3000,
      });
      loading.value = false
    }
  })
  
  
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
 .p-inputgroup.w-full {
   height: 40px;
   margin-top: 3px;
 }
 @keyframes ripple-effect {
 to {
   transform: scale(4);
   opacity: 0;
 }
 }
 .product_image {
   width: auto !important;
   height: 155px !important;
 }
 .p-tag {
   background: #003e95;
   color: #ffffff;
   text-transform: uppercase;
 }
 .p-inputgroup-addon.firstinput {
   width: 188px !important;
   padding: 1px !important;
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
   <style scoped>
   .p-inputtext {
       border: none !important;
   }
   .p-inputtext:focus {
       outline: none;
   }
   .p-button {
   color: #ffffff;
   background: v-bind('buttonColor') !important;
   border: 1px solid v-bind('buttonColor') !important;
   padding: 0.5rem 1rem;
   font-size: 1rem;
   transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
   border-radius: 6px;
   outline-color: transparent;
}
   </style>