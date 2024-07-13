<template>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <header class="flex w-full justify-content-between align-items-center  surface-border pb-5">
            <div>
                <img src="/images/logos/okzim.jpg" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
                <!-- <h2 class="mt-0 mb-3 font-medium text-2xl text-900">OK Zimbabwe</h2> -->
            </div>
            <Button class="shopnow feat" label="Shop Now" />
        </header>
        <Carousel :value="dummyProducts" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                        <img :src="slotProps.data.image" class="w-full h-full object-cover">
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
                    <div class="mb-4">
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
                        <Button @click="navigateTo(slotProps.data.redirect_url, {external: true})" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel :value="products" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                        <img :src="slotProps.data.image" class="w-full h-full object-cover">
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
                    <div class="mb-4">
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
                        <Button @click="navigateTo(slotProps.data.redirect_url, {external: true})" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <header class="flex w-full justify-content-between align-items-center  surface-border pb-5">
            <div>
                <img src="/images/logos/bonmarche.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
                <!-- <h2 class="mt-0 mb-3 font-medium text-2xl text-900">Bon Marche</h2> -->
            </div>
            <Button class="shopnow feat" label="Shop Now" />
        </header>
        <Carousel :value="dummyProducts" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                        <img :src="slotProps.data.image" class="w-full h-full object-cover">
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
                    <div class="mb-4">
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
                        <Button @click="navigateTo(slotProps.data.redirect_url, {external: true})" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel :value="products" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                        <img :src="slotProps.data.image" class="w-full h-full object-cover">
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
                    <div class="mb-4">
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
                        <Button @click="navigateTo(slotProps.data.redirect_url, {external: true})" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <header class="flex w-full justify-content-between align-items-center  surface-border pb-5">
            <div>
                <img src="/images/logos/foodlovers.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
                <!-- <h2 class="mt-0 mb-3 font-medium text-2xl text-900">Food Lovers</h2> -->
            </div>
            <Button class="shopnow feat" label="Shop Now" />
        </header>
        <Carousel :value="dummyProducts" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                        <img :src="slotProps.data.image" class="w-full h-full object-cover">
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
                    <div class="mb-4">
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
                        <Button @click="navigateTo(slotProps.data.redirect_url, {external: true})" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel :value="products" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                        <img :src="slotProps.data.image" class="w-full h-full object-cover">
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
                    <div class="mb-4">
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
                        <Button @click="navigateTo(slotProps.data.redirect_url, {external: true})" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <header class="flex w-full justify-content-between align-items-center  surface-border pb-5">
            <div>
                <img src="/images/logos/okmart.jpg" class="w-12rem flex-shrink-0 mx-auto md:mx-0">
            </div>
            <Button class="shopnow feat" label="Shop Now" />
        </header>
        <Carousel :value="dummyProducts" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                        <img :src="slotProps.data.image" class="w-full h-full object-cover">
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
                    <div class="mb-4">
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
                        <Button @click="navigateTo(slotProps.data.redirect_url, {external: true})" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel :value="products" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto">
                        <img :src="slotProps.data.image" class="w-full h-full object-cover">
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.name) }}</div>
                    <div class="mb-4">
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-bold text-900 ml-2">{{currency}}{{slotProps.data.price ? formatCurrency(slotProps.data.price) :  formatCurrency(0)}}</span>
                        <Button @click="navigateTo(slotProps.data.redirect_url, {external: true})" icon="pi pi-cart-arrow-down" label="Add" class="ml-auto cart"/>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script lang="ts" setup>
const op = ref();


// Dummy products data
const dummyProducts = [
    {
        shop_logo: '/images/logos/nivea.jpg',
        name: 'Nivea Body Lotion Q10 400ml',
        image: '/images/products/nivea.jpg',
        price: '29.99',
        redirect_url: '/product/1'
    },
    {
        shop_logo: '/images/logos/shop2.jpg',
        name: "Babysoft 18's",
        image: '/images/products/tissue.jpg',
        price: '39.99',
        redirect_url: '/product/2'
    },
    {
        shop_logo: '/images/logos/shop3.jpg',
        name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
        image: '/images/products/vaseline.jpg',
        price: '49.99',
        redirect_url: '/product/3'
    },
    {
        shop_logo: '/images/logos/shop4.jpg',
        name: 'Sunlight Dishwasher Lemon 750ml',
        image: '/images/products/sunlight.jpg',
        price: '59.99',
        redirect_url: '/product/4'
    },
    {
        shop_logo: '/images/logos/shop5.jpg',
        name: 'Harpic Toilet Cleaner Potpourri 500ml',
        image: '/images/products/harpic.jpg',
        price: '69.99',
        redirect_url: '/product/5'
    },
    {
        shop_logo: '/images/logos/shop6.jpg',
        name: 'Handy And All Purpose Cleaner Lavendar 750ml',
        image: '/images/products/handy_andy.jpg',
        price: '79.99',
        redirect_url: '/product/6'
    },
    {
        shop_logo: '/images/logos/shop7.jpg',
        name: 'Raid',
        image: '/images/products/raid.jpg',
        price: '89.99',
        redirect_url: '/product/7'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Sta Soft',
        image: '/images/sta-soft.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Geisha Soup',
        image: '/images/products/geisha.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Dettol Anti Bacterial Soap Even Tone 175g',
        image: '/images/products/detol.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    }
];
const products = [
    {
        shop_logo: '/images/logos/nivea.jpg',
        name: 'Mazoe Orange Crush 2 Ltrs',
        image: '/images/products/mazoe.jpg',
        price: '29.99',
        redirect_url: '/product/1'
    },
    {
        shop_logo: '/images/logos/shop2.jpg',
        name: "Red Seal Salt 1kg",
        image: '/images/products/salt.jpg',
        price: '39.99',
        redirect_url: '/product/2'
    },
    {
        shop_logo: '/images/logos/shop3.jpg',
        name: 'Mahatma White Rice 2kg',
        image: '/images/products/rice.jpg',
        price: '49.99',
        redirect_url: '/product/3'
    },
    {
        shop_logo: '/images/logos/shop4.jpg',
        name: 'Nestle everyday 400g',
        image: '/images/products/everyday.jpg',
        price: '59.99',
        redirect_url: '/product/4'
    },
    {
        shop_logo: '/images/logos/shop5.jpg',
        name: 'Cashel Valley Baked Beans 410g',
        image: '/images/products/beans.jpg',
        price: '69.99',
        redirect_url: '/product/5'
    },
    {
        shop_logo: '/images/logos/shop6.jpg',
        name: 'Ekono Spaghetti 400g',
        image: '/images/products/spaghetti.jpg',
        price: '79.99',
        redirect_url: '/product/6'
    },
    {
        shop_logo: '/images/logos/shop7.jpg',
        name: 'RabRoy Tomato Sauce 375ml',
        image: '/images/products/sauce.jpg',
        price: '89.99',
        redirect_url: '/product/7'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Jacobs Coffee Kronung 100g',
        image: '/images/products/jacobs_coffee.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Mamas Peanut Butter ',
        image: '/images/products/peanut.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Roller Meal',
        image: '/images/products/roller_meal.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    }
];
// Set the products to dummyProducts


const toggle = (event:any) => {
    op.value.toggle(event);
};

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
const currency = ref("USD")
const addEllipsis = (str:string) => {
    return str.length > 23 ? str.slice(0, 23) + '...' : str;
};
const formatCurrency = (value:any) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: currency.value });
};
</script>

<style>
.p-tag {
    background: #003e95;
    color: #ffffff;
    text-transform: uppercase;
}
button.p-button.p-component.p-button-icon-only.ml-2.cart {
    background-color: #003e95;
    border-color: #003e95;
}
button.p-button.p-component.p-button-icon-only.p-button-secondary.p-button-outlined.whishlist {
    background-color: #d6200e;
    color: white;
}
img.w-full.h-full.object-cover.border-round {
    height: 100px !important;
    width: auto !important;
}
img.w-full.h-full.object-cover {
    width: auto !important;
    height: 155px !important;
}
img.w-12rem.flex-shrink-0.mx-auto.md\:mx-0 {
    border-radius: 21px;
}
ul.p-carousel-indicators.p-reset {
    display: none;
}
.card.border-featured {
    border-radius: 10px !important;
}
img.shop_logo {
    width: auto;
    height: 43px;
}
button.p-button.p-component.ml-2.cart.tagee {
    background-image: linear-gradient(to right, #cb1400, #F44336) !important;
    border: none;
}
button.p-button.p-component.shopnow.feat {
    background-color: #dadada;
    border-radius: 30px;
    border: none;
    color: black;
}
.border-1.surface-border.border-round.p-3 {
    box-shadow: 0 5px 10px 0 rgba(41, 61, 102, .2) !important;
}
.okzimbabwe {
    background-color: red;
    padding: 10px;
    border-radius: 25px;
    color: white !important;
    font-weight: 900 !important;
    font-size: 25px !important;
}
button.p-button.p-component.ml-auto.cart {
    background-color: #f7941f;
    border: none;
    border-radius: 33px;
}
.bonmarche {
    background-color: red;
    padding: 10px;
    border-radius: 25px;
    color: white !important;
    font-weight: 900 !important;
    font-size: 25px !important;
}
button.p-button.p-component.ok.addtocart.w-full {
    border-radius: 20px;
    background-color: red ;
    border: none;
}
.foodlovers {
    background-color: red;
    padding: 10px;
    border-radius: 25px;
    color: white !important;
    font-weight: 900 !important;
    font-size: 25px !important;
}
.okmart {
    background-color: red;
    padding: 10px;
    border-radius: 25px;
    color: white !important;
    font-weight: 900 !important;
    font-size: 25px !important;
}
</style>
