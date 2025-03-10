<template>
    <OkMartShopHeader />
      <div class="col-12">
              <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <span class="text-700 text-xl">Thank you for ordering!</span>
                <div class="text-900 font-bold text-4xl my-2">Successful Order 🚀</div>
                <p class="text-700 text-xl mt-0 mb-4 p-0">Your order has been received. We'll inform you.</p>
                <div style="height: 3px; background: linear-gradient(90deg, rgb(33, 150, 243) 0%, rgba(33, 150, 243, 0) 50%);"></div>
                <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-5">
                  <div class="mb-3 sm:mb-0">
                    <span class="font-medium text-xl text-900 mr-2">Order number:</span>
                    <span class="font-medium text-xl text-blue-500">{{ order_details?.order_ref }}</span>
                  </div>
                  <div>
                    <button class="p-button p-component p-button-outlined p-button-secondary mr-2" type="button" aria-label="Details" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                      <span class="p-button-icon p-button-icon-left pi pi-truck" data-pc-section="icon"></span>
                      <span class="p-button-label" data-pc-section="label">Track Order</span>
                      <!---->
                      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                    </button>
                  
                  </div>
                </div>
                <div class="border-round surface-border border-1">
                  <ul class="list-none p-0 m-0">
                    <li v-for="item in order_items" class="p-2 border-bottom-1 surface-border flex align-items-start sm:align-items-center">
                      <NuxtImg :src="getParsedImages(item.product.images)" class="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2 custom" loading="lazy" format="webp"/>
                      <div class="flex flex-column">
                        <span class="text-900 font-medium text-xl mb-2">{{ item.product.name }}</span>
                        <span class="text-600 mb-3">Quantity ({{ item.quantity }})</span>
                      </div>
                      <span class="text-900 font-medium text-lg ml-auto">{{order_details?.currency}}{{item.total_price}}</span>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-wrap mt-5 pb-3">
                  <div class="w-full lg:w-6 pl-3">
                    <div v-if="order_details?.delivery_option === 'delivery'">
                      <span class="font-medium text-900">Delivery Address</span>
                    <div class="flex flex-column text-900 mt-3 mb-5">
                      <span class="mb-1">37 Binton Rd</span>
                      <span class="mb-1">Greystone Park P O, Harare Zimbabwe</span>
                      <span>(786) 713-8616</span>
                    </div>
                    </div>
                    <div v-else>
                      <span class="font-medium text-900">Order Type</span>
                    <div class="flex flex-column text-900 mt-3 mb-5">
                      <span class="mb-1">Collection</span>
                    </div>
                    </div>
                  </div>
                  <div class="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
                    <ul class="list-none p-0 m-0 w-full">
                      <li class="mb-3">
                        <span class="font-medium text-900">Summary</span>
                      </li>
                      <li class="flex justify-content-between mb-3">
                        <span class="text-900">Subtotal</span>
                        <span class="text-900 font-medium text-lg">{{order_details?.currency}}{{ order_details?.total_excl_tax ? (order_details?.total_excl_tax).toFixed(2) : 0.00 }}</span>
                      </li>
                      <li class="flex justify-content-between mb-3">
                        <span class="text-900">Delivery</span>
                        <span class="text-900 font-medium text-lg">{{order_details?.currency}}0.00</span>
                      </li>
                      <li class="flex justify-content-between mb-3">
                        <span class="text-900">VAT</span>
                        <span class="text-900 font-medium text-lg">{{order_details?.currency}}{{ order_details?.vat_tax_amount }}</span>
                      </li>
                      <li class="flex justify-content-between border-top-1 surface-border py-3">
                        <span class="text-900 font-medium">Total</span>
                        <span class="text-900 font-bold text-lg">{{order_details?.currency}}{{ order_details?.total_incl_tax }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
      </div>
      <DeltaFooter />
  </template>
  <script lang="ts" setup>
  const order_details:any = ref()
  const frontStore = useFrontStore()
  const order_items = ref()
  const old_cart_id = storeToRefs(frontStore).old_cart_id
  useHead({
  title: "Delta Zimbabwe Order Summary",
  meta: [
    { name: "description", content: "Delta makes shopping in Zimbabwe easy and convenient!" },
  ],
});
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
onMounted(async () => {
  let last_order: any;

  if (typeof window !== 'undefined') {
    try {
      // Retrieve last order from session storage
      last_order = sessionStorage.getItem('last_order');

      // Check if last_order exists and is valid
      if (!last_order) {
        throw new Error('Missing last_order in session storage');
      }
    } catch (error:any) {
      console.error('Error retrieving sessionStorage data:', error.message);
      navigateTo('/', { external: true }); // Redirect to homepage
      return;
    }
  }

  try {
    // Parse the last_order data
    order_details.value = JSON.parse(last_order);

    // Validate the parsed data
    if (!order_details.value || !order_details.value.cart_id) {
      throw new Error('Invalid last_order data');
    }

    old_cart_id.value = order_details.value.cart_id;

    // Fetch cart details
    await frontStore.getOlderCart().then((data) => {
      order_items.value = data?.data?.items;
    });
  } catch (error:any) {
    console.error('Error processing order details:', error.message);
    navigateTo('/', { external: true }); // Redirect to homepage
  }
});

  </script>
  <style>
  img.w-3rem.sm\:w-8rem.flex-shrink-0.mr-3.shadow-2.custom {
      width: 51px !important;
      height: auto;
  }
  </style>