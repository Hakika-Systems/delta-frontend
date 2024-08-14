<template>
    <OkMartShopHeader/>
   <div class="block-content">
  <div class="">
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="p-fluid flex flex-column lg:flex-row">
        <ul class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">
          <li>
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-user md:mr-2"></i>
              <span class="font-medium hidden md:block">My Orders</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li>
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-cog md:mr-2"></i>
              <span class="font-medium hidden md:block">My Shopping Lists</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li>
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Loyalty Points</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li>
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Shopeasy Savings Club</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li>
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Subscriptions</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li>
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Delivery Address</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
          <li>
            <a class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Remmitances</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </li>
        </ul>
        <div class="surface-card p-5 shadow-2 border-round flex-auto">
          <div class="text-900 text-center font-bold text-3xl mb-4">Welcome back, {{ name }}</div>
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
          <span class="text-900 text-xl font-medium mb-2">Delivery Address</span>
          
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
      </div>
    </div>
  </div>
  <!---->
</div>
</template>
<script setup lang="ts">
//@ts-ignore
const mytoken = useCookie('token');
const name = useCookie('username');
</script>
