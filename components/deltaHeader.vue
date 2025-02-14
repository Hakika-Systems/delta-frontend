<template>
    <div class="surface-ground">
    <!-- Top Bar -->
    <div class="text-white p-3" style="background-color: #c8b967;">
      <div class="container">
        <div class="flex justify-content-between align-items-center">
          <div class="flex align-items-center">
            <i class="pi pi-phone mr-2"></i>
            <span class="mr-3">+263 8688 003417 | +263 78 681 5772</span>
            <i class="pi pi-envelope mr-2"></i>
            <span>Email: info@deltastore.co.zw</span>
          </div>
          <div>
            <!-- <Dropdown v-model="selected_currency" :options="currencies" optionLabel="name" placeholder="Select currency" class="mr-2" /> -->
            <!-- <Button label="Sign in" class="p-button-text p-button-plain mr-2" style="color: black;"/>
            <Button label="Create account" class="p-button-text p-button-plain" style="color: black;"/> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Header -->
    <div class="surface-card toph shadow-2 p-3">
      <div class="container">
        <div class="flex justify-content-between align-items-center">
          <img src="/images/delta_image.png"  style="width: 15%"/>
          <div style="float: right; margin-left: auto;" >
            <Dropdown v-model="selected_region" :options="brands" optionLabel="name" placeholder="Select Region to Explore" class="mr-2"  @change="selectShop(selected_region)"  />
          </div>
        </div>
      </div>
    </div>
    
      <Menubar style="color:#c8b967;" :model="menuItems" class="border-none shadow-2" />
    
 
    </div>
    <Dialog v-model:visible="select_shop" modal header="Depot Selection" :style="{ width: '25rem' }">
    <template #header>
      <div class="inline-flex align-items-center justify-content-center gap-2">
        <span class="font-bold white-space-nowrap">
          Welcome to {{ selected_region.name }} 
        </span>
      </div>
    </template>
    <span class="p-text-secondary block mb-5">Select Depot.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown
        v-model="shopBranch"
        :options="branches"
        filter
        optionLabel="name"
        optionValue="id"
        placeholder="Select a Depot"
        checkmark
        :highlightOnSelect="false"
        class="w-full"
      />
    </div>
    <template #footer>
      <Button
        :loading="loading"
        label="Shop Now"
        outlined
        severity="secondary"
        :disabled="!shopBranch"
        @click="goToShop()"
      />
    </template>
  </Dialog>
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
const selected_region = ref()
const currencies:any = storeToRefs(frontStore).currencies;
const selected_currency = storeToRefs(frontStore).selected_currency;
const branches = ref();
const menuItems = ref()
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

const selectShop = async (brandd:any) => {
  // if (brandd?.name != "OKMART") {
  //   toast.add({ severity: 'info', summary: 'Coming Soon', detail: `${brandd?.name} will be available soon`, life: 3000 });
  //   return
  // }

  select_shop.value = true;
  shopID.value = brandd?.id;
  shopLogo.value = brandd?.logo;
  let result = await getShopsForBrand( brandd?.id);
  
  shopName.value = brandd?.name;
  sessionStorage.setItem('active_brand', JSON.stringify(brandd))
}
//@ts-ignore

const searchProducts = () => {
  frontStore.getSearchResults(search_text.value).then(async (data) => {
    search_products.value = data?.data.products;
    await displaySearchResults();
  });
}
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

const displaySearchResults = async () => {
  if (search_products.value && search_products.value.length > 0) {
    const searchResults = search_products.value;
    
    // Create table elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    // Create and append table headers
    // Product Name Header
    const imageHeader = document.createElement('th');
    imageHeader.textContent = '#';
    headerRow.appendChild(imageHeader);


    const productHeader = document.createElement('th');
    productHeader.textContent = 'Product';
    headerRow.appendChild(productHeader);

    // Image Header
    

    // Dynamic Shop Headers with "Shop Now" button
    searchResults[0].prices.forEach((priceObj: any) => {
      const header = document.createElement('th');
      header.innerHTML = `
        ${priceObj.shop_brand.name}
        <button 
          class="shop-now-btn"
          style="background-color: #f97316 !important;
          padding: 5px !important;
          color: white !important;
          border-radius: 23px !important;
          border: none !important;
          font-size: 11px !important;"
          onclick="window.location.href='/shop-${priceObj.shop_brand.id}-${priceObj?.shop?.id}'">
          Shop Now
        </button>
      `;
      headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create and append table rows
    searchResults.forEach((product: any) => {
      const row = document.createElement('tr');

      // Product Name Cell
      const imageCell = document.createElement('td');
      const img = document.createElement('img');
      img.src = getParsedImages(product.images); 
      img.alt = product.name;
      img.style.width = '100%'; 
      img.style.height = '45px';
      imageCell.appendChild(img);
      row.appendChild(imageCell);

      const productCell = document.createElement('td');
      productCell.textContent = product.name;
      row.appendChild(productCell);

      // Product Image Cell
    

      // Prices for each shop
      product.prices.forEach((priceObj: any) => {
        const priceCell = document.createElement('td');
        priceCell.innerHTML = `<strong>USD</strong>${priceObj.price}`;
        row.appendChild(priceCell);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Inject the table into the DOM
    const resultsContainer = document.getElementById('searchResultsTable');
    if (resultsContainer) {
      resultsContainer.innerHTML = ''; // Clear previous results
      resultsContainer.appendChild(table);
    }
  }
};


// Example showBrand function to handle the button click
const showBrand = async (brandId: any) => {
  // Implement the logic for showing the brand, e.g., navigating to a shop page
  await navigateTo(`/shop-${brandId.value}`,{external: true})
};


const getShopsForBrand = (brandId:any) => {
  branches.value = null;
  //@ts-ignore
  let branchess = brands.value.find(brand => brand.id === brandId);
  branches.value = branchess?.shops;
}

const goToShop = async () => {
  loading.value = true;
  sessionStorage.setItem('current_shop_id', JSON.stringify(shopID.value))
  sessionStorage.setItem('current_shop_branch', JSON.stringify(shopBranch.value))
  loading.value = false;
  await navigateTo(`/shop-${shopID.value}-${shopBranch.value}`,{external: true})
  // navigateTo(`/shop-${shopID.value}-${shopBranch.value}`);

  select_shop.value = false
}

onMounted(async() => {
  let result_one = await frontStore.getBrands().then(async (data) => {
    brands.value = data?.data?.shopbrands;
    loading.value = false;
    await getAllBrandsFeaturedProducts();
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

const getAllBrandsFeaturedProducts = async () => {
  const brandss:any = brands.value;

  // Loop through each brand and get featured products
  for (const brand of brands.value) {
    let products = await getFeaturedProducts(brand.id);
    featuredProductsByBrand.value[brand.name] = products; // Store the products in the object
  }

  // Now you have an object containing featured products for each brand
  
};
let params = {
    page: 1,
    per_page: 100
}

let categoriess = frontStore.getAllCategories(params).then(async (data) => {
  console.log('data',data.data.categories)
   menuItems.value = data.data.categories.map(category => ({
    label: category.name,
    
  }));

})
const getFeaturedProducts = async (brand_id:any) => {
  let params = {
    page: 1,
    per_page: 30,
    id: brand_id,
    is_shop_brand: true
  }
  let productsd = await frontStore.getFeaturedProducts(params).then((data) => {
    featured.value = {};
    featured.value = data?.data?.products;
  })
  return featured.value;
}
</script>
  <style scoped>
  .hero-section {
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
  .toph{
    background: radial-gradient(circle at center,#15416e 0%,#097fc1 100%) !important;
    height: 120px
  }
  .n{
    background-color: #c8b967;
  };
  </style>
  