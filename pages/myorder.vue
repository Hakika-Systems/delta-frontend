<template>
    <NuxtLayout name="account">
     <div v-if="current_template === 'home'" class="surface-card p-5 shadow-2 border-round flex-auto">
           <div v-if="name" class="text-900 text-center font-bold text-3xl mb-4">Hi, {{ name }}</div>
           <div class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator" aria-orientation="horizontal" data-pc-name="divider" data-pc-section="root" style="justify-content: center;">
             <!---->
           </div>
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
     <div v-if="current_template === 'addresses'" class="surface-card p-5 shadow-2 border-round flex-auto">
           <div v-if="name" class="text-900 text-center font-bold text-3xl mb-4">My Addresses</div>
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
    <DeltaFooter />
 </template>
 <script setup lang="ts">
 const frontStore = useFrontStore()
 //@ts-ignore
 const add_address = ref(false)
 const toast = useToast()
 useHead({
  title: "Delta Zimbabwe - Order Details",
  meta: [
    { name: "description", content: "Delta makes shopping in Zimbabwe easy and convenient!" },
  ],
});
 import { FilterMatchMode } from 'primevue/api';
 const loading = ref(false)
 const address_types = ref()
 const address_name = ref()
 const addLineItem = ref(false)
 const city = ref()
 const delivery_stages = ref()
 const collection_stages = ref()
 const suburb = ref()
 const selectedCountry = ref();
 const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Out for Delivery', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
  
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
 const street = ref()
 const selected_address_type = ref()
 const current_template =  storeToRefs(frontStore).current_template
 const my_addresses = ref()
 const mytoken = useCookie('token');
 const name = useCookie('username');
 const my_orders = ref()
 const myref = ref()
 const delivery_option = ref()
 const my_current_stage = ref()
 const user_id = useCookie('user_id');
 const addAddress = () => {
  add_address.value = true
 }

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
   let delivery = frontStore.getAllOrderStages().then((data) => {
    //@ts-ignore
     delivery_stages.value = data.data.data.filter(order => order.delivery_option === "delivery").sort((a, b) => a.sequence - b.sequence).map(order => order.stage)
    //@ts-ignore
     collection_stages.value = data.data.data.filter(order => order.delivery_option === "pickup") .sort((a, b) => a.sequence - b.sequence).map(order => order.stage)
   })
  

   let my_addressess = frontStore.getMyAddresses(user_id.value).then((data) => {
     my_addresses.value = data?.data?.data
   })
   let orders = frontStore.getMyOrders(user_id.value).then((data) => {
     my_orders.value = data?.data?.orders
   })
 })

 const isCurrentStage = (stage:any) => {
    return stage === my_current_stage.value;
};
 </script>
 <style>

.current-stage {
    color: green; /* Or any color that highlights the current stage */
    font-weight: bold; /* Highlight with bold text */
}
</style>
 