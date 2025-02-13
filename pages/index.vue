<template>
   <AgeVerification v-if="showAgeVerification" />
    <!-- Top Bar -->
    <DeltaHeader/>
    <!-- Hero Section -->
    <Hero/>
    <!-- Featured Products -->
    <div  class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-left mb-3" style="color: #0958A9;">Suggested Products</h2>
        <div class="col-12 grid grid-nogutter align-items-center">
        <div class="col-12">
          <div class="grid">
            <div v-for="product in products_" :key="index" class="col-12 md:col-6 lg:col-3">
              <div class="p-2">
                <div class="border-1 surface-border border-round m-2 p-3" style="min-height: 350px; display: flex; flex-direction: column; justify-content: space-between;">
                  <div  class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                    <img class="product_image object-cover" :placeholder="[50, 50, 50, 50]"   :src="getParsedImages(product.images)" :alt="product?.name" loading="lazy" />
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ product.name}}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2"></span>
                  </div>
                  <Button icon="pi pi-cart-arrow-down"   @click="select_brand = true"  label="GO TO SHOP" class="cart mt-3 okaddtocart w-full"/>
                </div>
              </div>
            </div>
            <!-- <div  class="col-8 md:col-6 lg:col-12">
              <img src="/images/middle_banner.jpg" alt="Side Banner" class="w-full"  >
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <Dialog v-model:visible="select_brand" modal header="Region Selection" :style="{ width: '25rem' }">
    <!-- <template #header>
        <div class="inline-flex align-items-center justify-content-center gap-2">
            
            <span class="font-bold white-space-nowrap">Welcome to <img :src="shopLogo" :alt="shopName" class="h-3rem"></span>
        </div>
    </template> -->
    <span class="p-text-secondary block mb-5">Select Region.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown @change="getBrandById()" v-model="chosenBrand" :options="brands" filter optionLabel="name" optionValue="id" placeholder="Select a Region" checkmark :highlightOnSelect="false" class="w-full" />
    </div>
    <template #footer>
        <Button :loading="loading" label="Choose" @click="chooseShop()" severity="secondary"   autofocus />
    </template>
</Dialog>
<Dialog v-model:visible="select_shop" modal header="Shop Selection" :style="{ width: '25rem' }">
    <template #header>
        <div class="inline-flex align-items-center justify-content-center gap-2">
           
            <span class="font-bold white-space-nowrap">Welcome to {{ shopName }}</span>
        </div>
    </template>
    <span class="p-text-secondary block mb-5">Select Depot.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown v-model="shopBranch" :options="branches" filter optionLabel="name" optionValue="id" placeholder="Select a Store" checkmark :highlightOnSelect="false" class="w-full" />
    </div>
    <template #footer>
        <Button  label="Back" outlined severity="secondary" :disabled="!shopBranch" @click="select_shop = false,select_brand = true" autofocus />
        <Button :loading="loading" label="Shop Now" outlined severity="secondary" :disabled="!shopBranch" @click="goToShop()" />
    </template>
</Dialog>
    <DeltaFooter/>
</template>

<script setup>
import { ref } from 'vue'
const frontStore = useFrontStore()
const brands = storeToRefs(frontStore).brands
const products_ = ref()

const currentBrand = ref()


import { createId } from '@paralleldrive/cuid2';
	import debounce from 'debounce';
    const op = ref();
    const toast = useToast()
    const select_brand = ref(false)
	const tracking_id = ref()
	const changed = storeToRefs(frontStore).changed
    const chosenBrand = ref()
    const shopBranch = ref();
    const branches = ref()
    const select_shop = ref()
    const shopLogo = ref();
	const menuLoader = ref(false)
    const shopName = ref();
   
    const search_products = ref([])
	const track_order = ref(false)
    const loading = ref(false)
    const mytoken = useCookie('token');
    const name = useCookie('username');
    const user_id = useCookie('user_id');
   
    const menuItems = ref()
    const current_id = ref()
    const product_brands = ref()
	const mylogo = ref()
    const search_text = ref();
    const brand_id = ref()
    const shop_id = ref()
    const cart_total = storeToRefs(frontStore).cart_total
    const guest_id = ref()
    const categories_loading = ref(false)
	const skeleton_loader = ref(true)
    const cart_id = storeToRefs(frontStore).cart_id
    const brand_currencies= storeToRefs(frontStore).currencies;
    const selected_currency = storeToRefs(frontStore).selected_currency;

const showAgeVerification = ref(false)

onMounted(async() => {
  await frontStore.getAllProducts().then((data)=>{
     products_.value = data.data.products
     console.log('papa',products_.value)
  })
  const ageVerified = localStorage.getItem('ageVerified')
  if (!ageVerified) {
    console.log('ssss',showAgeVerification.value)
    showAgeVerification.value = true
  }
})


const getParsedImages = (images) => {
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
const selectedShop = ref(null)
const chooseShop = async () => {
     select_brand.value = false
     select_shop.value = true
	 console.log('sis',currentBrand.value)
     shopLogo.value = currentBrand.value?.logo;
     shopName.value = currentBrand.value?.name;
     await getShopsForBrand( currentBrand.value?.id);
    }
	const getLogo = () => {
      // Ensure it's running on the client
        let active_brandd = sessionStorage.getItem('active_brand');
        let ab = JSON.parse(active_brandd);
        mylogo.value = ab?.logo;
     // Return fallback during SSR
   };

    const getBrandById = () => {
    // Find the brand with the matching id
    const foundBrand = brands.value.find((brand) => brand.id === chosenBrand.value);

    // Assign the found brand to chosenBrand
    if (foundBrand) {	
        currentBrand.value = foundBrand;
		// if (foundBrand?.name != "OKMART") {
		// 	currentBrand.value = null;
		// 	chosenBrand.value = null;
		// 	toast.add({ severity: 'info', summary: 'Coming Soon', detail: `${foundBrand?.name} will be available soon`, life: 3000 });
		// 	return
		// }

    } else {
        currentBrand.value = null; // Or handle the case when the brand is not found
    }
    }
    const getShopsForBrand = (brandId) => {
    branches.value = null;
    //@ts-ignore
    let branchess = brands.value.find(brand => brand.id === brandId);
    branches.value = branchess?.shops;
    }

    const goToShop = async () => {
//   loading.value = true;
//   sessionStorage.setItem('active_brand', JSON.stringify(currentBrand.value))
//   sessionStorage.setItem('current_shop_id', JSON.stringify(chosenBrand.value))
//   sessionStorage.setItem('current_shop_branch', JSON.stringify(shopBranch.value))
//   select_shop.value = false
//   loading.value = false;
  await navigateTo(`/shop-${chosenBrand.value}-${shopBranch.value}`,{external:true});
  
}
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: currency.value });
};
const findCurrency = () => {
    const currency = currencies.value.find((currency) => currency.id === selected_currency.value);
    return currency ? currency.iso_code : null;
}

</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(rgba(9, 88, 169, 0.8), rgba(9, 88, 169, 0.8)), url('/placeholder.svg?height=800&width=1600');
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
  background-color:#c8b967 ;
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
</style>

