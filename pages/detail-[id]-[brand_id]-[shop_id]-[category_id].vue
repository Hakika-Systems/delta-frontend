]<template>
    <okMartShopHeader />
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
  <div class="grid mb-7">
    <div class="col-12 lg:col-6">
      <div class="flex">
        
        <div class="pl-3 w-12">
          <img :src="getParsedImages(product?.images)" class="w-full border-round">
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 py-3 lg:pl-6">
      <div class="flex align-items-center text-xl font-medium text-900 mb-4">{{ product?.name }}</div>
      <div class="flex align-items-center justify-content-between mb-5">
        <span class="text-900 font-medium text-3xl block">USD {{product?.prices[0]?.price}} </span>
        <div class="flex align-items-center">
          <span class="mr-3">
            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i class="pi pi-star text-700 mr-1"></i>
          </span>
          <span class="text-sm">
            <b class="text-900 mr-1">24</b>
            <span class="text-500"></span>reviews </span>
        </div>
      </div>
      <div class="font-bold text-900 mb-3">Brand</div>
      <div class="flex align-items-center mb-5 cursor-pointer">
        {{ product?.brand ? product?.brand : "" }}
      </div>
      <div class="font-bold text-900 mb-3">Category</div>
      <div class="flex align-items-center cursor-pointer mb-5">
        {{ product?.category?.name }}
      </div>
      <div class="font-bold text-900 mb-3">Description</div>
      <div v-html="product?.description" class="flex align-items-center mb-5">
      </div>
      <div class="mb-3 flex align-items-center justify-content-between">
        <span class="font-bold text-900">Add Review</span>
        <a tabindex="0" class="cursor-pointer text-600 text-sm flex align-items-center">Contact Sales Rep<i class="ml-1  pi pi-whatsapp"  style="color: #25D366;"></i>
        </a>
      </div>
      <Rating class="mb-5" v-model="rating" :cancel="false"  />
      <div class="font-bold text-900 mb-3">Quantity</div>
      <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
        <span class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal w-8rem" data-pc-name="inputnumber" data-pc-section="root" spinnermode="horizontal">
          <input v-model="quantity" class="p-inputtext p-component p-inputnumber-input w-3rem text-center" data-pc-name="inputtext" data-pc-section="input" role="spinbutton" aria-valuemin="0" aria-valuenow="1">
          <button @click="quantity++"  class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text" type="button" data-pc-name="button" data-pc-section="incrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true">
            <span class="pi pi-plus" data-pc-section="incrementbuttonicon"></span>
            <span class="p-button-label" data-pc-section="label">&nbsp;</span>
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </button>
          <button :disabled="quantity <= 1" @click="quantity--" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text" type="button" data-pc-name="button" data-pc-section="decrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true">
            <span class="pi pi-minus" data-pc-section="decrementbuttonicon"></span>
            <span class="p-button-label" data-pc-section="label">&nbsp;</span>
           
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </button>
        </span>
        <div class="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
          <Button @click="addToCart(product?.id)" class="p-button p-component flex-1 mr-5" label="Add to cart"/>
       
          <i class="pi text-2xl cursor-pointer pi-heart text-600"></i>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-between flex-wrap">
      <div class="flex align-items-center mb-4 md:mb-0">
        <div class="text-900 font-bold text-3xl">Related Products</div>
      </div>
      <div>
        <button class="p-button p-component p-button-outlined p-button-secondary w-7rem p-2" type="button" aria-label="Sort By" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-right pi pi-sort-alt" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Sort By</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
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
          <div v-for="item in related_products" :key="item.id" class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
              <div class="border-1 surface-border border-round m-2 p-3">
                <div @click="navigateTo(`/detail-${item.id}`)" class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                  <img :src="getParsedImages(item?.images)" class="w-full h-full object-cover">
                </div>
                <div @click="navigateTo(`/detail-${item.id}`)" class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(item.name) }}</div>
                <div class="mb-4">
                </div>
                <div class="flex justify-content-between align-items-center">
                  <span class="font-bold text-900 ml-2">USD {{item.price ? formatCurrency(item.price) : formatCurrency(0)}}</span>
                  <Button @click="addToCartRelated(item.id)" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</template>
<script setup lang="ts">
const frontStore = useFrontStore()
const products:any = storeToRefs(frontStore).products
const cart:any = storeToRefs(frontStore).cart
const {params:{id,brand_id,shop_id,category_id}} = useRoute()
const toast = useToast()
const brand_idd:any = storeToRefs(frontStore).brand_id
const shop_idd:any = storeToRefs(frontStore).shop_id
const rating = ref()
const quantity = ref(1)
const related_products:any = ref([])
const product = ref()
onMounted( async () => {
brand_idd.value = brand_id
shop_idd.value = shop_id
let params = {
    page: 1,
    per_page: 10,
    shop_brand_id: brand_id,
    shop_id: shop_id
}
let related_params = {
    page: 1,
    per_page: 10,
    shop_brand_id: brand_id,
    category_id: category_id
}
let productsd =  await frontStore.getProducts(params).then((data) => {
  products.value = data?.data?.products
})
let related_productss =  await frontStore.getRelatedProducts(related_params).then((data) => {
  related_products.value = data?.data?.products
})
product.value = await findProduct(id)
})
const addToCart = (product_id:any) => {
  const product = products.value.find((prod:any) => prod.id === product_id);

  if (!product) {
    console.error('Product not found');
    return;
  }

  // Check if the product is already in the cart
  //@ts-ignore
  const productInCart = cart.value.find(cartItem => cartItem.id === product_id);

  if (productInCart) {
    // Increase the quantity if the product is already in the cart
    productInCart.quantity += quantity.value;
    toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Quantity Updated', group: 'br', life: 3000 });
  } else {
    // Add the product to the cart with the chosen quantity
    cart.value.push({ ...product, quantity: quantity.value });
    toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Added', group: 'br', life: 3000 });
  }
};

const findProduct = (id:any) => {
  for (let i = 0; i < products.value.length; i++) {
    if (products.value[i].id === Number(id)) {
      product.value = products.value[i];
      
      break;
    }
  }
  return product.value
};
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
const currency = ref("USD")
const addEllipsis = (str:string) => {
  return str.length > 23 ? str.slice(0, 23) + '...' : str;
};
const formatCurrency = (value:any) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: currency.value });
};

const addToCartRelated = (product_id :any) => {
// Find the product in dummyProducts
const product = products.value.find((prod:any) => prod.id === product_id);

if (!product) {
  console.error('Product not found');
  return;
}

// Check if the product is already in the cart
const productInCart = cart.value.find((cartItem: any) => cartItem.id === product_id);

if (productInCart) {
  // Increase the quantity if the product is already in the cart
  productInCart.quantity += 1;
  toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Added',group: 'br', life: 3000 });
} else {
  // Add the product to the cart with quantity 1
  cart.value.push({ ...product, quantity: 1 });
  toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Added',group: 'br', life: 3000 });
}
};
</script>
<style>

</style>