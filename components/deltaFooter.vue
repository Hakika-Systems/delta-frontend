<template>
  <footer class="text-white" style="background-color: #0958A9;">
    <div class="container mx-auto px-4 py-4">
      <div class="grid">
          <!-- Products Column -->
          <div class="col-12 md:col-3">
            <h2 class="text-xl font-bold mb-4 text-gold">PRODUCTS</h2>
            <ul class="list-none p-0 m-0">
              <li class="mb-2">
                <NuxtLink to="/new-products" class="text-white hover:text-gold">
                  New products
                </NuxtLink>
              </li>
            </ul>
          </div>
  
          <!-- Our Company Column -->
          <div class="col-12 md:col-3">
            <h2 class="text-xl font-bold mb-4 text-gold">OUR COMPANY</h2>
            <ul class="list-none p-0 m-0">
              <li class="mb-2">
                <NuxtLink to="/terms" class="text-white hover:text-gold">
                  Terms and Conditions
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/privacy" class="text-white hover:text-gold">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/loyalty-terms" class="text-white hover:text-gold">
                  Loyalty Program Terms & Conditions
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/contact" class="text-white hover:text-gold">
                  Contact us
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/sitemap" class="text-white hover:text-gold">
                  Sitemap
                </NuxtLink>
              </li>
            </ul>
          </div>
  
          <!-- Your Account Column -->
          <div class="col-12 md:col-3">
            <h2 class="text-xl font-bold mb-4 text-gold">YOUR ACCOUNT</h2>
            <ul class="list-none p-0 m-0">
              <li class="mb-2">
                <NuxtLink to="/personal-info" class="text-white hover:text-gold">
                  Personal info
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/returns" class="text-white hover:text-gold">
                  Merchandise returns
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/orders" class="text-white hover:text-gold">
                  Orders
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/credit-slips" class="text-white hover:text-gold">
                  Credit slips
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/addresses" class="text-white hover:text-gold">
                  Addresses
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/vouchers" class="text-white hover:text-gold">
                  Vouchers
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/alerts" class="text-white hover:text-gold">
                  My alerts
                </NuxtLink>
              </li>
            </ul>
          </div>
  
          <!-- Contact Column -->
          <div class="col-12 md:col-3">
            <h2 class="text-xl font-bold mb-4 text-gold">CONTACT</h2>
            <div class="space-y-2">
              <p>Delta Zimbabwe</p>
              <p>Shop No 5, Chisipite Shopping Centre, Harare.</p>
              <p>Phone: +263 8688 003417 | +263 78 681 5772</p>
              <p>Email: info@deltastore.co.zw</p>
            </div>
          </div>
        </div>
      <!-- Main Footer Grid -->
      <!-- [Previous footer content remains the same until the copyright section] -->

      <!-- Newsletter Section with border to separate from copyright -->
      <div class="mt-4 border-t border-white pt-4 pb-4">
        <div class="grid">
          <div class="col-12 md:col-6 flex align-items-center">
            <span class="font-bold mr-3 text-gold">NEWSLETTER</span>
            <div class="flex">
              <InputText 
                v-model="email" 
                type="email" 
                placeholder="Your email address"
                class="mr-2"
              />
              <Button label="SUBSCRIBE" class="p-button-warning" />
            </div>
          </div>
          <div class="col-12 md:col-6 flex align-items-center justify-content-end">
            <span class="font-bold mr-3 text-gold">FOLLOW US</span>
            <div class="flex gap-4">
              <a href="#" class="text-white hover:text-gold">
                <i class="pi pi-facebook text-xl"></i>
              </a>
              <a href="#" class="text-white hover:text-gold">
                <i class="pi pi-twitter text-xl"></i>
              </a>
              <a href="#" class="text-white hover:text-gold">
                <i class="pi pi-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright with gold background -->
    <div class="py-4 text-center text-sm" style="background-color: #c8b967;">
      <div class="container mx-auto px-4">
        <span style="color: #FFFFFF;">
          © Copyright 2025 Delta Corporation Limited . All Rights Reserved | Powered by Elixr Technologies
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
</script>

<style scoped>
.text-gold {
color: #c8b967;
}

.p-inputtext {
background: white;
border-color:#c8b967;
color: #0958A9;
}

.p-inputtext::placeholder {
color: #0958A9;
opacity: 0.7;
}

:deep(.p-button.p-button-warning) {
background: #c8b967;
border: none;
color: #0958A9;
}

:deep(.p-button.p-button-warning:hover) {
background: #c8b967;
color: #0958A9;
}

.hover\:text-gold:hover {
color: #c8b967;
}
</style>