<template>
  <NuxtLayout name="dashboard">
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="surface-ground">
        <div class="text-700 text-center">
          <div class="text-900 font-bold text-5xl mb-3">
            Discover Your Favorite Brands Nearby
          </div>
          <div class="text-700 text-2xl mb-5">
            Choose from Our Curated Collection of Leading Brands and Find Shops
            Near You!
          </div>
        </div>
        <div class="grid">
          <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-round p-4">
              <div class="flex flex-column align-items-center mb-3">
                <img
                  src="/images/logos/okzim.jpg"
                  class="mb-3"
                  style="height: 70px"
                />
                <span class="font-medium text-900 text-xl mb-2"
                  >OK Zimbabwe</span
                >
                <span class="text-600 surface-200 p-2 border-round"
                  >64 Supermarkets</span
                >
              </div>
              <div class="pt-3 border-top-1 surface-border flex">
                <Button
                  label="Shop Now"
                  class="w-full"
                  severity="contrast"
                  outlined
                />
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-round p-4">
              <div class="flex flex-column align-items-center mb-3">
                <img
                  src="/images/logos/bonmarche.png"
                  class="mb-3"
                  style="height: 70px"
                />
                <span class="font-medium text-900 text-xl mb-2"
                  >Borne March'e</span
                >
                <span class="text-600 surface-200 p-2 border-round"
                  >8 Supermarkets</span
                >
              </div>
              <div class="pt-3 border-top-1 surface-border flex">
                <Button
                  label="Shop Now"
                  class="w-full"
                  severity="contrast"
                  outlined
                />
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-round p-4">
              <div class="flex flex-column align-items-center mb-3">
                <img
                  src="/images/logos/foodlovers.png"
                  class="mb-3"
                  style="height: 70px"
                />
                <span class="font-medium text-900 text-xl mb-2"
                  >Food Lovers</span
                >
                <span class="text-600 surface-200 p-2 border-round"
                  >6 Supermarkets</span
                >
              </div>
              <div class="pt-3 border-top-1 surface-border flex">
                <Button
                  label="Shop Now"
                  class="w-full"
                  severity="contrast"
                  outlined
                />
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-round p-4">
              <div class="flex flex-column align-items-center mb-3">
                <img
                  src="/images/logos/okmart.jpg"
                  class="mb-3"
                  style="height: 70px"
                />
                <span class="font-medium text-900 text-xl mb-2">OK Mart</span>
                <span class="text-600 surface-200 p-2 border-round"
                  >1 Supermarkets</span
                >
              </div>
              <div class="pt-3 border-top-1 surface-border flex">
                <Button
                  label="Shop Now"
                  class="w-full"
                  severity="contrast"
                  outlined
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FeaturedStore />
  </NuxtLayout>
</template>
<script setup></script>
