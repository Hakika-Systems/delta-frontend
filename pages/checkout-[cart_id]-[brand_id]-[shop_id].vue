]<template>
    <okMartShopHeader />
    <div class="block-content">
      <div class="">
        <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
          
          <div class="grid -mr-3 -ml-3">
            <div class="col-12 lg:col-6 p-4">
              <div class="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                <div class="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                  <div class="text-900 font-medium text-xl">Personal Details</div>
                  <div v-if="!user_id" class="mt-3 lg:mt-0">
                    <span class="text-600 mr-2">Have an account?</span>
                    <a tabindex="0" @click="navigateTo('signin',{external:true})" class="cursor-pointer text-900 hover:text-primary transition-duration-150">Login</a><br>
                    <span class="text-600 mr-2">New to our platform?</span>
                    <a tabindex="0" @click="navigateTo('registration',{external:true})" class="cursor-pointer text-900 hover:text-primary transition-duration-150">Register</a><br>
                  </div>
                </div>
             
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                  <!---->
                </div>
            
               
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="name2" class="text-900 font-medium mb-3">Full Name</label>
                  <InputText variant="filled" size="large"  v-model="name" class="p-inputtext w-full mb-3"  placeholder="Brian Mhlanga"/>
                  <small v-if="!name" style="color: red;">Required</small>
                </div>
                <div class="col-12  lg:col-6 field mb-0">
                  <label for="phone" class="text-900 font-medium mb-3">Email</label>
                  <InputText variant="filled" size="large" id="email" type="text" v-model="email" class="p-inputtext w-full mb-3" placeholder="yourname@youremail.tld"/>
                  <small v-if="!email" style="color: red;">Required</small>
                  <div class="flex align-items-center">
                  <Checkbox v-model="is_sent_promotions" :binary="true" />
                  <label id="checkbox-1" class="text-900 ml-2">Email me with news, promotions and offers</label>
                </div>
                </div>
                <div class="col-12 mt-3  lg:col-6 field mb-0">
                  <label for="phone" class="text-900 font-medium mb-3">Phone Number</label>
                  <InputText variant="filled" size="large" id="phone" type="tel" v-model="customer_mobile" class="p-inputtext w-full mb-3"  placeholder="263771008021"/>
                  <small v-if="!customer_mobile" style="color: red;">Required</small>
                </div>
                <div class="col-12 mt-3 lg:col-6 field mb-0">
                  <label for="phone" class="text-900 font-medium mb-3">Whatsapp Number</label>
                  <InputText variant="filled" size="large" id="whatsapp" type="text"  v-model="whatsapp_number" class="p-inputtext w-full mb-3"  placeholder="263771008021"/>
                  <small v-if="!whatsapp_number" style="color: red;">Required</small>
                </div>
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                  <!---->
                </div>
                <div class="text-600 font-bold text-xl mt-4 lg:mt-0 mb-4 px-2">Select Delivery or Collection</div>
                <div class="col-12 mb-4">
                  <div class="p-3 border-1 border-round-top surface-border ">
                    <div class="flex items-center">
                      <RadioButton @change="clearPayments()" variant="filled" v-model="delivery_option" inputId="ingredient1" name="pizza" value="Collection" />
                      <label for="ingredient1" class="ml-2">Collection</label>
                      <small v-if="!delivery_option" style="color: red;">Required</small>
                    </div> 
                  </div>
                  <div class="p-3 border-1 mt-3 border-round-bottom surface-border">
                    <div class="flex items-center">
                      <RadioButton @change="clearPayments()" variant="filled" v-model="delivery_option" inputId="ingredient1" name="pizza" value="Delivery" />
                      <label for="ingredient1" class="ml-2">Delivery</label>
                      <small v-if="!delivery_option" style="color: red;">Required</small>
                    </div> 
                  </div>
                </div>
      
                <div  v-if= "delivery_option == 'Delivery'" class="col-12 flex flex-column lg:flex-row field">
                    <div @click="select_fast_delivery()"  :class="{'border-top': delivery_type === 'Fast Delivery'}" class="flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer">
                      <div class="mr-3 lg:mr-0">
                        <div class="text-900 font-bold mb-2">Fast Delivery<br><small class="smallt">Delivered within 3 Hours</small></div>
                        <small v-if="!delivery_type" style="color: red;">Required</small>
                      </div>
                      <div class="flex justify-content-between align-items-center">
                        <span class="text-primary mr-2 font-medium">$7.00</span>
                        <div class="flex items-center">
                       </div> 
                      </div>
                    </div>
                    <div @click="select_standard_delivery" :class="{'border-top': delivery_type === 'Standard Delivery'}" class="flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer">
                      <div class="mr-3 lg:mr-0">
                        <div class="text-900 font-bold mb-2">Standard Delivery<br><small class="smallt">Delivered within 48 Hours</small></div>
                        <small v-if="!delivery_type" style="color: red;">Required</small>
                      </div>
                      <div  class="flex justify-content-between align-items-center">
                        <span class="text-primary mr-2 font-medium">$5.00</span>
                        <div class="flex items-center">
                       
                      </div> 
                      </div>
                    </div>
                  </div>
                <div class="col-12 mt-5 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                  <div class="text-900 font-medium text-xl">Billing Address</div>
                </div>
                <div v-if="user_id" class="col-12 lg:col-12 mb-3 field mb-0">
                  <label for="address3" class="text-900 font-medium mb-3">Saved Addresses</label>
                  <Dropdown @change="pickSaved()" v-model="selectedBillingAddress" :options="addresses" optionLabel="name" placeholder="Select Saved Address" checkmark :highlightOnSelect="false" class="w-full md:w-14rem" />
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="address3" class="text-900 font-medium mb-3">  Address </label>
                  <InputText variant="filled" size="large" id="address3" type="text" v-model="address" class="p-inputtext mb-3"  placeholder="No. 567 Mujoko Street"/>
                  <small v-if="!address" style="color: red;">Required</small>
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="city2" class="text-900 font-medium mb-3">Suburb</label>
                  <InputText variant="filled" size="large" type="text" v-model="suburb" class="p-inputtext w-full mb-3" placeholder="Kambuzuma"/>
                  <small v-if="!suburb" style="color: red;">Required</small>
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="city2" class="text-900 font-medium mb-3">City/Town</label>
                  <InputText variant="filled" size="large" id="city2" type="text" v-model="city" class="p-inputtext w-full mb-3" placeholder="Harare"/>
                  <small v-if="!city" style="color: red;">Required</small>
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="country2" class="text-900 font-medium mb-3">Country</label>
                  <InputText variant="filled" size="large"  id="country2" type="text" v-model="country" class="p-inputtext w-full mb-3" placeholder="Zimbabwe"/>
                  <small v-if="!country" style="color: red;">Required</small>
                </div>
                <div v-if= "delivery_option == 'Delivery'" class="flex align-items-center">
                  <Checkbox v-model="use_as_delivery_address" :binary="true" />
                  <label id="checkbox-1" class="text-900 ml-2">use same address as Delivery Address</label>
                </div>
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                  <!---->
                </div>
                <div v-if= "delivery_option == 'Delivery' && use_as_delivery_address === false" class="col-12 mt-5 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                  <div class="text-900 font-medium text-xl">Delivery Address</div>
                </div>
                <div v-if="user_id && delivery_option == 'Delivery' && use_as_delivery_address === false" class="col-12 lg:col-12 mb-3 field mb-0">
                  <label for="address3" class="text-900 font-medium mb-3">Saved Addresses</label>
                  <Dropdown @change="pickDeliverySaved()" v-model="selectedDeliveryAddress" :options="addresses" optionLabel="name" placeholder="Select Saved Address" checkmark :highlightOnSelect="false" class="w-full md:w-14rem" />
                </div>
                <div v-if= "delivery_option == 'Delivery' && use_as_delivery_address === false" class="col-12 lg:col-6 field mb-0">
                  <label for="address3" class="text-900 font-medium mb-3">  Address </label>
                  <InputText variant="filled" size="large" id="address3" type="text" v-model="delivery_address" class="p-inputtext mb-3"  placeholder="No. 567 Mujoko Street"/>
                  <small v-if="!delivery_address" style="color: red;">Required</small>
                </div>
                <div v-if= "delivery_option == 'Delivery' && use_as_delivery_address === false" class="col-12 lg:col-6 field mb-0">
                  <label for="city2" class="text-900 font-medium mb-3">Suburb</label>
                  <InputText variant="filled" size="large" type="text" v-model="delivery_suburb" class="p-inputtext w-full mb-3" placeholder="Kambuzuma"/>
                  <small v-if="!delivery_suburb" style="color: red;">Required</small>
                </div>
                 

                <div v-if= "delivery_option == 'Delivery' && use_as_delivery_address === false" class="col-12 lg:col-6 field mb-0">
                  <label for="city2" class="text-900 font-medium mb-3">City/Town</label>
                  <InputText variant="filled" size="large" id="city2" type="text" v-model="delivery_city" class="p-inputtext w-full mb-3" placeholder="Harare"/>
                  <small v-if="!delivery_city" style="color: red;">Required</small>
                </div>  
                <div v-if= "delivery_option == 'Delivery' && use_as_delivery_address === false" class="col-12 lg:col-6 field mb-0">
                  <label for="country2" class="text-900 font-medium mb-3">Country</label>
                  <InputText variant="filled" size="large"  id="country2" type="text" v-model="delivery_country" class="p-inputtext w-full mb-3" placeholder="Zimbabwe"/>
                  <small v-if="!delivery_country" style="color: red;">Required</small>
                </div>
                  <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                    <!---->
                  </div>
                <div class="text-900 col-12 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2"> Select Payment Method</div>
                <div :disabled="loading" v-if="delivery_option === 'Collection'"  @click="toggleOptionCheckbox(payment_options[0].id,payment_options[0].name)" class="col-3 p-3 d-flex justify-content-center align-items-center">
                  <div :class="{'border-top': payment_options[0].id === current_payment_option}" class="payheight flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150 d-flex justify-content-center align-items-center">
                    <NuxtImg :src="payment_options[0].logo" class="w-8rem" alt="Visa" loading="lazy" format="webp" />
                  </div>
                  <small v-if="!current_payment_option" style="color: red;">Required</small>
                </div>
                <div  :disabled="loading" @click="toggleOptionCheckbox(payment_options[1].id,payment_options[1].name)" class="col-3 p-3 d-flex justify-content-center align-items-center">
                  <div :class="{'border-top': payment_options[1].id === current_payment_option}" class="payheight flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150 d-flex justify-content-center align-items-center">
                    <NuxtImg :src="payment_options[1].logo" class="w-8rem" alt="Visa" loading="lazy" format="webp"/>
                  </div>
                  <small v-if="!current_payment_option" style="color: red;">Required</small>
                </div>
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                    <!---->
                  </div>
                  <div class="col-12 field mb-0">
                  <label for="holderName" class="text-900 font-medium mb-3">Order notes(optional)</label>
                  <Textarea v-model="notes" variant="filled" rows="5" cols="30" placeholder="Notes about your order, e.g. Please hoot at the gate on arrival."/>
                </div>
              </div>
            </div>
            <div class="col-12 lg:col-6 p-4">
              <div class="surface-card border-round  shadow-2 payment p-5" >
                <div class="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                  <span class="text-900 font-medium text-lg lg:text-xl">
                    <i class="pi pi-shopping-cart text-xl mr-2"></i>Your Order  </span>
                </div>
                <div v-for="(item, index) in cart" :key="index" class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-3 my-3 border-bottom-1 surface-border">
                  <NuxtImg :src="getParsedImages(item?.product?.thumbnails)" class="cimage flex-shrink-0 mb-3" loading="lazy" format="webp" />
                  <div class="flex-auto lg:ml-3">
                    <div class="flex align-items-center justify-content-between mb-3">
                      <span class="text-900 font-medium">{{ item.product.name }}</span>
                      <span class="text-900 font-bold">{{findCurrency()}}{{ (findConversionRatePrice(lineTotal(item.unit_price,item.quantity)))}}</span>
                    </div>
                    <div class="flex flex-auto justify-content-between align-items-center">
                      <InputNumber
                        v-model="cart[index].quantity"
                        showButtons
                        class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round"
                        buttonLayout="horizontal"
                        :min="1"
                        :max="99"
                        @update:modelValue="(value:any) => changeCartItem(value, item.id, item.product_id, item.unit_price)"
                        @blur="handleBlur(cart[index].quantity, item.id, item.product_id, item.unit_price)"
                      >
                      
                        <template #incrementbuttonicon>
                          <span  class="pi pi-plus" :loading="item.id === current_loading" @click="increaseCartItem(item.id,item.product_id,cart[index].quantity,item.unit_price)" />
                        </template>
                        <template #decrementbuttonicon>
                          <span :loading="item.id === current_loading" class="pi pi-minus"  @click="decreaseCartItem(item.id,item.product_id,cart[index].quantity,item.unit_price)" />
                        </template>
                      </InputNumber>
                      <Button @click="removeFromCart(item.id)" icon="pi pi-trash" class="p-button p-component p-button-icon-only text-600 p-button-text p-button-rounded" />
                    </div>
                  </div>
                </div>
                <div class="py-2 mt-3 border-bottom-1 surface-border">
                <div class="p-inputgroup mb-3">
                  <input class="p-inputtext p-component p-filled w-full" data-pc-name="inputtext" v-model="coupon_code" data-pc-section="root" type="text" placeholder="Enter Promo code | Coupon code | Discount code">
                  <button class="p-button p-component" type="button" aria-label="Apply" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                    <!---->
                    <span class="p-button-label" data-pc-section="label">Apply</span>
                    <!---->
                    <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                  </button>
                </div>
              </div>
                <div class="py-2 mt-3 border-bottom-1 surface-border">
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Subtotal</span>
                    <span class="text-900">{{findCurrency()}}{{ findConversionRatePrice((cart_total - vat_total).toFixed(2)) }}</span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Delivery</span>
                    <span class="text-900">{{findCurrency()}}{{ findConversionRatePrice(calculateDeliveryCost()) }}</span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Discount</span>
                    <span class="text-900">{{findCurrency()}}0.00</span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">VAT</span>
                    <span class="text-900">{{findCurrency()}}{{ findConversionRatePrice((Number(vat_total)).toFixed(2)) }} </span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Total</span>
                    <span class="text-900 font-bold">{{findCurrency()}}{{  findConversionRatePrice(cartTotal()) }}</span>
                  </div>
                </div>
                <InlineMessage class="w-12 mt-5" v-if="cartTotal() < minimum_order && delivery_option === 'Delivery'" severity="info">Please note the minumum order is {{findCurrency()}}{{ minimum_order }} </InlineMessage>
                <Button :disabled="isButtonDisabled" :loading="loading" @click="confirmOrder()" class="p-button p-component p-button-primary w-full mt-3" label="Place Order" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
</template>
<script setup lang="ts">
const frontStore = useFrontStore()
import InputText from 'primevue/inputtext';
import debounce from 'debounce';
const toast = useToast()
useHead({
  title: "OK ShopEasy Zimbabwe - Checkout",
  meta: [
    { name: "description", content: "OKshop makes shopping in Zimbabwe easy and convenient!" },
  ],
});
const loading = ref(false)
const delivery_option = ref('')
const {params:{cart_id,brand_id,shop_id}} = useRoute()
const delivery_type = ref('')
const fast_delivery = ref(Number(7.00))
const is_sent_promotions = ref(false)
const use_as_delivery_address = ref(true)
const payment_options = ref([
    {
        "id": 1,
        "name": "Cash On Collection",
        "logo": "https:\/\/api.hakikasystems.co.zw\/paymentmethods\/logos\/1723974984.png",
        "is_active": 1,
        "deleted_at": null,
        "created_at": "2024-08-18T09:56:24.000000Z",
        "updated_at": "2024-08-18T09:56:24.000000Z"
    },
    {
        "id": 4,
        "name": "Paynow",
        "logo": "/images/paynow1.png",
        "is_active": 1,
        "deleted_at": null,
        "created_at": "2024-08-18T10:24:33.000000Z",
        "updated_at": "2024-08-18T10:24:33.000000Z"
    }
])
const notes = ref('')
const cart:any = storeToRefs(frontStore).cart
const changed = storeToRefs(frontStore).changed
const vat_total = ref(Number(0.00))
const cart_total = storeToRefs(frontStore).cart_total
const use_address_for_delivery = ref(true)
const current_payment_option = ref()
const current_payment_option_name = ref('')
const standard_delivery = ref(Number(5.00))
const VAT_RATE = Number(0.15); // 14.5% VAT rate
const coupon_code = ref('');
const order_status_id = ref(1);
const address = ref('');
const name = ref('');
const surname = ref('');
const email = ref('');
const customer_mobile = ref('');
const selectedBillingAddress = ref()
const selectedDeliveryAddress = ref()
const addresses = ref()
const mytoken = useCookie('token');
const user_id = useCookie('user_id');
const whatsapp_number = ref('');
const currencies:any = storeToRefs(frontStore).currencies
const selected_currency:any = storeToRefs(frontStore).selected_currency
const currency = ref('');
const total_amount = ref(0);
const minimum_order = ref(0)
const discount = ref(0);
const city = ref('')
const delivery_city = ref()
const delivery_country = ref()
const delivery_suburb = ref()
const delivery_address = ref()
const current_loading = ref()
const country = ref('')
const suburb = ref()
onMounted( async() => {
  let results = await frontStore.getCartTwo(cart_id).then((data) => {
    cart.value = data.data?.items
    cart_total.value = data?.data?.cart_total
    vat_total.value = data?.data?.vat_total
  })
  let payments_params = {
        page: 1,
        per_page: 10
  }
let addressess = await frontStore.getMyAddresses(user_id.value).then((data) => {
    addresses.value = data?.data?.data
});
let mimumum_order_settings = await frontStore.getMimimumOrderSettings().then((data) => {
    minimum_order.value = data?.minimum_order_value
});
let user_details = await frontStore.getUser(user_id.value).then((data) => {
    email.value = data?.data?.email
    name.value = data?.data?.name
    customer_mobile.value = data?.data?.contact_number
    whatsapp_number.value = data?.data?.whatsapp_number
});
})
const pickSaved = () => {
  city.value = selectedBillingAddress.value.city
  country.value = selectedBillingAddress.value.country
  address.value = selectedBillingAddress.value.street
  suburb.value = selectedBillingAddress.value.suburb
}
const decreaseCartItem = async (item_id:any,product_id: any,quantity:any,unit_price:any) => {
    current_loading.value = item_id
    let cart_item = {
    id: item_id,
    cart_id: cart_id,
    product_id: product_id,
    quantity: quantity-1,
    unit_price: Number(unit_price),
    total_price: (quantity * unit_price) 
    }
    let edit_cart_item = await frontStore.editCartItem(cart_item).then( async (data) => {
      if (data?.status === "success") {
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
          changed.value = true
          cart.value = data.data.items
          cart_total.value = data?.data?.cart_total
          vat_total.value = data?.data?.vat_total
        })
        toast.add({
          severity: 'info',
          summary: 'Cart',
          detail: 'Quantity Changed',
          group: 'br',
          life: 3000,
        });
        current_loading.value = null
      } else {
        toast.add({
          severity: 'warn',
          summary: 'Cart',
          detail: 'Could not add product',
          group: 'br',
          life: 3000,
        });
        current_loading.value = null
      }
    })
    
};
const handleBlur = async (quantity:any, item_id:any, product_id:any, unit_price:any) => {
    if (quantity < 1 || !quantity) {
        toast.add({
            severity: 'warn',
            summary: 'Cart',
            detail: 'Quantity cannot be negative',
            life: 3000,
        });
        return;
    }
    
    // Call the same function for updating the cart
    await changeCartItem(quantity, item_id, product_id, unit_price);
};
const changeCartItem = debounce(async (quantity:any, item_id:any, product_id:any, unit_price:any) => {
    if (quantity < 1 || !quantity) {
        toast.add({
            severity: 'warn',
            summary: 'Cart',
            detail: 'Quantity cannot be negative',
            life: 3000,
        });
        return;
    }

    loading.value = true;

    const cart_item = {
        id: item_id,
        cart_id: cart_id,
        product_id: product_id,
        quantity: quantity,
        unit_price: Number(unit_price),
        total_price: quantity * unit_price,
    };

    try {
        const data = await frontStore.editCartItem(cart_item);
        if (data?.status === 'success') {
            const newCart = await frontStore.getCart();
            cart.value = newCart.data.items;
            cart_total.value = newCart.data.cart_total;

            toast.add({
                severity: 'info',
                summary: 'Cart',
                detail: 'Quantity Changed',
                life: 3000,
            });
        } else {
            toast.add({
                severity: 'warn',
                summary: 'Cart',
                detail: 'Could not update product',
                life: 3000,
            });
        }
    } catch (error) {
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update the cart item',
            life: 3000,
        });
    } finally {
        loading.value = false;
    }
}, 300);

const increaseCartItem = async (item_id:any,product_id: any,quantity:any,unit_price:any) => {
    current_loading.value = item_id
    let cart_item = {
    id: item_id,
    cart_id: cart_id,
    product_id: product_id,
    quantity: quantity+1,
    unit_price: Number(unit_price),
    total_price: (quantity * unit_price) 
    }
    let edit_cart_item = await frontStore.editCartItem(cart_item).then( async (data) => {
      if (data?.status === "success") {
        
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
          changed.value = true
          cart.value = data.data.items
          cart_total.value = data?.data?.cart_total
          vat_total.value = data?.data?.vat_total
        })
        toast.add({
          severity: 'info',
          summary: 'Cart',
          detail: 'Quantity Changed',
          group: 'br',
          life: 3000,
        });
        current_loading.value = null
      } else {
        toast.add({
          severity: 'warn',
          summary: 'Cart',
          detail: 'Could not add product',
          group: 'br',
          life: 3000,
        });
        current_loading.value = null
      }
    })
    
    
};
const pickDeliverySaved = () => {
  delivery_city.value = selectedDeliveryAddress.value.city
  delivery_country.value = selectedDeliveryAddress.value.country
  delivery_address.value = selectedDeliveryAddress.value.street
  delivery_suburb.value = selectedDeliveryAddress.value.suburb
}
const clearPayments = () => {
  current_payment_option.value = null
}
interface PaymentMethod {
    id: number;
    name: string;
    logo: string;
    is_active: boolean;
    created_at:string;
    updated_at:string;
    deleted_at:string|null
}
const lineTotal = (price:any, quantity:any) => {
       return (Number(price) * quantity).toFixed(2)
    }
    const increment = (index:any) => {
        //@ts-ignore
      cart.value[index].quantity += 1;
    }
    const decrement = (index:any) => {
         //@ts-ignore
      if (cart.value[index].quantity > 0) {
         //@ts-ignore
        cart.value[index].quantity -= 1;
      }
    }
    const isButtonDisabled = computed(() => {
  // Basic conditions
  if (
    !name.value ||
    !email.value ||
    !customer_mobile.value ||
    cartTotal() < minimum_order.value && delivery_option.value === 'Delivery' ||
    !delivery_option.value ||
    !address.value ||
    !suburb.value ||
    !city.value ||
    !country.value ||
    !current_payment_option.value ||
    cart.value.length === 0
  ) {
    return true
  }

  // If delivery_option is "Delivery", check additional fields
  if (delivery_option.value === 'Delivery') {
    // Ensure delivery_type is not null
    if (!delivery_type.value) {
      return true
    }

    // If use_as_delivery_address is false, check additional delivery address fields
    if (!use_as_delivery_address.value) {
      if (
        !delivery_address.value ||
        !delivery_suburb.value ||
        !delivery_city.value ||
        !delivery_country.value
      ) {
        return true
      }
    }
  }

  return false
})
const removeFromCart = async (itemId:any) => {
        //@ts-ignore
      let my_params = {
        id: itemId
      }
      let deleted_item = await frontStore.deleteCartItem(my_params).then( async (data) => {
        if(data?.status === 'success') {
            toast.add({
            severity: 'info',
            summary: 'Cart Changed',
            detail: 'Product Removed',
            group: 'br',
            life: 3000,
            });
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
            changed.value = true;
            cart.value = data.data.items
            cart_total.value = data?.data?.cart_total
            vat_total.value = data?.data?.vat_total
            })
        } else {
            toast.add({
            severity: 'warn',
            summary: 'Cart',
            detail: 'Could not remove product',
            group: 'br',
            life: 3000,
            });
        }
      })
}
    const toggleOptionCheckbox = (id:any,name:string) => {
      current_payment_option.value = id
      current_payment_option_name.value = name
    }
    const calculateDeliveryCost = () => {
    if (delivery_option.value === 'Collection') {
        return (0).toFixed(2);
    } else {
        return delivery_type.value === 'Fast Delivery'
            ? (fast_delivery.value).toFixed(2)
            : delivery_type.value === 'Standard Delivery'
            ? (standard_delivery.value).toFixed(2)
            : (0).toFixed(2);
    }
}
    const cartTotal =  () => {
        if (delivery_option.value === 'Collection') {
           let tot = cart_total.value
           return tot
        }
        if (delivery_option.value === 'Delivery') {
          if (delivery_type.value === 'Fast Delivery') {
            let tot = Number(cart_total.value) + Number(fast_delivery.value)
            return tot
          }
          if (delivery_type.value === 'Standard Delivery') {
            let tot = Number(cart_total.value) + Number(standard_delivery.value);
            return tot
          } 
          return cart_total.value
        }
        return cart_total.value
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

const subtotal = computed(() => {
  let products_total = Number(cartTotal())
  if (delivery_type.value === 'Fast Delivery') {
    products_total += fast_delivery.value;
  } else if (delivery_type.value === 'Standard Delivery') {
    products_total += standard_delivery.value;
  }
  
  
  return Number(products_total);
});


const vatAmount = computed(() => Number((subtotal.value) * VAT_RATE));


const formatPrice = (valueToFormat:any) => {
   return valueToFormat.toFixed(2)
}

const select_fast_delivery = ()=>{
  delivery_type.value = "Fast Delivery"
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
const select_standard_delivery = ()=>{
  delivery_type.value = "Standard Delivery"
}
const  confirmOrder = async () => {
    loading.value = true
    const info = {
        cart_id: cart_id,
        coupon_code: coupon_code.value,
        customer_name: name.value,
        email: email.value,
        whatsapp_number: whatsapp_number.value,
        customer_mobile: customer_mobile.value,
        billing_address: {
          name: name.value,
          phone: customer_mobile.value,
          address: address.value,
          suburb: suburb.value,
          city: city.value,
          country: country.value
        },
        delivery_address: {
          name: name.value,
          phone: customer_mobile.value,
          suburb: delivery_suburb.value ? delivery_suburb.value : suburb.value,
          address: delivery_address.value ? delivery_address.value : address.value,
          city: delivery_city.value ? delivery_city.value : city.value,
          country: delivery_country.value ? delivery_country.value : country.value
        },
        delivery_option: delivery_option.value === 'Collection' ? "pickup" : 'delivery',
        payment_method: current_payment_option_name.value,
        currency_id: selected_currency.value,
        notes: notes.value,
        currency: findCurrency(),
        discount: 0,
        delivery_amount: Number(calculateDeliveryCost()),
        total_amount: Number(cartTotal())
    }
    let result = await frontStore.createOrder(info).then(async(data)=> {
        if (data.status === "success") {
            let orderr =  data.data
            sessionStorage.setItem('last_order', JSON.stringify(orderr))
            let payment_params = {
              order_id: orderr?.id,
              payment_method: current_payment_option_name.value 
            }
            let payment_initiation = await frontStore.initiatePayment(payment_params).then(async(data) => {
              let paymentt = data?.data?.payment
              sessionStorage.setItem('payment_details', JSON.stringify(paymentt))
              if(data?.data?.success) {
                  if(data?.data?.redirect === false) {
                    loading.value = false
                    sessionStorage.removeItem('cart_id');
                    sessionStorage.removeItem('current_cart_shop_id');
                    sessionStorage.removeItem('current_cart_brand');
                     navigateTo('/coc_order_summary',{external: true})
                  } else if (data?.data?.redirect === true){
                    toast.add({ severity: 'info', summary: 'Redirecting', detail: "Redirecting To Paynow", life: 3000 });
                    await navigateTo(`${data.data.redirect_url}`, {
                      external: true
                    })
                  } else {
                    loading.value = false
                    toast.add({ severity: 'warn', summary: 'Failed', detail: "Failed To Complete Transaction, Contact Support", life: 3000 });
                  }
              } else {
                loading.value = false
                toast.add({ severity: 'warn', summary: data?.data?.message, detail: data?.data?.errors, life: 3000 });
              }
              
            })
           
        } else {
            loading.value = false
            toast.add({ severity: 'warn', summary: data?.message, detail: data?.errors, life: 3000 });
        }
    })
}
</script>
<style scoped>
.border-top {
    /* border-style: solid; */
    border: 5px solid #30c804 !important;
}
.payheight {
  height: 75px !important;
}
img.cimage {
    height: 60px;
}
</style>