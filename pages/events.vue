<template>
    <div class="min-h-screen bg-gray-100">
      <!-- Header -->
      <div class="bg-[#C8B967] text-white p-4 flex items-center sticky top-0 z-50">
        <Button
          icon="pi pi-arrow-left"
          class="p-button-text text-white mr-4"
          @click="$router.back()"
        />
        <h1 class="text-xl font-semibold">Delta Beverages Upcoming Events</h1>
      </div>
  
      <!-- Events List -->
      <div class="container mx-auto p-4 max-w-2xl">
        <div class="space-y-4">
          <!-- Event Card 1 -->
          <Card class="shadow-sm">
            <template #header>
              <img
                
                alt="Delta Beer Festival"
                class="w-full h-48 object-cover"
              />
            </template>
  
            <template #content>
              <h2 class="text-2xl font-bold mb-3">Delta Beer Festival</h2>
              <div class="flex items-center gap-6 text-gray-600 mb-3">
                <div class="flex items-center gap-2">
                  <i class="pi pi-calendar"></i>
                  <span>March 15, 2025</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="pi pi-map-marker"></i>
                  <span>Harare</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="text-[#0958A9] font-bold text-xl">
                  Price: $20
                </div>
                <Button
                  label="Buy Ticket"
                  icon="pi pi-shopping-cart"
                  class="p-button-warning"
                />
              </div>
            </template>
          </Card>
  
          <!-- Event Card 2 -->
          <Card class="shadow-sm">
            <template #header>
              <img
               
                alt="Castle Lager National Braai Day"
                class="w-full h-48 object-cover"
              />
            </template>
  
            <template #content>
              <h2 class="text-2xl font-bold mb-3">Castle Lager National Braai Day</h2>
              <div class="flex items-center gap-6 text-gray-600 mb-3">
                <div class="flex items-center gap-2">
                  <i class="pi pi-calendar"></i>
                  <span>April 1, 2025</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="pi pi-map-marker"></i>
                  <span>Bulawayo</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="text-[#0958A9] font-bold text-xl">
                  Price: $15.50
                </div>
                <Button
                  label="Buy Ticket"
                  icon="pi pi-shopping-cart"
                  class="p-button-warning"
                />
              </div>
            </template>
          </Card>
        </div>
      </div>
  
      <!-- Bottom Navigation -->
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div class="flex justify-around items-center max-w-2xl mx-auto">
          <NuxtLink to="/" class="flex flex-col items-center text-gray-500">
            <i class="pi pi-home text-xl"></i>
            <span class="text-xs mt-1">Home</span>
          </NuxtLink>
          <NuxtLink to="/events" class="flex flex-col items-center" style="color: #C8B967">
            <i class="pi pi-ticket text-xl"></i>
            <span class="text-xs mt-1">Events</span>
          </NuxtLink>
          <NuxtLink to="/order" class="flex flex-col items-center text-gray-500">
            <i class="pi pi-shopping-cart text-xl"></i>
            <span class="text-xs mt-1">Order</span>
          </NuxtLink>
          <NuxtLink to="/menu" class="flex flex-col items-center text-gray-500">
            <i class="pi pi-bars text-xl"></i>
            <span class="text-xs mt-1">Menu</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Add any required logic here
  </script>
  
  <style scoped>
  :deep(.p-button.p-button-warning) {
    background: #C8B967;
    border: none;
    color: white;
  }
  
  :deep(.p-button.p-button-warning:hover) {
    background: #b5a75c;
  }
  
  :deep(.p-card) {
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  :deep(.p-card-content) {
    padding: 1.25rem;
  }
  
  :deep(.p-card-header) {
    padding: 0;
  }
  
  :deep(.p-button.p-button-text) {
    padding: 0.5rem;
    color: white;
  }
  
  :deep(.p-button.p-button-text:hover) {
    background: rgba(255, 255, 255, 0.1);
  }
  </style>