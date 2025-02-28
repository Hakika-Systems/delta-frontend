<template>

  <div class="login-container">
    <div class="login-card">
      <!-- Logo Section -->
      <div class="logo-section">
        <div class="logo-background">
          <NuxtImg 
            format="webp" 
            src='/images/delta_image.png' 
            alt="Delta Logo" 
            class="logo-image"
          />
        </div>
      </div>

      <!-- Welcome Text -->
      <div class="welcome-text">
        <h1>Welcome Back!</h1>
        <p>Sign in to continue shopping</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="signIn" class="login-form">
        <div class="form-group">
          <div class="input-wrapper">
            <i class="pi pi-envelope"></i>
            <InputText 
              v-model="email" 
              type="email" 
              placeholder="Email Address"
              class="custom-input"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="input-wrapper">
            <i class="pi pi-lock"></i>
            <Password 
              v-model="password" 
              :feedback="false"
              placeholder="Password"
              toggleMask
              class="custom-password"
            />
          </div>
        </div>

        <div class="form-options">
          <div class="remember-me">
            <Checkbox v-model="rememberMe" :binary="true" />
            <label>Remember me</label>
          </div>
          <a @click="forgot = true" class="forgot-link">Forgot password?</a>
        </div>

        <Button 
          type="submit"
          :loading="loading" 
          class="login-button"
        >
          <span v-if="!loading">Sign In</span>
          <i v-else class="pi pi-spin pi-spinner"></i>
        </Button>
      </form>

      <!-- <div class="divider">
        <span>or continue with</span>
      </div>

      <div class="social-buttons">
        <Button class="google-btn" severity="secondary">
          <i class="pi pi-google"></i>
          Google
        </Button>
        <Button class="facebook-btn" severity="secondary">
          <i class="pi pi-facebook"></i>
          Facebook
        </Button>
      </div> -->

      <div class="signup-prompt">
        Don't have an account? 
        <NuxtLink 
          @click="navigateTo('/registration',{external:true})" 
          class="signup-link"
        >
          Sign Up
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Forgot Password Dialog -->
  <Dialog v-model:visible="forgot" modal class="forgot-dialog">
    <template #header>
      <h3>Reset Password</h3>
    </template>
    <div class="forgot-content">
      <p>Enter your email address to reset your password.</p>
      <InputText 
        v-model="email" 
        type="email" 
        placeholder="Email Address"
        class="forgot-input"
      />
      <Button 
        :loading="loading" 
        @click="sendReset()"
        class="reset-button"
      >
        Send Reset Link
      </Button>
    </div>
  </Dialog>

 
</template>

<script setup lang="ts">
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox'

const authStore = useAuthStore()
const frontStore = useFrontStore()
const email = ref()
useHead({
  title: "Delta Zimbabwe - Sign In",
  meta: [
    { name: "description", content: "OKshop makes shopping in Zimbabwe easy and convenient!" },
  ],
});
const forgot = ref(false)
const user_id = useCookie('user_id');
const confirm_password = ref()
const new_details = ref(false)
const loading = ref(false)
const password = ref()
const toast = useToast()
const otp = ref()
const rememberMe = ref(false)

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
            if (cart_id) {
              let ccb = JSON.parse(current_cart_brand)
              let csi = JSON.parse(current_cart_shop_id)
              let gi = JSON.parse(guest_id)
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

<style scoped>
.login-container {
  min-height: calc(100vh - 00px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: radial-gradient(circle at center, #15416e 0%, #097fc1 100%) !important;
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.logo-section {
  text-align: center;
  margin-bottom: 1.5rem;
}

.logo-background {
  background: #097fc1;
  padding: 1.5rem;
  border-radius: 12px;
  display: inline-block;
}

.logo-image {
  width: 180px;
  height: auto;
  display: block;
}

.welcome-text {
  text-align: center;
  margin-bottom: 2rem;
}

.welcome-text h1 {
  color: #333;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.welcome-text p {
  color: #666;
  font-size: 1rem;
}

.login-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.input-wrapper {
  position: relative;
}

.input-wrapper i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  z-index: 1;
}

.custom-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem !important;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.custom-input:focus {
  border-color: #c8b967;
  box-shadow: 0 0 0 2px rgba(200, 185, 103, 0.1);
}

.custom-password {
  width: 100%;
}

.custom-password :deep(.p-password-input) {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.forgot-link {
  color: #c8b967;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.forgot-link:hover {
  color: #baa73b;
}

.login-button {
  width: 100%;
  padding: 1rem;
  background: #c8b967;
  border: none;
  color: white;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.login-button:hover {
  background: #baa73b;
  transform: translateY(-1px);
}

.divider {
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background: #e0e0e0;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background: white;
  padding: 0 1rem;
  color: #666;
  font-size: 0.9rem;
}

.social-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.google-btn,
.facebook-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  color: #333;
  transition: all 0.3s ease;
}

.google-btn:hover,
.facebook-btn:hover {
  background: #f8f9fa;
  transform: translateY(-1px);
}

.signup-prompt {
  text-align: center;
  color: #666;
}

.signup-link {
  color: #c8b967;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
}

.signup-link:hover {
  color: #baa73b;
}

.forgot-dialog {
  max-width: 400px;
}

.forgot-content {
  padding: 1.5rem;
}

.forgot-input {
  width: 100%;
  margin: 1rem 0;
}

.reset-button {
  width: 100%;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .login-card {
    padding: 2rem;
  }

  .social-buttons {
    grid-template-columns: 1fr;
  }
}
</style>

  