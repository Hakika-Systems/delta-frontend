<template>
   <NuxtLayout name="account">
    <div v-if="current_template === 'home'" class="surface-card p-5 shadow-2 border-round flex-auto">
          <div v-if="name" class="text-900 text-center font-bold text-3xl mb-4">Hi, {{ name }}</div>
          <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
  <div class="grid">
    <div class="col-12 lg:col-4 p-3">
      <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
        <div class="bg-teal-100 inline-flex align-items-center justify-content-center mr-3" style="width: 88px; height: 88px; border-radius: 10px;">
          <i class="pi pi-shield text-teal-600 text-3xl"></i>
        </div>
        <div>
          <span class="text-900 text-xl font-medium mb-2">My Orders</span>
          
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
    <div class="col-12 lg:col-4 p-3">
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
    <div class="col-12 lg:col-4 p-3">
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
    <div class="col-12 lg:col-4 p-3">
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
    <div class="col-12 lg:col-4 p-3">
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
    <div class="col-12 lg:col-4 p-3">
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
          <div v-if="name" class="text-900 text-center font-bold text-3xl mb-4">My Addresses</div>
          <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
            <!---->
          </div><div class="surface-ground">
            <div class="grid flex-column lg:flex-row">
  <div class="col p-3">
    <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150 border-primary">
      <div class="flex justify-content-between mb-3">
        <span class="text-900 text-xl font-medium">Home</span>
        <span class="text-600 font-medium">
          <i class="pi pi-pencil mr-2"></i>Edit </span>
      </div>
      <span class="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</span>
      <span class="inline-block text-600">
        <i class="pi pi-mobile mr-2"></i>+123456789 </span>
    </div>
  </div>
  <div class="col p-3">
    <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150">
      <div class="flex justify-content-between mb-3">
        <span class="text-900 text-xl font-medium">Office</span>
        <span class="text-600 font-medium">
          <i class="pi pi-pencil mr-2"></i>Edit </span>
      </div>
      <span class="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1072 KC Amsterdam The Netherlands</span>
      <span class="inline-block text-600">
        <i class="pi pi-mobile mr-2"></i>+123456789 </span>
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
<Dialog v-model:visible="add_address" modal header="Add Address" :style="{ width: '50rem' }">
    <span class="p-text-secondary block mb-5">Enter your address details</span>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Name</label>
        <InputText v-model="address_name" placeholder="John's School Address" id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Type</label>
        <Dropdown v-model="selected_address_type" class="w-6" placeholder="Select Address Type" :options="address_types" optionLabel="name" optionValue="id" />
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
        <label for="email" class="font-semibold w-6rem">Street</label>
        <InputText v-model="street" placeholder="Wilmar Drive" id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="add_address = false"></Button>
        <Button :disabled="!address_name || !street || !suburb || !city || !selected_address_type" :loading="loading" @click="createAddress()" type="button" label="Save"></Button>
    </div>
</Dialog>
   </NuxtLayout>
</template>
<script setup lang="ts">
const frontStore = useFrontStore()
//@ts-ignore
const add_address = ref(false)
const toast = useToast()
const loading = ref(false)
const address_types = ref()
const address_name = ref()
const city = ref()
const suburb = ref()
const street = ref()
const selected_address_type = ref()
const current_template =  storeToRefs(frontStore).current_template
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
    street: street.value
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
    } else {
      loading.value = false
      toast.add({ severity: 'info', summary: 'Error', detail: 'Failed to Create Address', life: 3000 });
    }
  })
}
onMounted(() => {
  let all_addresses = frontStore.getAllAddressTypes().then((data) => {
    console.log("my address types",data.data.data)
    address_types.value = data?.data?.data
  })
})
</script>
