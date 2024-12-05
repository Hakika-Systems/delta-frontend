<template>
  <okMartShopHeader />
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <!-- Order Tracking Header -->
    <div class="flex justify-content-between flex-wrap">
      <div class="flex align-items-center mb-4 md:mb-0">
        <div class="text-900 font-bold text-3xl">Track Your Order</div>
      </div>
    </div>

    <!-- Input for Order ID -->
    <InputGroup class="mb-4">
      <InputText placeholder="Enter your Order ID" class="topsearchh" v-model="orderID" />
      <Button :loading="loading" label="Track Order" icon="pi pi-search" @click="fetchOrderDetails" />
    </InputGroup>

    <!-- Divider -->
    <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full border-gray-200"></div>

    <!-- Order Status Section -->
    <div v-if="orderDetails" class="mt-6">
      <div class="text-900 font-bold text-2xl mb-4">Order Details</div>
      <div class="p-4 border-1 surface-border border-round">
        <!-- Order Details -->
        <div class="mb-4">
          <div><strong>Order Reference:</strong> {{ orderDetails?.order_ref }}</div>
        </div>

        <!-- Stages -->
        <div class="flex align-items-center justify-content-start gap-6 relative">
          <div
            v-for="(stage, index) in orderDetails.stages"
            :key="stage.id"
            class="stage-card p-3 border-round flex align-items-center relative"
            :class="{
              'border-green-500': stage.current === 1,
              'border-gray-300': stage.current !== 1,
              'border-2': true,
            }"
          >
            <!-- Icon -->
            <div class="surface-50 p-2 border-round mr-3">
              <i
                :class="[ 
                  'text-900 text-xl',
                  stage?.icon ? `pi ${stage.icon}` : 'pi pi-shopping-cart'
                ]"
              ></i>
            </div>

            <!-- Stage Details -->
            <div>
              <div class="text-900 font-bold tyt">{{ stage?.status }}</div>
              <div class="text-600 text-sm">{{ formatDate(stage?.timestamp) }}</div>
              <div class="text-600 text-sm tyt">Type: {{ stage?.delivery_option }}</div>
            </div>

            <!-- Connecting Arrow -->
            <div
              v-if="index < orderDetails.stages.length - 1"
              class="arrow"
              :class="{ 'arrow-green': stage.current === 1 }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading and Error States -->
    <div v-else class="text-center mt-6">
      <small>Order not found, Contact our support team for further assistance</small>
    </div>
    
  </div>
  <Footer />
</template>


<script setup lang="ts">
import { useFrontStore } from '~/stores/front';
import { createId } from '@paralleldrive/cuid2';
import { useToast } from 'primevue/usetoast';
const {params:{track_id,shop_id,brand_id}} = useRoute()
const toast = useToast();
const frontStore = useFrontStore();
useHead({
  title: "OK ShopEasy Zimbabwe - Order Tracking",
  meta: [
    { name: "description", content: "OKshop makes shopping in Zimbabwe easy and convenient!" },
  ],
});
const orderID = ref();
const orderDetails:any = ref();
const loading = ref(false);
const error = ref(null);

const activeBrand = ref(getBrandConfiguration());

// Retrieve brand configuration
function getBrandConfiguration() {
  if (typeof window !== 'undefined') {
    const storedConfig = sessionStorage.getItem('active_brand');
    return storedConfig ? JSON.parse(storedConfig) : null;
  }
  return null;
}

// Format currency
const findCurrency = () => activeBrand.value?.currency || 'USD';
const formatCurrency = (value:any) => value?.toLocaleString('en-US', { style: 'currency', currency: findCurrency() }) || '0';

// Fetch order details
const fetchOrderDetails = async () => {
  loading.value = true;
  error.value = null;

  try {
    let params = {
    order_ref: orderID.value
  }
  let my_order = await frontStore.trackOrder(params).then((data) => {
    orderDetails.value = data?.data
    loading.value = false;
  })
  } catch (error:any) {
    error.value = 'Order not found. Please check your Order ID.';
  } finally {
    loading.value = false;
  }
};

// Format date
const formatDate = (date:any) => new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// Order status icon
const getStatusIcon = (status:any) => {
  switch (status.name.toLowerCase()) {
    case 'shipped': return 'pi pi-truck';
    case 'delivered': return 'pi pi-check-circle';
    case 'processing': return 'pi pi-spinner pi-spin';
    default: return 'pi pi-info-circle';
  }
};
const active_brand = ref(getBrandConfiguration())

const buttonColor = active_brand?.value?.button_color;

// On component mount
onMounted(async() => {
  if (!activeBrand.value) {
    navigateTo('/', { external: true });
  }
  orderID.value = track_id;
  let params = {
    order_ref: track_id
  }
  let my_order = await frontStore.trackOrder(params).then((data) => {
    orderDetails.value = data?.data
  })
});
</script>

  <style>
  .stage-card {
  position: relative;
  display: flex;
  align-items: center;
}

.arrow {
    position: absolute;
    top: 50%;
    right: -38px;
    width: 32px;
    height: 2px;
    background-color: #d1d5db;
    transform: translateY(-50%);
}

.arrow-green {
  background-color: #22c55e; /* Green color for completed stages */
}

.stage-card:last-child .arrow {
  display: none; /* Hide arrow for the last stage */
}
  .border-green-500 {
  border-color: #22c55e;
}

.border-gray-300 {
  border-color: #d1d5db;
}

.border-2 {
  border-width: 2px;
}

.surface-50 {
  background-color: #f9fafb;
}

.p-2 {
  padding: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

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
    .tyt {
    text-transform: capitalize;
}
    </style>