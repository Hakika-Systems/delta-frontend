<template>
    <OkMartShopHeader/>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="w-full lg:w-6 p-4 lg:p-7 m-auto shadow-2 surface-card">
      <div class="flex align-items-center justify-content-between mb-7">
        <span class="text-2xl font-medium text-900">Sign In</span>
        <span class="mr-3 text-900">Dont have an Account? <NuxtLink to="/registration" class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">  Sign Up</NuxtLink></span>
      </div>
      <label for="email4" class="block text-900 font-medium mb-2">Email</label>
      <InputText class="p-inputtext p-component w-full mb-3 p-3" placeholder="Email Address" v-model="email" />
      <label for="password4" class="block text-900 font-medium mb-2">Password</label>
      <Password class="w-full mb-3 p-3" placeholder="Enter Password" v-model="password" />
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
      <Button label="Sign In" @click="signIn()" class="w-full" /> 
    </div>
  </div>
  </template>
<script setup lang="ts">
const authStore = useAuthStore()
const email = ref()
const password = ref()

const signIn = async () => {
  const info = {
    email: email.value,
    password: password.value
  }
  
  let result = await authStore.login(info).then((data) => {
    console.log("dshdshj",data)
  })
}


</script>

  