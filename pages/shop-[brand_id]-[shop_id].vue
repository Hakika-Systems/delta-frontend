<template>
    <okMartShopHeader  />
  <div class="hero heroheight">
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperNavigation,SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :navigation="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
  <SwiperSlide v-for="(image, index) in banners" :key="index">
    <NuxtImg format="webp"   width="1920" height="600" :src="image?.file" alt="OK ZIMBABWE" loading="lazy" />
    </SwiperSlide>
  </Swiper>
  </div>
  <Hero/>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="flex justify-content-between flex-wrap">
        <div class="flex align-items-center mb-4 md:mb-0">
          <div class="text-900 font-bold text-3xl">Featured Products</div>
        </div>
      </div>
      <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" styleclass="w-full border-gray-200" style="justify-content: center;">
        <!---->
      </div>
      <Carousel 
  :value="featured_products" 
  :numVisible="5" 
  :numScroll="1" 
  :responsiveOptions="responsiveOptions" 
  :autoplayInterval="3000"
>
  <template #item="{ data }">
    <div 
      class="border-1 surface-border border-round m-2 p-3 product-card"
      style="min-height: 350px; display: flex; flex-direction: column;"
    >
      <!-- Image Section -->
      <div 
        @click="goToDetailPage(data)" 
        class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto cursor-pointer card-image"
      >
        <NuxtImg 
          format="webp"  
          :placeholder="[50, 50, 50, 50]"   
          :src="getParsedImages(data.images)" 
          class="product_image object-cover" 
          alt="OK Shopeasy Strip Ad" 
          loading="lazy" 
        />
      </div>

      <!-- Name Section -->
      <div 
        @click="goToDetailPage(data)" 
        class="mb-3 font-medium nametext cursor-pointer card-title"
      >
        {{ data.name }}
      </div>

      <!-- Price and Action Section -->
      <div class="flex flex-column mt-auto">
        <div class="flex justify-content-between align-items-center mb-3">
          <span class="font-bold text-900 ml-2">
             {{ data.prices[0]?.price }}
          </span>
        </div>
        
        <Button 
          
          :loading="current_id === data.id"  
          @click="addToCartFeatured(data.id, data.prices[0]?.price)" 
          icon="pi pi-cart-arrow-down" 
          label="Add" 
          class="w-full mt-3 cart"
        />
        <!-- <Button 
          v-else  
          icon="pi pi-cart-arrow-down"  
          label="OUT OF STOCK" 
          class="w-full mt-3 cart" 
          disabled
        /> -->
      </div>
    </div>
  </template>
</Carousel>

    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="flex justify-content-between flex-wrap">
        <div class="flex align-items-center mb-4 md:mb-0">
          <div class="text-900 font-bold text-3xl">All Products</div>
        </div>
      </div>
      <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" styleclass="w-full border-gray-200" style="justify-content: center;">
        <!---->
      </div>
      <div class="flex ">
        <div class="col-12 grid grid-nogutter align-items-center">
        <div class="col-12">
          <div class="grid">
            <div class="myprods">
  <template v-for="(product, index) in products">
    <!-- Product Card -->
    <div class="col-12 md:col-6 lg:col-3">
      <div class="p-2">
        <div class="border-1 surface-border border-round m-2 p-3" style="min-height: 350px; display: flex; flex-direction: column; justify-content: space-between;">
          <div @click="goToDetailPage(product)" class="surface-50 flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
            <NuxtImg format="webp" class="product_image object-cover" :placeholder="[50, 50, 50, 50]"   :src="getParsedImages(product.images)" :alt="product?.name" loading="lazy" />
          </div>
          <div @click="goToDetailPage(product)" class="mb-3 font-medium nametext cursor-pointer">
            {{product.name }}
          </div>
          <div class="mb-4"></div>
          <div class="flex justify-content-between align-items-center">
            <span class="font-bold text-900 ml-2">
              {{ findCurrency() }}{{ product.prices[0]?.price  }}
            </span>
          </div>
          <div class="custom-input-number">
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
        <span class="pi pi-plus" />
      </template>
      <!-- Custom Decrement Button -->
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <!-- Add to Cart Button -->
    <Button v-if="product?.details[0]?.quantity >= 1"
      label="Add"
      :loading="current_id === product.id"
      icon="pi pi-cart-arrow-down"
      class="w-full p-button-success"
      @click="addToCart(product.id, product.prices[0]?.price)"
    />
    <Button v-else  icon="pi pi-cart-arrow-down" label="Out of Stock" class="w-full mt-1 cart" disabled/>
  </div>
        </div>
      </div>
     </div>

    <!-- Banner after every 8 products -->
    <div v-if="(index + 1) % 12 === 0" :key="'banner-' + index" class="col-12">
      <NuxtImg format="webp"  :placeholder="[50, 50, 50, 50]"   :src="strip_banners[0]?.file" alt="Strip Banner" class="w-full"  loading="lazy" />
    </div>
  </template>
</div>


          </div>
          <Paginator @page="pageChange" :rows="60" :totalRecords="totalItemCount" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
        </div>
      </div>
      </div>
    </div>
    <Dialog @hide="checkAgain()" v-model:visible="visible" modal showHeader="false" header="Select Store" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Pick Your Nearest Store</span>
    <div class="flex align-items-center gap-3 mb-3">
        <Dropdown placeholder="Select Store" v-model="selected_shop" :options="shops" optionValue="id" class="w-full" optionLabel="name" />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button @click="goToShop()" :disabled="!selected_shop" type="button" label="Continue Shopping"></Button>
    </div>
</Dialog>
<DeltaFooter/>

<!-- Error State -->
<div v-if="error" class="flex flex-column align-items-center justify-content-center p-4">
  <i class="pi pi-exclamation-triangle text-red-500 text-5xl mb-4"></i>
  <h2>{{ error }}</h2>
  <p class="text-600 mb-4">{{ errorDetails }}</p>
  <div class="flex gap-3">
    <Button label="Try Again" @click="initializePage" severity="primary" />
    <Button label="Return Home" @click="goHome" severity="secondary" outlined />
  </div>
</div>

<!-- Loading Overlay -->
<div v-if="loading" class="fixed top-0 left-0 w-full h-full flex justify-content-center align-items-center bg-black-alpha-40" style="z-index: 1000;">
  <ProgressSpinner />
</div>
</template>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useFrontStore } from '~/stores/front';
  import { createId } from '@paralleldrive/cuid2';
  const toast = useToast()
  const frontStore = useFrontStore()
  useHead({
  title: "OK ShopEasy Zimbabwe - Shop Page",
  meta: [
    { name: "description", content: "OKshop makes shopping in Zimbabwe easy and convenient!" },
  ],
});
  const mytoken = useCookie('token');
  const name = useCookie('username');
  const rows = ref(20)
  const totalItemCount = ref()
  const banners = ref()
  const currentPage = ref()
  const totalPages = ref()
  const first = ref(0);
  const user_id = useCookie('user_id');
  const visible = ref(false)
  const loading = ref(true)
  const cart_id:any = storeToRefs(frontStore).cart_id
  const product = storeToRefs(frontStore).product
  const brand_idd:any = storeToRefs(frontStore).brand_id
  const shop_idd:any = storeToRefs(frontStore).shop_id
  const strip_banners:any = ref()
  const {params:{brand_id,shop_id}} = useRoute()
  const selected_shop = ref()
  const quantity = ref(1)
  const cart:any = storeToRefs(frontStore).cart
  const guest_id:any = storeToRefs(frontStore).guest_id
  const featured_products:any = ref()
  const current_id:any = ref()
  const quantities:any = ref({})
  const currencies:any = storeToRefs(frontStore).currencies
  const selected_currency:any = storeToRefs(frontStore).selected_currency
  const brands = ref()
  const shops = ref()
  const cart_total = storeToRefs(frontStore).cart_total
  const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
  ]);

  const getBrandConfiguration = () => {
    if (typeof window !== 'undefined') {
        // Retrieve brand configuration from sessionStorage
        const storedConfig = sessionStorage.getItem('active_brand');
        return storedConfig ? JSON.parse(storedConfig) : null;
    }
    return null;
}

//@ts-ignore
const active_brand = ref(getBrandConfiguration())

const buttonColor = active_brand?.value?.button_color;

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
  const products:any = storeToRefs(frontStore).products
  const currency = ref("USD")
  const addEllipsis = (str:string) => {
    return str.length > 23 ? str.slice(0, 23) + '...' : str;
  };
  const formatCurrency = (value:any) => {
    if(value === undefined) {
      return 0
    }
    return value.toLocaleString('en-US', { style: 'currency', currency: currency.value });
  };
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
  const goToDetailPage = (productt:any) => {
    // product.value = productt
    sessionStorage.setItem('product_detail',JSON.stringify(productt))
    navigateTo(`/detail-${productt?.id}-${brand_id}-${shop_id}-${productt?.category_id}`,{external:true})
  }
  const checkAgain = () => {
    if (shop_id === "undefined") {
      visible.value = true
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

    // Multiply the price by the selected currency's conversion rate
    const convertedPrice = price * selectedRate;

    // Return the converted price
    return convertedPrice.toFixed(2);
};

  const pageChange = async (event:any) => {
    const { page, rows } = event;

  currentPage.value = page + 1; // Paginator is 0-indexed, adjust it to 1-indexed
    let params = {
        page: currentPage.value,
        per_page: 60,
        shop_brand_id: brand_id,
        shop_id: shop_id
    }
    let productsd =  await frontStore.getProducts(params).then((data) => {
      totalItemCount.value = data?.data?.totalItemCount,
      currentPage.value = data?.data?.currentPage,
      totalPages.value = data?.data?.totalPages
      products.value = data?.data?.products
      products.value.forEach((product:any) => {
        quantities.value[product.id] = 1; // Initialize quantity for each product
      });
    })
  }
  onMounted(async () => {
  try {
    if (typeof window === 'undefined') return;

    // Initialize variables
    const gi = sessionStorage.getItem('guest_id');
    const current_cart_id = sessionStorage.getItem('cart_id');
    const storeConfig = sessionStorage.getItem('active_brand');

    if (!storeConfig) {
      console.error('active_brand is missing');
      // navigateTo('/', { external: true }); // Redirect to homepage
      // return;
    }

    const parsedConfig = JSON.parse(storeConfig);
    const adverts = parsedConfig?.adverts || [];
    banners.value = adverts.filter((ad: any) => ad.display_position === "Top");

    guest_id.value = gi ? JSON.parse(gi) : null;

    // Redirect if essential IDs are missing
    if (!shop_id || !brand_id || shop_id === "undefined") {
      visible.value = shop_id === "undefined";
      // navigateTo('/', { external: true });
      // return;
    }

    // Update brand and shop IDs
    brand_idd.value = brand_id;
    shop_idd.value = shop_id;

    // Fetch data concurrently
    const [productsResponse, featuredProductsResponse, bannersResponse] = await Promise.all([
      frontStore.getProducts({
        page: 1,
        per_page: 60,
        shop_brand_id: brand_id,
        shop_id: shop_id,
      }),
      frontStore.getFeaturedProducts({
        page: 1,
        per_page: 80,
        is_shop_brand: false,
        id: shop_id,
      }),
      frontStore.getBanners({ slug: "strip" }),
    ]);

    // Process products
    const productsData = productsResponse?.data || {};
    totalItemCount.value = productsData.totalItemCount || 0;
    currentPage.value = productsData.currentPage || 1;
    totalPages.value = productsData.totalPages || 0;
    products.value = productsData.products || [];
    products.value.forEach((product: any) => {
      quantities.value[product.id] = 1; // Initialize quantity
    });

    // Process featured products
    featured_products.value = featuredProductsResponse?.data?.products || [];

    // Process banners
    strip_banners.value = bannersResponse?.data || [];

    // Handle guest ID creation if missing
    if (!guest_id.value) {
      guest_id.value = createId();
      sessionStorage.setItem('guest_id', JSON.stringify(guest_id.value));
    }

    // Handle cart operations
    if (current_cart_id) {
      const cartResponse = await frontStore.getCartTwo(current_cart_id);
      cart.value = cartResponse?.data?.items || [];
      cart_total.value = cartResponse?.data?.cart_total || 0;
      cart_id.value = current_cart_id;
    } else {
      const cartResponse = await frontStore.createCart({
        shop_id,
        user_id: user_id.value,
        guest_id: guest_id.value,
      });
      cart.value = cartResponse?.data?.items || [];
      cart_total.value = cartResponse?.data?.cart_total || 0;
      cart_id.value = cartResponse?.data?.id || null;
    }

    // Fetch brands if shop_id is undefined
    if (visible.value) {
      const brandsResponse = await frontStore.getBrands();
      const brands = brandsResponse?.data?.shopbrands || [];
      selectShopsByBrandId(brand_id, brands);
    }
  } catch (error: any) {
    console.error('Error during onMounted execution:', error.message);
    navigateTo('/', { external: true }); // Redirect to homepage
  }
});


 const goToShop = () => {
  navigateTo(`shop-${brand_id}-${selected_shop.value}`,{external:true})
 }
 const selectShopsByBrandId = (brandId:any,brandss:any) => {
  // Find the brand with the given ID
  const brand = brandss.find((b:any) => b.id === Number(brandId));
  if (brand) {
    // Return the shops of the found brand
    shops.value = brand.shops
    return brand.shops;
  } else {
    // Return an empty array if the brand is not found
    return [];
  }
}

  
  const addToCart = async (product_id: any,price:any) => {
    current_id.value = product_id
    loading.value = true
  // Find the product in products
  const productIndex = products.value.findIndex((prod:any) => prod.id === product_id);

  if (productIndex === -1) {
    loading.value = false
    return;
  }

  const product = products.value[productIndex];
  const productPrice = product.prices.length > 0 ? product.prices[0].price : null;

  if (!productPrice) {
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
  if (products.value[productIndex].details[0].quantity < 1) {
    toast.add({
      severity: 'warn',
      summary: 'Not added',
      detail: 'Product out of stock',
      group: 'br',
      life: 3000,
    });
    loading.value = false
  }

  // Check if the product is already in the cart
    // Add the product to the cart with quantity 1
    let qnty = quantities.value[product_id]
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
        current_id.value = null
      }
    })
};
const addToCartFeatured = async (product_id: any, price: any) => {
  try {
    current_id.value = product_id
    loading.value = true

    if (!cart_id.value) {
      throw new Error('Cart not initialized')
    }

    // Clean the cart ID
    const cleanCartId = cart_id.value.toString().replace(/['"]+/g, '')
    console.log('Adding to cart with ID:', cleanCartId)

    let cart_item = {
      cart_id: cleanCartId,
      product_id: product_id,
      quantity: 1,
      unit_price: Number(price),
      total_price: Number(price),
    }

    const response = await frontStore.addCartItem(cart_item)
    
    if (response?.status === "success") {
      // Update cart with clean cart ID
      const cartResponse = await frontStore.getCartTwo(cleanCartId)
      cart.value = cartResponse?.data?.items || []
      cart_total.value = cartResponse?.data?.cart_total || 0

      // Store clean cart ID
      if (!user_id.value) {
        sessionStorage.setItem('cart_id', cleanCartId)
        sessionStorage.setItem('current_cart_shop_id', shop_id.toString())
        sessionStorage.setItem('current_cart_brand', brand_id.toString())
      }

      toast.add({
        severity: 'info',
        summary: 'Cart',
        detail: 'Product Added',
        group: 'br',
        life: 3000,
      })
    } else {
      throw new Error('Could not add product')
    }
  } catch (err: any) {
    console.error('Add to cart error:', err)
    toast.add({
      severity: 'warn',
      summary: 'Cart',
      detail: err.message || 'Could not add product',
      group: 'br',
      life: 3000,
    })
  } finally {
    loading.value = false
    current_id.value = null
  }
}

// Page state
const error = ref<string | null>(null)
const errorDetails = ref<string | null>(null)

// Initialize cart with better error handling
const initializeCart = async (shop_id: string, user_id: string | null, guest_id: string) => {
  try {
    // Try to get existing cart
    const currentCartId = sessionStorage.getItem('cart_id')
    
    if (currentCartId) {
      try {
        // Remove any quotes from the cart ID
        const cleanCartId = currentCartId.replace(/['"]+/g, '')
        console.log('Fetching cart with ID:', cleanCartId)
        
        const response = await frontStore.getCartTwo(cleanCartId)
        if (response?.data) {
          console.log('Using existing cart:', response.data)
          return {
            items: response.data.items || [],
            total: response.data.cart_total || 0,
            id: cleanCartId
          }
        }
      } catch (err: any) {
        console.log('Cart fetch error:', err.response?.status)
        if (err.response?.status === 404) {
          console.log('Cart not found, removing from session')
          sessionStorage.removeItem('cart_id')
        }
      }
    }

    // Create new cart if no existing cart or 404 error
    console.log('Creating new cart...')
    try {
      // Determine if we should use guest_id or user_id
      const cartPayload = guest_id ? 
        {
          user_id: null,
          guest_id: guest_id,
          shop_id: parseInt(shop_id)
        } : 
        {
          user_id: parseInt(user_id!),
          guest_id: null,
          shop_id: parseInt(shop_id)
        }

      console.log('Cart creation payload:', cartPayload)

      const response = await $fetch('https://api.hakikasystems.co.zw/api/carts', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartPayload)
      })

      if (!response || !response.data || !response.data.id) {
        throw new Error('Invalid cart creation response')
      }

      // Store cart ID without quotes
      const newCartId = response.data.id.toString()
      console.log('New cart created with ID:', newCartId)
      sessionStorage.setItem('cart_id', newCartId)
      
      return {
        items: response.data.items || [],
        total: response.data.cart_total || 0,
        id: newCartId
      }
    } catch (createErr: any) {
      console.error('Failed to create new cart:', createErr)
      if (createErr.response?.data?.errors) {
        throw new Error(`Cart creation failed: ${createErr.response.data.errors.join(', ')}`)
      }
      throw new Error('Failed to create new cart')
    }
  } catch (err) {
    console.error('Cart initialization error:', err)
    error.value = 'Cart Error'
    errorDetails.value = err.message || 'Failed to initialize cart'
    return null
  }
}

// Initialize page function
const initializePage = async () => {
  try {
    loading.value = true
    error.value = null
    errorDetails.value = null

    // Validate route params
    if (!shop_id || !brand_id || shop_id === "undefined") {
      error.value = 'Invalid Shop Parameters'
      errorDetails.value = 'The shop information is incomplete'
      return
    }

    // Set store IDs
    brand_idd.value = brand_id
    shop_idd.value = shop_id

    // Ensure we have a guest ID if no user ID
    if (!user_id.value) {
      const storedGuestId = sessionStorage.getItem('guest_id')
      guest_id.value = storedGuestId ? JSON.parse(storedGuestId) : createId()
      if (!storedGuestId) {
        sessionStorage.setItem('guest_id', JSON.stringify(guest_id.value))
      }
    }

    // Initialize cart with proper ID handling
    const cartData = await initializeCart(
      shop_id,
      user_id.value,
      !user_id.value ? guest_id.value : null // Only use guest_id if no user_id
    )

    if (!cartData) {
      error.value = 'Cart Initialization Failed'
      errorDetails.value = 'Unable to create or retrieve cart. Please try again.'
      return
    }

    // Update store with cart data
    cart.value = cartData.items
    cart_total.value = cartData.total
    cart_id.value = cartData.id

    // Get store config and continue with other initialization...
    const storeConfig = sessionStorage.getItem('active_brand')
    if (storeConfig) {
      const parsedConfig = JSON.parse(storeConfig)
      const adverts = parsedConfig?.adverts || []
      banners.value = adverts.filter((ad: any) => ad.display_position === "Top")
    }

    // Rest of your initialization code...

  } catch (err: any) {
    console.error('Page initialization error:', err)
    error.value = 'Shop Loading Error'
    errorDetails.value = err.message || 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}

// Initialize on mount
onMounted(() => {
  if (!process.client) return
  initializePage()
})

const goHome = () => {
  navigateTo('/', { external: true })
}
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
  <style>
  .th-hero-wrapper {
      position: relative;
      z-index: 2;
      width: 1920px !important;
      height: 480px !important;
      overflow: hidden;
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
  .myprods {
    display: contents !important;
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
    background: #c8b967 !important;
    border: 1px solid #c8b967 !important;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
    border-radius: 6px;
    outline-color: transparent;
}
    </style>
    <style>

    .swiper-button-prev, .swiper-button-next {
      color:#231f20
    }
    .swiper-button-prev:after, .swiper-button-next:after {
        font-family: swiper-icons;
        font-size: 20px !important;
        text-transform: none !important;
        letter-spacing: 0;
        font-variant: initial;
        line-height: 1;
    }
    .hero {
      /* height: 600px; */
      overflow: hidden;
    }
    
    .hero .swiper-container {
      height: 100%;
    }
    
    .hero .swiper-slide img {
      width: 100%;
      height: auto;
    }
    span.tagline {
        background-color: #0052ff;
        padding: 10px;
        color: white;
        font-size: 15px;
        border-radius: 21px;
        width: 250px;
    }
    .border-1 {
      border-style: none !important;
    }
    .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
        background-color: #d41f0c !important;
    }
    /* .hero {
        display: flex;
        height: 100vh;
        background-color: #121c2d;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
    } */
    
    .hero-left {
      flex: 1;
      padding: 0px 0px 60px 0; /* Remove padding on the left */
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 80px;
    }
    
    .TagLine {
        font-size: 3em;
        margin-bottom: 15px;
        color: white;
    }
    
    .Heading-tag {
      color: #fd8d14;
    }
    
    
    .Hero-button:hover {
        background-color: #f2f3f7;
        border: 1px solid #231f20;
        color: #313131;
    }
    .avatar-section {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }
    
    .avatar-group {
      display: flex;
      gap: -20px;
    }
    
    .avatar-group img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: transform 0.3s;
      margin-left: -5px;
    }    
    /* Responsive styles for smaller devices */
    @media only screen and (max-width: 768px) {
      .hero {
        flex-direction: column;
      }
    
      .hero-left {
        margin-top: 5rem;
        text-align: center;
         margin-left: 0px;
      }
    
      
      .avatar-section {
        justify-content: center;
        flex-direction: column;
        gap: 20px;
      }
    
      .avatar-text {
        text-align: center;
      }
      
      .avatar-num{
     color: #fd8d14;
       font-size: 1em;
      font-weight:bold;
        
    }
    
    }
    </style>
    <style>
    .product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content is spaced evenly */
  height: 100%; /* Ensures all cards take the full height of the container */
}

.card-image {
  height: 150px; /* Fixed height for image container */
  width: 100%;
}

.product_image {
  height: 100%; /* Ensures the image fills the container */
  width: auto; /* Maintain aspect ratio */
}
.card-button {
  margin-top: auto; /* Push buttons to the bottom */
}
.p-carousel-container {
    height: 400px;
}
  </style>