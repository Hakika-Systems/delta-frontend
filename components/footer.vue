<template>
 <div style="background-color: #f7921e;"class=" py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
  <ul class="list-none p-0 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
    <li class="mr-6 mt-3 lg:mt-0">
      <h3 class=" text-0">EMAIL SUPPORT</h3>
      <a tabindex="0" class="cursor-pointer text-0">online@okshopeasy.com </a>
    </li>
    <li class="mr-4 mt-3 lg:mt-0">
      <h3 class=" text-0">PHONE SUPPORT</h3>
      <a tabindex="0" class="cursor-pointer text-0">078 279 3499</a>
      
    </li>
    <li class="mr-4 mt-3 lg:mt-0">
      <h3 class=" text-0">WHATSAPP</h3>
      <a tabindex="0" class="cursor-pointer text-0">078 279 3499</a>
      
    </li>
    <li class="mr-4 mt-3 lg:mt-0">
      <h3 class=" text-0">GET LATEST DEALS</h3>
      <a tabindex="0" class="cursor-pointer text-0">Our best promotions sent to your inbox</a>
    </li>
  </ul>
  <div class="flex align-items-center flex-order-0 lg:flex-order-1">
    
    <div class="p-inputgroup">
  <input class="p-inputtext p-component" data-pc-name="inputtext" data-pc-section="root" type="text" placeholder="Enter your email address">
  <button class="p-button p-component surface-900 text-0 px-5 border-none" type="button" aria-label="Subscribe" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
    <!---->
    <span class="p-button-label" data-pc-section="label">Subscribe</span>
    <!---->
    <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
  </button>
</div>
  </div>
</div>
  <div style="background-color: #0C0C0C;">
  <div class=" px-4 md:px-6 lg:px-8  surface-border border-x-none" ">
  <div class="grid grid-nogutter flex-wrap -mr-3 -ml-3 text-center md:text-left">
    <div class="col-12 sm:col-6 md:col-4 lg:col-4 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none  surface-border">
      <span style="color: white;" class=" text-2xl block">Company</span>
      <ul class="list-none p-0">
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">About Us</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Careers</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Terms And Conditions</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Privacy Policy</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Returns And Refund Policy</a>
        </li>
      </ul>
    </div>
    <div class="col-12 sm:col-6 md:col-4 lg:col-4 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none  surface-border">
      <span style="color: white;" class=" text-2xl block">Help</span>
      <ul class="list-none p-0">
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Contact Us</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Suggest A Product</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Returns</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Sell on ShopEasy</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Our Branches</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Advertise on ShopEasy</a>
        </li>
      </ul>
    </div>
    <div class="col-12 sm:col-6 md:col-4 lg:col-4 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none  surface-border">
      <span style="color: white;" class=" text-2xl block">Account</span>
      <ul class="list-none p-0">
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Manage Account</a>
        </li>
        <li  @click="navigateTo('/myorder')">
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Track Order</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Subscriptions</a>
        </li>
        <li>
          <a tabindex="0" style="color: white;" class="  transition-duration-150 cursor-pointer mt-3 block">Invoices</a>
        </li>
      
      </ul>
    </div>
    
   
  </div>
</div>
<div class=" px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
  <div v-for="brand in brands" class="col-fixed flex justify-content-center md:justify-content-start flex-wrap flex-order-1 lg:flex-order-0">
    <img :src="brand.logo" class="w-6rem mb-3 md:mb-0 mr-3" alt="Amex">
   
  </div>
  <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
    <a tabindex="0" class="cursor-pointer mr-3">
      <i class="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
    </a>
    <a tabindex="0" class="cursor-pointer mr-3">
      <i class="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
    </a>
    <a tabindex="0" class="cursor-pointer mr-3">
      <i class="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"></i>
    </a>
    <a tabindex="0" class="cursor-pointer">
      <i class="pi pi-google surface-900 p-1 text-sm border-circle text-0"></i>
    </a>
  </div>
</div>
<div class=" py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-center align-items-center">
  <ul class="list-none p-0 mb-0 flex flex-column md:flex-row justify-content-center text-center mt-4 lg:mt-0">
    <li class="mr-4 mt-3 lg:mt-0">
      <a tabindex="0" class="cursor-pointer text-0">Copyright © 2024 Shopeasy Zimbabwe | Powered by Elixr Technologies</a>
    </li>
  </ul>
</div>
</div>
</template>
<script setup lang="ts">
const frontStore = useFrontStore();
const brands:any = storeToRefs(frontStore).brands;
console.log('jj',brands.value)
onMounted(async() => {
 
  let result_one = await frontStore.getBrands().then(async (data) => {
    console.log("Brandsxx:",data?.data?.shopbrands[0].logo);
    brands.value = data?.data?.shopbrands;
    
   
  });

})
const getParsedImages = (images: string) => {
  try {
    const parsedImages = JSON.parse(images);
    const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''));
    console.log('mbililimbi',cleanedString)
    return cleanedString[0]
  } catch (error) {
    console.error('Error parsing images JSON:', error);
  }
  return null; // Return null if parsing fails or no images are found
};
</script>
<style>
.text-900 {
  color: white;
}
h3.text-0 {
    font-size: 20px;
}
.search-container {
        max-width: 600px; /* Adjust max-width as needed */
      }
    
      .search-input {
    border-radius: 25px 0 0 25px;
    border: 1px solid #cccccc !important;
    height: 50px;
    outline: none;
}
    .p-inputgroup-addon {
    width: 65px;
    }
</style>
