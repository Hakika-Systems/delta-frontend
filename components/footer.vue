<template>
 <div style="background-color: #f7921e;"class=" py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
  <ul class="list-none p-0 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
    <li class="mr-6 mt-3 lg:mt-0">
      <h3 class=" text-0">EMAIL SUPPORT</h3>
      <a tabindex="0" class="cursor-pointer text-0">info@okshopeasy.com </a>
    </li>
    <li class="mr-4 mt-3 lg:mt-0">
      <h3 class=" text-0">PHONE SUPPORT</h3>
      <a tabindex="0" class="cursor-pointer text-0">071 142 1883</a>
      
    </li>
    <li class="mr-4 mt-3 lg:mt-0">
      <h3 class=" text-0">WHATSAPP</h3>
      <a tabindex="0" class="cursor-pointer text-0">071 142 1883</a>
      
    </li>
    <li class="mr-4 mt-3 lg:mt-0">
      <h3 class=" text-0">GET LATEST DEALS</h3>
      <a tabindex="0" class="cursor-pointer text-0">Our best promotions sent to your inbox</a>
    </li>
  </ul>
  <div class="flex align-items-center flex-order-0 lg:flex-order-1">
    
    <div class="p-inputgroup">
  <input class="p-inputtext p-component " data-pc-name="inputtext" data-pc-section="root" type="text" placeholder="Enter your email address">
  
  <button class="p-button p-component hover  transition-duration-150 surface-900 text-0 px-5 border-none" type="button" aria-label="Subscribe" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
    <!---->
    <span class="p-button-label hover transition-duration-150" data-pc-section="label">Subscribe</span>
    <!---->
    <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
  </button>
  <button class="p-button p-component surface-900 text-0 px-5 border-none" type="button" aria-label="Subscribe" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
    <!---->
    <span class="p-button-label" data-pc-section="label">Unsubscribe</span>
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
      <span style="color: white;" class=" text-2xl block"></span>
      <ul class="list-none p-0">
        <li >
          <a tabindex="0"  href="https://okziminvestor.com/about/"  target="_blank" class=" hover transition-duration-150 cursor-pointer mt-3 block">About Us</a>
        </li>
        
        <!-- <li  @click="navigateTo('/terms_and_conditions',{external: true})">
       
          <a tabindex="0" class="hover  transition-duration-150 cursor-pointer mt-3 block">Terms And Conditions</a>
        </li>
        <li @click="goToPrivacy()">
          <a tabindex="0"  class=" hover transition-duration-150 cursor-pointer mt-3 block">Privacy Policy</a>
        </li> -->
       
      </ul>
    </div>
    <div class="col-12 sm:col-6 md:col-4 lg:col-4 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none  surface-border">
      <span  class=" hover transition-duration-150 cursor-pointer  text-2xl block"></span>
      <ul class="list-none p-0">
        <li  @click='goToTerms()'>
       
       <a tabindex="0" class="hover  transition-duration-150 cursor-pointer mt-3 block">Terms And Conditions</a>
     </li>
        <!-- <li>
          <a tabindex="0"  class=" hover transition-duration-150 cursor-pointer mt-3 block">Suggest A Product</a>
        </li>
       
        <li>
          <a tabindex="0"  class=" hover transition-duration-150 cursor-pointer mt-3 block">Our Branches</a>
        </li>
        <li>
          <a tabindex="0"  class=" hover  transition-duration-150 cursor-pointer mt-3 block">Advertise on ShopEasy</a>
        </li> -->
      </ul>
    </div>
    <div class="col-12 sm:col-6 md:col-4 lg:col-4 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none  surface-border">
      <span style="color: white;" class=" text-2xl block"></span>
      <ul class="list-none p-0">
        <li @click="goToPrivacy()">
          <a tabindex="0"  class=" hover transition-duration-150 cursor-pointer mt-3 block">Privacy Policy</a>
        </li>
        <!-- <li  @click="navigateTo('/myaccount',{external: true})">
          <a tabindex="0"  class=" hover transition-duration-150 cursor-pointer mt-3 block">Track Order</a>
        </li>
        <li>
          <a tabindex="0"  class="hover  transition-duration-150 cursor-pointer mt-3 block">Subscriptions</a>
        </li>
        <li>
          <a tabindex="0"  class="hover  transition-duration-150 cursor-pointer mt-3 block">Invoices</a>
        </li> -->
      
      </ul>
    </div>
    
   
  </div>
</div>
<div class=" px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
  <div v-for="brand in brands" class="col-fixed flex justify-content-center md:justify-content-start flex-wrap flex-order-1 lg:flex-order-0">
    <NuxtImg format="webp"  :placeholder="[50, 50, 50, 50]"   :src="brand.logo" class="w-6rem mb-3 md:mb-0 mr-3" :alt="brand?.name" loading="lazy" />
   
  </div>
  <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
    <a href="https://www.facebook.com/profile.php?id=61570057859024" target="_blank" tabindex="0" class="cursor-pointer mr-3">
      <i class="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
    </a>
    <a href="https://x.com/OkShopEasy"  target="_blank" tabindex="0" class="cursor-pointer mr-3">
      <i class="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
    </a>
    <a href="https://www.youtube.com/@OkShopEasy"  target="_blank" tabindex="0" class="cursor-pointer mr-3">
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
const my_route = useRoute()
onMounted(async() => {
 
  let result_one = await frontStore.getBrands().then(async (data) => {
    brands.value = data?.data?.shopbrands;
    
   
  });

})
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

const goToPrivacy = ()=>{
    sessionStorage.setItem('previous_link',my_route.path)
    navigateTo('https://www.youtube.com/@OkShopEasy',{external:true})

}
const goToTerms = ()=>{
    sessionStorage.setItem('previous_link',my_route.path)
    navigateTo('/terms_and_conditions',{external:true})

}
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
    

    .p-inputgroup-addon {
    width: 65px;
    }
    .hover{
      color: white
    }
</style>
