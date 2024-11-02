<template>
    <OkMartShopHeader/>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="w-full lg:w-6 p-4 lg:p-7 m-auto shadow-2 surface-card">
      <div class="flex align-items-center justify-content-between mb-7">
        <span class="text-2xl font-medium text-900">Sign In</span>
        <span class="mr-3 text-900">Don't have an account? <NuxtLink @click="navigateTo('/registration',{external:true})" class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">  Sign Up</NuxtLink></span>
      </div>
      <label for="email4" class="block text-900 font-medium mb-2">Email</label>
      <InputText class="p-inputtext p-component w-full mb-3 p-3" placeholder="Email Address" v-model="email" />
      <label for="password4" class="block text-900 font-medium mb-2">Password</label>
      <Password  class="w-full password mb-3" placeholder="Enter Password" :feedback="false" toggleMask v-model="password" />
      <div @click="forgot = true" class="flex align-items-center justify-content-between mb-6">
        <a @click="forgot = true" class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Forgot password?</a>
      </div>
      <Button :loading="loading" label="Sign In" @click="signIn()" class="w-full" /> 
    </div>
  </div>
  <Dialog v-model:visible="forgot" modal header="Forgot Password" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Enter your email address.</span>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Email Address</label>
        <InputText v-model='email' id="username" type="email" class="flex-auto"  />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button :loading="loading" type="button" label="Reset" @click="sendReset()"></Button>
    </div>
</Dialog>
<Dialog v-model:visible="new_details" modal header="Change Password" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Enter your new password.</span>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Email Address</label>
        <InputText v-model='email' id="username" type="email" class="flexx"  />
    </div>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Password</label>
        <Password class="w-full" v-model="password" placeholder="Password" toggleMask />
    </div>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Confirm Password</label>
        <Password :feedback="false" class="w-full" v-model="confirm_password" placeholder="Confirm Password" />
    </div>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">OTP</label>
        <InputOtp  class="w-full flexx" v-model="otp" :length="5" integerOnly />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button :loading="loading" type="button" label="Change Password" @click="changePassword()"></Button>
    </div>
</Dialog>
  <Footer />
  </template>
<script setup lang="ts">
import Password from 'primevue/password';

const authStore = useAuthStore()
const frontStore = useFrontStore()
const email = ref()
const forgot = ref(false)
const user_id = useCookie('user_id');
const confirm_password = ref()
const new_details = ref(false)
const loading = ref(false)
const password = ref()
const toast = useToast()
const otp = ref()

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
            let user_idd:any = response.data?.login?.data?.user?.id
            const current_shop_id:any = sessionStorage.getItem('current_shop_id');
            const guest_id:any = sessionStorage.getItem('guest_id');
            const current_shop_branch:any = sessionStorage.getItem('current_shop_branch');
			      const cart_id:any = sessionStorage.getItem('cart_id');
            const current_cart_brand:any = sessionStorage.getItem('current_cart_brand')
            const current_cart_shop_id:any = sessionStorage.getItem('current_cart_shop_id')
            console.log("cart_id: " + cart_id)
            if (cart_id) {
              let ccb = JSON.parse(current_cart_brand)
              let csi = JSON.parse(current_cart_shop_id)
              let gi = JSON.parse(guest_id)
              console.log("variables to comapre",current_shop_id,ccb)
              if(current_shop_id === ccb) {
                 let params = {
                  user_id: user_idd,
                  shop_id: csi
                 }
                //  let cart_creation = await frontStore.createCart(params).then((data) => {
                //   console.log("cart_creation_data",data)
                //  })
                 let results = await frontStore.getCartTwo(cart_id).then(async(data) => {
                  if (data?.status == 'success') {
                    let update_params = {
                      user_id: user_idd,
                      cart_id: data?.data?.id,
                      guest_id: gi,
                      shop_id: data?.data?.shop_id
                    }
                    let cart_update = await frontStore.updateCart(update_params).then((data) => {
                      navigateTo('/myaccount',{external: true});
                    })
                  }
                 })

              }   
            } else {
              navigateTo('/myaccount',{external: true});
            }
           
        //    await  navigateTo(`/shop-${JSON.parse(current_shop_id)}-${JSON.parse(current_shop_branch)}`,{external:true})
        // navigateTo('/myaccount',{external: true});
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
const sendReset = async () => {
    loading.value = true
    const info = {
        
        email: email.value,
        
    }
    let result = await frontStore.sendReset(info).then((data)=> {
        loading.value = false
        if (data.status === "success") {
            forgot.value = false
            new_details.value = true
            toast.add({ severity: 'success', summary: 'Success', detail: data?.message, life: 3000 });
           
        } else {
            toast.add({ severity: 'warn', summary: 'Failed', detail: data.errors, life: 3000 });
        }
    })
}
const changePassword = async () => {
    loading.value = true
    const info = {
        
        email: email.value,
        password: password.value,
        confirm_password: confirm_password.value,
        otp: otp.value
        
    }
    let result = await frontStore.changePassword(info).then((data)=> {
        loading.value = false
        if (data.status === "success") {
            forgot.value = false
            new_details.value = false
            toast.add({ severity: 'success', summary: 'Success', detail: data?.message, life: 3000 });
           
        } else {
            toast.add({ severity: 'warn', summary: 'Failed', detail: data.errors, life: 3000 });
        }
    })
}


</script>
<style>
input.p-inputtext.p-component.p-password-input {
    width: 100%;
    height: 50px;
}
.flexx {
    height: 50px !important;
    width: 100%;
}
</style>

  