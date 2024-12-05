<template>
  <okMartShopHeader />
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="grid grid-nogutter -mt-3 -ml-3 -mr-3">
          <!-- Image Card -->
          <div class="col-12 lg:col-4 p-3">
            <div class="grid grid-nogutter lg:flex-column">
              <div class="col-12 lg:col-12 mb-5">
                <div class="border-round surface-section p-4 shadow-2 flex align-items-center justify-content-center">
                  <NuxtImg :src="getParsedImages(product?.images)" class="product_image border-round" loading="lazy" format="webp" />
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
                      <span class="text-900 font-medium text-3xl block">{{ findCurrency() }} {{product?.prices[0]?.price ? findConversionRatePrice(product?.prices[0]?.price) : "0.00"}}</span>
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
                                      <NuxtImg :src="getParsedImages(item?.images)" class="w-full product_image object-cover" loading="lazy" format="webp" />
                                  </div>
                                  <div @click="goToDetailPage(item)" class="mb-3 font-medium nametext cursor-pointer">{{ addEllipsis(item.name) }}</div>
                                  <div class="flex justify-content-between align-items-center">
                                      <span class="font-bold text-900 ml-2">{{ findCurrency() }} {{item?.prices[0]?.price ? findConversionRatePrice(item?.prices[0]?.price) : formatCurrency(0)}}</span>
                                  </div>
                                  <div v-if="product?.details[0]?.quantity >= 1" class="custom-input-number">
    <!-- InputNumber with stacked buttons -->
    <InputNumber
      v-model="quantities[product.id]"
      mode="decimal"
      :min="1"
      :step="1"
      inputId="vertical-buttons"
      showButtons
      buttonLayout="stacked"
      class="w-12rem"
    >
      <!-- Custom Increment Button -->
      <template #incrementbuttonicon>
        <span @click="increaseQuantity(product.id)"  class="pi pi-plus" />
      </template>
      <!-- Custom Decrement Button -->
      <template #decrementbuttonicon>
        <span  @click="decreaseQuantity(product.id)" class="pi pi-minus" />
      </template>
    </InputNumber>

    <!-- Add to Cart Button -->
    <Button
      label="Add"
      :loading="current_id === product.id"
      icon="pi pi-cart-arrow-down"
      class="w-full p-button-success"
      @click="addToCart(product.id, product.prices[0]?.price)"
    />
  </div>
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
useHead({
  title: "OK ShopEasy Zimbabwe - Detail Page",
  meta: [
    { name: "description", content: "OKshop makes shopping in Zimbabwe easy and convenient!" },
  ],
});
const toast = useToast()
const brand_idd:any = storeToRefs(frontStore).brand_id
const shop_idd:any = storeToRefs(frontStore).shop_id
const guest_id:any = storeToRefs(frontStore).guest_id
const user_id = useCookie('user_id');
const cart_id = storeToRefs(frontStore).cart_id
const loading = ref(false)
const current_id:any = ref()
const product:any = ref()
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
	const currenciess = currencies.value;
//@ts-ignore
    const currency = currenciess.find(item => item.currency_id === selected_currency.value);

return currency ? currency.currency.iso_code : null;

}
const findConversionRatePrice = (price:any) => {
    const currenciess = currencies.value;

    // Step 1: Find the default currency
	//@ts-ignore
    const defaultCurrency = currenciess.find(item => item.default === 1);
    if (!defaultCurrency) {
        return null; // Return null or handle error if no default currency is found
    }

    // Step 2: Find the selected currency
	//@ts-ignore
    const selectedCurrency = currenciess.find(item => item.currency_id === selected_currency.value);
    if (!selectedCurrency) {
        return null; // Return null or handle error if no selected currency is found
    }

    // Step 3: Determine the conversion rate
    const selectedRate = parseFloat(selectedCurrency.conversion_rate);

    // Multiply the price by the selected currency’s conversion rate
    const convertedPrice = price * selectedRate;

    // Return the converted price
    return convertedPrice.toFixed(2);
};
const getBrandConfiguration = () => {
    if (typeof window !== 'undefined') {
        // Retrieve brand configuration from sessionStorage
        const storedConfig = sessionStorage.getItem('active_brand');
        
        if (!storedConfig) {
            // If no brand configuration is found, use navigateTo to redirect to the home page
            navigateTo('/',{external: true}); // Adjust the URL as needed
            return null;
        }
        
        return JSON.parse(storedConfig); // Return the parsed brand configuration
    }
    return null;
}
const active_brand = ref(getBrandConfiguration())

const buttonColor = active_brand?.value?.button_color;
onMounted(async () => {
  let gi: any;
  let current_cart_id: any;
  let prod: any;

  if (typeof window !== 'undefined') {
    try {
      // Retrieve session storage values
      gi = sessionStorage.getItem('guest_id');
      prod = sessionStorage.getItem('product_detail');
      current_cart_id = sessionStorage.getItem('cart_id');

      if (!prod) {
        throw new Error('Missing required session storage data');
      }
    } catch (error:any) {
      console.error('Error in sessionStorage retrieval:', error.message);
      navigateTo('/', { external: true }); // Redirect to homepage
      return;
    }
  }

  try {
    // Parse session storage data
    guest_id.value = JSON.parse(gi);
    product.value = JSON.parse(prod);

    // Validate parsed data
    if (!guest_id.value || !product.value) {
      throw new Error('Invalid session storage data');
    }

    // Set brand and shop IDs
    brand_idd.value = brand_id;
    shop_idd.value = shop_id;

    const params = {
      page: 1,
      per_page: 10,
      shop_brand_id: brand_id,
      shop_id: shop_id,
    };

    // Generate a new guest ID if missing
    if (guest_id.value === null) {
      guest_id.value = createId();
      sessionStorage.setItem('guest_id', JSON.stringify(guest_id.value));
    }

    const cart_params = {
      shop_id: shop_id,
      user_id: user_id.value,
      guest_id: guest_id.value,
    };

    // Retrieve or create a cart
    if (current_cart_id) {
      await frontStore.getCartTwo(current_cart_id).then((data) => {
        cart.value = data.data?.items;
        cart_total.value = data?.data?.cart_total;
        cart_id.value = current_cart_id;
      });
    } else {
      await frontStore.createCart(cart_params).then((data) => {
        cart.value = data?.data?.items;
        cart_total.value = data?.data?.cart_total;
        cart_id.value = data?.data?.id;
      });
    }

    const related_params = {
      page: 1,
      per_page: 10,
      shop_brand_id: brand_id,
      shop_id: shop_id,
      category_id: category_id,
    };

    // Fetch products and related products
    await frontStore.getProducts(params).then((data) => {
      products.value = data?.data?.products;
    });

    await frontStore.getRelatedProducts(related_params).then((data) => {
      totalItemCount.value = data?.data?.totalItemCount;
      currentPage.value = data?.data?.currentPage;
      totalPages.value = data?.data?.totalPages;
      related_products.value = data?.data?.products;

      // Initialize quantities for related products
      related_products.value.forEach((product: any) => {
        quantities.value[product.id] = 1;
      });
    });
  } catch (error:any) {
    console.error('Error during processing:', error.message);
    navigateTo('/', { external: true }); // Redirect to homepage
    return;
  }
});

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
.custom-input-number {
  display: flex;
  align-items: center;
  gap: 8px; /* Space between InputNumber and Add to Cart button */
}
span.p-inputnumber-button-group {
   background-color: #f5f1f1;
}
span.pi.pi-plus {
   font-size: 10px !important;
   padding: 10px !important;
}
span.pi.pi-minus {
   font-size: 10px !important;
   padding: 10px !important;
}

.p-inputnumber {
  display: flex;
  flex-direction: row-reverse; /* Ensure buttons are on the right of the input */
  align-items: stretch;
  justify-content: center;
}

.p-inputnumber-button {
  flex: none;
  width: 30px;
  height: 50%; /* Buttons are vertically stacked */
  display: flex;
  justify-content: center;
  align-items: center;
}

.p-inputnumber-input {
  flex: 1;
  text-align: center;
}

.w-12rem {
  width: 12rem; /* Set a fixed width for the InputNumber */
}

.ml-3 {
  margin-left: 1rem; /* Space between InputNumber and the Add to Cart button */
}
</style>
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
<style>
 .ripple {
 position: absolute;
 border-radius: 50%;
 transform: scale(0);
 animation: ripple-effect 0.6s linear;
 background-color: rgba(255, 255, 255, 0.7);
 pointer-events: none;
 }
 .p-inputgroup.w-full {
   height: 40px;
   margin-top: 3px;
 }
 @keyframes ripple-effect {
 to {
   transform: scale(4);
   opacity: 0;
 }
 }
 .product_image {
   width: auto !important;
   height: 155px !important;
 }
 .p-tag {
   background: #003e95;
   color: #ffffff;
   text-transform: uppercase;
 }
 .p-inputgroup-addon.firstinput {
   width: 188px !important;
   padding: 1px !important;
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
 .banner{
   width: 100% !important;
   height: 100% !important
   ;
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
 .side-banner {
     
     
     margin-top: 12px;
 }
 .p-megamenu.p-component.p-megamenu-horizontal.jjmenu {
    display: flex;
    justify-content: flex-start !important;
}
 </style>
   <style scoped>
   .p-inputtext {
       border: none !important;
   }
   .p-inputtext:focus {
       outline: none;
   }
   .p-button {
   color: #ffffff;
   background: v-bind('buttonColor') !important;
   border: 1px solid v-bind('buttonColor') !important;
   padding: 0.5rem 1rem;
   font-size: 1rem;
   transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
   border-radius: 6px;
   outline-color: transparent;
}
   </style>
