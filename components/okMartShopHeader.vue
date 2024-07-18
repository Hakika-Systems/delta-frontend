<template>
    <div class="foodloversheader py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
      <!-- Logo -->
      <div class="flex items-center flex-grow-0">
        <img src="/images/logos/okmart.jpg" alt="Image" height="90">
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
        <Dropdown v-model="selectedCurrency" :options="currencies" optionValue="name" optionLabel="name" placeholder="Select Currency" class="w-50 md:w-7rem" />
     <a class="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200 p-ripple" data-pd-ripple="true">
       <i class="pi pi-user mr-2 sm:mr-3 text-sm"></i>
       <span>My Account<br><strong>Sign In</strong></span>
       <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
     </a>
     <InputGroup class="w-custom md:w-[30rem]">
        <InputGroupAddon>
            <i v-badge="getTotalItemsInCart()" @mouseenter="toggle" @click="toggle" class="pi pi-shopping-cart" style="font-size: 25px;" />
        </InputGroupAddon>
        <InlineMessage severity="secondary">USD{{ cartTotal() }}</InlineMessage>
        <!-- <InputNumber v-model="cartTotal()" class="inputtotal" disabled placeholder="0.00" /> -->
        <Button @click="navigateTo('/okMartCheckOut')" label="Checkout" icon="pi pi-angle-right" iconPos="right" severity="warn" />
    </InputGroup>
     <!-- <i v-badge.danger="'5'" class="pi pi-shopping-cart carticon" style="font-size: 1rem" /> -->
      </div>
    </div>
    <div class="foodloversheader px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
      <div class="row col-12 flex">
         <div class="col-2">
            <TieredMenu class="shopbyisle" :model="vertical_items" />
         </div>
         <div class="col-10">
            <MegaMenu :model="items" />
         </div>
      </div>
      <OverlayPanel ref="op">
            <div class="flex flex-column gap-3 w-33rem">
                <div>
                    <span class="font-medium text-900 block mb-2">Cart Items</span>
                    <ul class="list-none p-0 m-0 flex flex-column gap-3">
                        <p v-if="cart.length === 0">No Items in Cart</p>
                        <li v-else v-for="(item, index) in cart" :key="item?.id" class="flex align-items-center gap-2">
                <img :src="item.image" style="width: 32px" />
                <div class="col-4 flex align-items-center gap-2 text-color-secondary text-sm">
                    <span class="font-medium">{{ item.name }}</span>
                </div>
                <div  class="col-2 flex align-items-center gap-2 text-color-secondary text-sm">
                    <span class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round" data-pc-name="inputnumber" data-pc-section="root" spinnermode="horizontal">
                        <input class="p-inputtext p-component p-inputnumber-input w-2rem text-center py-2 px-1 border-transparent" v-model="cart[index].quantity" data-pc-name="inputtext" data-pc-section="input" role="spinbutton" aria-valuemin="0" aria-valuenow="1">
                        <button @click="increment(index)" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text text-600 hover:text-primary py-1 px-1" type="button" data-pc-name="button" data-pc-section="incrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true">
                          <span class="pi pi-plus" data-pc-section=""></span>
                          <span class="p-button-label" data-pc-section="label">&nbsp;</span>
                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </button>
                        <button :disabled="item.quantity === 1" @click="decrement(index)" class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text text-600 hover:text-primary py-1 px-1" type="button" data-pc-name="button" data-pc-section="decrementbutton" tabindex="-1" aria-hidden="true" data-pd-ripple="true">
                          <span class="pi pi-minus" data-pc-section="decrementbuttonicon"></span>
                          <span class="p-button-label" data-pc-section="label">&nbsp;</span>
                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </button>
                      </span>
                </div>
                <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                    <span>USD{{ (lineTotal(item.price,item.quantity)).toFixed(2)}}</span>
                    <i class="pi pi-trash" @click="removeFromCart(item.id)"></i>
                </div>
                </li>
                    </ul>
                </div>
            </div>
            <div>
                <Button @click="navigateTo('/okMartCheckOut')" type="button" label="Checkout" class="w-full mt-2" />
        </div>
        </OverlayPanel>
      
    </div>
    </template>
    <script setup lang="ts">
    const frontStore = useFrontStore()
    const cart:any = storeToRefs(frontStore).cart
    const op = ref();
    const selectedCurrency = ref("USD");
    const currencies = ref([
        { name: 'USD', symbol: '$' },
        {name: 'ZIG', symbol: 'ZIG'}
    ]);
    const getTotalItemsInCart = () => {
        //@ts-ignore
    return cart.value.reduce((total, item) => total + item.quantity, 0);
    };
    const toggle = (event:any) => {
        op.value.toggle(event);
    }
    const vertical_items = ref([
        {
            label: 'Shop By Aisle',
            icon: 'pi pi-shopping-bag',
            items: [
                {
                    label: 'Fruits & Vegetables',
                    icon: 'pi pi-apples',
                    items: [
                        {
                            label: 'Fruits',
                            items: [{ label: 'Apples' }, { label: 'Bananas' }, { label: 'Oranges' }, { label: 'Grapes' }, { label: 'Berries' }]
                        },
                        {
                            label: 'Vegetables',
                            items: [{ label: 'Carrots' }, { label: 'Broccoli' }, { label: 'Spinach' }, { label: 'Tomatoes' }, { label: 'Peppers' }]
                        }
                    ]
                },
                {
                    label: 'Dairy & Eggs',
                    icon: 'pi pi-egg',
                    items: [
                        {
                            label: 'Dairy',
                            items: [{ label: 'Milk' }, { label: 'Cheese' }, { label: 'Butter' }, { label: 'Yogurt' }, { label: 'Cream' }]
                        },
                        {
                            label: 'Eggs',
                            items: [{ label: 'Chicken Eggs' }, { label: 'Duck Eggs' }, { label: 'Quail Eggs' }]
                        }
                    ]
                },
                {
                    label: 'Meat & Seafood',
                    icon: 'pi pi-meat',
                    items: [
                        {
                            label: 'Meat',
                            items: [{ label: 'Chicken' }, { label: 'Beef' }, { label: 'Pork' }, { label: 'Lamb' }, { label: 'Turkey' }]
                        },
                        {
                            label: 'Seafood',
                            items: [{ label: 'Fish' }, { label: 'Shrimp' }, { label: 'Crab' }, { label: 'Lobster' }, { label: 'Scallops' }]
                        }
                    ]
                },
                {
                    label: 'Bakery',
                    icon: 'pi pi-bread',
                    items: [
                        {
                            label: 'Bread & Rolls',
                            items: [{ label: 'White Bread' }, { label: 'Whole Wheat Bread' }, { label: 'Buns' }, { label: 'Bagels' }, { label: 'Croissants' }]
                        },
                        {
                            label: 'Pastries',
                            items: [{ label: 'Donuts' }, { label: 'Muffins' }, { label: 'Cakes' }, { label: 'Cookies' }, { label: 'Pies' }]
                        }
                    ]
                },
                {
                    label: 'Pantry',
                    icon: 'pi pi-boxs',
                    items: [
                        {
                            label: 'Canned Goods',
                            items: [{ label: 'Canned Beans' }, { label: 'Canned Tomatoes' }, { label: 'Canned Fruit' }, { label: 'Soup' }]
                        },
                        {
                            label: 'Dry Goods',
                            items: [{ label: 'Pasta' }, { label: 'Rice' }, { label: 'Cereal' }, { label: 'Flour' }, { label: 'Sugar' }]
                        },
                        {
                            label: 'Condiments',
                            items: [{ label: 'Ketchup' }, { label: 'Mustard' }, { label: 'Mayonnaise' }, { label: 'Soy Sauce' }, { label: 'Hot Sauce' }]
                        }
                    ]
                },
                {
                    label: 'Beverages',
                    icon: 'pi pi-cup',
                    items: [
                        {
                            label: 'Non-Alcoholic',
                            items: [{ label: 'Water' }, { label: 'Juice' }, { label: 'Soda' }, { label: 'Tea' }, { label: 'Coffee' }]
                        },
                        {
                            label: 'Alcoholic',
                            items: [{ label: 'Beer' }, { label: 'Wine' }, { label: 'Spirits' }, { label: 'Cocktails' }]
                        }
                    ]
                },
                {
                    label: 'Snacks & Sweets',
                    icon: 'pi pi-candy',
                    items: [
                        {
                            label: 'Snacks',
                            items: [{ label: 'Chips' }, { label: 'Pretzels' }, { label: 'Popcorn' }, { label: 'Nuts' }]
                        },
                        {
                            label: 'Sweets',
                            items: [{ label: 'Chocolate' }, { label: 'Candy' }, { label: 'Ice Cream' }, { label: 'Gummies' }, { label: 'Cookies' }]
                        }
                    ]
                },
                {
                    label: 'Household Items',
                    icon: 'pi pi-homel',
                    items: [
                        {
                            label: 'Cleaning Supplies',
                            items: [{ label: 'Detergent' }, { label: 'Dish Soap' }, { label: 'All-Purpose Cleaner' }, { label: 'Bleach' }]
                        },
                        {
                            label: 'Paper Goods',
                            items: [{ label: 'Toilet Paper' }, { label: 'Paper Towels' }, { label: 'Napkins' }, { label: 'Tissues' }]
                        }
                    ]
                }
            ]
        }
    ]);
    const lineTotal = (price:any, quantity:any) => {
       return (Number(price)) * (quantity).toFixed(2)
    }

    const increment = (index:any) => {
        //@ts-ignore
      cart.value[index].quantity += 1;
    }
    const decrement = (index:any) => {
         //@ts-ignore
      if (cart.value[index].quantity > 0) {
         //@ts-ignore
        cart.value[index].quantity -= 1;
      }
    }
    const removeFromCart = (productId:any) => {
        //@ts-ignore
      cart.value = cart.value.filter(item => item.id !== productId);
    }
    const cartTotal = () => {
        return cart.value.reduce((total:any, item:any) => {
        return total + (item.price * item.quantity);
      }, 0).toFixed(2);
    }
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
      .account-cart-container a {
        display: flex;
        align-items: center;
      }
      .foodloversheader {
        background-color:  #ed2226!important;
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
        color: #ffffff;
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
        background: #000000;
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