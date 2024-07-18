<template>
    <shopHeader/>
    <div class="block-content surface-card text-center px-4 py-8 md:px-6 lg:px-8">
      <div class="text-900 font-medium text-3xl mb-2">Register an account</div>
      <div class="text-700 line-height-3 mb-4">Already have an account? <a href="/login" class="text-primary">Login</a></div>
      
      <div class="flex justify-content-center mb-4">
        <ul class="p-2 m-0 list-none flex overflow-x-auto select-none">
          <li @click="Mukando()" @mouseenter="Mukando()" class="pr-3">
            <a  class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700" data-pd-ripple="true">
              <i class="pi pi-home mr-2"></i>
              <span class="font-medium" >Mukando</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li class="flex align-items-center">
            <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
          </li>
          <li @click="Trader()" @mouseenter="Trader()" class="px-3">
            <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple bg-primary hover:bg-primary text-700" data-pd-ripple="true">
              <i class="pi pi-users mr-2"></i>
              <span class="font-medium" @click="trader = true">Trader</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root" style="height: 144px; width: 144px; top: -60.5557px; left: 23.3542px;"></span>
            </a>
          </li>
          <li class="flex align-items-center">
            <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
          </li>
          <li @click="Business_account()" @mouseenter="Business_account()" class="px-3">
            <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700" data-pd-ripple="true">
              <i class="pi pi-shopping-cart mr-2"></i>
              <span class="font-medium" @click="business = true">Business Registration</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li class="flex align-items-center">
            <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
          </li>
          <li @click="Institution_account()" @mouseenter="Institution_account()" class="px-3">
            <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700" data-pd-ripple="true">
              <i class="pi pi-user mr-2"></i>
              <span class="font-medium" @click="Institution = true">Institution</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li class="flex align-items-center">
            <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
          </li>
          <li @click="Individual_account()" @mouseenter="Individual_account()" class="px-3">
            <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700" data-pd-ripple="true">
              <i class="pi pi-cog mr-2"></i>
              <span class="font-medium" >Individual</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
        </ul>
      </div>
      <div v-if="Individual == true" class="flex justify-content-center mb-4">
          <div class="">
            <div class="surface-card p-4 shadow-2 border-round">
            <div class="grid formgrid p-fluid ">
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" v-model="value" />
                        <label for="username">Name</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" v-model="value" />
                        <label for="username">Address</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" v-model="value" />
                        <label for="username">Email</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" v-model="value" />
                        <label for="username">Phone Number</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" v-model="value" />
                        <label for="username">Whatsapp Phone Number</label>
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
      <div v-else-if="mukando == true" class="flex justify-content-center mb-4">
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
                        <label for="username">Tax Clearance</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">VAT Certificate</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Trading License</label>
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
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Phone Number of Representative</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Email</label>
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
      <div v-else-if="business == true" class="flex justify-content-center mb-4">
          <div class="">
            <div class="surface-card p-4 shadow-2 border-round">
            <div class="grid formgrid p-fluid ">
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Name of Business</label>
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
                        <label for="username">Business Type e.g Bank / Mine</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Tax Clearance</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">VAT Certificate</label>
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
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Phone Number of Representative</label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Email</label>
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
      <div v-else-if="Institution == true" class="flex justify-content-center mb-4">
          <div class="">
            <div class="surface-card p-4 shadow-2 border-round">
            <div class="grid formgrid p-fluid ">
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Name of Institution</label>
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
                        <label for="username">Email</label>
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
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Phone Number </label>
                    </FloatLabel>
                </div>
                <div class="field mb-4 col-6">
                    <FloatLabel>
                        <InputText id="username" size="large" v-model="value" />
                        <label for="username">Email</label>
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
    </div>
  </template>
<script setup lang="ts">

let mukando = ref(false)
let trader = ref(false)
let business = ref(false)
let Institution = ref(false)
let Individual = ref(false)
console.log("mukando",mukando.value)

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

</script>

  