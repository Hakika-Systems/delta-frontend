]<template>
    <okMartShopHeader />
    <div class="block-content">
      <div class="">
        <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
          <div class="grid -mr-3 -ml-3">
            <div class="col-12 lg:col-6 p-4">
              <div class="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                <div class="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                  <div class="text-900 font-medium text-xl">Contact Information</div>
                  <div class="mt-3 lg:mt-0">
                    <span class="text-600 mr-2">If You Already have an account?</span>
                    <a tabindex="0" href="/signin" class="cursor-pointer text-900 hover:text-primary transition-duration-150">Login</a>
                  </div>
                </div>
             
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                  <!---->
                </div>
            
               
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="name2" class="text-900 font-medium mb-3">Name</label>
                  <InputText variant="filled" size="large"  v-model="name" class="p-inputtext w-full mb-3"  placeholder="John"/>

                </div>
                

                <div class="col-12 lg:col-6 field mb-0">
                  <label for="surname2" class="text-900 font-medium mb-3">Surname</label>
                  <InputText id="surname2" variant="filled" size="large" type="email" v-model="surname" class="p-inputtext w-full mb-3"  placeholder="Doe"/>
                </div>
                <div class="col-12  lg:col-6 field mb-0">
                  <label for="phone" class="text-900 font-medium mb-3">Email</label>
                  <InputText variant="filled" size="large" id="email" type="text" v-model="email" class="p-inputtext w-full mb-3" placeholder="user@shopeasy.co.zw"/>
                </div>
                <div class="col-12  lg:col-6 field mb-0">
                  <label for="phone" class="text-900 font-medium mb-3">Phone Number</label>
                  <InputText variant="filled" size="large" id="phone" type="tel" v-model="customer_mobile" class="p-inputtext w-full mb-3"  placeholder="263771008021"/>
                </div>
                <div class="col-12  lg:col-6 field mb-0">
                  <label for="phone" class="text-900 font-medium mb-3">Whatsapp Number</label>
                  <InputText variant="filled" size="large" id="whatsapp" type="text"  v-model="whatsapp_number" class="p-inputtext w-full mb-3"  placeholder="263771008021"/>
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="address3" class="text-900 font-medium mb-3">  Address </label>
                  <InputText variant="filled" size="large" id="address3" type="text" v-model="address" class="p-inputtext mb-3"  placeholder="No. 567 Mujoko Street"/>
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="city2" class="text-900 font-medium mb-3">Suburb</label>
                  <InputText variant="filled" size="large" type="text" v-model="suburb" class="p-inputtext w-full mb-3" placeholder="Kambuzuma"/>
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="city2" class="text-900 font-medium mb-3">City/Town</label>
                  <InputText variant="filled" size="large" id="city2" type="text" v-model="city" class="p-inputtext w-full mb-3" placeholder="Harare"/>
                </div>  
                <div class="col-12 field mb-0">
                  <label for="country2" class="text-900 font-medium mb-3">Country</label>
                  <InputText variant="filled" size="large"  id="country2" type="text" v-model="country" class="p-inputtext w-full mb-3" placeholder="Zimbabwe"/>
                </div>
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                  <!---->
                </div>
                
                <div class="text-600 font-bold text-xl mt-4 lg:mt-0 mb-4 px-2">Select Delivery or Collection</div>
                <div class="col-12 mb-4">
                  <div class="p-3 border-1 border-round-top surface-border ">
                    <div class="flex items-center">
                      <RadioButton variant="filled" v-model="delivery_option" inputId="ingredient1" name="pizza" value="Collection" />
                      <label for="ingredient1" class="ml-2">Collection</label>
                    </div> 
                  </div>
                  <div class="p-3 border-x-1 surface-border">
                    <div class="flex items-center">
                      <RadioButton variant="filled" v-model="delivery_option" inputId="ingredient1" name="pizza" value="Delivery" />
                      <label for="ingredient1" class="ml-2">Delivery</label>
                    </div> 
                  </div>
                </div>
      
                <div  v-if= "delivery_option == 'Delivery'" class="col-12 flex flex-column lg:flex-row field">
                    <div @click="select_fast_delivery()"  class="flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer">
                      <div class="mr-3 lg:mr-0">
                        <div class="text-900 font-bold mb-2">Fast Delivery</div>
                      </div>
                      <div class="flex justify-content-between align-items-center">
                        <span class="text-primary mr-2 font-medium">$7.00</span>
                        <div class="flex items-center">
                        
                       </div> 
                      </div>
                    </div>
                    <div @click="select_standard_delivery" class="flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer">
                      <div class="mr-3 lg:mr-0">
                        <div class="text-900 font-bold mb-2">Standard Delivery</div>
                        
                      </div>
                      <div  class="flex justify-content-between align-items-center">
                        <span class="text-primary mr-2 font-medium">$1.50</span>
                        <div class="flex items-center">
                       
                      </div> 
                      </div>
                    </div>
                  </div>
                  <div v-else></div>
                  <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                    <!---->
                  </div>
                <div class="text-900 col-12 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2"> Select Payment Method</div>
                <div v-for="item in payment_options" @click="toggleOptionCheckbox(item.id,item.name)" class="col-3 p-3 d-flex justify-content-center align-items-center">
                  <div :class="{'border-top': item.id === current_payment_option}" class="payheight flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150 d-flex justify-content-center align-items-center">
                    <img :src="item.logo" class="w-8rem" alt="Visa" >
                  </div>
                </div>
                
               
                

                
              
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                    <!---->
                  </div>
                  <div class="col-12 field mb-0">
                  <label for="holderName" class="text-900 font-medium mb-3">Order notes(optional)</label>
                  <Textarea v-model="notes" variant="filled" rows="5" cols="30" placeholder="Notes about your order, e.g. special notes for delivey."/>
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
                  <img :src="getParsedImages(item?.product?.thumbnails)" class="w-8rem h-8rem flex-shrink-0 mb-3">
                  <div class="flex-auto lg:ml-3">
                    <div class="flex align-items-center justify-content-between mb-3">
                      <span class="text-900 font-medium">{{ item.product.name }}</span>
                      <span class="text-900 font-bold">USD{{ (lineTotal(item.unit_price,item.quantity)).toFixed(2)}}</span>
                    </div>
                    <div class="flex flex-auto justify-content-between align-items-center">
                      <span class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round" data-pc-name="inputnumber" data-pc-section="root" spinnermode="horizontal">
                        <input class="p-inputtext p-component p-inputnumber-input w-2rem text-center py-2 px-1 border-transparent" v-model="cart[index].quantity" data-pc-name="inputtext" data-pc-section="input" role="spinbutton" aria-valuemin="0" aria-valuenow="1">
                        <button @click="increment(index)" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text text-600 hover:text-primary py-1 px-1" type="button" data-pc-name="button" data-pc-section="incrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true">
                          <span class="pi pi-plus" data-pc-section=""></span>
                          <span class="p-button-label" data-pc-section="label">&nbsp;</span>
                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </button>
                        <button :disabled="item.quantity === 1" @click="decrement(index)" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text text-600 hover:text-primary py-1 px-1" type="button" data-pc-name="button" data-pc-section="decrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true">
                          <span class="pi pi-minus" data-pc-section="decrementbuttonicon"></span>
                          <span class="p-button-label" data-pc-section="label">&nbsp;</span>
                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </button>
                      </span>
                      <button @click="removeFromCart(item.id)" class="p-button p-component p-button-icon-only text-600 p-button-text p-button-rounded" type="button" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                        <span class="p-button-icon pi pi-trash" data-pc-section="icon"></span>
                        <span class="p-button-label" data-pc-section="label">&nbsp;</span>
                        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                      </button>
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
                    <span class="text-900">{{findCurrency()}}{{ (cart_total - vat_total).toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Delivery</span>
                    <span class="text-900">{{findCurrency()}}{{ calculateDeliveryCost() }}</span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Discount</span>
                    <span class="text-900">{{findCurrency()}}{{ calculateDeliveryCost() }}</span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">VAT</span>
                    <span class="text-900">{{findCurrency()}}{{ (Number(vat_total)).toFixed(2) }} </span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Total</span>
                    <span class="text-900 font-bold">{{findCurrency()}}{{  cartTotal() }}</span>
                  </div>
                </div>
                <Button :loading="loading" @click="confirmOrder()" class="p-button p-component p-button-primary w-full mt-3" label="Place Order" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShopFooter />
</template>
<script setup lang="ts">
const frontStore = useFrontStore()
import InputText from 'primevue/inputtext';
const toast = useToast()
const loading = ref(false)
const delivery_option = ref('')
const delivery_type = ref('')
const fast_delivery = ref(Number(7.00))
const cart_id = storeToRefs(frontStore).cart_id
const payment_options = ref()
const notes = ref('')
const cart:any = storeToRefs(frontStore).cart
const vat_total = ref(Number(0.00))
const cart_total = ref(Number(0.00))
const current_payment_option = ref()
const current_payment_option_name = ref('')
const standard_delivery = ref(Number(1.50))
const VAT_RATE = Number(0.15); // 14.5% VAT rate
const coupon_code = ref('');
const order_status_id = ref(1);
const address = ref('');
const name = ref('');
const surname = ref('');
const email = ref('');
const customer_mobile = ref('');
const whatsapp_number = ref('');
const payment_method = ref('');
const payment_methoid_id = ref('');
const currency_id = ref();
const currencies:any = storeToRefs(frontStore).currencies
const selected_currency:any = storeToRefs(frontStore).selected_currency
const currency = ref('');
const total_amount = ref(0);
const discount = ref(0);
const city = ref('')
const country = ref('')
const suburb = ref()

interface PaymentMethod {
    id: number;
    name: string;
    logo: string;
    is_active: boolean;
    created_at:string;
    updated_at:string;
    deleted_at:string|null
}
console.log(typeof VAT_RATE)
const lineTotal = (price:any, quantity:any) => {
       return (Number(price)) * (quantity).toFixed(2)
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
    const removeFromCart = (productId:any) => {
        //@ts-ignore
      cart.value = cart.value.filter(item => item.id !== productId);
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
        const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''));
        return cleanedString[0]
    } catch (error) {
        console.error('Error parsing images JSON:', error);
    }
    return null; // Return null if parsing fails or no images are found
    };

const subtotal = computed(() => {
  let products_total = Number(cartTotal())
  console.log('Initial products_total:', products_total);
  if (delivery_type.value === 'Fast Delivery') {
    products_total += fast_delivery.value;
  } else if (delivery_type.value === 'Standard Delivery') {
    products_total += standard_delivery.value;
  }
  
  
  console.log('Final products_total:', products_total);
  return Number(products_total);
});

console.log(typeof subtotal.value)

const vatAmount = computed(() => Number((subtotal.value) * VAT_RATE));
console.log("simba",typeof vatAmount.value)

const formatPrice = (valueToFormat:any) => {
   return valueToFormat.toFixed(2)
}
onMounted( async() => {
  console.log("cart id is",cart_id.value)
  let results = frontStore.getCart().then((data) => {
    cart.value = data.data.items
    cart_total.value = data?.data?.cart_total
    vat_total.value = data?.data?.vat_total
  })
  let payments_params = {
        page: 1,
        per_page: 10
  }
  let payment_optionss = await frontStore.getPaymentOptions(payments_params).then((data) => {
    console.log("payment data", data.data.paymentmethods);

    const paymentMethods: PaymentMethod[] = data?.data?.paymentmethods || [];
    const activePaymentMethods = paymentMethods.filter((method: PaymentMethod) => method.is_active);

    payment_options.value = activePaymentMethods;
});

})
const select_fast_delivery = ()=>{
  delivery_type.value = "Fast Delivery"
}
const findCurrency = () => {
    const currency = currencies.value.find((currency:any) => currency.id === selected_currency.value);
    return currency ? currency.iso_code : null;
}
const select_standard_delivery = ()=>{
  delivery_type.value = "Standard Delivery"
}
const  confirmOrder = async () => {
    loading.value = true
    const info = {
        cart_id: cart_id.value,
        coupon_code: coupon_code.value,
        customer_name: name.value+' '+surname.value,
        email: email.value,
        whatsapp_number: whatsapp_number.value,
        coupon_code : coupon_code.value,
        customer_mobile: customer_mobile.value,
        order_status_id: order_status_id.value,
        billing_address: {
          name: name.value+' '+surname.value,
          phone: customer_mobile.value,
          address: address.value,
          city: city.value,
          country: country.value
        },
        delivery_address: {
          name: name.value+' '+surname.value,
          phone: customer_mobile.value,
          address: address.value,
          city: city.value,
          country: country.value
        },
        payment_method_id: current_payment_option.value,
        delivery_option: delivery_option.value === 'Collection' ? "pickup" : 'delivery',
        payment_method: current_payment_option_name.value,
        currency_id: selected_currency.value,
        currency: findCurrency(),
        discount: 0,
        delivery_amount: Number(calculateDeliveryCost()),
        total_amount: Number(cartTotal())
    }
    let result = await frontStore.createOrder(info).then((data)=> {
        loading.value = false
        if (data.status === "success") {
            toast.add({ severity: 'success', summary: 'Success', detail: 'You have succesfully order', life: 3000 });
            let orderr =  data.data
            sessionStorage.setItem('last_order', JSON.stringify(orderr))
            navigateTo('/order_summary')
        } else {
            toast.add({ severity: 'warn', summary: 'Failed', detail: "Failed To Order, Contact Support", life: 3000 });
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
</style>