<template>
    <div class="toppheader px-4 lg:px-8 py-3 lg:py-3 flex flex-column sm:flex-row w-full justify-content-between align-items-center">
        <div>
  <Button @click="goToLanding()" icon="pi pi-home" class="topbtn mr-2" label="Home" outlined/>
  <Button @click="select_brand = true" icon="pi pi-sync" class="mr-2 topbtn" label="Choose Store" outlined />
</div>
  <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center mt-3 sm:mt-0 md:py-0">
    <span class="text-0">You are currently shopping at {{ getActiveShopNameById() }}</span>
  </a>
</div>
    <div class="okmartheader py-3 px-6  flex align-items-center justify-content-between relative">
      <!-- Logo -->
      <div class="flex items-center flex-grow-0">
        <img :src="active_brand?.logo" alt="Image" height="90"  @click="goToHome()">
      </div>
      <!-- Search Input -->
      <div class="flex items-center col-6 flex-grow search-container">
        <InputGroup class="w-full">
        <InputText @keyup="searchProducts()" v-model="search_text" id="input"  type="text" placeholder="Search Products" class="search-input px-4 py-2 w-full" autofocus />
       </InputGroup>
       <div class="results-box p-5" v-if="search_text">
        <DataTable :value="search_products" showGridlines tableStyle="min-width: 50rem">
            <Column header="Thumbnail" style="width: 5%" >
        <template #body="slotProps">
            <img :src="getParsedImages(slotProps?.data?.product?.thumbnails)" :alt="slotProps?.data?.product?.name" class="imgt border-round" />
        </template>
    </Column>
    <Column field="price" header="Product Name" style="width: 20%">
        <template #body="slotProps">
            {{ slotProps?.data?.product?.name }}
        </template>
    </Column>
    <Column field="price" header="Category" style="width: 15%">
        <template #body="slotProps">
            {{ slotProps?.data?.product?.categories[0]?.name }}
        </template>
    </Column>
    <Column field="price" header="Price" style="width: 10%">
        <template #body="slotProps">
            {{findCurrency()}}{{ slotProps?.data?.product?.prices[0]?.price }}
        </template>
    </Column>
    <Column field="price" header="Shop" style="width: 10%">
        <template #body="slotProps">
            <Button :loading="current_id === slotProps?.data?.product?.id" @click="addToCart(slotProps?.data?.product,slotProps?.data?.quantity)" icon="pi pi-shopping-cart" aria-label="Submit" />
        </template>
    </Column>
   
    <!-- <Column field="price" header="Brand">
        <template #body="slotProps">
            {{ slotProps?.data?.product?.brand?.name }}
        </template>
    </Column> -->
</DataTable>
       </div>
      </div>
      <div class="flex items-center col-5 flex-grow-0 account-cart-container">
        <Dropdown v-model="selected_currency" :options="currencies" optionLabel="iso_code" optionValue="id" placeholder="Select Currency" class="w-50 md:w-7rem" />
     <a class="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200 p-ripple" data-pd-ripple="true">
       <i class="pi pi-user mr-2 sm:mr-3 toptext text-sm"></i>
       <span v-if="mytoken" class="toptext" @click="navigateTo('/myaccount')">My Account</span>
       <span v-else class="toptext" @click="navigateTo('/signin')">Sign In</span>
       <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
     </a>
     <InputGroup class="w-custom md:w-[30rem]">
        <InputGroupAddon>
            <i v-badge="getTotalItemsInCart()" @mouseenter="toggle" @click="toggle" class="pi pi-shopping-cart totalbadge" style="font-size: 25px;" />
        </InputGroupAddon>
        <InlineMessage severity="secondary">{{findCurrency()}}{{ cart_total }}</InlineMessage>
        <!-- <InputNumber v-model="cartTotal()" class="inputtotal" disabled placeholder="0.00" /> -->
        <Button @click="navigateTo(`checkout-${brand_id}-${shop_id}`)" label="Checkout" class="checkoutbutton" icon="pi pi-angle-right" iconPos="right" severity="warn" />
    </InputGroup>
     <!-- <i v-badge.danger="'5'" class="pi pi-shopping-cart carticon" style="font-size: 1rem" /> -->
      </div>
    </div>
    <div class="belowheader okmartheader px-6  flex align-items-center justify-content-between relative lg:static">
      <div class="row col-12 flex">
         <div class="col-2">
            <Skeleton v-if="categories_loading === true"  width="12rem" height="3rem" borderRadius="2px"></Skeleton>
            <TieredMenu v-else class="shopbyisle" :model="categories" />
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
                <Button @click="navigateTo(`checkout-${brand_id}-${shop_id}`)" type="button" label="Checkout" class="w-full mt-2 overlaycheckoutbtn" />
        </div>
        </OverlayPanel>
      
    </div>
    <Dialog v-model:visible="select_brand" modal header="Brand Selection" :style="{ width: '25rem' }">
    <!-- <template #header>
        <div class="inline-flex align-items-center justify-content-center gap-2">
            
            <span class="font-bold white-space-nowrap">Welcome to <img :src="shopLogo" :alt="shopName" class="h-3rem"></span>
        </div>
    </template> -->
    <span class="p-text-secondary block mb-5">Select Brand.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown @change="getBrandById()" v-model="chosenBrand" :options="brands" filter optionLabel="name" optionValue="id" placeholder="Select a Brand" checkmark :highlightOnSelect="false" class="w-full" />
    </div>
    <template #footer>
        <Button :loading="loading" label="Choose" @click="chooseShop()" severity="secondary" :disabled="!chosenBrand"  autofocus />
    </template>
</Dialog>
<Dialog v-model:visible="select_shop" modal header="Shop Selection" :style="{ width: '25rem' }">
    <template #header>
        <div class="inline-flex align-items-center justify-content-center gap-2">
           
            <span class="font-bold white-space-nowrap">Welcome to <img :src="shopLogo" :alt="shopName" class="h-3rem"></span>
        </div>
    </template>
    <span class="p-text-secondary block mb-5">Select Branch.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown v-model="shopBranch" :options="branches" filter optionLabel="name" optionValue="id" placeholder="Select a Store" checkmark :highlightOnSelect="false" class="w-full" />
    </div>
    <template #footer>
        <Button  label="Back" outlined severity="secondary" :disabled="!shopBranch" @click="select_shop = false,select_brand = true" autofocus />
        <Button :loading="loading" label="Shop Now" outlined severity="secondary" :disabled="!shopBranch" @click="goToShop()" autofocus />
    </template>
</Dialog>
    </template>
    <script setup lang="ts">
    const frontStore = useFrontStore()
    const cart:any = storeToRefs(frontStore).cart
    import { createId } from '@paralleldrive/cuid2';
    const op = ref();
    const logo = ref('')
    const toast = useToast()
    const select_brand = ref(false)
    const chosenBrand = ref()
    const shopBranch = ref();
    const branches = ref()
    const select_shop = ref()
    const shopLogo = ref();
    const shopName = ref();
    const brands = ref()
    const search_products = ref()
    const loading = ref(false)
    const mytoken = useCookie('token');
    const name = useCookie('username');
    const user_id = useCookie('user_id');
    const currentBrand = ref()
    const current_id = ref()
    const product_brands = ref()
    const search_text = ref();
    const brand_id = storeToRefs(frontStore).brand_id
    const shop_id = storeToRefs(frontStore).shop_id
    const cart_total = storeToRefs(frontStore).cart_total
    const guest_id = ref()
    const categories_loading = ref(false)
    const selectedCurrency = ref("USD");
    const cart_id = storeToRefs(frontStore).cart_id
    const currencies:any = storeToRefs(frontStore).currencies;
    const selected_currency = storeToRefs(frontStore).selected_currency;
    const categories = ref()
    const goToLanding = async () => {
     await navigateTo('/',{external: true})
    }
    const goToHome = () => {
        if (typeof window !== 'undefined') {
            const current_shop_id:any = sessionStorage.getItem('current_shop_id');
            const current_shop_branch:any = sessionStorage.getItem('current_shop_branch');
            navigateTo(`/shop-${JSON.parse(current_shop_id)}-${JSON.parse(current_shop_branch)}`)
        }
        
        //@ts-ignore
        
    }
    const chooseShop = async () => {
     select_brand.value = false
     select_shop.value = true
     shopLogo.value = currentBrand.value?.logo;
     shopName.value = currentBrand.value?.name;
     await getShopsForBrand( currentBrand.value?.id);
    }
    const getBrandById = () => {
    // Find the brand with the matching id
    const foundBrand = brands.value.find((brand:any) => brand.id === chosenBrand.value);

    // Assign the found brand to chosenBrand
    if (foundBrand) {
        currentBrand.value = foundBrand;
    } else {
        currentBrand.value = null; // Or handle the case when the brand is not found
    }
    }
    const getShopsForBrand = (brandId:any) => {
    branches.value = null;
    //@ts-ignore
    let branchess = brands.value.find(brand => brand.id === brandId);
    branches.value = branchess?.shops;
    }
    const addToCart = async (productt:any,quantityy:any) => {
    current_id.value = productt?.id
    loading.value = true
  // Find the product in products
    
  const product = productt;
  const productPrice = product.prices.length > 0 ? product.prices[0].price : null;

  if (!productPrice) {
    toast.add({
      severity: 'warn',
      summary: 'Not added',
      detail: 'Product price not found',
      group: 'br',
      life: 3000,
    });
    console.error('Product price not found');
    loading.value = false
    return;
  }
  if (quantityy < 1) {
    toast.add({
      severity: 'warn',
      summary: 'Not added',
      detail: 'Product out of stock',
      group: 'br',
      life: 3000,
    });
    loading.value = false
  }

  // Check if the product is already in the cart
    // Add the product to the cart with quantity 1
    let qnty = 1
    let cart_item = {
    cart_id: cart_id.value,
    product_id: productt?.id,
    quantity: qnty,
    unit_price: Number(productPrice),
    total_price: (qnty * productPrice) 
    }
    let add_cart_item = await frontStore.addCartItem(cart_item).then( async (data) => {
      if (data?.status === "success") {
        loading.value = false
        current_id.value = null
        let new_cart = await frontStore.getCart().then((data) => {
          cart.value = data.data.items
          cart_total.value = data?.data?.cart_total
        })
        toast.add({
          severity: 'info',
          summary: 'Cart',
          detail: 'Product Added',
          group: 'br',
          life: 3000,
        });
      } else {
        toast.add({
          severity: 'warn',
          summary: 'Cart',
          detail: 'Could not add product',
          group: 'br',
          life: 3000,
        });
        current_id.value = null
      }
    })
};
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


    
    const getBrandConfiguration = () => {
    if (typeof window !== 'undefined') {
        // Retrieve brand configuration from sessionStorage
        const storedConfig = sessionStorage.getItem('active_brand');
        return storedConfig ? JSON.parse(storedConfig) : null;
    }
    return null;
}
const findCurrency = () => {
    const currency = currencies.value.find((currency:any) => currency.id === selected_currency.value);
    return currency ? currency.iso_code : null;
}
const goToShop = () => {
  loading.value = true;
  sessionStorage.setItem('active_brand', JSON.stringify(currentBrand.value))
  sessionStorage.setItem('current_shop_id', JSON.stringify(chosenBrand.value))
  sessionStorage.setItem('current_shop_branch', JSON.stringify(shopBranch.value))
  navigateTo(`/shop-${chosenBrand.value}-${shopBranch.value}`);

  loading.value = false;
}
//@ts-ignore
const active_brand = ref(getBrandConfiguration())

const buttonColor = active_brand?.value?.button_color??"#FF7043";

const menuColor = active_brand?.value?.theme_color??"#000000";

const navColor = active_brand?.value?.menu_font_color??"#fff";




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
                
        })
    );
}
onMounted( async() => {
    
    categories_loading.value = true;
    let gi:any
    if (typeof window !== 'undefined') {
        gi  = sessionStorage.getItem('guest_id');
    }
    guest_id.value = JSON.parse(gi)
    let currency_params = {
    page: 1,
    per_page: 100
  }
    //@ts-ignore
    let currenciess
    if (typeof window !== 'undefined') {
      currenciess  = sessionStorage.getItem('active_brand');
    }
    //@ts-ignore
    let currency = JSON.parse(currenciess)
    currencies.value = currency.currencies
    if (!selected_currency.value) {
        selected_currency.value = currencies.value[0]?.id ? currencies.value[0]?.id : null
    }
   

let params = {
    page: 1,
    per_page: 100
}
let result_one = await frontStore.getBrands().then(async (data) => {
    brands.value = data?.data?.shopbrands;

});
let brandss = await frontStore.getProductBrands(params).then((data) => {
    //@ts-ignore
    product_brands.value = data?.data?.data.map(item => ({
    label: item.name,
    command: () => {
        navigateTo(`/category-${item.id}-${shop_id}-5`);
    }
   }));
})
if (guest_id.value === null) {
      guest_id.value = createId()
      sessionStorage.setItem('guest_id', JSON.stringify(guest_id.value))
  }
  let current_shop_branch:any
  let current_shop_id:any
  if (typeof window !== 'undefined') {
    current_shop_branch = sessionStorage.getItem('current_shop_branch');
    current_shop_id = sessionStorage.getItem('current_shop_id');
}
  
 let cart_params = {
  shop_id: JSON.parse(current_shop_branch),
  user_id: user_id.value,
  guest_id: guest_id.value
 }
let created_cart = await frontStore.createCart(cart_params).then((data) => {
  cart.value = data.data.items
  cart_total.value = data?.data?.cart_total
  cart_id.value = data?.data?.id
}) 

let categoriess = await frontStore.getAllCategories(params).then(async (data) => {
    categories.value = [
    {
        label: 'Categories',
        icon: 'pi pi-shopping-bag',
        items: await convertToMenuItems(data?.data?.categories)
    }
];
categories_loading.value = false
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
const searchProducts = () => {
  search_products.value = null
  let search_params = {
    search_text: search_text.value,
    shop_id: shop_id.value
  }
  frontStore.getSearchResults(search_params).then(async (data) => {
    search_products.value = data?.data.products;
  });
}
const getActiveShopNameById = () => {
    // Find the shop with the given ID
    let current_shop_branch:any
    let shop:any
    if (typeof window !== 'undefined') {
    current_shop_branch = sessionStorage.getItem('current_shop_branch');
    shop = active_brand.value.shops.find((shop:any) => shop.id === JSON.parse(current_shop_branch) );
    }
    

    // Check if the shop is found and is active
    if (shop && shop.is_active === 1) {
        return shop.name;
    }

    // Return a message if no active shop is found with the given ID
    return `NO ACTIVE SHOP`;
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
    border-radius: 35px;
    border: 1px solid #cccccc !important;
    height: 40px;
    outline: none;
}
    .p-inputgroup-addon {
    width: 65px;
    }
    span.p-dropdown-label.p-inputtext {
        margin: auto;
    }
    .okmartheader {
    background-color: v-bind('menuColor') !important;
    }
    .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color:  v-bind('navColor') !important;
}
.toppheader {
    background-color: v-bind('buttonColor') !important;
}
img.imgt {
    height: 40px;
    width: auto;
}
.results-box {
    position: absolute;
    width: 50%;
    margin-top: 50px;
    border: 1px solid #ccc;
    /* border-top: none; */
    border-radius: 0 0 4px 4px;
    max-height: 350px;
    overflow-y: auto;
    background-color: #fff;
    z-index: 1000;
}
button.p-button.p-component.w-full.mt-2.overlaycheckoutbtn {
    background-color:  v-bind('buttonColor') !important;
    border: none;
}
.p-overlaypanel .p-overlaypanel-content {
    padding: 0.75rem;
    max-height: 350px;
    overflow-y: auto;
}
.checkoutbutton {
    background-color: v-bind('buttonColor') !important;
    border: none;
}
.p-badge {
    background: v-bind('buttonColor') !important;
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
        background: v-bind('buttonColor') !important;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        min-width: 12.5rem;
    }
    .w-custom {
    width: 50% !important;
    }
    button.p-button.p-component.p-button-outlined.topbtn {
    color: white !important;
    border-color: white !important;
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
  .p-menuitem > .p-menuitem-content .p-menuitem-link span {
        color: v-bind('menuColor') !important;
        /* padding: 0.5rem 0.75rem; */
        -webkit-user-select: none;
        -moz-user-select: none;
        /* user-select: none; */
    }
    .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
        color: #334155;
        background: #a0a3a7d1;               
    }
    .p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content {
        color: #047857;
        background: #ecfdf500;
    }
    .p-tieredmenu .p-submenu-list {
    padding: 0.25rem 0.25rem;
    background: v-bind('buttonColor') !important;
    color: red !important;
    border: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}
span.toptext {
    color: #585858;
}
.toptext {
    color: #232020;
}
.okmartheader {
    border-bottom: 1px solid #dedede !important;
}
    .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        color: #ffffff;
    }
    .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
        color: #334155;
        background: v-bind('menuColor') !important;
    }
    .p-megamenu .p-menuitem.p-highlight > .p-menuitem-content {
        color: #047857;
        background: none !important;
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
    .p-tieredmenu{
        color: v-bind('menuColor') !important;
    }
    .searchbutton {
    border-radius: 0px 5px 5px 0px !important;
    height: 50px !important;
    background-color: v-bind('buttonColor') !important;
    border-color: v-bind('buttonColor') !important;
}

    /* .p-button {
        color: #ffffff;
        background: v-bind('buttonColor') !important;
        border: 1px solid v-bind('buttonColor') !important;
    } */
    </style>
