<template>
    <OkMartShopHeader/>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="w-full lg:w-6 p-4 lg:p-7 m-auto shadow-2 surface-card">
      <div class="flex align-items-center justify-content-between mb-7">
        <span class="text-2xl font-medium text-900">Sign In</span>
        <span class="mr-3 text-900">Dont have an Account? <NuxtLink to="/registration" class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">  Sign Up</NuxtLink></span>
      </div>
      <label for="email4" class="block text-900 font-medium mb-2">Email</label>
      <input class="p-inputtext p-component w-full mb-3 p-3" data-pc-name="inputtext" data-pc-section="root" id="email4" type="text" placeholder="Email address">
      <label for="password4" class="block text-900 font-medium mb-2">Password</label>
      <input class="p-inputtext p-component w-full mb-3 p-3" data-pc-name="inputtext" data-pc-section="root" id="password4" type="password" placeholder="Password">
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
      <button class="p-button p-component w-full py-3 font-medium" type="button" aria-label="Sign In" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
        <!---->
        <span class="p-button-label" data-pc-section="label">Sign In</span>
        <!---->
        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
      </button>
    </div>
  </div>
  </template>
<script setup lang="ts">

const value = ref()
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

  