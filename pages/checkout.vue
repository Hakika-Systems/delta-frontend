]<template>
    <ShopHeader />
    <div class="block-content">
      <div class="">
        <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
          <div class="grid -mr-3 -ml-3">
            <div class="col-12 lg:col-6 p-4">
              <div class="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                <div class="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                  <div class="text-900 font-medium text-xl">Contact Information</div>
                  <div class="mt-3 lg:mt-0">
                    <span class="text-600 mr-2">Already have an account?</span>
                    <a tabindex="0" class="cursor-pointer text-900 hover:text-primary transition-duration-150">Login</a>
                  </div>
                </div>
             
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                  <!---->
                </div>
            
               
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="name2" class="text-900 font-medium mb-3">Name</label>
                  <InputText variant="filled" size="large" id="name2" type="text" class="p-inputtext w-full mb-3"/>

                </div>
                

                <div class="col-12 lg:col-6 field mb-0">
                  <label for="surname2" class="text-900 font-medium mb-3">Surname</label>
                  <InputText id="surname2" variant="filled" size="large" type="text" class="p-inputtext w-full mb-3"/>
                </div>
                <div class="col-12 field mb-0">
                  <label for="address3" class="text-900 font-medium mb-3">Street Address </label>
                  <InputText variant="filled" size="large" id="address3" type="text" class="p-inputtext mb-3"/>
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                  <label for="city2" class="text-900 font-medium mb-3">City</label>
                  <InputText variant="filled" size="large" type="text" class="p-inputtext w-full mb-3"/>
                </div>
                <div class="col-12   lg:col-6 field mb-0">
                  <label for="phone" class="text-900 font-medium mb-3">Phone</label>
                  <InputText variant="filled" size="large" type="text" class="p-inputtext w-full mb-3"/>
                </div>
                <div class="col-12  lg:col-6 field mb-0">
                  <label for="phone" class="text-900 font-medium mb-3">Email</label>
                  <InputText variant="filled" size="large" id="phone" type="text" class="p-inputtext w-full mb-3"/>
                </div>
                <div class="col-12 field mb-0">
                  <label for="country2" class="text-900 font-medium mb-3">Create account password</label>
                  <InputText variant="filled" size="large"  id="country2" type="text" class="p-inputtext w-full mb-3"/>
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
                    <div class="flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer">
                      <div class="mr-3 lg:mr-0">
                        <div class="text-900 font-bold mb-2">Fast Delivery</div>
                      </div>
                      <div class="flex justify-content-between align-items-center">
                        <span class="text-primary mr-2 font-medium">$7.00</span>
                        <div class="flex items-center">
                          <RadioButton variant="filled" v-model="delivery_type" inputId="ingredient1" name="pizza" value="Fast Delivery" />
                       </div> 
                      </div>
                    </div>
                    <div class="flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer">
                      <div class="mr-3 lg:mr-0">
                        <div class="text-900 font-bold mb-2">Standard Delivery</div>
                        
                      </div>
                      <div class="flex justify-content-between align-items-center">
                        <span class="text-primary mr-2 font-medium">$1.50</span>
                        <div class="flex items-center">
                       <RadioButton variant="filled" v-model="delivery_type" inputId="ingredient1" name="pizza" value="Standard Delivery" />
                      </div> 
                      </div>
                    </div>
                  </div>
                  <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                    <!---->
                  </div>
                <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2"> Select Payment Method</div>
                <div class="col-12 mb-4">
                  <div class="p-3 border-1 border-round-top surface-border">
                    <div class="p-radiobutton p-component" data-pc-name="radiobutton" data-pc-section="root">
                      <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
                        <input id="paypal" type="radio" name="paypal" data-pc-section="hiddeninput" value="paypal">
                      </div>
                      <div class="p-radiobutton-box" data-pc-section="input" data-p-highlight="false" data-p-disabled="false" data-p-focused="false">
                        <div class="p-radiobutton-icon" data-pc-section="icon"></div>
                      </div>
                    </div>
                    <label for="paypal" class="text-900 ml-3">PayPal</label>
                  </div>
                  <div class="p-3 border-x-1 surface-border">
                    <div class="p-radiobutton p-component" data-pc-name="radiobutton" data-pc-section="root">
                      <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
                        <input id="creditCard" type="radio" name="creditCard" data-pc-section="hiddeninput" value="creditcard">
                      </div>
                      <div class="p-radiobutton-box" data-pc-section="input" data-p-highlight="false" data-p-disabled="false" data-p-focused="false">
                        <div class="p-radiobutton-icon" data-pc-section="icon"></div>
                      </div>
                    </div>
                    <label for="creditCard" class="text-900 ml-3">Credit Card</label>
                  </div>
                  <div class="p-3 border-1 border-round-bottom surface-border">
                    <div class="p-radiobutton p-component" data-pc-name="radiobutton" data-pc-section="root">
                      <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
                        <input id="bank" type="radio" name="bank" data-pc-section="hiddeninput" value="bank">
                      </div>
                      <div class="p-radiobutton-box" data-pc-section="input" data-p-highlight="false" data-p-disabled="false" data-p-focused="false">
                        <div class="p-radiobutton-icon" data-pc-section="icon"></div>
                      </div>
                    </div>
                    <label for="bank" class="text-900 ml-3">Online Bank Transfer</label>
                  </div>
                </div>
                <div class="col-12 field mb-4">
                  <form class="relative">
                    <label for="cc" class="text-900 font-medium mb-3 block">Card Number</label>
                    <input class="p-inputmask p-inputtext p-component" data-pc-name="inputmask" data-pc-section="root" placeholder="9999-9999-9999-9999" style="margin-right: 0.5em;">
                    <!---->
                  </form>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                  <form class="relative">
                    <label for="exp" class="text-900 font-medium mb-3 block">Expiry Date</label>
                    <input class="p-inputmask p-inputtext p-component" data-pc-name="inputmask" data-pc-section="root" placeholder="99/99" style="margin-right: 0.5em;">
                    <!---->
                  </form>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                  <form class="relative">
                    <label for="cvc" class="text-900 font-medium mb-3 block">CVC</label>
                    <input class="p-inputmask p-inputtext p-component" data-pc-name="inputmask" data-pc-section="root" placeholder="999" style="margin-right: 0.5em;">
                    <!---->
                  </form>
                </div>
                <div class="col-12 field mb-0">
                  <label for="holderName" class="text-900 font-medium mb-3">Cardholder Name</label>
                  <InputText id="holderName" variant="filled" type="text" size="large"/>
                </div>
                <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
                    <!---->
                  </div>
                  <div class="col-12 field mb-0">
                  <label for="holderName" class="text-900 font-medium mb-3">Order notes(optional)</label>
                  <Textarea v-model="value" variant="filled" rows="5" cols="30" placeholder="Notes about your order, e.g. special notes for delivey."/>
                </div>
              </div>
            </div>
            <div class="col-12 lg:col-6 p-4">
              <div class="surface-card border-round  shadow-2 payment p-5" >
                <div class="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                  <span class="text-900 font-medium text-lg lg:text-xl">
                    <i class="pi pi-shopping-cart text-xl mr-2"></i>Your Order (1) </span>
                  <a tabindex="0" class="text-600 font-medium cursor-pointer hover:text-primary">Edit Cart</a>
                </div>
                <div v-for="(item, index) in dummyProducts" :key="index" class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-3 my-3 border-bottom-1 surface-border">
                  <img :src="item.image" class="w-8rem h-8rem flex-shrink-0 mb-3">
                  <div class="flex-auto lg:ml-3">
                    <div class="flex align-items-center justify-content-between mb-3">
                      <span class="text-900 font-medium">{{ item.name }}</span>
                      <span class="text-900 font-bold">{{ formatPrice(totalPrices[index]) }}</span>
                    </div>
                    <div class="flex flex-auto justify-content-between align-items-center">
                      <span class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round" data-pc-name="inputnumber" data-pc-section="root" spinnermode="horizontal">
                        <input class="p-inputtext p-component p-inputnumber-input w-2rem text-center py-2 px-1 border-transparent" v-model="itemQuantities[index]" data-pc-name="inputtext" data-pc-section="input" role="spinbutton" aria-valuemin="0" aria-valuenow="1">
                        <button @click="increment(index)" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text text-600 hover:text-primary py-1 px-1" type="button" data-pc-name="button" data-pc-section="incrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true">
                          <span class="pi pi-plus" data-pc-section=""></span>
                          <span class="p-button-label" data-pc-section="label">&nbsp;</span>
                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </button>
                        <button @click="decrement(index)" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text text-600 hover:text-primary py-1 px-1" type="button" data-pc-name="button" data-pc-section="decrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true">
                          <span class="pi pi-minus" data-pc-section="decrementbuttonicon"></span>
                          <span class="p-button-label" data-pc-section="label">&nbsp;</span>
                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </button>
                      </span>
                      <button @click="removeProduct(index)" class="p-button p-component p-button-icon-only text-600 p-button-text p-button-rounded" type="button" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                        <span class="p-button-icon pi pi-trash" data-pc-section="icon"></span>
                        <span class="p-button-label" data-pc-section="label">&nbsp;</span>
                        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="py-2 mt-3 border-bottom-1 surface-border">
                <div class="p-inputgroup mb-3">
                  <input class="p-inputtext p-component p-filled w-full" data-pc-name="inputtext" data-pc-section="root" type="text" placeholder="Promo code">
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
                    <span class="text-900">{{formatPrice(subtotal)}}</span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Delivery</span>
                    <span class="text-900"> {{delivery_type == 'Fast Delivery' ? ` $${fast_delivery}` :(delivery_type == 'Standard Delivery') ? `$${standard_delivery}`: 'Free'}}</span>
                  </div>
                  <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900">Total</span>
                    <span class="text-900 font-bold">{{formatPrice(totalAmount)}}</span>
                  </div>
                </div>
               
                <button class="p-button p-component p-button-primary w-full mt-3" type="button" aria-label="Place Order" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                  <!---->
                  <span class="p-button-label" data-pc-section="label">Place Order</span>
                  <!---->
                  <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>

  </template>
<script setup>
import InputText from 'primevue/inputtext';
const ingredient = ref()
const delivery_option = ref('')
const delivery_type = ref('')
const fast_delivery = 7.00
const standard_delivery = 1.50
let items = ref(1)
let price = ref(123.00)
let total_item_price = ref()

const dummyProducts = ref([
  { shop_logo: '/images/logos/nivea.jpg', name: 'Nivea Body Lotion Q10 400ml', image: '/images/products/nivea.jpg', price: 29.99, redirect_url: '/product/1' },
  { shop_logo: '/images/logos/shop2.jpg', name: "Babysoft 18's", image: '/images/products/tissue.jpg', price: 39.99, redirect_url: '/product/2' },
  { shop_logo: '/images/logos/shop3.jpg', name: 'Vaseline Blue Seal Petroleum Jelly 100ml', image: '/images/products/vaseline.jpg', price: 49.99, redirect_url: '/product/3' },
  { shop_logo: '/images/logos/shop4.jpg', name: 'Sunlight Dishwasher Lemon 750ml', image: '/images/products/sunlight.jpg', price: 59.99, redirect_url: '/product/4' },
  { shop_logo: '/images/logos/shop5.jpg', name: 'Harpic Toilet Cleaner Potpourri 500ml', image: '/images/products/harpic.jpg', price: 69.99, redirect_url: '/product/5' },
  { shop_logo: '/images/logos/shop6.jpg', name: 'Handy And All Purpose Cleaner Lavendar 750ml', image: '/images/products/handy_andy.jpg', price: 79.99, redirect_url: '/product/6' },
  { shop_logo: '/images/logos/shop7.jpg', name: 'Raid', image: '/images/products/raid.jpg', price: 89.99, redirect_url: '/product/7' },
  { shop_logo: '/images/logos/shop8.jpg', name: 'Sta Soft', image: '/images/sta-soft.jpg', price: 99.99, redirect_url: '/product/8' },
]);

const itemQuantities = ref(dummyProducts.value.map(() => 1));
const totalPrices = computed(() => itemQuantities.value.map((quantity, index) => quantity * dummyProducts.value[index].price));

const increment = (index) => {
  itemQuantities.value[index]++;
};

const decrement = (index) => {
  if (itemQuantities.value[index] > 1) {
    itemQuantities.value[index]--;
  }
};


const formatPrice = (price) => `$${price.toFixed(2)}`;

const subtotal = computed(() => {
  let total = 0;
  for (let i = 0; i < dummyProducts.value.length; i++) {
    total += itemQuantities.value[i] * dummyProducts.value[i].price;
  }
  return total;
});

const totalAmount = computed(() => {
  let total = subtotal.value;
  if (delivery_type.value == 'Fast Delivery') {
    total += fast_delivery;
  } else if (delivery_type.value == 'Standard Delivery') {
    total += standard_delivery;
  }

  return total;
  console.log('total',total)
});

const removeProduct = (index)=>{
  dummyProducts.value.splice(index,1)
  itemQuantities.value.splice(index, 1)
  console.log('dumy',dummyProducts.value)

}



</script>
<style>
.payment{
    box-shadow: 0 4px 10px #00000008, 0 0 2px green, 0 2px 6px #0000001f !important;
}
</style>