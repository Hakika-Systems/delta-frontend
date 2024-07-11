<template>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="card px-4 py-4 md:px-6 lg:px-8">
            <div class="text-5xl font-medium text-900 text-left mb-6 okzimbabwe">OK ZIMBABWE</div>
        <p class="mt-0 p-0 mb-5 text-600 text-2xl">Exclusive Selection</p>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="8000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round  p-3 col-12 md:col-6 lg:col-12 mb-5 md:mb-0">
                <div class="p-2">
                <div class="relative mb-3">
                <img :src="slotProps.data.images[0]" class="w-full">
                <span class="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style="border-radius: 1rem; right: 1rem; bottom: 1rem;">-%25</span>
                </div>
                <span class="text-900 font-medium text-xl">{{ addEllipsis(slotProps.data.title) }}</span>
                <div class="mb-4">
                <span class="font-bold text-900 ml-2">{{ slotProps.data.price }}</span>
                </div>
                <button class="p-button p-component w-full" type="button" aria-label="Add to Cart" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                <span class="p-button-icon p-button-icon-left pi pi-shopping-cart" data-pc-section="icon"></span>
                <span class="p-button-label" data-pc-section="label">Add to Cart</span>
                <!---->
                <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </button>
            </div>
            </div>
            </template>
        </Carousel>
        <p class="mt-0 p-0 mb-5 text-600 text-2xl">Exclusive Selection</p>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="8000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto" style="height: 95px;">
                            <img :src="slotProps.data.images[0]"  class="w-full h-full object-cover border-round" />
                        </div>
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.title) }}</div>
                    <div class="flex justify-content-between mx-auto align-items-center">
                       
                            <Button  label="Add to Cart"  class="w-full"/>
                    
                    </div>
                </div>
            </template>
        </Carousel>
        <OverlayPanel ref="op" appendTo="body">
            <DataTable :value="products" selectionMode="single" :paginator="true" :rows="5">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-4rem shadow-1" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        $ {{ slotProps.data.price }}
                    </template>
                </Column>
            </DataTable>
        </OverlayPanel>
    </div>
    </div>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="card px-4 py-4 md:px-6 lg:px-8">
        <div>Borne March'e</div>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="8000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto" style="height: 95px;">
                            <img :src="slotProps.data.images[0]"  class="w-full h-full object-cover border-round" />
                        </div>
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.title) }}</div>
                    <div class="flex justify-content-between mx-auto align-items-center">
                       
                            <Button  label="Add to Cart"  class="w-full"/>
                    
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="8000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto" style="height: 95px;">
                            <img :src="slotProps.data.images[0]"  class="w-full h-full object-cover border-round" />
                        </div>
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.title) }}</div>
                    <div class="flex justify-content-between mx-auto align-items-center">
                       
                            <Button  label="Add to Cart"  class="w-full"/>
                    
                    </div>
                </div>
            </template>
        </Carousel>
        <OverlayPanel ref="op" appendTo="body">
            <DataTable :value="products" selectionMode="single" :paginator="true" :rows="5">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-4rem shadow-1" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        $ {{ slotProps.data.price }}
                    </template>
                </Column>
            </DataTable>
        </OverlayPanel>
    </div>
    </div>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="card px-4 py-4 md:px-6 lg:px-8">
        <div>Borne March'e</div>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="8000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto" style="height: 95px;">
                            <img :src="slotProps.data.images[0]"  class="w-full h-full object-cover border-round" />
                        </div>
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.title) }}</div>
                    <div class="flex justify-content-between mx-auto align-items-center">
                       
                            <Button  label="Add to Cart"  class="w-full"/>
                    
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="8000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto" style="height: 95px;">
                            <img :src="slotProps.data.images[0]"  class="w-full h-full object-cover border-round" />
                        </div>
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.title) }}</div>
                    <div class="flex justify-content-between mx-auto align-items-center">
                       
                            <Button  label="Add to Cart"  class="w-full"/>
                    
                    </div>
                </div>
            </template>
        </Carousel>
        <OverlayPanel ref="op" appendTo="body">
            <DataTable :value="products" selectionMode="single" :paginator="true" :rows="5">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-4rem shadow-1" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        $ {{ slotProps.data.price }}
                    </template>
                </Column>
            </DataTable>
        </OverlayPanel>
    </div>
    </div>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="card px-4 py-4 md:px-6 lg:px-8">
        <div>Borne March'e</div>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="8000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto" style="height: 95px;">
                            <img :src="slotProps.data.images[0]"  class="w-full h-full object-cover border-round" />
                        </div>
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.title) }}</div>
                    <div class="flex justify-content-between mx-auto align-items-center">
                       
                            <Button  label="Add to Cart"  class="w-full"/>
                    
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="8000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="surface-50 flex align-items-center justify-content-center mb-3 mx-auto" style="height: 95px;">
                            <img :src="slotProps.data.images[0]"  class="w-full h-full object-cover border-round" />
                        </div>
                    </div>
                    <div class="mb-3 font-medium nametext">{{ addEllipsis(slotProps.data.title) }}</div>
                    <div class="flex justify-content-between mx-auto align-items-center">
                       
                            <Button  label="Add to Cart"  class="w-full"/>
                    
                    </div>
                </div>
            </template>
        </Carousel>
        <OverlayPanel ref="op" appendTo="body">
            <DataTable :value="products" selectionMode="single" :paginator="true" :rows="5">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-4rem shadow-1" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        $ {{ slotProps.data.price }}
                    </template>
                </Column>
            </DataTable>
        </OverlayPanel>
    </div>
    </div>
</template>

<script lang="ts" setup>
const op = ref();
const products:any = ref([]);

const dummyProducts = [
    {
        shop_logo: '/images/logos/okzim.jpg',
        name: 'Product 1',
        image: '/images/products/product1.jpg',
        price: '29.99',
        redirect_url: '/product/1'
    },
    {
        shop_logo: '/images/logos/shop2.jpg',
        name: 'Product 2',
        image: '/images/products/product2.jpg',
        price: '39.99',
        redirect_url: '/product/2'
    },
    {
        shop_logo: '/images/logos/shop3.jpg',
        name: 'Product 3',
        image: '/images/products/product3.jpg',
        price: '49.99',
        redirect_url: '/product/3'
    },
    {
        shop_logo: '/images/logos/shop4.jpg',
        name: 'Product 4',
        image: '/images/products/product4.jpg',
        price: '59.99',
        redirect_url: '/product/4'
    },
    {
        shop_logo: '/images/logos/shop5.jpg',
        name: 'Product 5',
        image: '/images/products/product5.jpg',
        price: '69.99',
        redirect_url: '/product/5'
    },
    {
        shop_logo: '/images/logos/shop6.jpg',
        name: 'Product 6',
        image: '/images/products/product6.jpg',
        price: '79.99',
        redirect_url: '/product/6'
    },
    {
        shop_logo: '/images/logos/shop7.jpg',
        name: 'Product 7',
        image: '/images/products/product7.jpg',
        price: '89.99',
        redirect_url: '/product/7'
    },
    {
        shop_logo: '/images/logos/shop8.jpg',
        name: 'Product 8',
        image: '/images/products/product8.jpg',
        price: '99.99',
        redirect_url: '/product/8'
    }
];

onMounted(async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        products.value = data.products;
        console.log(products.value) // assuming the response has a 'products' array
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
});


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

const addEllipsis = (str:string) => {
    return str.length > 23 ? str.slice(0, 23) + '...' : str;
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
ul.p-carousel-indicators.p-reset {
    display: none;
}
img.shop_logo {
    width: auto;
    height: 43px;
}
button.p-button.p-component.ml-2.cart.tagee {
    background-image: linear-gradient(to right, #cb1400, #F44336) !important;
    border: none;
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
.bonmarche {
    background-color: red;
    padding: 10px;
    border-radius: 25px;
    color: white !important;
    font-weight: 900 !important;
    font-size: 25px !important;
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
