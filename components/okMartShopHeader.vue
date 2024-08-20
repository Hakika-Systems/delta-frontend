<template>
    <div class="okmartheader fixedheader py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
      <!-- Logo -->
      <div class="flex items-center flex-grow-0">
        <img @click="goToHome()" src="/images/logos/okmart.jpg" alt="Image" class="cursor-pointer" height="90">
      </div>
      <!-- Search Input -->
      <div class="flex items-center col-6 flex-grow search-container">
        <InputGroup class="w-full">
        <InputText id="input"  type="text" placeholder="Search Products" class="search-input px-4 py-2 w-full" autofocus />
        <Button icon="pi pi-search" class="searchbutton" severity="warning" />
    </InputGroup>
      </div>
    
      <!-- Account and Cart Links -->
      <div class="flex items-center col-5 flex-grow-0 account-cart-container">
        <Dropdown v-model="selected_currency" :options="currencies" optionLabel="iso_code" optionValue="id" placeholder="Select Currency" class="w-50 md:w-7rem" />
     <a class="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200 p-ripple" data-pd-ripple="true">
       <i class="pi pi-user mr-2 sm:mr-3 text-sm"></i>
       <span @click="navigateTo('/registration')">My Account<br><strong>Sign In</strong></span>
       <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
     </a>
     <InputGroup class="w-custom md:w-[30rem]">
        <InputGroupAddon>
            <i v-badge="getTotalItemsInCart()" @mouseenter="toggle" @click="toggle" class="pi pi-shopping-cart" style="font-size: 25px;" />
        </InputGroupAddon>
        <InlineMessage severity="secondary">USD{{ cart_total }}</InlineMessage>
        <!-- <InputNumber v-model="cartTotal()" class="inputtotal" disabled placeholder="0.00" /> -->
        <Button @click="navigateTo(`checkout-${brand_id}-${shop_id}`)" label="Checkout" icon="pi pi-angle-right" iconPos="right" severity="warn" />
    </InputGroup>
     <!-- <i v-badge.danger="'5'" class="pi pi-shopping-cart carticon" style="font-size: 1rem" /> -->
      </div>
    </div>
    <div class="foodloversheader okmartheader px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
      <div class="row col-12 flex">
         <div class="col-2">
            <TieredMenu class="shopbyisle" :model="categories" />
         </div>
         <div class="col-10">
            <MegaMenu :model="dummyMenu" />
         </div>
      </div>
      <OverlayPanel ref="op">
            <div class="flex flex-column gap-3 w-50rem">
                <div>
                    <span class="font-medium text-900 block mb-2">Cart Items</span>
                    <ul class="list-none p-0 m-0 flex flex-column gap-3">
                        <p v-if="cart.length === 0">No Items in Cart</p>
                        <li v-else v-for="(item, index) in cart" :key="item?.id" class="flex align-items-center gap-2">
                <img :src="getParsedImages(item?.product?.thumbnails)" style="width: 32px" />
                <div class="col-4 flex align-items-center gap-2 text-color-secondary text-sm">
                    <span class="font-medium">{{ item.product.name }}</span>
                </div>
                <div  class="col-2 flex align-items-center gap-2 text-color-secondary text-sm">
                    <span class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round" data-pc-name="inputnumber" data-pc-section="root" spinnermode="horizontal">
                        <input class="p-inputtext p-component p-inputnumber-input w-2rem text-center py-2 px-1 border-transparent" v-model="cart[index].quantity" data-pc-name="inputtext" data-pc-section="input" role="spinbutton" aria-valuemin="0" aria-valuenow="1">
                        <Button icon="pi pi-plus" :loading="loading" @click="increaseCartItem(item.id,item.product_id,cart[index].quantity,item.unit_price)" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text text-600 hover:text-primary py-1 px-1" type="button" data-pc-name="button" data-pc-section="incrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true" />
                        <Button icon="pi pi-minus" :loading="loading" @click="decreaseCartItem(item.id,item.product_id,cart[index].quantity,item.unit_price)" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text text-600 hover:text-primary py-1 px-1" type="button" data-pc-name="button" data-pc-section="decrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true" />
                    </span>
                </div>
                <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                    <span>USD{{ (lineTotal(item.unit_price,item.quantity)).toFixed(2)}}</span>
                    <i  class="pi pi-trash" @click="removeFromCart(item.id)"></i>
                </div>
                </li>
                    </ul>
                </div>
            </div>
            <div>
                <Button @click="navigateTo(`checkout-${brand_id}-${shop_id}`)" type="button" label="Checkout" class="w-full mt-2" />
        </div>
        </OverlayPanel>
      
    </div>
    </template>
    <script setup lang="ts">
    const frontStore = useFrontStore()
    const cart:any = storeToRefs(frontStore).cart
    const op = ref();
    const toast = useToast()
    const loading = ref(false)
    const product_brands = ref()
    const brand_id = storeToRefs(frontStore).brand_id
    const shop_id = storeToRefs(frontStore).shop_id
    const cart_total = storeToRefs(frontStore).cart_total
    const selectedCurrency = ref("USD");
    const cart_id = storeToRefs(frontStore).cart_id
    const currencies:any = storeToRefs(frontStore).currencies;
    const selected_currency = storeToRefs(frontStore).selected_currency;
    const categories = ref()
    const goToHome = () => {
        navigateTo(`/shop-${brand_id.value}-${shop_id.value}`)
    }
    const dummyMenu = ref([
    {
        label: 'Propbrands',
        icon: 'pi pi-tagjhs',
        command: () => {
                navigateTo(`/brands-${brand_id.value}-${shop_id.value}-7`);
        } 
    },
    {
        label: 'CEO\'s Specials',
        icon: 'pi pi-stakr'
    },
    {
        label: 'GYM Clearance',
        icon: 'pi pi-hjeart'
    },
    {
        label: 'Motor Vehicle',
        icon: 'pi pi-cjar'
    },
    {
        label: 'Back to School',
        icon: 'pi pi-bohjkok'
    }
])

    const getTotalItemsInCart = () => {
        //@ts-ignore
    return cart.value.reduce((total, item) => total + item.quantity, 0);
    };
    const toggle = (event:any) => {
        op.value.toggle(event);
    }
    const lineTotal = (price:any, quantity:any) => {
       return (Number(price)) * (quantity).toFixed(2)
    }
    const convertToMenuItems = (cat:any) => {
    return cat
    //@ts-ignore
        .filter(category => category.is_parent ) 
        //@ts-ignore
        .map(parentCategory => ({
            label: parentCategory.name,
            command: () => {
                navigateTo(`/category-${parentCategory.id}-${brand_id.value}-${shop_id.value}`);
            },
            icon: 'pi pi-category-icon',
            items: Array.isArray(parentCategory.children) ? 
            //@ts-ignore
                parentCategory.children.map(child => ({
                    label: child.name,
                    command: () => {
                        navigateTo(`/category-${child.id}-${brand_id.value}-${shop_id.value}`);
                    },
                    items: child.children ? convertToMenuItems(child.children) : []
                })) : []
        }));
}
onMounted( async() => {
    let currency_params = {
    page: 1,
    per_page: 100
  }
  let currenciess = await frontStore.getAllCurrencies(currency_params).then((data) => {
    currencies.value = data.data.currencies
    selected_currency.value = data?.data?.currencies[0]?.id ? data?.data?.currencies[0]?.id : null
  });
let params = {
    page: 1,
    per_page: 100
}
let brands = await frontStore.getProductBrands(params).then((data) => {
    //@ts-ignore
    product_brands.value = data?.data?.data.map(item => ({
    label: item.name,
    command: () => {
        navigateTo(`/category-${item.id}-${shop_id}-5`);
    }
   }));
})

let categoriess = await frontStore.getAllCategories(params).then(async (data) => {
    console.log("hjhj",data?.data?.categories)
    categories.value = [
    {
        label: 'Shop By Aisle',
        icon: 'pi pi-shopping-bag',
        items: await convertToMenuItems(data?.data?.categories)
    }
];
})
})
   
        //@ts-ignore

const decreaseCartItem = async (item_id:any,product_id: any,quantity:any,unit_price:any) => {
    loading.value = true
    let cart_item = {
    id: item_id,
    cart_id: cart_id.value,
    product_id: product_id,
    quantity: quantity-1,
    unit_price: Number(unit_price),
    total_price: (quantity * unit_price) 
    }
    let edit_cart_item = await frontStore.editCartItem(cart_item).then( async (data) => {
      if (data?.status === "success") {
        let new_cart = await frontStore.getCart().then((data) => {
          cart.value = data.data.items
          cart_total.value = data?.data?.cart_total
        })
        toast.add({
          severity: 'info',
          summary: 'Cart',
          detail: 'Quantity Changed',
          group: 'br',
          life: 3000,
        });
        loading.value = false
      } else {
        toast.add({
          severity: 'warn',
          summary: 'Cart',
          detail: 'Could not add product',
          group: 'br',
          life: 3000,
        });
        loading.value = false
      }
    })
    
    
};
const increaseCartItem = async (item_id:any,product_id: any,quantity:any,unit_price:any) => {
    loading.value = true
    let cart_item = {
    id: item_id,
    cart_id: cart_id.value,
    product_id: product_id,
    quantity: quantity+1,
    unit_price: Number(unit_price),
    total_price: (quantity * unit_price) 
    }
    let edit_cart_item = await frontStore.editCartItem(cart_item).then( async (data) => {
      if (data?.status === "success") {
        
        let new_cart = await frontStore.getCart().then((data) => {
          cart.value = data.data.items
          cart_total.value = data?.data?.cart_total
        })
        toast.add({
          severity: 'info',
          summary: 'Cart',
          detail: 'Quantity Changed',
          group: 'br',
          life: 3000,
        });
        loading.value = false
      } else {
        toast.add({
          severity: 'warn',
          summary: 'Cart',
          detail: 'Could not add product',
          group: 'br',
          life: 3000,
        });
        loading.value = false
      }
    })
    
    
};
const removeFromCart = async (itemId:any) => {
        //@ts-ignore
      let my_params = {
        id: itemId
      }
      let deleted_item = await frontStore.deleteCartItem(my_params).then( async (data) => {
        console.log('dataaaaaa',data)
        if(data?.status === 'success') {
            toast.add({
            severity: 'info',
            summary: 'Cart Changed',
            detail: 'Product Removed',
            group: 'br',
            life: 3000,
            });
            let new_cart = await frontStore.getCart().then((data) => {
            cart.value = data.data.items
            cart_total.value = data?.data?.cart_total
            })
        } else {
            toast.add({
            severity: 'warn',
            summary: 'Cart',
            detail: 'Could not remove product',
            group: 'br',
            life: 3000,
            });
        }
      })
}
const getParsedImages = (images: string) => {
    try {
        const parsedImages = JSON.parse(images);
        const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''));
        return cleanedString[0]
    } catch (error) {
        console.error('Error parsing images JSON:', error);
    }
    return null; // Return null if parsing fails or no images are found
};
    const items = ref([
    {
        label: 'Bata',
        icon: 'pi pi-shoe'
    },
    {
        label: 'Capri',
        icon: 'pi pi-cube'
    },
    {
        label: 'KDV'
    },
    {
        label: 'Heroes Special'
    },
    {
        label: 'CEO\'s Specials'
    },
    {
        label: 'Motor Vehicle'
    }
]);
    
    
    </script>
    <style>
      .search-container {
        max-width: 600px; /* Adjust max-width as needed */
      }
    
      .search-input {
        border-radius: 25px 0 0 25px;
        border: none;
        height: 50px;
        outline: none;
    }
    .p-inputgroup-addon {
    width: 65px;
    }
    span.p-dropdown-label.p-inputtext {
        margin: auto;
    }
    .okmartheader {
    background-color: red !important;
    }
    
      .account-cart-container a {
        display: flex;
        align-items: center;
      }
      .foodloversheader {
    padding-top: 120px;
    border-bottom: 0.5px solid #c5c5c5;
    border-top: none !important;
}
    .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        color: #ffffff;
        margin-left: 0.5rem;
    }
    span.p-inputnumber.p-component.p-inputwrapper.p-inputnumber-buttons-horizontal.cartitemstotal input {
    font-size: 1px !important;
    }
    span#pv_id_2_0_label {
        font-family: 'IBM Plex Sans' !important;
    }
    .p-megamenu.p-component.p-megamenu-horizontal{
        display: flex;
        justify-content: flex-end !important;
    }
    .p-inputtext:disabled {
    opacity: 1 !important;
    background-color: #ffffff !important;
    color: #64748b;
    }
    .p-tieredmenu {
        padding: 0.25rem 0.25rem;
        background: #FF7043;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        min-width: 12.5rem;
    }
    .w-custom {
    width: 50% !important;
    }
    .fixedheader {
    position: fixed !important;
    top: 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #b1b1b1;
    background-color: #333;
    color: white;
    /* margin-bottom: 88px !important; */
    /* text-align: center; */
    padding: 15px 0;
    box-shadow: none !important;
    z-index: 1000;
}
    .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
        color: #ffffff;
        padding: 0.5rem 0.75rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }
    span.p-inputnumber.p-component.p-inputwrapper.inputtotal {
    width: 80px !important;
}
    .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link span {
        color: #000000;
        /* padding: 0.5rem 0.75rem; */
        -webkit-user-select: none;
        -moz-user-select: none;
        /* user-select: none; */
    }
    .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
        color: #334155;
        background: #f1f5f900;
    }
    .p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content {
        color: #047857;
        background: #ecfdf500;
    }
    .p-tieredmenu .p-submenu-list {
    padding: 0.25rem 0.25rem;
    background: #ffffff;
    color: red !important;
    border: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}
    .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        color: #ffffff;
    }
    .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
        color: #334155;
        background: #00000000 !important;
    }
    .p-megamenu .p-menuitem.p-highlight > .p-menuitem-content {
        color: #047857;
        background: none !important;
    }
    
    .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
        color: #ffffff !important;
    }
      .searchbutton {
        border-radius: 0 25px 25px 0;
      }
      .carticon {
        color: #fffcfc;
        font-size: 30px !important;
        font-weight: 100 !important;
    }
    .p-megamenu {
        padding: 0.5rem 0.5rem;
        background: none;
        color: #ffffff !important;
        border: none;
        border-radius: 6px;
    }
    .p-badge.p-badge-danger {
        background-color: #ff774c !important;
        color: #ffffff !important;
    }
    </style>