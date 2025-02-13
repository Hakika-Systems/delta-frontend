<template>
     <div class="hero-section text-center py-4" style="background-color: #0958A9;">
      <h1 class="text-5xl font-bold text-white mb-4">Upcoming Events</h1>
      <p class="text-xl text-white mb-4">Join us at our upcoming events and activities</p> 
    </div>
    <div  class="surface-ground px-8 py-8 md:px-6 lg:px-8">
    <div class="col-12 grid grid-nogutter align-items-center">
      <div class="col-12">
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
              <div class="border-1 surface-border border-round m-2 p-3" 
                   style="min-height: 350px; display: flex; flex-direction: column; justify-content: space-between;">
                <div class="mb-3 mx-auto w-full">
                  <img 
                    src="/images/image.png" 
                    class="w-full h-48 object-cover border-round"
                    alt="Delta Beer Festival"
                    loading="lazy"
                  />
                </div>
                <div class="mb-3">
                  <h3 class="text-xl font-bold">Delta Beer Festival</h3>
                  <div class="mt-2 flex align-items-center gap-2 text-600">
                    <i class="pi pi-calendar text-sm"></i>
                    <span>March 15, 2025</span>
                  </div>
                  <div class="mt-1 flex align-items-center gap-2 text-600">
                    <i class="pi pi-map-marker text-sm"></i>
                    <span>Harare</span>
                  </div>
                </div>
                <div class="flex flex-column gap-3">
                  <div class="flex align-items-center justify-content-between">
                    <span class="text-lg font-bold">Price: $20</span>
                  </div>
                  <Button 
                    icon="pi pi-shopping-cart" 
                    label="Buy Ticket" 
                    class="p-button-raised w-50"
                    style="background-color: #C6A45C; border-color: #C6A45C;"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
              <div class="border-1 surface-border border-round m-2 p-3" 
                   style="min-height: 350px; display: flex; flex-direction: column; justify-content: space-between;">
                <div class="mb-3 mx-auto w-full">
                  <img 
                    src="/images/image.png" 
                    class="w-full h-48 object-cover border-round"
                    alt="Delta Beer Festival"
                    loading="lazy"
                  />
                </div>
                <div class="mb-3">
                  <h3 class="text-xl font-bold">Delta Beer Festival</h3>
                  <div class="mt-2 flex align-items-center gap-2 text-600">
                    <i class="pi pi-calendar text-sm"></i>
                    <span>March 15, 2025</span>
                  </div>
                  <div class="mt-1 flex align-items-center gap-2 text-600">
                    <i class="pi pi-map-marker text-sm"></i>
                    <span>Harare</span>
                  </div>
                </div>
                <div class="flex flex-column gap-3">
                  <div class="flex align-items-center justify-content-between">
                    <span class="text-lg font-bold">Price: $20</span>
                  </div>
                  <Button 
                    icon="pi pi-shopping-cart" 
                    label="Buy Ticket" 
                    class="p-button-raised w-50"
                    style="background-color: #C6A45C; border-color: #C6A45C;"
                  />
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    
    <DeltaFooter/>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const festivalImage = ref('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HBB0xqRtXxN4327qguEFRsTlRkGZGE.png')
  </script>
  
  <style scoped>
  .p-button-raised:hover {
    background-color: #b39351 !important;
    border-color: #b39351 !important;
  }
  
  /* Ensure proper spacing and alignment */
  .grid-nogutter {
    margin: 0;
  }
  
  .border-1 {
    border-width: 1px;
    border-style: solid;
  }
  
  .gap-2 {
    gap: 0.5rem;
  }
  
  .gap-3 {
    gap: 1rem;
  }
  </style>