<template>
    <div class="foodloversheader py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
      <!-- Logo -->
      <div class="flex items-center flex-grow-0">
        <img src="/images/logos/foodlovers.png" alt="Image" height="50">
      </div>
    
      <!-- Search Input -->
      <div class="flex items-center col-8 flex-grow search-container">
        <InputGroup class="w-full">
        <InputText id="input"  type="text" placeholder="Search Products" class="search-input px-4 py-2 w-full" autofocus />
        <Button icon="pi pi-search" class="searchbutton" severity="warning" />
    </InputGroup>
      </div>
    
      <!-- Account and Cart Links -->
      <div class="flex items-center flex-grow-0 account-cart-container">
        <a class="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200 p-ripple" data-pd-ripple="true">
       <i class="pi pi-sign-in mr-2 sm:mr-3 text-sm"></i>
       <span>Sign In</span>
       <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
     </a>
     <a class="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200 p-ripple" data-pd-ripple="true">
       <i class="pi pi-user mr-2 sm:mr-3 text-sm"></i>
       <span>Create Account</span>
       <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
     </a>
     <i v-badge.danger="'5'" class="pi pi-shopping-cart carticon" style="font-size: 1rem" />
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
        
      
    </div>
    </template>
    <script setup>
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
    
    const items = ref([
        {
            label: 'Irvine’s',
            icon: 'pi pi-chicken',
            items: [
                [
                    {
                        label: 'Poultry',
                        items: [{ label: 'Chicken' }, { label: 'Eggs' }, { label: 'Chicken Sausages' }]
                    }
                ],
                [
                    {
                        label: 'Frozen Foods',
                        items: [{ label: 'Frozen Chicken' }, { label: 'Frozen Nuggets' }, { label: 'Frozen Wings' }]
                    }
                ]
            ]
        },
        {
            label: 'Gloria',
            icon: 'pi pi-milk',
            items: [
                [
                    {
                        label: 'Dairy Products',
                        items: [{ label: 'Milk' }, { label: 'Yogurt' }, { label: 'Cheese' }]
                    }
                ],
                [
                    {
                        label: 'Ice Cream',
                        items: [{ label: 'Vanilla' }, { label: 'Chocolate' }, { label: 'Strawberry' }]
                    }
                ]
            ]
        },
        {
            label: 'Bata',
            icon: 'pi pi-shoe',
            items: [
                [
                    {
                        label: 'Footwear',
                        items: [{ label: 'School Shoes' }, { label: 'Casual Shoes' }, { label: 'Sports Shoes' }]
                    }
                ],
                [
                    {
                        label: 'Accessories',
                        items: [{ label: 'Socks' }, { label: 'Shoe Polish' }, { label: 'Laces' }]
                    }
                ]
            ]
        },
        {
            label: 'Coca-Cola',
            icon: 'pi pi-cup',
            items: [
                [
                    {
                        label: 'Soft Drinks',
                        items: [{ label: 'Coca-Cola' }, { label: 'Fanta' }, { label: 'Sprite' }]
                    }
                ],
                [
                    {
                        label: 'Juices',
                        items: [{ label: 'Minute Maid' }, { label: 'Fruit Tree' }]
                    }
                ]
            ]
        },
        {
            label: 'Probrands',
            icon: 'pi pi-boxd',
            items: [
                [
                    {
                        label: 'Cereals',
                        items: [{ label: 'Cornflakes' }, { label: 'Oats' }, { label: 'Wheat Flakes' }]
                    }
                ],
                [
                    {
                        label: 'Grains & Rice',
                        items: [{ label: 'Rice' }, { label: 'Maize Meal' }, { label: 'Sorghum' }]
                    }
                ]
            ]
        },
        {
            label: 'Olive Tree',
            icon: 'pi pi-olive',
            items: [
                [
                    {
                        label: 'Cooking Oil',
                        items: [{ label: 'Sunflower Oil' }, { label: 'Vegetable Oil' }]
                    }
                ],
                [
                    {
                        label: 'Condiments',
                        items: [{ label: 'Tomato Sauce' }, { label: 'Mayonnaise' }, { label: 'Mustard' }]
                    }
                ]
            ]
        },
        {
            label: 'Dandy',
            icon: 'pi pi-candy',
            items: [
                [
                    {
                        label: 'Snacks',
                        items: [{ label: 'Corn Snacks' }, { label: 'Potato Chips' }, { label: 'Popcorn' }]
                    }
                ],
                [
                    {
                        label: 'Sweets',
                        items: [{ label: 'Toffees' }, { label: 'Lollipops' }, { label: 'Gums' }]
                    }
                ]
            ]
        },
        {
            label: 'Blue Ribbon',
            icon: 'pi pi-bread',
            items: [
                [
                    {
                        label: 'Flour Products',
                        items: [{ label: 'Bread Flour' }, { label: 'Cake Flour' }, { label: 'Self-Raising Flour' }]
                    }
                ],
                [
                    {
                        label: 'Baked Goods',
                        items: [{ label: 'Bread' }, { label: 'Buns' }, { label: 'Cakes' }]
                    }
                ]
            ]
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
    
      .account-cart-container a {
        display: flex;
        align-items: center;
      }
      .foodloversheader {
        background-color: #d91120!important;
        border-bottom: 0.5px solid #c5c5c5;
        border-top: none !important;
    }
    .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        color: #ffffff;
        margin-left: 0.5rem;
    }
    span#pv_id_2_0_label {
        font-family: 'IBM Plex Sans' !important;
    }
    .p-megamenu.p-component.p-megamenu-horizontal{
        display: flex;
        justify-content: flex-end !important;
    }
    .p-tieredmenu {
        padding: 0.25rem 0.25rem;
        background: #FF7043;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        min-width: 12.5rem;
    }
    .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
        color: #ffffff;
        padding: 0.5rem 0.75rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
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