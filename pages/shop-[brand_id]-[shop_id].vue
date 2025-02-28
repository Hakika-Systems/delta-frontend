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
          <div class="section-title">
            <h2>Featured Products</h2>
            <div class="title-underline"></div>
          </div>
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
        class="product-image-container flex align-items-center justify-content-center mb-3 mx-auto cursor-pointer"
      >
        <NuxtImg 
          format="webp"  
          :placeholder="[50, 50, 50, 50]"   
          :src="getParsedImages(data.images)" 
          class="product_image object-cover" 
          alt="Product Image" 
          loading="lazy" 
        />
      </div>

      <!-- Name Section -->
      <div 
        @click="goToDetailPage(data)" 
        class="product-name"
      >
        {{ data.name }}
      </div>

      <!-- Price and Action Section -->
      <div class="flex flex-column mt-auto">
        <div class="flex justify-content-between align-items-center mb-3">
          <span class="product-price">
            {{ findCurrency() }}{{ data.prices[0]?.price }}
          </span>
        </div>
        
        <Button 
          
          :loading="current_id === data.id"  
          @click="addToCartFeatured(data.id, data.prices[0]?.price)" 
          icon="pi pi-cart-arrow-down" 
          label="Add" 
          class="add-to-cart-btn"
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
          <div class="section-title">
            <h2>All Products</h2>
            <div class="title-underline"></div>
          </div>
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
        <div class="product-card border-round m-2 p-3" style="min-height: 350px; display: flex; flex-direction: column; justify-content: space-between;">
          <div @click="goToDetailPage(product)" class="product-image-container flex cursor-pointer align-items-center justify-content-center mb-3 mx-auto">
            <NuxtImg format="webp" class="product_image object-cover" :placeholder="[50, 50, 50, 50]"   :src="getParsedImages(product.images)" :alt="product?.name" loading="lazy" />
          </div>
          <div @click="goToDetailPage(product)" class="product-name">
            {{product.name }}
          </div>
          <div class="mb-4"></div>
          <div class="flex justify-content-between align-items-center">
            <span class="product-price">
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
      class="quantity-input"
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
      class="add-to-cart-btn"
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
    <Dialog @hide="checkAgain()" v-model:visible="visible" modal :showHeader="false" header="Select Store" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Pick Your Nearest Store</span>
    <div class="flex align-items-center gap-3 mb-3">
        <Dropdown placeholder="Select Store" v-model="selected_shop" :options="shops" optionValue="id" class="w-full" optionLabel="name" />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button @click="goToShop()" :disabled="!selected_shop" type="button" label="Continue Shopping"></Button>
    </div>
</Dialog>
<DeltaFooter/>
</template>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useFrontStore } from '~/stores/front';
  import { createId } from '@paralleldrive/cuid2';
  const toast = useToast()
  const frontStore = useFrontStore()
  useHead({
  title: "Delta Zimbabwe - Shop Depot",
  meta: [
    { name: "description", content: "Delta makes shopping in Zimbabwe easy and convenient!" },
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
  const loading = ref(false)
  const { cart_id } = storeToRefs(frontStore)
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
  const { cart_total } = storeToRefs(frontStore)
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

      // Check for required route params first
      if (!shop_id || !brand_id) {
        console.error('Missing required route parameters');
        await navigateTo('/', { external: true });
        return;
      }

      // Get store configuration
      const storeConfig = sessionStorage.getItem('active_brand');
      if (!storeConfig) {
        console.error('Store configuration missing');
        await navigateTo('/', { external: true });
        return;
      }

      // Initialize basic data
      const parsedConfig = JSON.parse(storeConfig);
      banners.value = parsedConfig?.adverts?.filter((ad: any) => ad.display_position === "Top") || [];
      
      // Set IDs
      brand_idd.value = brand_id;
      shop_idd.value = shop_id;

      // Handle guest ID
      const gi = sessionStorage.getItem('guest_id');
      if (!gi) {
        const newGuestId = createId();
        guest_id.value = newGuestId;
        sessionStorage.setItem('guest_id', JSON.stringify(newGuestId));
      } else {
        guest_id.value = JSON.parse(gi);
      }

      // Handle cart initialization
      const current_cart_id = sessionStorage.getItem('cart_id');
      if (current_cart_id) {
        const cartResponse = await frontStore.getCartTwo(current_cart_id);
        if (cartResponse?.data) {
          cart.value = cartResponse.data.items || [];
          if (typeof cartResponse.data.cart_total === 'number') {
            cart_total.value = cartResponse.data.cart_total;
          }
          cart_id.value = current_cart_id;
        }
      } else {
        const cartResponse = await frontStore.createCart({
          shop_id,
          user_id: user_id.value,
          guest_id: guest_id.value,
        });
        if (cartResponse?.data) {
          cart.value = cartResponse.data.items || [];
          if (typeof cartResponse.data.cart_total === 'number') {
            cart_total.value = cartResponse.data.cart_total;
          }
          cart_id.value = cartResponse.data.id;
        }
      }

      // Fetch data in parallel
      const [productsData, featuredData, bannersData] = await Promise.all([
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
        frontStore.getBanners({ slug: "strip" })
      ]);

      // Process products data
      if (productsData?.data) {
        totalItemCount.value = productsData.data.totalItemCount;
        currentPage.value = productsData.data.currentPage;
        totalPages.value = productsData.data.totalPages;
        products.value = productsData.data.products;
        products.value.forEach((product: any) => {
          quantities.value[product.id] = 1;
        });
      }

      // Process featured products
      if (featuredData?.data) {
        featured_products.value = featuredData.data.products;
      }

      // Process banners
      if (bannersData?.data) {
        strip_banners.value = bannersData.data;
      }

      // Handle shop selection if needed
      if (shop_id === "undefined") {
        visible.value = true;
        const brandsResponse = await frontStore.getBrands();
        if (brandsResponse?.data?.shopbrands) {
          selectShopsByBrandId(brand_id, brandsResponse.data.shopbrands);
        }
      }

    } catch (error: any) {
      console.error('Error during initialization:', error);
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to load shop data. Please try again.',
        life: 3000
      });
      await navigateTo('/', { external: true });
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

  
  const addToCart = async (product_id: any, price: any) => {
    try {
      current_id.value = product_id;
      loading.value = true;

      const productIndex = products.value.findIndex((prod: any) => prod.id === product_id);
      if (productIndex === -1) {
        throw new Error('Product not found');
      }

      const product = products.value[productIndex];
      if (product.details[0].quantity < quantities.value[product_id]) {
        toast.add({
          severity: 'warn',
          summary: 'Not added',
          detail: 'Insufficient stock',
          group: 'br',
          life: 3000,
        });
        return;
      }

      const cart_item = {
        cart_id: cart_id.value,
        product_id: product_id,
        quantity: quantities.value[product_id],
        unit_price: Number(price),
        total_price: (quantities.value[product_id] * price)
      };

      const response = await frontStore.addCartItem(cart_item);
      if (response?.status === "success") {
        const cartData = await frontStore.getCart();
        
        if (!user_id.value) {
          sessionStorage.setItem('cart_id', JSON.stringify(cartData?.data?.id));
          sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id));
          sessionStorage.setItem('current_cart_brand', JSON.stringify(brand_id));
        }

        // Make sure cartData.data.cart_total exists and is a number
        if (typeof cartData?.data?.cart_total === 'number') {
          cart_total.value = cartData.data.cart_total;
        }
      
        cart.value = cartData.data.items;
        cart_total.value = cartData?.data?.cart_total;


        toast.add({
          severity: 'success',
          summary: 'Cart',
          detail: 'Product Added',
          group: 'br',
          life: 3000,
        });
      } else {
        throw new Error('Could not add product');
      }

    } catch (error: any) {
    
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'Could not add product',
        group: 'br',
        life: 3000,
      });
    } finally {
      loading.value = false;
      current_id.value = null;
    }
  };

  const addToCartFeatured = async (product_id: any, price: any) => {
    try {
      current_id.value = product_id;
      loading.value = true;

      const productIndex = featured_products.value.findIndex((prod: any) => prod.id === product_id);
      if (productIndex === -1) {
        throw new Error('Product not found');
      }

      const cart_item = {
        cart_id: cart_id.value,
        product_id: product_id,
        quantity: 1,
        unit_price: Number(price),
        total_price: Number(price)
      };

      const response = await frontStore.addCartItem(cart_item);
      if (response?.status === "success") {
        const cartData = await frontStore.getCart();
        
        if (!user_id.value) {
          sessionStorage.setItem('cart_id', JSON.stringify(cartData?.data?.id));
          sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id));
          sessionStorage.setItem('current_cart_brand', JSON.stringify(brand_id));
        }

        cart.value = cartData.data.items;
        cart_total.value = cartData?.data?.cart_total;

        toast.add({
          severity: 'success',
          summary: 'Cart',
          detail: 'Product Added',
          group: 'br',
          life: 3000,
        });
      } else {
        throw new Error('Could not add product');
      }

    } catch (error: any) {
    
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'Could not add product',
        group: 'br',
        life: 3000,
      });
    } finally {
      loading.value = false;
      current_id.value = null;
    }
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
    height: 430px;
}
  </style>
  <style scoped>
  .product-title {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    margin: 1rem 0;
    cursor: pointer;
    transition: color 0.3s ease;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
  }
  
  .product-title:hover {
    color: #0958A9;
  }

  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  </style>
  <style scoped>
  .section-title {
    position: relative;
    margin-bottom: 2rem;
  }
  
  .section-title h2 {
    font-size: 2rem;
    color: #15416e;
    margin: 0;
    font-weight: 600;
  }
  
  .title-underline {
    width: 60px;
    height: 4px;
    background: #c8b967;
    margin-top: 0.5rem;
  }
  
  .product-card {
    background: white;
    border: 1px solid #e9ecef !important;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .product-card:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
  
  .product-image-container {
    height: 200px;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1rem;
  }
  
  .product_image {
    max-height: 100%;
    width: auto;
    object-fit: contain;
  }
  
  .product-name {
    font-size: 1rem;
    color: #15416e;
    font-weight: 500;
    margin: 1rem 0;
    line-height: 1.4;
    height: 2.8em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    cursor: pointer;
    transition: color 0.2s ease;
  }
  
  .product-name:hover {
    color: #097fc1;
  }
  
  .product-price {
    font-size: 1.25rem;
    font-weight: 600;
    color: #15416e;
  }
  
  .add-to-cart-btn {
    background: linear-gradient(90deg, #15416e 0%, #097fc1 100%);
    border: none;
    width: 100%;
    margin-top: 1rem;
    transition: all 0.3s ease;
  }
  
  .add-to-cart-btn:hover {
    background: linear-gradient(90deg, #097fc1 0%, #15416e 100%);
    transform: translateY(-2px);
  }
  
  .add-to-cart-btn:focus {
    box-shadow: 0 0 0 2px rgba(21, 65, 110, 0.2);
  }
  
  @media screen and (max-width: 768px) {
    .section-title h2 {
      font-size: 1.75rem;
    }
    
    .product-image-container {
      height: 180px;
    }
  }
  </style>
  <style scoped>
  .custom-input-number {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .quantity-input {
    width: 100%;
  }
  
  .quantity-input :deep(.p-inputnumber-input) {
    text-align: center;
    color: #15416e;
    font-weight: 500;
  }
  
  .quantity-input :deep(.p-inputnumber-button) {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    color: #15416e;
  }
  
  .quantity-input :deep(.p-inputnumber-button:hover) {
    background: #e9ecef;
    color: #097fc1;
  }
  
  .quantity-input :deep(.p-inputnumber-button-up) {
    border-top-right-radius: 4px;
  }
  
  .quantity-input :deep(.p-inputnumber-button-down) {
    border-bottom-right-radius: 4px;
  }
  </style>