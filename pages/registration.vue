<template>
   
    <div class="registration-container">
      <div class="registration-card">
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
          <h1>Create Account</h1>
          <p>Already have an account? 
            <NuxtLink to="/signin" class="login-link">Sign In</NuxtLink>
          </p>
        </div>

        <!-- Account Type Selection -->
        <div class="account-type-section">
          <label class="input-label">Account Type</label>
          <Dropdown 
            v-model="selectedBusinessType" 
            :options="businessTypes" 
            placeholder="Select Account Type" 
            class="account-dropdown"
          />
        </div>

        <!-- Registration Form -->
        <div v-if="selectedBusinessType === 'INDIVIDUAL'" class="registration-form">
          <div class="form-grid">
            <!-- Name and Email in first row -->
            <div class="form-group">
              <label class="input-label">Full Name</label>
              <div class="input-wrapper">
                <i class="pi pi-user"></i>
                <InputText v-model="name" placeholder="Enter your full name" />
              </div>
            </div>

            <div class="form-group">
              <label class="input-label">Email Address</label>
              <div class="input-wrapper">
                <i class="pi pi-envelope"></i>
                <InputText v-model="email" placeholder="Enter your email" type="email" />
              </div>
            </div>

            <!-- Phone and WhatsApp in second row -->
            <div class="form-group">
              <label class="input-label">Phone Number</label>
              <div class="input-wrapper">
                <i class="pi pi-phone"></i>
                <InputText v-model="contact_number" placeholder="+263779698569" />
              </div>
            </div>

            <div class="form-group">
              <label class="input-label">WhatsApp Number</label>
              <div class="input-wrapper">
                <i class="pi pi-whatsapp"></i>
                <InputText v-model="whatsapp_number" placeholder="263779698569" />
              </div>
            </div>

            <!-- Password fields spanning full width -->
            <div class="form-group ">
              <label class="input-label">Password</label>
              <div class="input-wrapper">
                <i class="pi pi-lock"></i>
                <Password v-model="password" :feedback="true" toggleMask />
              </div>
            </div>

            <div class="form-group ">
              <label class="input-label">Confirm Password</label>
              <div class="input-wrapper">
                <i class="pi pi-lock"></i>
                <Password v-model="password_confirmation" :feedback="false" toggleMask />
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <Button 
            :loading="loading" 
            @click="individualRegistration()" 
            :disabled="!name || !email || !whatsapp_number || !password || !password_confirmation" 
            class="submit-button"
          >
            <span v-if="!loading">Create Account</span>
            <i v-else class="pi pi-spin pi-spinner"></i>
          </Button>
        </div>
      </div>
    </div>
    
  </template>
<script setup lang="ts">

const frontStore = useFrontStore()
useHead({
  title: "Delta Zimbabwe - Registration",
  meta: [
    { name: "description", content: "Delta makes shopping in Zimbabwe easy and convenient!" },
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

<style scoped>
.registration-container {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: radial-gradient(circle at center, #15416e 0%, #097fc1 100%) !important;
}

.registration-card {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.logo-section {
  text-align: center;
  margin-bottom: 1rem;
}

.logo-background {
  background: #15416e;
  padding: 1rem;
  border-radius: 12px;
  display: inline-block;
}

.logo-image {
  width: 150px;
  height: auto;
  display: block;
}

.welcome-text {
  text-align: center;
  margin-bottom: 1.5rem;
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

.login-link {
  color: #c8b967;
  text-decoration: none;
  font-weight: 500;
}

.login-link:hover {
  color: #baa73b;
}

.account-type-section {
  margin-bottom: 2rem;
}

.account-dropdown {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 0.75rem;
}

.input-label {
  margin-bottom: 0.25rem;
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

.input-wrapper :deep(input),
.input-wrapper :deep(.p-password input) {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-wrapper :deep(input:focus),
.input-wrapper :deep(.p-password input:focus) {
  border-color: #c8b967;
  box-shadow: 0 0 0 2px rgba(200, 185, 103, 0.1);
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #0958a9 0%, #0747a6 100%);
  border: none;
  color: white;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: linear-gradient(90deg, #0958a9 0%, #c8b967 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(9, 88, 169, 0.2);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.full-width {
  grid-column: 1 / -1;
}

.input-wrapper :deep(.p-password),
.input-wrapper :deep(.p-password input) {
  width: 100%;
}

@media (max-width: 768px) {
  .registration-card {
    padding: 1.5rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
  