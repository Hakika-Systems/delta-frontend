<template>
    <div v-if="okZimbabweProducts.length > 0" class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="flex flex-wrap mb-5 relative" style="border-radius: 1rem; background: radial-gradient(100% 1126.49% at 100% 0%, rgb(238 28 37) 0%, rgb(238 28 37) 100%), rgb(33, 33, 33);">
            <div class="px-6 py-4">
                <img src="/images/logos/okzim.jpg" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
            </div>
            <img src="https://tmpnponline.co.zw/wp-content/uploads/2023/03/132049-Irvines-Mixed-Portions-2kg-768x768.png" alt="Image" class="block mx-auto lg:absolute" style="height: 340px;top: -7rem;right:-1rem;z-index:10;/* margin-bottom: 34px !important; */">
        </div>
        <!-- <header class="flex w-full justify-content-between align-items-center  surface-border pb-5">
            <div>
                <img src="/images/logos/okzim.jpg" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
            </div>
            <Button class="shopnow feat" label="Shop Now" />
        </header> -->
        <div class="col-12 grid grid-nogutter align-items-center">
        <div class="col-12">
          <div class="grid">
            <div v-for="product in okZimbabweProducts" :key="product.id" class="col-12 md:col-6 lg:col-3">
              <div class="p-2">
                <div class="border-1 surface-border border-round m-2 p-3">
                  <div  class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                    <img :src="getParsedImages(product.images)" class="product_image object-cover">
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{findCurrency()}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                  </div>
                  <Button  @click="selectShop(brands[ok_index])"   icon="pi pi-cart-arrow-down" label="GO TO SHOP" class="cart mt-3 okaddtocart w-full"/>
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
    <div  v-if="bornemarcheProducts.length > 0" class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="flex flex-wrap mb-5 relative" style="border-radius:1rem;background: radial-gradient(100% 1126.49% at 100% 0%, rgb(163 180 135) 0%, rgb(163 201 98) 100%), rgb(33, 33, 33);">
         <div class="px-6 py-4">
            <img src="/images/logos/bonmarche.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
         </div>
         <img src="https://tmpnponline.co.zw/wp-content/uploads/2023/03/132049-Irvines-Mixed-Portions-2kg-768x768.png" alt="Image" class="block mx-auto lg:absolute" style="height: 340px;top: -7rem;right:-1rem;z-index:10;/* margin-bottom: 34px !important; */">  </div>
         <div class="col-12 grid grid-nogutter align-items-center">
        <div class="col-12">
          <div class="grid">
            <div v-for="product in bornemarcheProducts" :key="product.id" class="col-12 md:col-6 lg:col-3">
              <div class="p-2">
                <div class="border-1 surface-border border-round m-2 p-3">
                  <div  class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                    <img :src="getParsedImages(product.images)" class="product_image object-cover">
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{findCurrency()}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                  </div>
                  <Button  @click="selectShop(brands[bornemarche_index])"   icon="pi pi-cart-arrow-down" label="GO TO SHOP" class="cart mt-3 bonaddtocart w-full"/>
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
    <div v-if="foodloversProducts.length > 0" class="surface-ground px-4 py-8 md:px-6 lg:px-8">
            <div class="flex flex-wrap mb-5 relative " style="border-radius: 1rem;background: radial-gradient(100% 1126.49% at 100% 0%, rgb(44 96 73) 0%, rgb(1 113 63) 100%), rgb(33, 33, 33);">
            <div class="px-6 py-4">
                <img src="/images/logos/foodlovers.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
            </div>
            <img src="https://tmpnponline.co.zw/wp-content/uploads/2022/03/54491472-Coca-Cola-500ml-1-300x300.png" alt="Image" class="block mx-auto lg:absolute" style="height: 340px;top: -7rem;right:-1rem;z-index:10;/* margin-bottom: 34px !important; */">    </div>
          <div class="col-12 grid grid-nogutter align-items-center">
        <div class="col-12">
          <div class="grid">
            <div v-for="product in foodloversProducts" :key="product.id" class="col-12 md:col-6 lg:col-3">
              <div class="p-2">
                <div class="border-1 surface-border border-round m-2 p-3">
                  <div  class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                    <img :src="getParsedImages(product.images)" class="product_image object-cover">
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{findCurrency()}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                  </div>
                  <Button  @click="selectShop(brands[foodlovers_index])"   icon="pi pi-cart-arrow-down" label="GO TO SHOP" class="cart mt-3 foodaddtocart w-full"/>
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
    <div v-if="okmartProducts.length > 0" class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="flex flex-wrap  relative mb-5" style="border-radius: 1rem;background: radial-gradient(100% 1126.49% at 100% 0%, rgb(238 28 37) 0%, rgb(238 28 37) 100%), rgb(33, 33, 33);">
            <div class="px-6 py-4">
                <img src="/images/logos/okmart.jpg" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
            </div>
            <img src="https://tmpnponline.co.zw/wp-content/uploads/2023/03/132362-Sable-Drums-1kg-300x300.png" alt="Image" class="block mx-auto lg:absolute" style="height: 340px;top: -7rem;right:-1rem;z-index:10;/* margin-bottom: 34px !important; */">  
        </div>
        <div class="col-12 grid grid-nogutter align-items-center">
        <div class="col-12">
          <div class="grid">
            <div v-for="product in okmartProducts" :key="product.id" class="col-12 md:col-6 lg:col-3">
              <div class="p-2">
                <div class="border-1 surface-border border-round m-2 p-3">
                  <div  class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                    <img :src="getParsedImages(product.images)" class="product_image object-cover">
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{findCurrency()}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                  </div>
                  <Button  @click="selectShop(brands[okmart_index])"   icon="pi pi-cart-arrow-down" label="GO TO SHOP" class="cart mt-3 okaddtocart w-full"/>
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
    <Dialog v-model:visible="select_shop" modal header="Shop Selection" :style="{ width: '25rem' }">
    <template #header>
        <div class="inline-flex align-items-center justify-content-center gap-2">
            <!-- <Avatar :image="shopLogo" shape="circle" /> -->
            <span class="font-bold white-space-nowrap">Welcome to  <img :src="shopLogo" :alt="shopName" class="h-3rem"></span>
        </div>
    </template>
    <span class="p-text-secondary block mb-5">Select Branch.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown v-model="shopBranch" :options="branches" filter optionLabel="name" optionValue="id" placeholder="Select a Store" checkmark :highlightOnSelect="false" class="w-full" />
    </div>
    <template #footer>
        <Button :loading="loading" label="Continue Shopping" outlined severity="secondary" :disabled="!shopBranch" @click="goToShop()" autofocus />
    </template>
</Dialog>
</template>

<script lang="ts" setup>
const op = ref();
const frontStore = useFrontStore()
const select_shop = ref(false)
const brands:any = storeToRefs(frontStore).brands
const featured_products:any = storeToRefs(frontStore).brand_featured_products
const shopBranch = ref()
const currencies:any = storeToRefs(frontStore).currencies
const selected_currency:any = storeToRefs(frontStore).selected_currency
const ok_index = ref()
const bornemarche_index = ref()
const foodlovers_index = ref()
const okmart_index = ref()
const branches = ref()
const shopID = ref()
const loading = ref(false)
const shopLogo = ref()
const shopName = ref()
const okZimbabweProducts = computed(() => {
    ok_index.value = brands.value.findIndex((brand:any) => brand.name === "OK ZIMBABWE");
    return featured_products.value["OK ZIMBABWE"] || [];
})

const bornemarcheProducts = computed(() => {
    bornemarche_index.value = brands.value.findIndex((brand:any) => brand.name === "BON MARCHE");
    return featured_products.value["BON MARCHE"] || [];
})

const okmartProducts = computed(() => {
    okmart_index.value = brands.value.findIndex((brand:any) => brand.name === "OKMART");
    return featured_products.value["OKMART"] || [];
})

const foodloversProducts = computed(() => {
    foodlovers_index.value = brands.value.findIndex((brand:any) => brand.name === "FOODLOVERS");
    return featured_products.value.FOODLOVERS || [];
})
const selectShop = async (brandd:any) => {
  select_shop.value = true
  shopID.value = brandd?.id
  shopLogo.value = brandd?.logo
  await getShopsForBrand(brandd?.id)
  shopName.value = brandd?.name
  sessionStorage.setItem('active_brand', JSON.stringify(brandd))
}
const getShopsForBrand = (brandId:any) => {
  branches.value = null
  //@ts-ignore
  let branchess = brands.value.find(brand => brand.id === brandId);
  branches.value = branchess?.shops
}
const goToShop = async () => {
     loading.value = true
     await navigateTo(`/shop-${shopID.value}-${shopBranch.value}`,{external: true})
     loading.value = false
}
const findCurrency = () => {
    const currency = currencies.value.find((currency:any) => currency.id === selected_currency.value);
    return currency ? currency.iso_code : null;
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

// Set the products to dummyProducts


const toggle = (event:any) => {
    op.value.toggle(event);
};

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
const currency = ref("USD")
const addEllipsis = (str:string) => {
    return str.length > 23 ? str.slice(0, 23) + '...' : str;
};
const formatCurrency = (value:any) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: currency.value });
};
</script>

<style>
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
  background-color: red;
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
