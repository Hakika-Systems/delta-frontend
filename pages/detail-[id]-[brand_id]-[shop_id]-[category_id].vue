<template>
  <okMartShopHeader />
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="grid grid-nogutter -mt-3 -ml-3 -mr-3">
          <!-- Image Card -->
          <div class="col-12 lg:col-4 p-3">
            <div class="grid grid-nogutter lg:flex-column">
              <div class="col-12 lg:col-12 mb-5">
                <div class="border-round surface-section p-4 shadow-2 flex align-items-center justify-content-center">
                  <img :src="getParsedImages(product?.images)" class="product_image border-round">
                 </div>
              </div>
              <div class="col-12">
              <div class="border-round surface-section p-4 shadow-2">
                  <div class="font-bold text-900 mb-3">Quantity</div>
                  <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
                      <span class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal w-8rem">
                          <input v-model="quantity" class="p-inputtext p-component p-inputnumber-input w-3rem text-center" role="spinbutton" aria-valuemin="0" aria-valuenow="1">
                          <button @click="quantity++" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text" type="button">
                              <span class="pi pi-plus"></span>
                          </button>
                          <button :disabled="quantity <= 1" @click="quantity--" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text" type="button">
                              <span class="pi pi-minus"></span>
                          </button>
                      </span>
                      <div class="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
                          <Button :loading="loading" @click="addToCart(product?.id,product?.prices[0]?.price)" class="p-button p-component flex-1 mr-5" label="Add to cart" />
                      </div>
                  </div>
              </div>
          </div>
            </div>
          </div>

          <!-- Major Details Card -->
           <div class="col-12 lg:col-8">
            <div class="grid grid-nogutter lg:flex-column">
            <div class="col-12 lg:col-12 p-3">
              <div class="border-round surface-section p-4 shadow-2">
                  <div class="flex align-items-center text-xl font-medium text-900 mb-4">{{ product?.name }}</div>
                  <div class="flex align-items-center justify-content-between mb-5">
                      <span class="text-900 font-medium text-3xl block">{{ findCurrency() }} {{product?.prices[0]?.price ? product?.prices[0]?.price : "0.00"}}</span>
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
                              <span class="text-500">reviews</span>
                          </span>
                      </div>
                  </div>
                  <div class="font-bold text-900 mb-3">Brand</div>
                  <div v-if="product?.brand?.name" @click="navigateTo(`/brands-${brand_id}-${shop_id}-${product.brand.id}`,{external:true})" class="flex align-items-center mb-5 cursor-pointer">{{ product?.brand?.name }}</div>
                  <div class="font-bold text-900 mb-3">Category</div>
                  <div class="flex align-items-center cursor-pointer mb-5">{{ product?.category?.name }}</div>
                  <div class="font-bold text-900 mb-3">Description</div>
                  <div v-html="product?.description" class="flex align-items-center mb-5"></div>
              </div>
          </div>
          <div class="col-12 p-3">
              <div class="border-round surface-section p-4 shadow-2">
                  <div class="flex justify-content-between align-items-center mb-3">
                      <span class="font-bold text-900">Add Review</span>
                      <Button icon="pi pi-whatsapp" class="p-button p-component w-4 flex  mr-5" label="Contact Sales Rep" />
                  </div>
                  <Rating class="mb-4" v-model="rating" :cancel="false" />
              </div>
          </div>
           </div>
           </div>
          <!-- Related Products Section -->
          <div class="col-12 p-3">
              <div class="border-round surface-section p-4">
                  <div class="flex justify-content-between flex-wrap mb-4">
                      <div class="text-900 font-bold text-3xl">Related Products</div>
                     
                  </div>
                  <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" styleclass="w-full border-gray-200"></div>
                  <div v-if="related_products.length === 0">No Related Products</div>
                  <div v-else class="grid">
                      <div v-for="item in related_products" :key="item.id" class="col-12 md:col-6 lg:col-3">
                          <div class="p-2">
                              <div class="border-1 surface-border border-round m-2 p-3">
                                  <div @click="goToDetailPage(item)" class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                                      <img :src="getParsedImages(item?.images)" class="w-full product_image object-cover">
                                  </div>
                                  <div @click="goToDetailPage(item)" class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(item.name) }}</div>
                                  <div class="flex justify-content-between align-items-center">
                                      <span class="font-bold text-900 ml-2">{{ findCurrency() }} {{item?.prices[0]?.price ? item?.prices[0]?.price : formatCurrency(0)}}</span>
                                  </div>
                                  <InputGroup class="w-full">
                                  <InputGroupAddon class="firstinput">
                                      <InputText :min="1" :max="100" style="border:none" v-model="quantities[product.id]" />
                                  </InputGroupAddon>
                                  <InputGroupAddon @click="decreaseQuantity(product.id)" class="addsub cursor-pointer">
                                      <i  class="pi pi-minus"></i>
                                  </InputGroupAddon>
                                  <Button v-if="product?.details[0]?.quantity >= 1" :loading="current_id === product.id" @click="addToCartRelated(product.id,product.prices[0]?.price)" icon="pi pi-cart-arrow-down" label="Add" class="w-full  cart"/>
                                    <Button v-else :loading="loading" icon="pi pi-cart-arrow-down" label="Out of Stock" class="w-full  cart" disabled/>
                                  <InputGroupAddon @click="increaseQuantity(product.id)" class="addsub cursor-pointer">
                                      <i  class="pi pi-plus"></i>
                                  </InputGroupAddon>
                              </InputGroup>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <Paginator @page="pageChange" :rows="20" :totalRecords="totalItemCount" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
          </div>
      </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const frontStore = useFrontStore()
const products:any = storeToRefs(frontStore).products
import { createId } from '@paralleldrive/cuid2';
const cart:any = storeToRefs(frontStore).cart
const {params:{id,brand_id,shop_id,category_id}} = useRoute()
const toast = useToast()
const brand_idd:any = storeToRefs(frontStore).brand_id
const shop_idd:any = storeToRefs(frontStore).shop_id
const guest_id:any = storeToRefs(frontStore).guest_id
const user_id = useCookie('user_id');
const cart_id = storeToRefs(frontStore).cart_id
const loading = ref(false)
const current_id:any = ref()
const product:any = storeToRefs(frontStore).product
const currencies:any = storeToRefs(frontStore).currencies
const selected_currency:any = storeToRefs(frontStore).selected_currency
const rating = ref()
const totalItemCount = ref()
const currentPage = ref()
const totalPages = ref()
const quantity = ref(1)
const quantities:any = ref({})
const cart_total = storeToRefs(frontStore).cart_total
const related_products:any = ref([])
const pageChange = async (event:any) => {
    const { page, rows } = event;

  currentPage.value = page + 1; // Paginator is 0-indexed, adjust it to 1-indexed
    let params = {
        page: currentPage.value,
        per_page: 60,
        shop_brand_id: brand_id,
        shop_id: shop_id,
        category_id: category_id
    }
    let productsd =  await frontStore.getRelatedProducts(params).then((data) => {
      totalItemCount.value = data?.data?.totalItemCount,
      currentPage.value = data?.data?.currentPage,
      totalPages.value = data?.data?.totalPages
      related_products.value = data?.data?.products
      related_products.value.forEach((product:any) => {
        quantities.value[product.id] = 1; // Initialize quantity for each product
      });
    })
}
const goToDetailPage = async (productt:any) => {
    // product.value = productt
    sessionStorage.setItem('product_detail',JSON.stringify(productt))
   await navigateTo(`/detail-${productt.id}-${brand_id}-${shop_id}-${productt.category.id}`,{external:true})
}
const increaseQuantity = (productId:any) => {
  if (quantities.value[productId] < 100) { // Assuming a max limit of 100
    quantities.value[productId]++;
  }
}
const  decreaseQuantity = (productId:any) => {
  if (quantities.value[productId] > 1) { // Assuming a min limit of 1
    quantities.value[productId]--;
  }
}
const findCurrency = () => {
    const currency = currencies.value.find((currency:any) => currency.id === selected_currency.value);
    return currency ? currency.iso_code : null;
}
onMounted(async () => {
   //@ts-ignore

   let gi:any
    let current_cart_id:any
    if (typeof window !== 'undefined') {
        let current_cart_id:any
        gi  = sessionStorage.getItem('guest_id');
        current_cart_id = sessionStorage.getItem('cart_id');
    }
  guest_id.value = JSON.parse(gi)
  brand_idd.value = brand_id
  shop_idd.value = shop_id

  const params = {
      page: 1,
      per_page: 10,
      shop_brand_id: brand_id,
      shop_id: shop_id
  }
  if (guest_id.value === null) {
      guest_id.value = createId()
      sessionStorage.setItem('guest_id', JSON.stringify(guest_id.value))

  }
   let cart_params = {
    shop_id: shop_id,
    user_id: user_id.value,
    guest_id: guest_id.value
   }
   if (current_cart_id) {
   let saved_cart  = await frontStore.getCartTwo(current_cart_id).then((data) => {
	  cart.value = data.data?.items
    cart_total.value = data?.data?.cart_total
    cart_id.value = current_cart_id
   })
 } else {
    let created_cart = await frontStore.createCart(cart_params).then((data) => {
	  cart.value = data?.data?.items
	  cart_total.value = data?.data?.cart_total
    cart_id.value = data?.data?.id
   }) 
 } 
  const related_params = {
      page: 1,
      per_page: 10,
      shop_brand_id: brand_id,
      shop_id: shop_id,
      category_id: category_id
  }

  await frontStore.getProducts(params).then((data) => {
      products.value = data?.data?.products
  })
  await frontStore.getRelatedProducts(related_params).then((data) => {
    totalItemCount.value = data?.data?.totalItemCount,
      currentPage.value = data?.data?.currentPage,
      totalPages.value = data?.data?.totalPages
      related_products.value = data?.data?.products
      related_products.value.forEach((product:any) => {
        quantities.value[product.id] = 1; // Initialize quantity for each product
      });
  })
})

const addToCart = async (product_id: any,price:any) => {
    current_id.value = product_id
    loading.value = true
  // Find the product in products



  if (!price) {
    toast.add({
      severity: 'warn',
      summary: 'Not added',
      detail: 'Product price not found',
      group: 'br',
      life: 3000,
    });
    console.error('Product price not found');
    loading.value = false
    return;
  }
  // Check if the product is already in the cart
    // Add the product to the cart with quantity 1
    let qnty = quantity.value
    let cart_item = {
    cart_id: cart_id.value,
    product_id: product_id,
    quantity: qnty,
    unit_price: Number(price),
    total_price: (qnty * price) 
    }
    let add_cart_item = await frontStore.addCartItem(cart_item).then( async (data) => {
      if (data?.status === "success") {
        loading.value = false
        current_id.value = null
        let new_cart = await frontStore.getCart().then((data) => {
          if (!user_id.value) {
					sessionStorage.setItem('cart_id', JSON.stringify(data?.data?.id))
					sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id))
					sessionStorage.setItem('current_cart_brand',JSON.stringify(brand_id))
				} else {
					sessionStorage.removeItem('cart_id');
					sessionStorage.removeItem('current_cart_shop_id');
					sessionStorage.removeItem('current_cart_brand');
				}
          cart.value = data.data.items
          cart_total.value = data?.data?.cart_total
        })
        toast.add({
          severity: 'info',
          summary: 'Cart',
          detail: 'Product Added',
          group: 'br',
          life: 3000,
        });
      } else {
        toast.add({
          severity: 'warn',
          summary: 'Cart',
          detail: 'Could not add product',
          group: 'br',
          life: 3000,
        });
        loading.value = false
      }
    })
    
    
};
const findProduct = (id:any) => {
  for (let i = 0; i < products.value.length; i++) {
      if (products.value[i].id === Number(id)) {
          product.value = products.value[i]
          break
      }
  }
  return product.value
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

const addEllipsis = (str: string) => str.length > 25 ? str.slice(0, 25) + '...' : str
const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)



const addToCartRelated = async (product_id: any,price:any) => {
    current_id.value = product_id
  // Find the product in products



  if (!price) {
    toast.add({
      severity: 'warn',
      summary: 'Not added',
      detail: 'Product price not found',
      group: 'br',
      life: 3000,
    });
    console.error('Product price not found');
    current_id.value = null
    return;
  }
  // Check if the product is already in the cart
    // Add the product to the cart with quantity 1
    let qnty = quantities.value[product_id]
    let cart_item = {
    cart_id: cart_id.value,
    product_id: product_id,
    quantity: quantities.value[product_id],
    unit_price: Number(price),
    total_price: (qnty * price) 
    }
    let add_cart_item = await frontStore.addCartItem(cart_item).then( async (data) => {
      if (data?.status === "success") {
        loading.value = false
        current_id.value = null
        let new_cart = await frontStore.getCart().then((data) => {
          if (!user_id.value) {
					sessionStorage.setItem('cart_id', JSON.stringify(data?.data?.id))
					sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id))
					sessionStorage.setItem('current_cart_brand',JSON.stringify(brand_id))
				} else {
					sessionStorage.removeItem('cart_id');
					sessionStorage.removeItem('current_cart_shop_id');
					sessionStorage.removeItem('current_cart_brand');
				}
          cart.value = data.data.items
          cart_total.value = data?.data?.cart_total
        })
        toast.add({
          severity: 'info',
          summary: 'Cart',
          detail: 'Product Added',
          group: 'br',
          life: 3000,
        });
      } else {
        toast.add({
          severity: 'warn',
          summary: 'Cart',
          detail: 'Could not add product',
          group: 'br',
          life: 3000,
        });
        loading.value = false
      }
    })
    
    
};
</script>
<style scoped>
img.product_image.w-full.border-round {
    width: auto !important;
    height: 365px !important;
}
.product_image {
    width: auto !important;
    height: 155px !important;
}
</style>
