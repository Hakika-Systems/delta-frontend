<template>
   <NuxtLayout name="account">
    <div v-if="!name" class="surface-card p-5 shadow-2 border-round flex-auto">
    <div class="w-full lg:w-6 p-4 lg:p-7 m-auto">
      <div class="flex align-items-center justify-content-between mb-7">
        <span class="text-2xl font-medium text-900">Sign In</span>
        <span class="mr-3 text-900">Dont have an Account? <NuxtLink @click="navigateTo('/registration',{external:true})" class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">  Sign Up</NuxtLink></span>
      </div>
      <label for="email4" class="block text-900 font-medium mb-2">Email</label>
      <InputText class="p-inputtext p-component w-full mb-3 p-3" placeholder="Email Address" v-model="email" />
      <label for="password4" class="block text-900 font-medium mb-2">Password</label>
      <Password  class="w-full password mb-3" placeholder="Enter Password" v-model="password" />
      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <div class="p-checkbox p-component mr-2" data-pc-name="checkbox" data-pc-section="root" id="rememberme4">
            <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
              <input type="checkbox" data-pc-section="hiddeninput">
            </div>
            <div class="p-checkbox-box" data-pc-section="input" data-p-highlight="false" data-p-disabled="false" data-p-focused="false">
              <!---->
            </div>
          </div>
          <label for="rememberme4">Remember me</label>
        </div>
        <a class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Forgot password?</a>
      </div>
      <Button :loading="loading" label="Sign In" @click="signIn()" class="w-full" /> 
    </div>
  </div>

<div v-else>
  <div v-if="current_template === 'home'" class="surface-card p-5  flex-auto">
          <div v-if="name" class="text-900 text-center font-bold text-3xl mb-4">Hi, {{ name }}</div>
          <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
  <div class="grid">
    <div  @click="current_template = 'orders'"  class="col-12 lg:col-4 p-3 cursor-pointer">
      <div  @click="current_template = 'orders'" class="p-3 border-round shadow-2 flex align-items-center surface-card">
        <div class="bg-teal-100 inline-flex align-items-center justify-content-center mr-3" style="width: 88px; height: 88px; border-radius: 10px;">
          <i class="pi pi-shield text-teal-600 text-3xl"></i>
        </div>
        <div>
          <span  @click="current_template = 'orders'" class="text-900 text-xl font-medium mb-2">My Orders</span>
          
        </div>
        <div class="ml-auto">
          <button class="p-button p-component p-button-icon-only p-button-text p-button-plain p-button-rounded" type="button" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
            <span class="p-button-icon pi pi-ellipsis-v" data-pc-section="icon"></span>
            <span class="p-button-label" data-pc-section="label">&nbsp;</span>
            <!---->
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </button>
        </div>
      </div>
    </div>
    <div @click="current_template = 'shopping_carts'" class="col-12 lg:col-4 p-3 cursor-pointer">
      <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
        <div class="bg-pink-100 inline-flex align-items-center justify-content-center mr-3" style="width: 88px; height: 88px; border-radius: 10px;">
          <i class="pi pi-cart-arrow-down text-pink-600 text-3xl"></i>
        </div>
        <div>
          <span class="text-900 text-xl font-medium mb-2">My Shopping List</span>
         
        </div>
        <div class="ml-auto">
          <button class="p-button p-component p-button-icon-only p-button-text p-button-plain p-button-rounded" type="button" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
            <span class="p-button-icon pi pi-ellipsis-v" data-pc-section="icon"></span>
            <span class="p-button-label" data-pc-section="label">&nbsp;</span>
            <!---->
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </button>
        </div>
      </div>
    </div>
    <div @click="current_template = 'loyalty_points'" class="col-12 lg:col-4 p-3 cursor-pointer">
      <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
        <div class="bg-orange-100 inline-flex align-items-center justify-content-center mr-3" style="width: 88px; height: 88px; border-radius: 10px;">
          <i class="pi pi-ticket text-orange-600 text-3xl"></i>
        </div>
        <div>
          <span class="text-900 text-xl font-medium mb-2">Loyalty Points</span>
         
        </div>
        <div class="ml-auto">
          <button class="p-button p-component p-button-icon-only p-button-text p-button-plain p-button-rounded" type="button" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
            <span class="p-button-icon pi pi-ellipsis-v" data-pc-section="icon"></span>
            <span class="p-button-label" data-pc-section="label">&nbsp;</span>
            <!---->
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </button>
        </div>
      </div>
    </div>
    <div @click="current_template = 'shopeasy_savings_club'" class="col-12 lg:col-4 p-3 cursor-pointer">
      <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
        <div class="bg-teal-100 inline-flex align-items-center justify-content-center mr-3" style="width: 88px; height: 88px; border-radius: 10px;">
          <i class="pi pi-wallet text-teal-600 text-3xl"></i>
        </div>
        <div>
          <span class="text-900 text-xl font-medium mb-2">Shopeasy Savings Club</span>
         
        </div>
        <div class="ml-auto">
          <button class="p-button p-component p-button-icon-only p-button-text p-button-plain p-button-rounded" type="button" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
            <span class="p-button-icon pi pi-ellipsis-v" data-pc-section="icon"></span>
            <span class="p-button-label" data-pc-section="label">&nbsp;</span>
            <!---->
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </button>
        </div>
      </div>
    </div>
    <div @click="current_template = 'subscriptions'" class="col-12 lg:col-4 p-3 cursor-pointer">
      <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
        <div class="bg-pink-100 inline-flex align-items-center justify-content-center mr-3" style="width: 88px; height: 88px; border-radius: 10px;">
          <i class="pi pi-users text-pink-600 text-3xl"></i>
        </div>
        <div>
          <span class="text-900 text-xl font-medium mb-2">Subscriptions</span>
          
        </div>
        <div class="ml-auto">
          <button class="p-button p-component p-button-icon-only p-button-text p-button-plain p-button-rounded" type="button" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
            <span class="p-button-icon pi pi-ellipsis-v" data-pc-section="icon"></span>
            <span class="p-button-label" data-pc-section="label">&nbsp;</span>
            <!---->
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </button>
        </div>
      </div>
    </div>
    <div @click="current_template = 'addresses'" class="col-12 lg:col-4 p-3 cursor-pointer">
      <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
        <div class="bg-orange-100 inline-flex align-items-center justify-content-center mr-3" style="width: 88px; height: 88px; border-radius: 10px;">
          <i class="pi pi-map-marker text-orange-600 text-3xl"></i>
        </div>
        <div>
          <span class="text-900 text-xl font-medium mb-2">Addresses</span>
        </div>
        <div class="ml-auto">
          <button class="p-button p-component p-button-icon-only p-button-text p-button-plain p-button-rounded" type="button" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
            <span class="p-button-icon pi pi-ellipsis-v" data-pc-section="icon"></span>
            <span class="p-button-label" data-pc-section="label">&nbsp;</span>
            <!---->
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

          
    </div>
    <div v-if="current_template === 'addresses'" class="surface-card p-5 shadow-2 border-round flex-auto">
          <div  class="text-900 text-center font-bold text-3xl mb-4">My Addresses</div>
          <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
            <div class="grid flex-column lg:flex-row">
  <div v-for="item in my_addresses" class="col-4 p-3">
    <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150 border-primary">
      <div class="flex justify-content-between mb-3">
        <span class="text-900 text-xl font-medium">{{ item?.name }}</span>
        <span class="text-600 font-medium">
          <i class="pi pi-pencil mr-2"></i>Edit </span>
      </div>
      <span class="inline-block text-600 mb-3">{{ item?.street }}, {{ item?.suburb }}, {{ item?.city }}, {{ item?.country }}</span>
      <span class="inline-block text-600">
        <i class="pi pi-home mr-2"></i>{{ item?.address_type?.name }}</span>
    </div>
  </div>
  <div @click="addAddress()" class="col-12 lg:col-3 p-3">
    <div class="flex h-full flex-column justify-content-center align-items-center text-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
      <span class="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center">
        <i class="pi pi-fw pi-plus"></i>
      </span>
      <span class="text-600 mt-3">Add New Address</span>
    </div>
  </div>
</div>
</div>

          
    </div>
    <div v-if="current_template === 'remittances'" class="surface-card p-5  flex-auto">
          <div  class="text-900 text-center font-bold text-3xl mb-4">Remittances</div>
          <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
            <p>Coming soon</p>
            
</div>

          
    </div>
    <div v-if="current_template === 'subscriptions'" class="surface-card p-5  flex-auto">
          <div  class="text-900 text-center font-bold text-3xl mb-4">Subscriptions</div>
          <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
            <p>Coming soon</p>
            
</div>

          
    </div>
    <div v-if="current_template === 'shopeasy_savings_club'" class="surface-card p-5  flex-auto">
    <div  class="text-900 text-center font-bold text-3xl mb-4">Shop Easy Savings Club</div>
    <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
            <p>Coming soon</p>
            
</div>

          
    </div>
    <div v-if="current_template === 'loyalty_points'" class="surface-card p-5  flex-auto">
    <div  class="text-900 text-center font-bold text-3xl mb-4">Loyalty Points</div>
    <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
            <p>Coming soon</p>
            
</div>

          
    </div>
    <div v-if="current_template === 'shopping_carts'" class="surface-card p-5  flex-auto">
    <div  class="text-900 text-center font-bold text-3xl mb-4">My Shopping List</div>
    <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
            <p>Coming soon</p>
            
</div>

          
    </div>
    <div v-if="current_template === 'orders'" class="surface-card p-5 shadow-2 border-round flex-auto">
           <div  class="text-900 text-center font-bold text-3xl mb-4">Your Orders</div>
           
           <div class="surface-ground">
                <div class="grid">
                    
                    <div  class="field mb-4 col-12 md:col-12"> 
                                        
                        <DataTable :value="my_orders" ref="dt"  class="p-datatable-customers" showGridlines :rows="10"
                    dataKey="id" v-model:filters="filters" filterDisplay="menu" :loading="loading" responsiveLayout="scroll"
                    >
                            <template #header>
                                <div class="flex justify-content-between">
                                    <IconField iconPosition="left" >
                                        <InputIcon class="pi pi-search" > </InputIcon>
                                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                                    </IconField>
                                </div>
                            </template>
                            <template #empty>
                                No orders found.
                            </template>
                            <template #loading>s
                                Loading orders data. Please wait.
                            </template>
                            <Column  frozen field="name" header="Order Ref" style="min-width:12rem">
                                <template #body="{data}">
                                    {{data.order_ref}}
                                </template>
                            </Column>
                            
                        
                            <!-- <Column  frozen field="name" header="Delivery Address" style="min-width:12rem">
                                <template #body="{data}">
                                    {{getCityAndAddress(data.delivery_address)}}
                                </template>
                            </Column>
                            <Column  frozen field="name" header="Order Status" style="min-width:12rem">
                                <template #body="{data}">
                                <Tag :value="data.status?.name" :severity="getSeverity(data.status.name)"</Tag>
                                </template>
                            </Column>
                                -->
                            <Column frozen  field="description" header="Total Amount" style="min-width:12rem">
                                <template #body="{data}">
                                    {{data.total_incl_tax}}
                                </template>
                            </Column>
                            
                            
                            <Column frozen  field="category.name" header="Date Created" style="min-width:12rem">
                                <template #body="{data}">
                                    {{formatDate(data.created_at)}}
                                </template>
                            </Column>
                            <Column frozen  field="created_at" header="Track Order" style="min-width:12rem">
                                <template #body="{data}">
                                    <Button  icon="pi pi-truck" @click="trackOrderModal(data)" label="Track Order" severity="info" text rounded aria-label="Cancel" />
                                </template>
                            </Column>
                                
                        
                        
                        </DataTable>
                    </div>
                </div>
            </div>
 
           
     </div>
    
</div>


<Dialog v-model:visible="add_address" modal header="Add Address" :style="{ width: '50rem' }">
    <span class="p-text-secondary block mb-5">Enter your address details</span>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Name</label>
        <InputText v-model="address_name" placeholder="John's School Address" id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Type</label>
        <Dropdown v-model="selected_address_type" class="w-full md:w-14rem" placeholder="Select Address Type" :options="address_types" optionLabel="name" optionValue="id" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Country</label>
        <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
    <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps?.value?.code.toLowerCase()}`" style="width: 18px" />
            <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
            {{ slotProps.placeholder }}
        </span>
    </template>
    <template #option="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
</Dropdown>
    </div>
    
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">City</label>
        <InputText v-model="city" placeholder="Harare" id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Suburb</label>
        <InputText v-model="suburb" placeholder="Mt Pleasant" id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Ho. Number & Street</label>
        <InputText v-model="street" placeholder="8 Wilmar Drive" id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="add_address = false"></Button>
        <Button :disabled="!address_name || !street || !suburb || !city || !selected_address_type" :loading="loading" @click="createAddress()" type="button" label="Save"></Button>
    </div>
</Dialog>
<Dialog v-model:visible="addLineItem"  modal header="Order Tracking" :style="{ width: '50rem' }">
     <span class="p-text-secondary block mb-5">Order Ref# {{ myref }}</span>
    
    
        <Timeline v-if="delivery_option == 'delivery'" :value="delivery_stages" layout="horizontal" align="top">
            <template #content="slotProps">
              <span :class="{'current-stage': my_current_stage === slotProps.item}">
                {{ slotProps.item }}
            </span>
            </template>
        </Timeline>
        <Timeline v-else  :value="collection_stages" layout="horizontal" align="top">
            <template #content="slotProps">
              <span :class="{'current-stage': my_current_stage === slotProps.item}">
                {{ slotProps.item }}
            </span>
            </template>
        </Timeline>
   
 </Dialog>
   </NuxtLayout>
   <Footer />
</template>
<script setup lang="ts">
const frontStore = useFrontStore()
const authStore = useAuthStore()
import { FilterMatchMode } from 'primevue/api';
//@ts-ignore
const add_address = ref(false)
const toast = useToast()
const delivery_stages = ref()
const collection_stages = ref()
const loading = ref(false)
const email = ref()
const password = ref()
const address_types = ref()
const address_name = ref()
const city = ref()
const suburb = ref()
const myref = ref()
const addLineItem = ref(false)
const delivery_option = ref()
const my_current_stage = ref()
const selectedCountry = ref();
const countries = ref([
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Brunei', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cabo Verde', code: 'CV' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo (Congo-Brazzaville)', code: 'CG' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czechia (Czech Republic)', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Eswatini', code: 'SZ' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Greece', code: 'GR' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea (North)', code: 'KP' },
    { name: 'Korea (South)', code: 'KR' },
    { name: 'Kosovo', code: 'XK' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Laos', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia', code: 'FM' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar (formerly Burma)', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'North Macedonia', code: 'MK' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestine State', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russia', code: 'RU' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Sudan', code: 'SS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syria', code: 'SY' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Vatican City (Holy See)', code: 'VA' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
]);
const trackOrderModal = async(data:any) => {
  addLineItem.value = true
  myref.value = data.order_ref
  delivery_option.value = data.delivery_option
  trackOrder(data.order_ref)
   
  
 }

 const trackOrder = (order_ref:any) => {
    let result = frontStore.trackOrderByRef(order_ref).then((data) => {
      //@ts-ignore
     my_current_stage.value = data.data.stages.find(stage => stage.current === 1).status
     
   })

 }
const formatDate = (value:any) => {
        const date = new Date(value);
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
        //@ts-ignore
        return date.toLocaleString('en-US', options);
};
  
const filters = ref({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const dt = ref();

    const initFilters = () => {
        filters.value = {
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        }
    };

    const clearFilter1 = () => {

        initFilters();
    };
const signIn = async () => {
  loading.value = true;
const info = {
  email: email.value,
  password: password.value,
};

try {
  let response = await authStore.login(info);
  
  // Log the entire response to debug more effectively
  // Check if the request was successful
  if (response.success === false) {
    // Display warning toast if the success is false
    toast.add({
      severity: 'warn',
      summary: 'Sign In Failed',
      detail: response.message || 'An error occurred. Please try again later.',
      life: 3000,
    });
  } else if (response.data?.login?.data?.token) {
    // If login is successful, display success toast and navigate
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Successfully Signed In',
      life: 3000,
    });
    reloadNuxtApp()
  } else {
    // Catch all for unexpected response structures
    toast.add({
      severity: 'warn',
      summary: 'Sign In Failed',
      detail: response.data?.message || 'An unexpected error occurred.',
      life: 3000,
    });
  }
} catch (error) {
  // Handle network or unexpected errors
  console.error("Login error:", error);
  toast.add({
    severity: 'error',
    summary: 'Error',
    detail: 'Server Error. Please try again later.',
    life: 3000,
  });
} finally {
  // Ensure loading is set to false in all cases
  loading.value = false;
}

}
const street = ref()
const selected_address_type = ref()
const current_template =  storeToRefs(frontStore).current_template
const my_orders = ref()
const my_addresses = ref()
const mytoken = useCookie('token');
const name = useCookie('username');
const user_id = useCookie('user_id');
const addAddress = () => {
 add_address.value = true
}
const createAddress = () => {
  loading.value = true
  let params = {
    name: address_name.value,
    user_id: user_id.value,
    address_type: selected_address_type.value,
    city: city.value,
    suburb: suburb.value,
    street: street.value,
    country: selectedCountry.value?.name
  }
  let new_address = frontStore.createAddress(params).then((data) => {
   
    if (data.status == 'success') {
      loading.value = false
      toast.add({ severity: 'success', summary: 'Success', detail: 'Succesfully Created', life: 3000 });
      add_address.value = false
      address_name.value = null
      selected_address_type.value = null,
      city.value = null
      suburb.value = null
      street.value = null
      selectedCountry.value = null
      let my_addressess = frontStore.getMyAddresses(user_id.value).then((data) => {
        my_addresses.value = data?.data?.data
      })
    } else {
      loading.value = false
      toast.add({ severity: 'info', summary: 'Error', detail: 'Failed to Create Address', life: 3000 });
    }
  })
}
onMounted(() => {
  let all_addresses = frontStore.getAllAddressTypes().then((data) => {
    address_types.value = data?.data?.data
  })
  let my_addressess = frontStore.getMyAddresses(user_id.value).then((data) => {
    my_addresses.value = data?.data?.data
  })
  let delivery = frontStore.getAllOrderStages().then((data) => {
    //@ts-ignore
     delivery_stages.value = data.data.data.filter(order => order.delivery_option === "delivery").sort((a, b) => a.sequence - b.sequence).map(order => order.stage)
    //@ts-ignore
     collection_stages.value = data.data.data.filter(order => order.delivery_option === "pickup") .sort((a, b) => a.sequence - b.sequence).map(order => order.stage)
   })
   let orders = frontStore.getMyOrders(user_id.value).then((data) => {
    console.log('orders',data.data.orders)
     my_orders.value = data?.data?.orders
   })
})
const isCurrentStage = (stage:any) => {
    return stage === my_current_stage.value;
};
</script>
