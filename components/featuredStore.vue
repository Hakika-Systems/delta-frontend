<template>
  <div class="">
    <div class="font-bold goTo text-3xl mt-3 toptext text-center">
      Featured Brands
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="text-3xl font-medium text-900 text-left mb-6">
        <span
          class="text-2xl featuredname bonmarche font-bold text-gray-900 mb-3"
          >Bon March'e</span
        >
      </div>
      <div class="card mb-2">
        <Carousel
          :value="products"
          :numVisible="2"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="3000"
        >
          <template #item="slotProps">
            <div class="p-2">
              <div class="relative mb-3">
                <img :src="slotProps.data.image" class="w-full" />
              </div>
              <span class="text-900 font-medium nametext">{{
                slotProps.data.name
              }}</span>

              <div class="mb-4">
                <span class="font-bold text-900 ml-2"
                  >${{ slotProps.data.price }}</span
                >
              </div>
              <button
                class="p-button bonmarche p-component w-full"
                type="button"
                aria-label="Add to Cart"
              >
                <span
                  class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                ></span>
                <span class="p-button-label">Add to Cart</span>
                <span
                  role="presentation"
                  aria-hidden="true"
                  class="p-ink"
                ></span>
              </button>
            </div>
          </template>
        </Carousel>
      </div>
      <div class="text-3xl font-medium text-900 text-left mb-6">
        <span
          class="text-2xl featuredname food_lovers font-bold text-gray-900 mb-3"
          >Food Lover's</span
        >
      </div>
      <div class="grid -mt-3 -ml-3 -mr-3 mb-3">
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/charhon.jpg" class="w-full" />
              >
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500"></i></span
              ><span class="text-500">12 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$321.00</span
              ><span class="font-bold text-900 ml-2">$150.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/charhon.jpg" class="w-full" />
              >
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-500"></i></span
              ><span class="text-500">15 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$80.00</span
              ><span class="font-bold text-900 ml-2">$49.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/colgate.jpg" class="w-full" />
              >
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-500 mr-1"></i
                ><i class="pi pi-star-fill text-500"></i></span
              ><span class="text-500">21 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$124.00</span
              ><span class="font-bold text-900 ml-2">$82.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/mazoe.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500"></i></span
              ><span class="text-500">22 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$250.00</span
              ><span class="font-bold text-900 ml-2">$120.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
                I
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div class="text-3xl font-medium text-900 text-left mb-6">Ok Mart</div>
      <div class="grid -mt-3 -ml-3 -mr-3 mb-3">
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/charhon.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500"></i></span
              ><span class="text-500">12 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$321.00</span
              ><span class="font-bold text-900 ml-2">$150.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/charhon.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-500"></i></span
              ><span class="text-500">15 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$80.00</span
              ><span class="font-bold text-900 ml-2">$49.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/colgate.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-500 mr-1"></i
                ><i class="pi pi-star-fill text-500"></i></span
              ><span class="text-500">21 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$124.00</span
              ><span class="font-bold text-900 ml-2">$82.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/mazoe.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500"></i></span
              ><span class="text-500">22 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$250.00</span
              ><span class="font-bold text-900 ml-2">$120.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
                I
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div class="text-3xl font-medium text-900 text-left mb-6">OK</div>
      <div class="grid -mt-3 -ml-3 -mr-3 mb-3">
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/charhon.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500"></i></span
              ><span class="text-500">12 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$321.00</span
              ><span class="font-bold text-900 ml-2">$150.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/charhon.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-500"></i></span
              ><span class="text-500">15 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$80.00</span
              ><span class="font-bold text-900 ml-2">$49.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/colgate.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-500 mr-1"></i
                ><i class="pi pi-star-fill text-500"></i></span
              ><span class="text-500">21 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$124.00</span
              ><span class="font-bold text-900 ml-2">$82.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
              ></span>
            </button>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="p-2">
            <div class="relative mb-3">
              <img src="/images/mazoe.jpg" class="w-full" />
            </div>
            <span class="text-900 font-medium text-xl">Product Name</span>
            <div class="my-3">
              <span class="mr-3"
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500 mr-1"></i
                ><i class="pi pi-star-fill text-yellow-500"></i></span
              ><span class="text-500">22 reviews</span>
            </div>
            <div class="mb-4">
              <span class="line-through text-600">$250.00</span
              ><span class="font-bold text-900 ml-2">$120.00</span>
            </div>
            <button
              class="p-button a p-component w-full"
              type="button"
              aria-label="Add to Cart"
              data-pc-name="button"
              data-pc-section="root"
              data-pd-ripple="true"
            >
              <span
                class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                data-pc-section="icon"
              ></span
              ><span class="p-button-label" data-pc-section="label"
                >Add to Cart</span
              ><!----><span
                role="presentation"
                aria-hidden="true"
                data-p-ink="true"
                data-p-ink-active="false"
                class="p-ink"
                data-pc-name="ripple"
                data-pc-section="root"
                I
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Carousel from "primevue/carousel";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";

const products = ref([
  {
    image: "/images/charhon.jpg",
    name: "Charhons",

    price: 150.0,
  },
  {
    image: "/images/charhon.jpg",
    name: "Charhon",
    price: 49.0,
  },
  {
    image: "/images/colgate.jpg",
    name: "Colgate",
    price: 82.0,
  },
  {
    image: "/images/mazoe.jpg",
    name: "Mazoe",

    price: 120.0,
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<style>
.bonmarche {
  color: #ffffff;
  background: #a3c962;
  border: 1px solid #a3c962;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s, outline-color 0.2s;
  border-radius: 20px;
  outline-color: transparent;
}
.food_lovers {
  color: #ffffff;
  background: #a3c962;
  border: 1px solid #a3c962;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s, outline-color 0.2s;
  border-radius: 20px;
  outline-color: transparent;
}
span.text-2xl.featuredname.font-bold.text-gray-900.mb-3.bonmarche {
  background-color: #a3c962 !important;
  border-radius: 5px;
  color: #fff !important;
  padding-left: 7px;
}
span.text-2xl.featuredname.font-bold.text-gray-900.mb-3.food_lovers {
  background-color: #01713f !important;
  border-radius: 5px;
  color: #fff !important;
  padding-left: 7px;
}
</style>
