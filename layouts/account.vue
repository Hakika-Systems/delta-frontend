<template>
    <OkMartShopHeader/>
   <div class="block-content">
  <div class="">
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="p-fluid flex flex-column lg:flex-row">
        <ul class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">
            <li @click="current_template = 'home'">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-home md:mr-2"></i>
              <span class="font-medium hidden md:block">Home</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li @click="current_template = 'my_orders'">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-user md:mr-2"></i>
              <span class="font-medium hidden md:block">My Orders</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li @click="current_template = 'shopping_carts'">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-cog md:mr-2"></i>
              <span class="font-medium hidden md:block">My Shopping Lists</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li @click="current_template = 'loyalty_points'">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Loyalty Points</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li @click="current_template = 'shopeasy_savings_club'">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Shopeasy Savings Club</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li @click="current_template = 'subscriptions'">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Subscriptions</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li @click="current_template = 'addresses'">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-map-marker md:mr-2"></i>
              <span class="font-medium hidden md:block">My Addresses</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li @click="current_template = 'remittances'">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Remittances</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li @click="SignOut()">
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-sign-out md:mr-2"></i>
              <span class="font-medium hidden md:block">Log Out</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
        </ul>
       <slot/>
      </div>
    </div>
  </div>
  <!---->
</div>
</template>
<script setup lang="ts">
const frontStore = useFrontStore()
const authStore = useAuthStore()
const current_template =  storeToRefs(frontStore).current_template
//@ts-ignore
const mytoken = useCookie('token');
const name = useCookie('username');
const SignOut = () => {
  let logOut = authStore.logout().then((data) => {
    console.log("datatata",data)
  })
}
</script>
