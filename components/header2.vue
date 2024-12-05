<template>
    <header class="th-header header-layout3">
      <div class="menu-top">
        <div class="">
          <div class="row align-items-start p-2 justify-content-between">
            <div class="col-2">
              <div class="header-logoo">
                <a href="#"
                  ><img
                    src="/images/shopeasy_logo.png"
                    alt="OK shop easy"
                    style="height: auto;width:200px;"
                /></a>
              </div>
            </div>
            <div class="col-12 align-items-end">
              <div v-if="loading" class="grid grid-nogutter align-items-center">
                    <div
                        class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                        <Skeleton class="h-3rem" />
                    </div>
                    <div
                        class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                        <Skeleton class="h-3rem" />
                    </div>
                </div>
                <div v-if="!loading" class="relative align-items-end">
                    <div class="brands-container">
                        <div v-for="brand in brands" :key="brand.id" 
                            class="brand-item h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                            >
                        <img :src="brand.logo" :alt="brand.name" class="h-3rem">
                        </div>
                    </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
      <div class="sticky-wrapper">
        <!-- Main Menu Area -->
        <div class="menu-area">
          <div class="">
          </div>
        </div>
      </div>
    </header>
   
  </template>
  
  <script setup lang="ts">
  const frontStore = useFrontStore();
  const toast = useToast()
  const brands:any = storeToRefs(frontStore).brands;
  import $ from 'jquery';
  import Toast from 'primevue/toast';
  const select_shop = ref(false);
  const loading = ref(true);
  const shopBranch = ref();
  const currencies:any = storeToRefs(frontStore).currencies;
  const selected_currency = storeToRefs(frontStore).selected_currency;
  const branches = ref();
  const shopID = ref();
  const products = ref();
  const search_text = ref();
  const featured = ref();
  const shopLogo = ref();
  const isKeyDown = ref(false);
  const search_products = ref();
  const featuredProductsByBrand:any = storeToRefs(frontStore).brand_featured_products;
  const shopName = ref();
  const op = ref();
  const searchResultsTable = ref(null);  // Ref for the search results table
  
 
  //@ts-ignore
  
  
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
  
  
  
  
  // Example showBrand function to handle the button click

  
  
  
  
 
  
  onMounted(async() => {
    let result_one = await frontStore.getBrands().then(async (data) => {
      brands.value = data?.data?.shopbrands;
      loading.value = false;
     
    });
    let currency_params = {
      page: 1,
      per_page: 100
    }
    let currenciess = await frontStore.getAllCurrencies(currency_params).then((data) => {
      currencies.value = data.data.currencies
      selected_currency.value = data?.data?.currencies[0]?.id ? data?.data?.currencies[0]?.id : null
    });
    
  })
  
 
  
  
  </script>
  
  
  
  
  <style scoped>
  .relative {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .helper-text {
    font-size: 14px;
    color: #f97316;
    font-weight: bold;
    animation: fadeInOut 3s infinite;
    margin-bottom: 10px; /* Space between the helper text and the brands */
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .helper-text::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid #f97316; /* Arrow color */
  }
  
  .brands-container {
    display: flex; /* Ensure items are displayed horizontally */
    flex-wrap: nowrap; /* Prevent wrapping of items */
    overflow-x: auto; /* Allows horizontal scroll if brands overflow */
  }
  
  .brand-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.5rem;
    margin-right: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
  }
  
  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
  
  .header-layout3 .header-top {
      --body-color: #54595f;
      background-color: #e48b4b !important;
      border-bottom: 1px solid var(--th-border-color);
  }
  .header-links li, .header-links span, .header-links p, .header-links a {
      color: #ffffff !important;
  }
  .header-layout3 .menu-area {
      position: relative;
      z-index: 2;
      background-color: #ffffff !important;
  }
  .menu-top {
      border-bottom: 1px solid #d8caca;
  }
  .topcurrency {
      border-radius: 35px !important;
  }
  /* input.p-inputtext.p-component.searchinput.p-inputtext.p-component.surface-section.text-600.surface-border.w-full {
      border-radius: 30px 0px 0px 30px;
  } */
  button.shop-now-btn {
      background-color: #f97316 !important;
      padding: 5px !important;
      color: white !important;
      border-radius: 23px !important;
      border: none !important;
      font-size: 11px !important;
  }
  .menu-expand {
      display: inline-block;
      font-size: 16px;
      font-weight: 700;
      margin-left: 31px;
      border-radius: 69px;
      text-transform: uppercase;
      color: var(--white-color);
      background-color: #f7941f;
      padding: 8px 40px;
      width: 63%;
  }
  .results-box {
      position: absolute;
      width: 1120px;
      margin-top: 3px;
      border: 1px solid #ccc;
      /* border-top: none; */
      border-radius: 0 0 4px 4px;
      max-height: 350px;
      overflow-y: auto;
      background-color: #fff;
      z-index: 1000;
  }
  img.h-3rem {
      border-radius: 32px;
  }
  button.p-button.p-component.my-account {
      background-color: white;
      color: black;
      border-radius: 30px;
      border-color: #d0d0d0;
  }
  select, .form-control, .form-select, textarea, input {
      height: 50px !important;
      padding: 0 25px 0 25px;
      padding-right: 45px;
      border: 1px solid transparent;
      color: var(--body-color);
      background-color: var(--smoke-color2);
      border-radius: 27px;
      font-size: 16px;
      width: 100%;
      font-family: var(--body-font);
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
  }
  .p-button.p-button-icon-only {
      width: 2.5rem;
      padding: 1.5rem 0;
  }
  .p-button[data-v-37e9dcf2] {
      color: #a81010;
      background: #f97316 !important;
      border: 1px solid #f97316 !important;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
      border-radius: 6px;
      outline-color: transparent;
  }
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css");
  </style>
  