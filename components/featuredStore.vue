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
                    <img :src="getParsedImages(product.images)" class="w-full h-full object-cover">
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{currency}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                    <Button  @click="selectShop(brands[ok_index]?.id,brands[ok_index]?.logo,brands[ok_index]?.name)"   icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                  </div>
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
                    <img :src="getParsedImages(product.images)" class="w-full h-full object-cover">
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{currency}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                    <Button @click="selectShop(brands[bornemarche_index]?.id,brands[bornemarche_index]?.logo,brands[bornemarche_index]?.name)"  icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                  </div>
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
                    <img :src="getParsedImages(product.images)" class="w-full h-full object-cover">
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{currency}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                    <Button @click="selectShop(brands[foodlovers_index]?.id,brands[foodlovers_index]?.logo,brands[foodlovers_index]?.name)"  icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                  </div>
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
                    <img :src="getParsedImages(product.images)" class="w-full h-full object-cover">
                  </div>
                  <div  class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(product.name) }}</div>
                  <div class="mb-4">
                  </div>
                  <div class="flex justify-content-between align-items-center">
                    <span class="font-bold text-900 ml-2">{{currency}}{{product.prices[0]?.price ? formatCurrency(product.prices[0]?.price) : formatCurrency(0)}}</span>
                    <Button @click="selectShop(brands[okmart_index]?.id,brands[okmart_index]?.logo,brands[okmart_index]?.name)" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                  </div>
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
            <Avatar :image="shopLogo" shape="circle" />
            <span class="font-bold white-space-nowrap">Welcome to {{shopName}}</span>
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
    ok_index.value = brands.value.findIndex((brand:any) => brand.name === "OK ZIMBABWEE");
    return featured_products.value["OK ZIMBABWEE"] || [];
})

const bornemarcheProducts = computed(() => {
    bornemarche_index.value = brands.value.findIndex((brand:any) => brand.name === "BORNE MARCH'E");
    return featured_products.value["BORNE MARCH'E"] || [];
})

const okmartProducts = computed(() => {
    okmart_index.value = brands.value.findIndex((brand:any) => brand.name === "OK MARTT");
    return featured_products.value["OK MARTT"] || [];
})

const foodloversProducts = computed(() => {
    foodlovers_index.value = brands.value.findIndex((brand:any) => brand.name === "FOODLOVERS");
    return featured_products.value.FOODLOVERS || [];
})
const selectShop = async (shopIDD:any,logo:any,name:any) => {
  select_shop.value = true
  shopID.value = shopIDD
  shopLogo.value = logo
  await getShopsForBrand(shopIDD)
  shopName.value = name
}
const getShopsForBrand = (brandId:any) => {
  branches.value = null
  //@ts-ignore
  let branchess = brands.value.find(brand => brand.id === brandId);
  branches.value = branchess?.shops
}
const goToShop = () => {
     loading.value = true
     navigateTo(`/shop-${shopID.value}-${shopBranch.value}`)
     loading.value = false
}
const dummyProducts = [
    {
        shop_logo: '/images/logos/nivea.jpg',
        name: 'Nivea Body Lotion Q10 400ml',
        image: '/images/products/nivea.jpg',
        price: '29.99',
        redirect_url: '/product/1'
    },
    {
        shop_logo: '/images/logos/shop2.jpg',
        name: "Babysoft 18's",
        image: '/images/products/tissue.jpg',
        price: '39.99',
        redirect_url: '/product/2'
    },
    {
        shop_logo: '/images/logos/shop3.jpg',
        name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
        image: '/images/products/vaseline.jpg',
        price: '49.99',
        redirect_url: '/product/3'
    },
    {
        shop_logo: '/images/logos/shop4.jpg',
        name: 'Sunlight Dishwasher Lemon 750ml',
        image: '/images/products/sunlight.jpg',
        price: '59.99',
        redirect_url: '/product/4'
    },
    {
        shop_logo: '/images/logos/shop5.jpg',
        name: 'Harpic Toilet Cleaner Potpourri 500ml',
        image: '/images/products/harpic.jpg',
        price: '69.99',
        redirect_url: '/product/5'
    },
    {
        shop_logo: '/images/logos/shop6.jpg',
        name: 'Handy And All Purpose Cleaner Lavendar 750ml',
        image: '/images/products/handy_andy.jpg',
        price: '79.99',
        redirect_url: '/product/6'
    },
    {
        shop_logo: '/images/logos/shop7.jpg',
        name: 'Raid',
        image: '/images/products/raid.jpg',
        price: '89.99',
        redirect_url: '/product/7'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Sta Soft',
        image: '/images/sta-soft.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Geisha Soup',
        image: '/images/products/geisha.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Dettol Anti Bacterial Soap Even Tone 175g',
        image: '/images/products/detol.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    }
];
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
const products = [
    {
        shop_logo: '/images/logos/nivea.jpg',
        name: 'Mazoe Orange Crush 2 Ltrs',
        image: '/images/products/mazoe.jpg',
        price: '29.99',
        redirect_url: '/product/1'
    },
    {
        shop_logo: '/images/logos/shop2.jpg',
        name: "Red Seal Salt 1kg",
        image: '/images/products/salt.jpg',
        price: '39.99',
        redirect_url: '/product/2'
    },
    {
        shop_logo: '/images/logos/shop3.jpg',
        name: 'Mahatma White Rice 2kg',
        image: '/images/products/rice.jpg',
        price: '49.99',
        redirect_url: '/product/3'
    },
    {
        shop_logo: '/images/logos/shop4.jpg',
        name: 'Nestle everyday 400g',
        image: '/images/products/everyday.jpg',
        price: '59.99',
        redirect_url: '/product/4'
    },
    {
        shop_logo: '/images/logos/shop5.jpg',
        name: 'Cashel Valley Baked Beans 410g',
        image: '/images/products/beans.jpg',
        price: '69.99',
        redirect_url: '/product/5'
    },
    {
        shop_logo: '/images/logos/shop6.jpg',
        name: 'Ekono Spaghetti 400g',
        image: '/images/products/spaghetti.jpg',
        price: '79.99',
        redirect_url: '/product/6'
    },
    {
        shop_logo: '/images/logos/shop7.jpg',
        name: 'RabRoy Tomato Sauce 375ml',
        image: '/images/products/sauce.jpg',
        price: '89.99',
        redirect_url: '/product/7'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Jacobs Coffee Kronung 100g',
        image: '/images/products/jacobs_coffee.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Mamas Peanut Butter ',
        image: '/images/products/peanut.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Roller Meal',
        image: '/images/products/roller_meal.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    }
];
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
img.w-full.h-full.object-cover.border-round {
    height: 100px !important;
    width: auto !important;
}
img.w-full.h-full.object-cover {
    width: auto !important;
    height: 155px !important;
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
