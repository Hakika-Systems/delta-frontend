]<template>
    <okMartShopHeader />
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
  <div class="grid mb-7">
    <div class="col-12 lg:col-6">
      <div class="flex">
        
        <div class="pl-3 w-12">
          <img :src="product?.image" class="w-full border-round">
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 py-3 lg:pl-6">
      <div class="flex align-items-center text-xl font-medium text-900 mb-4">{{ product?.name }}</div>
      <div class="flex align-items-center justify-content-between mb-5">
        <span class="text-900 font-medium text-3xl block">USD{{ product?.price }}</span>
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
      <div class="flex align-items-center mb-5">
        Example
      </div>
      <div class="font-bold text-900 mb-3">Category</div>
      <div class="flex align-items-center mb-5">
        Example
      </div>
      <div class="font-bold text-900 mb-3">Description</div>
      <div class="flex align-items-center mb-5">
        Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.
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
</template>
<script setup lang="ts">
const frontStore = useFrontStore()
const products = storeToRefs(frontStore).dummyProducts
const cart:any = storeToRefs(frontStore).cart
const {params:{id}} = useRoute()
const toast = useToast()
const rating = ref()
const quantity = ref(1)
const product = ref()
onMounted( async () => {
  console.log("sjks",id)
  product.value = await findProduct(id)
})
const addToCart = (product_id:any) => {
  // Find the product in products
  const product = products.value.find(prod => prod.id === product_id);

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
  console.log(product.value);
  return product.value
};

</script>
<style>

</style>