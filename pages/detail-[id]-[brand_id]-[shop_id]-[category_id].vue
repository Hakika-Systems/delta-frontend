<template>
  <okMartShopHeader />
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="grid grid-nogutter -mt-3 -ml-3 -mr-3">
          <!-- Image Card -->
          <div class="col-12 lg:col-4 p-3">
            <div class="grid grid-nogutter lg:flex-column">
              <div class="col-12 lg:col-12 mb-5">
                <div class="border-round surface-section p-4 shadow-2 flex align-items-center justify-content-center">
                  <img :src="getParsedImages(product?.images)" class="product_image w-full border-round">
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
                          <Button @click="addToCart(product?.id)" class="p-button p-component flex-1 mr-5" label="Add to cart" />
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
                      <span class="text-900 font-medium text-3xl block">USD {{product?.prices[0]?.price}}</span>
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
                  <div class="flex align-items-center mb-5 cursor-pointer">{{ product?.brand }}</div>
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
                      <Button class="p-button p-component p-button-outlined p-button-secondary w-7rem p-2" label="Sort By" />
                  </div>
                  <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" styleclass="w-full border-gray-200"></div>
                  <div v-if="related_products.length === 0">No Related Products</div>
                  <div v-else class="grid">
                      <div v-for="item in related_products" :key="item.id" class="col-12 md:col-6 lg:col-3">
                          <div class="p-2">
                              <div class="border-1 surface-border border-round m-2 p-3">
                                  <div @click="navigateTo(`/detail-${item.id}`)" class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
                                      <img :src="getParsedImages(item?.images)" class="w-full h-full object-cover">
                                  </div>
                                  <div @click="navigateTo(`/detail-${item.id}`)" class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(item.name) }}</div>
                                  <div class="flex justify-content-between align-items-center">
                                      <span class="font-bold text-900 ml-2">USD {{item.price ? formatCurrency(item.price) : formatCurrency(0)}}</span>
                                      <Button @click="addToCartRelated(item.id)" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart" />
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

onMounted(async () => {
  brand_idd.value = brand_id
  shop_idd.value = shop_id

  const params = {
      page: 1,
      per_page: 10,
      shop_brand_id: brand_id,
      shop_id: shop_id
  }

  const related_params = {
      page: 1,
      per_page: 10,
      shop_brand_id: brand_id,
      category_id: category_id
  }

  await frontStore.getProducts(params).then((data) => {
      products.value = data?.data?.products
  })

  await frontStore.getRelatedProducts(related_params).then((data) => {
      related_products.value = data?.data?.products
  })

  product.value = await findProduct(id)
})

const addToCart = (product_id:any) => {
  const product = products.value.find((prod:any) => prod.id === product_id)

  if (!product) {
      console.error('Product not found')
      return
  }
//@ts-ignore
  const productInCart = cart.value.find(cartItem => cartItem.id === product_id)

  if (productInCart) {
      productInCart.quantity += quantity.value
      toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Quantity Updated', group: 'br', life: 3000 })
  } else {
      cart.value.push({ ...product, quantity: quantity.value })
      toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Added', group: 'br', life: 3000 })
  }
}

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
      const parsedImages = JSON.parse(images)
      const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''))
      return cleanedString[0]
  } catch (error) {
      return images
  }
}

const addEllipsis = (str: string) => str.length > 25 ? str.slice(0, 25) + '...' : str
const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

const navigateTo = (route: string) => {
  useRouter().push(route)
}

const addToCartRelated = (product_id:any) => {
  const product = related_products.value.find((prod:any) => prod.id === product_id)

  if (!product) {
      console.error('Product not found')
      return
  }
//@ts-ignore
  const productInCart = cart.value.find(cartItem => cartItem.id === product_id)

  if (productInCart) {
      productInCart.quantity += quantity.value
      toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Quantity Updated', group: 'br', life: 3000 })
  } else {
      cart.value.push({ ...product, quantity: quantity.value })
      toast.add({ severity: 'info', summary: 'Cart', detail: 'Product Added', group: 'br', life: 3000 })
  }
}
</script>
<style scoped>
img.product_image.w-full.border-round {
    width: auto !important;
    height: 365px !important;
}
</style>
