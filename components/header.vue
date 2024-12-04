<template>
<header class="th-header header-layout3">
  <!-- Top Menu Section -->
  <div class="menu-top">
    <div class="container-fluid">
      <div class="row align-items-center p-2">
        <!-- Logo Section -->
        <div class="col-sm-12 col-md-4 col-lg-6 text-center text-md-start mb-3 mb-md-0">
          <div class="header-logoo">
            <a href="#">
              <img
                src="/images/shopeasy_logo.png"
                alt="OK shop easy"
                class="logo img-fluid"
              />
            </a>
          </div>
        </div>

        <!-- Brand Selection Section -->
        <div class="col-sm-12 col-md-8 col-lg-6">
          <div v-if="loading" class="d-flex justify-content-center justify-content-md-end">
            <Skeleton class="h-3rem me-2" />
            <Skeleton class="h-3rem" />
          </div>
          <div class="brands-section" v-if="!loading">
            <span class="helper-text d-block text-center text-md-end mb-3">
              Select a brand to explore
            </span>
            <div class="row g-2">
              <div
                v-for="brand in brands"
                :key="brand.id"
                class="col-sm-12 col-md-auto d-flex justify-content-center"
              >
                <div
                  class="brand-item d-flex justify-content-center align-items-center border-round cursor-pointer"
                  @click="selectShop(brand)"
                >
                  <img :src="brand.logo" :alt="brand.name" class="h-3rem" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sticky Navigation Area -->
  <div class="sticky-wrapper">
    <div class="menu-area">
      <!-- Add your sticky navigation content here -->
    </div>
  </div>
</header>



  <Dialog v-model:visible="select_shop" modal header="Shop Selection" :style="{ width: '25rem' }">
    <template #header>
      <div class="inline-flex align-items-center justify-content-center gap-2">
        <span class="font-bold white-space-nowrap">
          Welcome to <img :src="shopLogo" :alt="shopName" class="h-3rem" />
        </span>
      </div>
    </template>
    <span class="p-text-secondary block mb-5">Select Branch.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown
        v-model="shopBranch"
        :options="branches"
        filter
        optionLabel="name"
        optionValue="id"
        placeholder="Select a Store"
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

const selectShop = async (brandd:any) => {
  if (brandd?.name != "OKMART") {
    toast.add({ severity: 'info', summary: 'Coming Soon', detail: `${brandd?.name} will be available soon`, life: 3000 });
    return
  }

  select_shop.value = true;
  shopID.value = brandd?.id;
  shopLogo.value = brandd?.logo;
  await getShopsForBrand( brandd?.id);
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

const getFeaturedProducts = async (brand_id:any) => {
  let params = {
    page: 1,
    per_page: 10,
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
<style scoped>
.logo {
  height: auto;
  max-width: 258px;
}

.brands-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
}

.brand-item img {
  max-width: 100%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .helper-text {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .brands-container {
    gap: 5px;
  }

  .brand-item img {
    max-height: 2.5rem;
  }
}

@media screen and (max-width: 480px) {
  .header-logoo img {
    max-width: 150px;
  }

  .helper-text {
    font-size: 10px;
  }
}
.header-logoo {
    display: grid;
    justify-content: flex-start;
}
.brands-section {
    display: grid;
    justify-content: flex-end;
}
.brand-item:hover {
    border: solid #c7c7c7 1px;
    padding: 5px;
}
</style>
