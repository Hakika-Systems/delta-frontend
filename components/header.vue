<template>
  <header class="th-header header-layout3">
    <div class="menu-top">
      <div class="containerr">
        <div class="row align-items-center justify-content-between">
          <div class="col-2">
            <div class="header-logoo">
              <a href="#"
                ><img
                  src="/assets/img/okshop.jpg"
                  alt="OK shop easy"
                  style="height: auto;width:200px;"
              /></a>
            </div>
          </div>
          <!-- <div class="col-6 d-none d-lg-block">
            <InputGroup class="w-full">
                        <IconField class="w-full" iconPosition="left">
                        <InputText @keyup="searchProducts()" v-model="search_text"   class="searchinput p-inputtext p-component surface-section text-600 surface-border w-full"  placeholder="What are you looking for..."/>
                      
                    </IconField>
                   
            </InputGroup>
            <div class="results-box p-5" v-if="search_text">
            <div id="searchResultsTable">

            </div>
    </div>
          </div> -->
          <!-- <div class="col-2">
            <div class="header-icons">
              <Dropdown class="w-10 topcurrency" v-model="selected_currency" :options="currencies" optionLabel="iso_code" optionValue="id" placeholder="Select Currency" />
            </div>
          </div> -->
          <div class="col-2">
            <div class="header-icons">
              <Button type="button" @click="navigateTo('/signin')" label="My Account" icon="pi pi-user" class="my-account" />
              <!-- <a href="wishlist.html" class="icon-btn d-none d-sm-block">
                <span class="badge">3</span>
                <i class="far fa-heart"></i>
              </a>
              <button type="button" class="icon-btn sideMenuToggler">
                <span class="badge">5</span>
                <i class="far fa-cart-shopping"></i>
              </button> -->
              <!-- <button
                type="button"
                class="icon-btn sideMenuInfo d-none d-lg-block"
              >
                <i class="fal fa-grid"></i>
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-top">
      <div class="">
        <div class="row align-items-center justify-content-between">
        
          <!-- <div class="col-4 d-none d-lg-block">
            <form class="header-search">
              <input type="text" placeholder="Enter Keyword" />
              <button type="submit"><i class="far fa-search"></i></button>
            </form>
          </div> -->
          <div class="col-3">

          </div>
          <div class="col-3">
            <div v-if="loading" class="grid grid-nogutter align-items-center">
              <div
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                  <Skeleton class="h-3rem" />
              </div>
              <div
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                  <Skeleton class="h-3rem" />
              </div>
              <div
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                  <Skeleton class="h-3rem" />
              </div>
              <div
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                  <Skeleton class="h-3rem" />
              </div>
            </div>
            <div v-else class="grid grid-nogutter align-items-center">
              <div v-for="brand in brands" :key="brand.id" 
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                  @click="selectShop(brand)">
                  <img :src="brand.logo" :alt="brand.name" class="h-3rem">
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
  <Dialog v-model:visible="select_shop" modal header="Shop Selection" :style="{ width: '25rem' }">
    <template #header>
        <div class="inline-flex align-items-center justify-content-center gap-2">
           
            <span class="font-bold white-space-nowrap">Welcome to <img :src="shopLogo" :alt="shopName" class="h-3rem"></span>
        </div>
    </template>
    <span class="p-text-secondary block mb-5">Select Branch.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown v-model="shopBranch" :options="branches" filter optionLabel="name" optionValue="id" placeholder="Select a Store" checkmark :highlightOnSelect="false" class="w-full" />
    </div>
    <template #footer>
        <Button :loading="loading" label="Shop Now" outlined severity="secondary" :disabled="!shopBranch" @click="goToShop()" autofocus />
    </template>
</Dialog>
</template>

<script setup lang="ts">
const frontStore = useFrontStore();
const brands:any = storeToRefs(frontStore).brands;
import $ from 'jquery';
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
  console.log("ddkdkd")
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
    console.log("Search Results:", data.data.products);
    search_products.value = data?.data.products;
    await displaySearchResults();
  });
}
const getParsedImages = (images: string) => {
  try {
      const parsedImages = JSON.parse(images)
      const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''))
      return cleanedString[0]
  } catch (error) {
      return images
  }
}

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
const showBrand = (brandId: any) => {
  console.log("Brand ID:", brandId);
  // Implement the logic for showing the brand, e.g., navigating to a shop page
  navigateTo(`/shop/${brandId}`);
};


const getShopsForBrand = (brandId:any) => {
  branches.value = null;
  //@ts-ignore
  let branchess = brands.value.find(brand => brand.id === brandId);
  branches.value = branchess?.shops;
}

const goToShop = () => {
  loading.value = true;
  sessionStorage.setItem('current_shop_id', JSON.stringify(shopID.value))
  sessionStorage.setItem('current_shop_branch', JSON.stringify(shopBranch.value))
  navigateTo(`/shop-${shopID.value}-${shopBranch.value}`);

  loading.value = false;
}

onMounted(async() => {
  let currency_params = {
    page: 1,
    per_page: 100
  }
  let currenciess = await frontStore.getAllCurrencies(currency_params).then((data) => {
    currencies.value = data.data.currencies
    selected_currency.value = data?.data?.currencies[0]?.id ? data?.data?.currencies[0]?.id : null
  });
  let result_one = await frontStore.getBrands().then(async (data) => {
    console.log("Brands:", data?.data?.shopbrands);
    brands.value = data?.data?.shopbrands;
    await getAllBrandsFeaturedProducts();
    loading.value = false;
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
