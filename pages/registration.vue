<template>
    <okMartShopHeader/>
    <div class="block-content surface-ground text-center px-4 py-8 md:px-6 lg:px-8">
      <div class="text-900 font-medium text-3xl mb-2">Register an account</div>
      <div class="text-700 line-height-3 mb-4">Already have an account? <a href="/signin" class="text-primary">Login</a></div>
      
      <!-- <div class="flex justify-content-center mb-4">
        <ul class="p-2 m-0 list-none flex overflow-x-auto select-none">
            <li @click="Individual_account()"  class="px-3">
            <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700 hover:bg-primary" data-pd-ripple="true">
              <i class="pi pi-cog mr-2"></i>
              <span class="font-medium" >Individual</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li class="flex align-items-center">
            <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
          </li>
          <li @click="Mukando()"  class="pr-3">
            <a  class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple  hover:bg-primary text-700" data-pd-ripple="true">
              <i class="pi pi-home mr-2"></i>
              <span class="font-medium" >Mukando</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li class="flex align-items-center">
            <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
          </li>
          <li @click="Trader()"  class="px-3">
            <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple  hover:bg-primary text-700" data-pd-ripple="true">
              <i class="pi pi-users mr-2"></i>
              <span class="font-medium" @click="trader = true">Trader</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root" style="height: 144px; width: 144px; top: -60.5557px; left: 23.3542px;"></span>
            </a>
          </li>
          <li class="flex align-items-center">
            <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
          </li>
          <li @click="Business_account()"  class="px-3">
            <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700 hover:bg-primary"  data-pd-ripple="true">
              <i class="pi pi-shopping-cart mr-2"></i>
              <span class="font-medium" @click="business = true">Business Registration</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li class="flex align-items-center">
            <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
          </li>
          <li @click="Institution_account()"  class="px-3">
            <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700 hover:bg-primary" data-pd-ripple="true">
              <i class="pi pi-user mr-2"></i>
              <span class="font-medium" @click="Institution = true">Institution</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
         
         
        </ul>
      </div> -->
      <div  class="flex justify-content-center mb-4">
          <div class="">
            
            <div class="surface-card p-4 shadow-2 border-round">
                <label>Account Type</label>
                <Dropdown v-model="selectedBusinessType" :options="businessTypes" placeholder="Select Business Type" class="w-full mb-5" />
                <div v-if="selectedBusinessType === 'INDIVIDUAL'" class="grid formgrid p-fluid ">
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText placeholder="Enter Full Name" id="username" v-model="name" size="large" />
                        <label for="username">Name</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" v-model="email" size="large" />
                        <label for="username">Email Address</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText placeholder="+263779698569" id="phone" v-model="contact_number" size="large" />
                        <label for="username">Phone Number</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText placeholder="263779698569" id="username" v-model="whatsapp_number" size="large" />
                        <label for="username">WhatsApp Number</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <Password id="username" v-model="password" />
                        <label for="username">Password</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <Password id="confirm"   class="w-full password mb-3" toggleMask :feedback="false" v-model="password_confirmation" />
                        <label for="confirm">Password Confirmation</label>
                    </FloatLabel>
                </div>
                <div class="surface-border border-top-1  mb-4 col-12 "></div>
                <div class="field mb-4 col-3">
                    <Button :loading="loading" @click="individualRegistration()" :disabled="!name || !email || !whatsapp_number || !password || !password_confirmation" label="Sign Up" severity="success" />
                </div>
            </div>
          </div>
        </div>

      </div>
      <!-- <div v-else-if="mukando == true" class="flex justify-content-center mb-4">
          <div class="">
            <div class="surface-card p-4 shadow-2 border-round">
            <div class="grid formgrid p-fluid ">
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Mukando Name</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Address</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Contact Number</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Whatsapp Phone Number</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Name of Treasurer</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Phone Number</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Enter Password</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Re-enter Password</label>
                    </FloatLabel>
                </div>
                <div class="surface-border border-top-1  mb-4 col-12 "></div>
                <div class="field mb-4 col-3">
                    <Button label="Send Details" severity="success" />
                </div>
            </div>
          </div>
        </div>

      </div>
      <div v-else-if="trader == true" class="flex justify-content-center mb-4">
          <div class="">
            <div class="surface-card p-4 shadow-2 border-round">
            <div class="grid formgrid p-fluid ">
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Name of Bussiness</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Address</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Phone Number</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Whatsapp Phone Number</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Sector of Tradee.g Retail / Liquor</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Name of Representative</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Designation</label>
                    </FloatLabel>
                </div>
                <!-- <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Phone Number of Representative</label>
                    </FloatLabel>
                </div> -->
                <!-- <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Email</label>
                    </FloatLabel>
                </div>
               
     
                <div class="field mb-4 col-6">
                    <FileUpload name="demo[]" url="/api/upload"  :multiple="true" accept="image/*" :maxFileSize="1000000">
                        <template #empty>
                            <span style="">Drag and drop files to here to upload Tax Clearance.</span>
                        </template>
                    </FileUpload>
                </div>
                <div class="field mb-4 col-6">
                    <FileUpload name="demo[]" url="/api/upload"  :multiple="true" accept="image/*" :maxFileSize="1000000">
                        <template #empty>
                            <span style="">Drag and drop files to here to upload Trading License.</span>
                        </template>
                    </FileUpload>
                </div>

                <div class="surface-border border-top-1  mb-4 col-12 "></div>
                <div class="field mb-4 col-3">
                    <Button label="Send Details" severity="success" />
                </div>
            </div>
          </div>
        </div>

      </div> -->
    </div>
    <DeltaFooter />
  </template>
<script setup lang="ts">

const frontStore = useFrontStore()
useHead({
  title: "OK ShopEasy Zimbabwe - Registration",
  meta: [
    { name: "description", content: "OKshop makes shopping in Zimbabwe easy and convenient!" },
  ],
});
const phoneNumber = ref()
const countryCode = ref('FR')
const results = ref()
const toast = useToast()
const name = ref()
const email = ref()
const password = ref()
const strongPasswordRegex = ref(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
const selectedBusinessType = ref('INDIVIDUAL')
const businessTypes = ref(['MUKANDO','TRADER','BUSINESS','INSTITUTION','INDIVIDUAL'])
const loading = ref(false)
const password_confirmation = ref()
const contact_number = ref()
const whatsapp_number = ref()
const value = ref()
let mukando = ref(false)
let trader = ref(false)
let business = ref(false)
let Institution = ref(false)
let Individual = ref(true)

const Mukando = ()=>{
    mukando.value = true
    trader.value = false
    business.value = false
    Institution.value = false
    Individual.value = false
}
const Trader = ()=>{
    mukando.value = false
    trader.value = true
    business.value = false
    Institution.value = false
    Individual.value = false
}
const Institution_account = ()=>{
    mukando.value = false
    trader.value = false
    business.value = false
    Institution.value = true
    Individual.value = false
}
const Individual_account = ()=>{
    mukando.value = false
    trader.value = false
    business.value = false
    Institution.value = false
    Individual.value = true
}
const Business_account = ()=>{
    mukando.value = false
    trader.value = false
    business.value = true
    Institution.value = false
    Individual.value = false
}
onMounted(() => {
    Individual.value = true
})

const individualRegistration = async () => {
    loading.value = true
    if (!strongPasswordRegex.value.test(password.value)) {
        loading.value = false;
        toast.add({ 
            severity: 'warn', 
            summary: 'Weak Password', 
            detail: 'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.', 
            life: 5000 
        });
        return; // Stop the process if password is weak
    }
    const info = {
        name: name.value,
        email: email.value,
        contact_number: contact_number.value,
        whatsapp_number: whatsapp_number.value,
        password: password.value,
        password_confirmation: password_confirmation.value
    }
    let result = await frontStore.individualRegistration(info).then((data)=> {
        loading.value = false
        if (data.status === "success") {
            toast.add({ severity: 'success', summary: 'Success', detail: 'You have been registred', life: 3000 });
            navigateTo('/signin',{external:true})
        } else {
            toast.add({ severity: 'warn', summary: 'Failed', detail: data.errors, life: 3000 });
        }
    })
}
</script>

  