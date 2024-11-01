<template>
<Skeleton v-if="skeleton_loader" height="4rem" class="mb-2"></Skeleton>
    <div v-else class="toppheader px-4 lg:px-8 py-3 lg:py-3 flex flex-column sm:flex-row w-full justify-content-between align-items-center">
        <div>
  <Button @click="goToLanding()" icon="pi pi-home" class="topbtn mr-2" label="Home" outlined/>
  <Button @click="select_brand = true" icon="pi pi-sync" class="mr-2 topbtn" label="Choose Store" outlined />
  <Button @click="track_order = true" icon="pi pi-map-marker" class="mr-2 topbtn" label="Track Order" outlined />
</div>
  <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center mt-3 sm:mt-0 md:py-0">
    <span class="text-0">You are currently shopping at {{ getActiveShopNameById() }}</span>
  </a>
  
</div>
    <div class="okmartheader py-3 px-6  flex align-items-center justify-content-between relative">
      <!-- Logo -->
      <div class="flex items-center flex-grow-0">
		<Skeleton v-if="skeleton_loader" width="10rem" height="4rem"></Skeleton>
        <img v-else :src='mylogo' alt="Image" height="90"  @click="goToHome()">
      </div>
      <!-- Search Input -->
      <div class="flex items-center col-6 flex-grow search-container">
        <InputGroup class="w-full">
		<Skeleton v-if="skeleton_loader" height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
        <InputText v-else @keyup="searchProducts()" v-model="search_text" id="input"  type="text" placeholder="Search Products" class="search-input px-4 py-2 w-full" autofocus />
       </InputGroup>
       <div class="results-box p-5" v-if="search_text">
		<p v-if="search_products.length  < 1">No products from the searched keys</p>
        <DataTable v-else :value="search_products" showGridlines tableStyle="min-width: 50rem">
            <Column  style="width: 5%" >
        <template #body="slotProps">
            <img :src="getParsedImages(slotProps?.data?.product?.thumbnails)" :alt="slotProps?.data?.product?.name" class="imgt border-round" />
        </template>
    </Column>
    <Column field="price" header="Product Name" style="width: 20%">
        <template #body="slotProps">
            {{ slotProps?.data?.product?.name }}
        </template>
    </Column>
    <!-- <Column field="price" header="Category" style="width: 15%">
        <template #body="slotProps">
            {{ slotProps?.data?.product?.categories[0]?.name }}
        </template>
    </Column> -->
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
		<Skeleton v-if="skeleton_loader" height="2rem" width="5rem" class="mb-2"></Skeleton>
        <Dropdown v-else v-model="selected_currency" :options="currencies" optionLabel="iso_code" optionValue="id" placeholder="Select Currency" class="w-50 md:w-7rem" />
		<Skeleton v-if="skeleton_loader" height="2rem" width="5rem" class="mb-2 ml-2"></Skeleton>
     <a v-else class="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200 p-ripple" data-pd-ripple="true">
       <i class="pi pi-user mr-2 sm:mr-3 toptext text-sm"></i>
       <span v-if="mytoken" class="toptext" @click="navigateTo('/myaccount',{external:true})">My Account</span>
       <span v-else class="toptext" @click="navigateTo('/signin',{external:true})">Sign In</span>
       <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
     </a>
	 <Skeleton v-if="skeleton_loader" height="2rem" width="8rem" class="mb-2 ml-2"></Skeleton>
     <InputGroup v-else class="w-custom md:w-[30rem]">
        <InputGroupAddon>
            <i v-badge="getTotalItemsInCart()" @mouseenter="toggle" @click="toggle" class="pi pi-shopping-cart totalbadge" style="font-size: 25px;" />
        </InputGroupAddon>
        <InlineMessage severity="secondary">{{findCurrency()}}{{ cart_total }}</InlineMessage>
        <!-- <InputNumber v-model="cartTotal()" class="inputtotal" disabled placeholder="0.00" /> -->
        <Button @click="goToCheckout()" label="Checkout" class="checkoutbutton" icon="pi pi-angle-right" iconPos="right" severity="warn" />
    </InputGroup>
     <!-- <i v-badge.danger="'5'" class="pi pi-shopping-cart carticon" style="font-size: 1rem" /> -->
      </div>
    </div>
    <div class="belowheader okmartheader px-6  flex align-items-center justify-content-between relative lg:static">
      <div class="row col-12 mainnavv flex">
        <div class="col-md-3 col-2">
			<Skeleton v-if="skeleton_loader" height="4rem" width="6rem" class="mb-2 ml-2"></Skeleton>
<div v-else id="mega-menu">
<div class="btn-mega"><span class="pi pi-shopping-bag textt"></span>ALL CATEGORIES</div>
<ul class="menu">
  <li v-for="(item, index) in menuItems" :key="index">
    <a @click="goToCategory(item.id)" class="dropdown cursor-pointer">
      <span class="menu-title">{{ item.title }}</span>
    </a>
    <div class="drop-menu">
  <div class="arrange">
    <!-- Categories Section -->
    <div class="col-8">
      <div class="categories">
        <div class="one-third" v-for="(category, catIndex) in item.categories" :key="catIndex">
          <div @click="goToCategory(category.id)" class="cat-title cursor-pointer">{{ category.title }}</div>
          <ul>
            <li v-for="(subcategory, subIndex) in category.subcategories" :key="subIndex">
              <a @click="goToCategory(subcategory.id)" class="cursor-pointer" title="">{{ subcategory?.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Banner Section -->
    <div class="col-4">
      <div class="banner-container">
        <img :src="getMenuBannerUrl(item?.banners)" alt="Banner Image" class="banner-image">
      </div>
    </div>
  </div>
</div>
  </li>
</ul>
</div>
</div>
         <!-- <div class="col-2">
            <Skeleton v-if="categories_loading === true"  width="12rem" height="3rem" borderRadius="2px"></Skeleton>
            <TieredMenu v-else class="shopbyisle" :model="categories" />
         </div> -->
         <div class="col-10">
			<Skeleton v-if="menuLoader" height="2rem" class="mb-2"></Skeleton>
            <MegaMenu v-else :model="dummyMenu" />
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
                <Button @click="goToCheckout()" type="button" label="Checkout" class="w-full mt-2 overlaycheckoutbtn" />
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
<Dialog v-model:visible="track_order" modal header="Track Order" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Enter Tracking ID Below</span>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Tracking ID</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button type="button" label="Track Order"></Button>
    </div>
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
        <Button :loading="loading" label="Shop Now" outlined severity="secondary" :disabled="!shopBranch" @click="goToShop()" />
    </template>
</Dialog>
    </template>
    <script setup lang="ts">
    const frontStore = useFrontStore()
    const cart:any = storeToRefs(frontStore).cart
    import { createId } from '@paralleldrive/cuid2';
	const router = useRouter()
    const op = ref();
    const logo = ref('')
    const toast = useToast()
    const select_brand = ref(false)
    const chosenBrand = ref()
    const shopBranch = ref();
    const branches = ref()
    const select_shop = ref()
    const shopLogo = ref();
	const menuLoader = ref(false)
    const shopName = ref();
    const brands = ref()
    const search_products = ref([])
	const track_order = ref(false)
    const loading = ref(false)
    const mytoken = useCookie('token');
    const name = useCookie('username');
    const user_id = useCookie('user_id');
    const currentBrand = ref()
    const menuItems = ref()
    const current_id = ref()
    const product_brands = ref()
	const mylogo = ref()
    const search_text = ref();
    const brand_id = ref()
    const shop_id = ref()
    const cart_total = storeToRefs(frontStore).cart_total
    const guest_id = ref()
    const categories_loading = ref(false)
	const skeleton_loader = ref(true)
    const selectedCurrency = ref("USD");
    const cart_id = storeToRefs(frontStore).cart_id
    const currencies:any = storeToRefs(frontStore).currencies;
    const selected_currency = storeToRefs(frontStore).selected_currency;
    const categories = ref()
	onMounted( async() => {
    skeleton_loader.value = true
	menuLoader.value = true
    categories_loading.value = true;
    let gi:any
    if (typeof window !== 'undefined') {
        gi  = sessionStorage.getItem('guest_id');
    }
    guest_id.value = JSON.parse(gi)
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
        navigateTo(`/category-${item.id}-${shop_id}-5`,{external: true});
    }
   }));
})
await getLogo()
if (guest_id.value === null) {
      guest_id.value = createId()
      sessionStorage.setItem('guest_id', JSON.stringify(guest_id.value))
}
  let current_shop_branch:any
  let current_shop_id:any
  let current_cart_id:any
  if (typeof window !== 'undefined') {
    current_shop_branch = sessionStorage.getItem('current_shop_branch');
    current_shop_id = sessionStorage.getItem('current_shop_id');
    current_cart_id = sessionStorage.getItem('cart_id');
  }
  
 let cart_params = {
  shop_id: JSON.parse(current_shop_branch),
  user_id: user_id.value,
  guest_id: guest_id.value
 }
 if (current_cart_id) {
   let saved_cart  = await frontStore.getCartTwo(current_cart_id).then((data) => {
	cart.value = data.data?.items
    cart_total.value = data?.data?.cart_total
   })
 } else {
    let created_cart = await frontStore.createCart(cart_params).then((data) => {
	cart.value = data?.data?.items
	cart_total.value = data?.data?.cart_total
   cart_id.value = data?.data?.id
   }) 
 }


let categoriess = await frontStore.getAllCategories(params).then(async (data) => {
await transformMenu(data)
categories_loading.value = false
})
let par:any  = sessionStorage.getItem('current_shop_id');
let f_menus = await frontStore.getFeaturedMenus(JSON.parse(par)).then(async (data) => {
dummyMenu.value = await convertDataToMenuItems(data?.data)
})
skeleton_loader.value = false
menuLoader.value = false
})
    const goToLanding = async () => {
     await navigateTo('/',{external: true})
    }
	const goToCheckout = async () => {
		if (typeof window !== 'undefined') {
            const current_shop_id:any = sessionStorage.getItem('current_shop_id');
            const current_shop_branch:any = sessionStorage.getItem('current_shop_branch');
			await navigateTo(`checkout-${cart_id.value}-${JSON.parse(current_shop_id)}-${JSON.parse(current_shop_branch)}`,{external: true})
        //    await  navigateTo(`/shop-${JSON.parse(current_shop_id)}-${JSON.parse(current_shop_branch)}`,{external:true})
        }
		
	}
	const getMenuBannerUrl = (ban:any) => {
    // Loop through the array of banners
    for (let i = 0; i < ban.length; i++) {
        // Check if the position is "menu"
        if (ban[i].position === "menu") {
            // Return the URL of the first matching banner
            return ban[i].image;
        }
    }
    // Return null if no banner with position "menu" is found
    return null;
   }
    const goToHome = async () => {
        if (typeof window !== 'undefined') {
            const current_shop_id:any = sessionStorage.getItem('current_shop_id');
            const current_shop_branch:any = sessionStorage.getItem('current_shop_branch');
           await  navigateTo(`/shop-${JSON.parse(current_shop_id)}-${JSON.parse(current_shop_branch)}`,{external:true})
        }
        
        //@ts-ignore
        
    }
    const goToCategory = async (id:any) => {
		if (typeof window !== 'undefined') {
            const current_shop_id:any = sessionStorage.getItem('current_shop_id');
            const current_shop_branch:any = sessionStorage.getItem('current_shop_branch');
			await navigateTo(`/category-${id}-${JSON.parse(current_shop_id)}-${JSON.parse(current_shop_branch)}`,{external:true});
            // await  navigateTo(`/shop-${JSON.parse(current_shop_id)}-${JSON.parse(current_shop_branch)}`,{external:true})
        } 
       
    }
    const chooseShop = async () => {
     select_brand.value = false
     select_shop.value = true
     shopLogo.value = currentBrand.value?.logo;
     shopName.value = currentBrand.value?.name;
     await getShopsForBrand( currentBrand.value?.id);
    }
	const getLogo = () => {
      // Ensure it's running on the client
        let active_brandd: any = sessionStorage.getItem('active_brand');
        let ab = JSON.parse(active_brandd);
        mylogo.value = ab?.logo;
     // Return fallback during SSR
   };

    const getBrandById = () => {
    // Find the brand with the matching id
    const foundBrand = brands.value.find((brand:any) => brand.id === chosenBrand.value);

    // Assign the found brand to chosenBrand
    if (foundBrand) {
        currentBrand.value = foundBrand;
		if (foundBrand?.name != "OKMART") {
			currentBrand.value = null;
			chosenBrand.value = null;
			toast.add({ severity: 'info', summary: 'Coming Soon', detail: `${foundBrand?.name} will be available soon`, life: 3000 });
			return
		}

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
			if (!user_id.value) {
            sessionStorage.setItem('cart_id', JSON.stringify(data?.data?.id))
            sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id))
            sessionStorage.setItem('current_cart_brand',JSON.stringify(brand_id))
          } else {
            sessionStorage.removeItem('cart_id');
            sessionStorage.removeItem('current_cart_shop_id');
            sessionStorage.removeItem('current_cart_brand');
          }
          
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
const dummyMenu = ref([])
const  transformMenu = (data:any) => {
    // Helper function to convert adverts into banners
    function convertAdvertsToBanners(adverts:any) {
        //@ts-ignore
		let ads:any = []
		ads = adverts
        return ads.map((ad:any) => ({
            title: ad.name,
            image: ad.file,
			position: ad.display_position
        }));
    }

    // Helper function to convert categories
    function convertCategories(categories: any) {
  //@ts-ignore
  return categories.map(category => ({
    id: category.id,
    title: category.name,
    subcategories: category.children.map((child: any) => ({
      id: child.id,
      name: child.name
    })),
    banners: convertAdvertsToBanners(category.adverts)
  }));
}

    // Main transformation
    //@ts-ignore
  menuItems.value =   data.data.categories.map(category => ({
        id: category.id,
        title: category.name,
        image: "", // Placeholder if there's no image associated with the category
        categories: convertCategories(category.children),
        banners: convertAdvertsToBanners(category.adverts)
    }));
}



    
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
const goToShop = async () => {
//   loading.value = true;
//   sessionStorage.setItem('active_brand', JSON.stringify(currentBrand.value))
//   sessionStorage.setItem('current_shop_id', JSON.stringify(chosenBrand.value))
//   sessionStorage.setItem('current_shop_branch', JSON.stringify(shopBranch.value))
//   select_shop.value = false
//   loading.value = false;
  await navigateTo(`/shop-${chosenBrand.value}-${shopBranch.value}`,{external:true});
  
}
//@ts-ignore
const active_brand = ref(getBrandConfiguration())

const buttonColor = active_brand?.value?.button_color??"#FF7043";

const menuColor = active_brand?.value?.theme_color??"#fff";

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
                navigateTo(`/category-${parentCategory.id}-${brand_id.value}-${shop_id.value}`,{external: true});
            },
            icon: 'pi pi-category-icon',
            items: Array.isArray(parentCategory.children) ? 
            //@ts-ignore
                parentCategory.children.map(child => ({
                    label: child.name,
                    command: () => {
                        navigateTo(`/category-${child.id}-${brand_id.value}-${shop_id.value}`,{external:true});
                    },
                    items: child.children ? convertToMenuItems(child.children) : []
                })) : []
                
        })
    );
}

        //@ts-ignore
const convertDataToMenuItems = (data) => {
	//@ts-ignore
    return data.map(item => {
        const { referenceable, referenceable_id, is_brand } = item;
        return {
            label: referenceable.name,
            icon: 'pi pi-tagjhs', // You can adjust the icon as needed
            command: () => {
                const url = is_brand 
                    ? `/brands-${brand_id.value}-${shop_id.value}-${referenceable_id}` 
                    : `/category-${referenceable_id}-${brand_id.value}-${shop_id.value}`;
                navigateTo(url,{external:true});
            }
        };
    });
}
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
			if (!user_id.value) {
            sessionStorage.setItem('cart_id', JSON.stringify(data?.data?.id))
            sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id))
            sessionStorage.setItem('current_cart_brand',JSON.stringify(brand_id))
          } else {
            sessionStorage.removeItem('cart_id');
            sessionStorage.removeItem('current_cart_shop_id');
            sessionStorage.removeItem('current_cart_brand');
          }
          
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
			if (!user_id.value) {
            sessionStorage.setItem('cart_id', JSON.stringify(data?.data?.id))
            sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id))
            sessionStorage.setItem('current_cart_brand',JSON.stringify(brand_id))
          } else {
            sessionStorage.removeItem('cart_id');
            sessionStorage.removeItem('current_cart_shop_id');
            sessionStorage.removeItem('current_cart_brand');
          }
          
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
        if(data?.status === 'success') {
            toast.add({
            severity: 'info',
            summary: 'Cart Changed',
            detail: 'Product Removed',
            group: 'br',
            life: 3000,
            });
            let new_cart = await frontStore.getCart().then((data) => {
				if (!user_id.value) {
					sessionStorage.setItem('cart_id', JSON.stringify(data?.data?.id))
					sessionStorage.setItem('current_cart_shop_id', JSON.stringify(shop_id))
					sessionStorage.setItem('current_cart_brand',JSON.stringify(brand_id))
				} else {
					sessionStorage.removeItem('cart_id');
					sessionStorage.removeItem('current_cart_shop_id');
					sessionStorage.removeItem('current_cart_brand');
				}
          
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
	let current_shop_id:any
  if (typeof window !== 'undefined') {
    current_shop_id = sessionStorage.getItem('current_shop_branch');
}
  search_products.value = []
  let search_params = {
    search_text: search_text.value,
    shop_id: current_shop_id
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
    
    // Check if parsedImages is not null or undefined before calling replace
    if (parsedImages) {
      const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''));
      return cleanedString[0];
    }
  } catch (error) {
    console.error('Error parsing images JSON:', error);
  }

  return '/images/placeholder.png'; // Return null if parsing fails or if parsedImages is null
};

    
    </script>
    <style>
	.row.col-12.mainnavv.flex {
    height: 70px;
}
	.cat-title.cursor-pointer {
    font-weight: 600 !important;
    margin-top: 15px !important;
}
  
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

    <style>
    
ol, ul {
	list-style:none;
}

blockquote, q {
	-webkit-hyphens:none;
	-moz-hyphens:none;
	-ms-hyphens:none;
	hyphens:none;
	quotes:none;
}

figure {
	margin:0;
}

:focus {
	outline:0;
}

table {
	border-collapse:collapse;
	border-spacing:0;
}

img {
	border:0;
	-ms-interpolation-mode:bicubic;
	vertical-align:middle;
}

legend {
	white-space:normal;
}









/* Repeatable Patterns
-------------------------------------------------------------- */
*,
*:before,
*:after {
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
}

*,
*:before,
*:after {
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
}



a {
	text-decoration:none;
	color:#333333;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

a:hover,
a:focus {
	color:#f28b00;
	text-decoration:none;
	outline:0;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

ul, ol {
	padding:0;
}



b, strong {
	font-weight:900;
}



select {
	border:none;
}

select::-ms-expand {
	-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	filter:alpha(opacity=0);
	opacity:0;
}



.container {
	width:1170px;
}

.clearfix {
	clear:both;
}

.left {
	text-align:left;
}

.center {
	text-align:center;
}


.regular {
	color:#c5c5c5;
	font-size:14px;
	text-decoration:line-through;
}

.background {
	background-color:#f5f5f5;
}

/* aniketrod
-------------------------------------------------------------- */
.aniketrod {
	position:relative;
}

.aniketrod > .overlay {
	content:'';
	position:absolute;
	width:100%;
	height:100%;
	top:0;
	left:0;
	background-color:rgba(0, 0, 0, 0.5);
	z-index:909;
	opacity:0;
	display:none;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

.aniketrod > .overlay.show {
	opacity:1;
	display:block;
}

/* Header
-------------------------------------------------------------- */




/* Flat Support */
ul.flat-support li {
	display:inline-block;
	line-height:38px;
	height:37px;
}

ul.flat-support li a {
	border-right:1px solid #e5e5e5;
	padding-right:10px;
	padding-left:7px;
	font-size:12px;
	font-weight:400;
}

ul.flat-support li:first-child > a {
	padding-left:0;
}

ul.flat-support li:last-child > a {
	padding-right:0;
	border-right:none;
}

ul.flat-support.style1 > li,
ul.flat-unstyled.style2 > li {
	display:inline-block;
	line-height:27px;
	height:24px;
}

/* Flat Infomation */
ul.flat-infomation {
	text-align:center;
}

ul.flat-infomation li.phone {
	color:#f28b00;
	line-height:38px;
	height:37px;
	letter-spacing:-0.5px;
}

.grid-right ul.flat-infomation li.phone {
	height:55px;
	line-height:59px;
	font-size:15px;
}

/* Flat Unstyled */
ul.flat-unstyled {
	text-align:right;
	margin-right:3px;
}

ul.flat-unstyled > li {
	display:inline-block;
	line-height:38px;
	height:37px;
	position:relative;
}

ul.flat-unstyled > li > a {
	border-left:1px solid #e5e5e5;
	line-height:1;
	padding-left:9px;
	padding-right:6px;
	letter-spacing:-0.5px;
}

ul.flat-unstyled > li:last-child > a {
	padding-right:0;
}

ul.flat-unstyled > li:first-child > a {
	border-left:none;
}

ul.flat-unstyled > li > a i {
	padding-left:10px;
	padding-right:4px;
}

ul.flat-unstyled > li:last-child > a i {
	padding-right:0px;
}

ul.flat-unstyled > li > ul {
	background-color:#fff;
	border-radius:10px;
	padding:10px 0;
	box-shadow:0px 2px 3px 0px rgba(72, 72, 72, 0.15);
	opacity:0;
	visibility:hidden;
	position:absolute;
	left:0;
	z-index:99;
	width:130px;
	text-align:left;
	top:100px;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

ul.flat-unstyled > li > ul:before {
	content:'';
	position:absolute;
	left:30px;
	top:-8px;
	border-left:8px solid transparent;
	border-right:8px solid transparent;
	border-bottom:8px solid #e5e5e5;
	z-index:100;
}

ul.flat-unstyled > li:hover > ul {
	opacity:1;
	visibility:visible;
	top:38px;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

ul.flat-unstyled li > ul > li > a {
	display:block;
	padding:1px 15px;
	line-height:24px;
	font-size:12px;
}

.flat-unstyled.style1 {
	float:right;
	line-height:102px;
	height:101px;
	margin-right:3px;
}

/* Header Middle */
.header-middle #logo {
	line-height:97px;
	margin-left:-2px;
	margin-bottom:7px;
}

.header-middle .grid-left #logo {
	margin-bottom:0px;
}

.header-middle .logo.style1 {
	float:left;
	width:23%;
	margin-right:0px;
}

.header-middle.style1 {
	background-color:#f28b00;
}

/* Box Cart */
.box-cart {
	text-align:right;
	padding:27px 0;
}

.box-cart .inner-box {
	display:inline-block;
	position:relative;
}

.box-cart .inner-box > a > div {
	display:inline-block;
}

.box-cart .inner-box > a > div.icon-cart {
	height:48px;
	line-height:40px;
	width:48px;
	text-align:center;
	border:2px solid #e5e5e5;
	border-radius:50%;
	position:relative;
}

.box-cart .inner-box > a:hover > div.icon-cart {
	border-color:#f28b00;
}

.box-cart .inner-box > a > div.icon-cart span {
	position:absolute;
	top:-3px;
	right:-8px;
	background-color:#f28b00;
	width:20px;
	height:20px;
	line-height:18px;
	color:#f4f4f4;
	font-size:11px;
	border-radius:50%;
}

.box-cart .inner-box > a > .price {
	font-weight:600;
	font-size:16px;
	margin-left:8px;
}

.box-cart .inner-box ul.menu-compare-wishlist li {
	display:inline-block;
	margin-right:19px;
}

.box-cart .inner-box ul.menu-compare-wishlist li a {
	display:inline-block;
	height:48px;
	width:48px;
	line-height:40px;
	text-align:center;
	border:2px solid #e5e5e5;
	border-radius:50%;
}

.box-cart .inner-box ul.menu-compare-wishlist li a:hover {
	border-color:#f28b00;
}

.box-cart .inner-box .dropdown-box {
	padding:25px 20px 32px;
	position:absolute;
	background-color:#fff;
	border-radius:8px;
	top:150px;
	width:332px;
	right:0;
	opacity:0;
	visibility:hidden;
	z-index:99;
	box-shadow:0px 2px 3px 0px rgba(72, 72, 72, 0.15);
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

.box-cart .inner-box .dropdown-box:before {
	content:'';
	position:absolute;
	top:-7px;
	right:70px;
	border-left:7px solid transparent;
	border-right:7px solid transparent;
	border-bottom:7px solid #e5e5e5;
}

.box-cart > .inner-box:hover > .dropdown-box {
	top:55px;
	opacity:1;
	visibility:visible;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

.box-cart .inner-box .dropdown-box > ul > li {
	position:relative;
	margin-bottom:30px;
}

.box-cart .inner-box .dropdown-box > ul > li .img-product {
	float:left;
	margin-right:20px;
	width:64px;
	height:64px;
	border:2px solid transparent;
	border-radius:8px;
	text-align:center;
}

.box-cart .inner-box .dropdown-box > ul > li:hover .img-product {
	border-color:#e5e5e5;
}

.box-cart .inner-box .dropdown-box > ul > li .info-product {
	text-align:left;
}

.box-cart .inner-box .dropdown-box > ul > li .info-product .name {
	margin-bottom:3px;
	color:#484848;
	font-size:12px;
	line-height:20px;
}

.box-cart .inner-box .dropdown-box > ul > li .info-product .price {
	color:#f28b00;
}

.box-cart .inner-box .dropdown-box > ul > li span.delete {
	position:absolute;
	top:0;
	right:0;
	font-size:18px;
	cursor:pointer;
}

.box-cart .inner-box .dropdown-box .total {
	text-align:left;
}

.box-cart .inner-box .dropdown-box .total span {
	color:#484848;
	font-weight:bold;
	font-size:14px;
}

.box-cart .inner-box .dropdown-box .total span.price {
	color:#f28b00;
	font-size:22px;
	font-weight:500;
	float:right;
}

.box-cart .inner-box .dropdown-box .btn-cart {
	margin-top:30px;
	overflow:hidden;
}

.box-cart .inner-box .dropdown-box .btn-cart a.view-cart {
	padding:10px 33px;
	color:#f28b00;
	border:2px solid #f28b00;
	border-radius:30px;
	font-size:14px;
	font-weight:600;
	float:left;
	position:relative;
	overflow:hidden;
	z-index:5;
}

.box-cart .inner-box .dropdown-box .btn-cart a.view-cart:hover {
	color:#fff;
}

.box-cart .inner-box .dropdown-box .btn-cart a.view-cart:before,
.box-cart .inner-box .dropdown-box .btn-cart a.check-out:before {
	content:'';
	position:absolute;
	width:100%;
	height:100%;
	top:0;
	left:0;
	z-index:-1;
	background:#f28b00;
	-webkit-transform:scaleX(0);
	transform:scaleX(0);
	-webkit-transform-origin:0 50%;
	transform-origin:0 50%;
	-webkit-transition-property:transform;
	transition-property:transform;
	-webkit-transition-duration:0.4s;
	transition-duration:0.4s;
	-webkit-transition-timing-function:ease-out;
	transition-timing-function:ease-out;
}

.box-cart .inner-box .dropdown-box .btn-cart a.view-cart:hover:before,
.box-cart .inner-box .dropdown-box .btn-cart a.check-out:hover:before {
	-webkit-transform:scaleX(1);
	transform:scaleX(1);
	-webkit-transition-timing-function:cubic-bezier(0.52, 1.64, 0.37, 0.66);
	transition-timing-function:cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

.box-cart .inner-box .dropdown-box .btn-cart a.check-out {
	padding:12px 35px;
	color:#fff;
	border-radius:30px;
	font-size:14px;
	font-weight:600;
	background-color:#484848;
	float:right;
	position:relative;
	overflow:hidden;
	z-index:5;
}

.box-cart .inner-box .dropdown-box .btn-cart a.check-out:hover {
	border-color:transparent;
}

/* Header Bottom */
.header-bottom {
	background-color:#f28b00;
}

.header-bottom > .container > .row {
	position:relative;
}

.header-bottom.style2 {
	background-color:#e58400;
}

.header-bottom.style3 {
	background-color:#fff;
}

/* Menu Mega
-------------------------------------------------------------- */
#mega-menu {
    position: relative;
    top: -4px;
    height: 15px;
    width: 200px;
    transition: all 0.3s ease-in-out;
}

#mega-menu > .btn-mega {
    font-weight: 600;
    font-size: 16px;
    color: #fefefe;
    height: 45px;
    padding-left: 20px;
    border-radius: 6px;
    align-items: center !important;
    display: flex !important;
    line-height: 62px;
    background-color: v-bind('buttonColor') !important;
    /* border-top-left-radius: 9px; */
    /* border-top-right-radius: 9px; */
    position: relative;
    z-index: 98;
    cursor: pointer;
}

#mega-menu:hover ul.menu {
	top:-1px;
	visibility:visible;
	opacity:1;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}





#mega-menu > ul.menu {
    position: relative;
    z-index: 90;
    background-color: #fff;
    border: solid 1px #7c7c7c33;
    border-bottom-left-radius: 8px;
    top: -40px;
    opacity: 0;
    visibility: hidden;
    height: 475px;
    transition: all 0.3s ease-in-out;
}

#mega-menu > ul.menu > li > a {
	height:50px;
	line-height:51px;
	padding:0 24px;
	border-bottom:1px solid #e5e5e5;
	display:block;
	position:relative;
}

#mega-menu > ul.menu > li:last-child > a {
	border-bottom:none;
}

#mega-menu > ul.menu > li:hover > a .menu-title {
	color:v-bind('buttonColor') !important;;
}

#mega-menu > ul.menu > li > a.dropdown:after {
	content:'\f105';
	position:absolute;
	font-family:'fontawesome';
	right:29px;
	font-size:14px;
	color:#484848;
}

#mega-menu > ul.menu > li > a .menu-img {
	margin-right:18px;
	min-width:30px;
	display:inline-block;
	text-align:center;
}

#mega-menu > ul.menu > li > a .menu-title {
	color:#484848;
}

#mega-menu.style1 > ul.menu {
	transform:translateY(0%);
	opacity:1;
	top:-1px;
	visibility:visible;
	border-width:1px;
	border-bottom-left-radius:10px;
	border-bottom-right-radius:10px;
}

#mega-menu > ul.menu > li:hover > .drop-menu {
	opacity:1;
	visibility:visible;
	transform:translateX(0%);
}

#mega-menu > ul.menu > li .drop-menu {
    transform: translateX(-10%);
    opacity: 0;
    visibility: hidden;
    padding: 0px 7px 27px 0;
    position: absolute;
    top: -1px;
    left: 199px;
    width: 875px;
    border: solid 1px #7c7c7c33;
    border-radius: 0px 10px 10px 0px;
    z-index: -1;
    height: 475px;
    overflow-y: auto;
    background-color: #FFFFFF;
    transition: all 0.3s ease-in-out;
}

#mega-menu > ul.menu > li .drop-menu > .one-third {
	width:33.3%;
	float:left;
	padding-left:42px;
	padding-right:15px;
}

#mega-menu > ul.menu > li .drop-menu > .one-third .cat-title {
	color:#f28b00;
	font-size:16px;
	font-weight:bold;
	margin-bottom:20px;
}

#mega-menu > ul.menu > li .drop-menu > .one-third ul li {
	margin-bottom:5px;
}

#mega-menu > ul.menu > li .drop-menu > .one-third ul li a:not(:hover) {
	color:#484848;
}

#mega-menu > ul.menu > li .drop-menu > .one-third .show a {
	color:#f28b00;
	font-weight:bold;
	position:relative;
}

#mega-menu > ul.menu > li .drop-menu > .one-third .show a:before {
	content:'';
	position:absolute;
	width:0;
	height:2px;
	bottom:-4px;
	right:0;
	background:#f28b00;
	-webkit-transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
	-o-transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
	transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
}

#mega-menu > ul.menu > li .drop-menu > .one-third .show a:hover:before {
	width:100%;
	left:0;
}

#mega-menu > ul.menu > li .drop-menu > .one-third ul.banner li {
	border:2px solid #e5e5e5;
	border-radius:5px;
	background-color:#e5e5e5;
	height:110px;
	padding:30px 10px 30px 18px;
	margin-bottom:20px;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

#mega-menu > ul.menu > li .drop-menu > .one-third ul.banner li:hover {
	background-color:#fff;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

#mega-menu > ul.menu > li .drop-menu > .one-third ul.banner li .banner-text {
	float:left;
}

#mega-menu > ul.menu > li .drop-menu > .one-third ul.banner li .banner-text .banner-title {
	font-weight:bold;
	font-size:18px;
	color:#f28b00;
}

#mega-menu > ul.menu > li .drop-menu > .one-third ul.banner li .banner-text .more-link a img {
	margin-left:10px;
}

#mega-menu > ul.menu > li .drop-menu > .one-third ul.banner li .banner-img {
	float:right;
}

/* Main Navigation
-------------------------------------------------------------- */
#mainnav {
	padding-left:30px;
	float:left;
}

#mainnav > ul.menu {
	word-spacing:-4px;
}

#mainnav > ul.menu > li {
	display:inline-block;
	line-height:57px;
	height:55px;
}

#mainnav ul.menu > li > a {
	display:inline-block;
	color:#fefefe;
	font-size:14px;
	font-weight:500;
	padding:0 21.5px;
	border-right:1px solid #fec579;
	line-height:1;
	position:relative;
	z-index:8;
}

#mainnav ul.menu > li > a:after {
	content:'';
	position:absolute;
	bottom:-20px;
	left:-1px;
	opacity:0;
	background-color:#fff;
	height:48px;
	width:calc(100% + 2px);
	z-index:-3;
	border-top-left-radius:10px;
	border-top-right-radius:10px;
}

#mainnav ul.menu > li:hover > a {
	color:#f28b00;
}

#mainnav ul.menu > li:hover > a:after {
	opacity:1;
}

#mainnav ul.menu > li:last-child > a {
	border-right:none;
}

#mainnav.style1 {
	padding-left:4px;
	line-height:104px;
}

#mainnav.style1 ul.menu > li > a {
	color:#484848;
	border:none;
	padding:0;
	font-weight:500;
	margin-right:33px;
}

#mainnav.style2 {
	padding-left:55px;
}

#mainnav.style2 ul.menu > li {
	margin-top:24px;
}

#mainnav.style2 ul.menu > li > a {
	margin-right:43.5px;
	text-transform:uppercase;
	font-weight:bold;
	color:#656565;
	padding:0;
	border-right:0px;
}

#mainnav.style2 ul.menu > li:last-child > a {
	margin-right:0px;
}

#mainnav.style2 ul.menu > li.has-mega-menu:hover > .submenu {
	top:80px;
}

#mainnav.style3 ul.menu > li > a {
	color:#484848;
	border-color:#c9c9c9;
}

#mainnav.style4 {
	padding-left:72px;
}

#mainnav ul.menu > li:hover > .submenu {
	opacity:1;
	visibility:visible;
	top:55px;
	-webkit-transition:all 0.3s ease-in-out;
	-moz-transition:all 0.3s ease-in-out;
	-ms-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}

#mainnav.style1 ul.menu > li.column-1:hover > .submenu {
	top:55px;
}

#mainnav.style1 ul.menu > li:hover > .submenu {
	top:80px;
}

/* Today Deal */
.today-deal {
	float:right;
}

.today-deal a {
	line-height:55px;
	color:#ffffff;
	font-size:14px;
	font-weight:600;
	position:relative;
}

.today-deal a:before {
	content:'';
	position:absolute;
	width:0;
	height:2px;
	bottom:-4px;
	right:0;
	background:#fff;
	-webkit-transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
	-o-transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
	transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
}

.today-deal a:hover:before {
	width:100%;
	left:0;
}

.today-deal.style1 > a {
	color:#f28b00;
}

/* Sub Menu */
ul.menu li.column-1 {
	position:relative;
}

ul.menu li.column-1 .submenu {
	width:263px;
	left:-1px;
	padding:18px 0;
}

ul.menu li.column-1 .submenu > li {
	line-height:30px;
}

ul.menu li.column-1 .submenu > li:last-child {
	border-bottom:none;
}

ul.menu li.column-1 .submenu > li > a {
	display:block;
	font-size:13px;
	padding-left:22px;
	position:relative;
	font-weight:500;
	color:#484848;
}

ul.menu li.column-1 .submenu > li > a:hover {
	color:#f28b00;
}

ul.menu li.column-1 .submenu > li > a i {
	padding-right:15px;
}

.submenu .row:not(:last-child) {
	margin-bottom:30px;
}

.submenu .col-md-4 {
	padding-left:50px;
}

.submenu .cat-title {
	color:#f28b00;
	font-size:16px;
	font-weight:500;
	margin-bottom:20px;
}

.submenu ul > li {
	margin-bottom:5px;
	line-height:24px;
}

.submenu .show {
	line-height:24px
}

.submenu .show a {
	color:#f28b00;
	font-weight:700;
	position:relative;
}

.submenu .show a:before {
	content:'';
	position:absolute;
	width:0;
	height:2px;
	bottom:-4px;
	right:0;
	background:#f28b00;
	-webkit-transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
	-o-transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
	transition:width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
}

.submenu .show a:hover:before {
	width:100%;
	left:0;
}

/* Main Navigation Mobile
-------------------------------------------------------------- */
#mainnav-mobi {
	display:block;
	margin:0 auto;
	width:100%;
	position:absolute;
	left:0;
	z-index:1000;
	background-color:#222222;
}

#mainnav-mobi > ul {
	display:block;
	list-style:none;
	margin:0;
	padding:0;
}

#mainnav-mobi ul li {
	margin:0;
	position:relative;
	text-align:left;
	border-top:1px solid #333333;
	cursor:pointer;
	display:block;
}

#mainnav-mobi ul > li > a {
	text-decoration:none;
	height:50px;
	line-height:50px;
	padding:0 20px;
	color:#fff;
	border:none;
}

#mainnav-mobi ul.submenu {
	top:100%;
	left:0;
	z-index:2000;
	position:relative;
	background-color:#222222;
}

#mainnav-mobi > ul > li > ul > li {
	position:relative;
	border-top:1px solid #333333;
}

#mainnav-mobi ul.submenu > li > a {
	display:block;
	text-decoration:none;
	padding:0 50px;
	border-top-color:rgba(255,255,255,.1);
	-webkit-transition:all 0.2s ease-out;
	-moz-transition:all 0.2s ease-out;
	-o-transition:all 0.2s ease-out;
	transition:all 0.2s ease-out;
}

#mainnav-mobi > ul > li > ul > li:first-child a {
	border-top:none;
}

#mainnav-mobi ul.submenu > li > a:hover,
#mainnav-mobi > ul > li > ul > li.active > a {
	color:#fff;
}

#mainnav-mobi ul.menu li.has-mega-menu .submenu {
	background:#222222;
	right:0px;
	width:100%;
	position:relative;
}

#mainnav-mobi ul.menu li.has-mega-menu h3.cat-title {
	color:#fff;
	padding-left:50px;
	cursor:pointer;
}

#mainnav-mobi ul.menu li.has-mega-menu .submenu .row:not(:last-child) {
	margin:0;
}

/* Button Menu */
.btn-menu,
.btn-menu-mega {
	display:none;
	position:relative;
	background:transparent;
	cursor:pointer;
	float:right;
	top:10px;
	width:25px;
	height:25px;
	border:2px solid #fff;
	padding:15px 18px 17px;
	border-radius:4px;
	z-index:8;
	-webkit-transition:all ease .238s;
	-moz-transition:all ease .238s;
	transition:all ease .238s;
}

.btn-menu-mega {
	background:#484848;
	border-color:#484848;
}

.btn-menu:before,
.btn-menu:after,
.btn-menu span,
.btn-menu-mega:before,
.btn-menu-mega:after,
.btn-menu-mega span {
	background-color:#fff;
	-webkit-transition:all ease .238s;
	-moz-transition:all ease .238s;
	transition:all ease .238s;
}

.btn-menu:before,
.btn-menu:after,
.btn-menu-mega:before,
.btn-menu-mega:after {
	content:'';
	position:absolute;
	height:2px;
	width:25px;
	left:5px;
	top:50%;
	-webkit-transform-origin:50% 50%;
	-ms-transform-origin:50% 50%;
	transform-origin:50% 50%;
}

.btn-menu span,
.btn-menu-mega span {
	position:absolute;
	width:25px;
	height:2px;
	left:5px;
	top:50%;
	overflow:hidden;
	text-indent:200%;
}

.btn-menu-mega span {
	width:20px;
}

.btn-menu:before,
.btn-menu-mega:before {
	-webkit-transform:translate3d(0, -7px, 0);
	transform:translate3d(0, -7px, 0);
}

.btn-menu:after,
.btn-menu-mega:after {
	width:25px;
	-webkit-transform:translate3d(0, 7px, 0);
	transform:translate3d(0, 7px, 0);
}

.btn-menu.active:after,
.btn-menu-mega.active:after {
	width:25px;
}

.btn-menu.active span,
.btn-menu-mega.active span {
	opacity:0;
}

.btn-menu.active:before,
.btn-menu-mega.active:before {
	-webkit-transform:rotate3d(0, 0, 1, 45deg);
	transform:rotate3d(0, 0, 1, 45deg);
}

.btn-menu.active:after,
.btn-menu-mega.active:after {
	-webkit-transform:rotate3d(0, 0, 1, -45deg);
	transform:rotate3d(0, 0, 1, -45deg);
}

.btn-submenu,
.btn-submenu-child {
	position:absolute;
	right:0px;
	top:-1px;
	font:20px/51px 'FontAwesome';
	text-align:center;
	cursor:pointer;
	width:51px;
	height:50px;
	background:#333;
}

.btn-submenu-child {
	right:57px;
	top:0px;
	height:45px;
	line-height:46px;
}

.btn-submenu:before {
	content:"\f107";
	color:#ffffff;
}

.btn-submenu-child:before {
	content:"\f107";
	color:#fff;
}

.btn-submenu.active:before,
.btn-submenu-child.active:before {
	content:"\f106"
}

/* Mega Mobile
-------------------------------------------------------------- */
#mega-mobile {
	display:block;
	margin:0 auto;
	width:100%;
	position:absolute;
	left:0;
	z-index:1000;
	background-color:#222222;
}

#mega-mobile > ul.menu > li > a {
	color:#fff;
	display:block;
	padding:15px 0;
	cursor:pointer;
	padding-left:15px;
	border-bottom:1px solid #333;
	position:relative;
}

#mega-mobile > ul.menu > li > a .menu-img {
	margin-right:18px;
	min-width:30px;
	display:inline-block;
	text-align:center;
}

#mega-mobile > ul.menu > li > a.dropdown .btn-dropdown,
.btn-dropdown-child {
	position:absolute;
	top:0;
	right:0;
	font-size:14px;
	width:54px;
	height:54px;
	background:#262626;
	text-align:center;
	cursor:pointer;
	font:20px/54px 'FontAwesome';
}

.btn-dropdown-child {
	right:0px;
	width:44px;
	height:44px;
	line-height:44px;
}

#mega-mobile > ul.menu > li > a.dropdown .btn-dropdown:after,
.btn-dropdown-child:after {
	content:'\f107';
}

#mega-mobile > ul.menu > li > a.dropdown .btn-dropdown.active:after,
.btn-dropdown-child.active:after {
	content:'\f106';
}

#mega-mobile > ul.menu > li > .drop-menu {
	padding:0 54px 0 50px;
}

#mega-mobile > ul.menu > li > .drop-menu .cat-title {
	position:relative;
	color:#f5f5f5;
	padding:10px 0;
	border-bottom:1px solid #333;
}

#mega-mobile > ul.menu > li > .drop-menu ul {
	padding-left:20px;
}

#mega-mobile > ul.menu > li > .drop-menu ul li {
	border-bottom:1px solid #333;
}

#mega-mobile > ul.menu > li > .drop-menu ul li a {
	color:#f5f5f5;
	font-size:12px;
	padding:8px 0;
	display:block;
}

#mega-mobile > ul.menu > li > .drop-menu .show,
#mega-mobile > ul.menu > li > .drop-menu .one-third:nth-child(3) {
	display:none;
}


/* This css for Responsive*/
@media only screen and (max-width:1900px) {
	
	footer.style1 {
		margin:0px;
	}

	.header-bottom.style1 .grid-left,
	.flat-slider.style1 .grid-left {
		width:240px;
	}

	.header-bottom.style1 .grid-right,
	.flat-slider.style1 .grid-right {
		width:calc(100% - 260px);
	}

	.header-bottom.style1 .grid-right {
		padding:7px 15px 7px 15px;
	}

	.header-bottom.style1 .grid-right ul.flat-infomation {
		margin-right:5px;
	}

	.header-bottom.style1 .grid-right .top-search.style1 {
		width:53%;
	}

	.header-bottom.style1 .grid-left #mega-menu {
		width:100%;
	}

	.slider .slider-item.style10 .item-text {
		width:50%;padding:30px;
	}

	.slider .slider-item.style10 .item-image {
		padding-top:100px;padding-right:30px;width:50%;
	}

	.banner-box.style1 {
		width:50%;
	}

	.banner-box.style1.v1 .inner-box {
		display:none;
	}

	#mainnav.style2 {
		float:right;padding-left:0px;
	}

	#mainnav.style2 ul.menu > li.has-mega-menu:hover > .submenu {
		top:90px;
	}

	.flat-unstyled.style1 {
		line-height:50px;height:50px;margin-right:0px;
	}

	.boxed.style2 .container-fluid {
		width:1170px;max-width:100%;
	}

	.counter.style1.v2,
	.bestsellers, .featured, .hot-sale {
		width:50%;padding-left:15px !important;padding-right:15px !important;
	}

	footer.style4 {
		width:1200px;
	}

	footer.style4 .widget-about {
		padding-left:0px;
	}

	footer.style4 .widget-newsletter {
		padding-right:0px;margin-left:0px;
	}

	.boxed.style2 .footer-bottom.style1 p.copyright {
		margin-left:0px;
	}

	.boxed.style2 .footer-bottom.style1 p.btn-scroll {
		margin-right:0px;
	}


}

@media only screen and (min-width:1200px) and (max-width:1366px) {
	
	#mega-menu > ul.menu > li .drop-menu {
		left:258px;width:879px;
	}

	.flat-location .location-detail {
		width:300px;
	}

	.flat-location .location {
		width:380px;
	}

	.flat-location #flat-map-2 {
		width:calc(100% - 300px - 380px);
	}

	.location .location-content .select-location select {
		width:92px;margin-right:7px;
	}

	.location .location-content .select-location .select:before {
		right:30px;
	}

	.boxed.style2 .flat-imagebox .container-fluid .box-product .row .col-xl-2 {
		max-width:33.333%;
	}


}

@media only screen and (max-width:1366px) {
	
	.product-detail-bar {
		padding-left:0px;
	}

	.boxed.style2 .container-fluid {
		padding:0 30px;
	}

	.boxed.style2 .container-fluid .flat-row-title {
		margin-left:0px;margin-right:0px
	}

	.flat-highlights.style2 .container-fluid {
		padding:20px 30px;
	}

	footer.style4 {
		width:auto;
	}

	footer.style2 .container-fluid {
		padding:40px 30px;
	}

	footer.style4 .widget-categories-ft {
		padding-left:60px;
	}


}

@media only screen and (max-width:1199px) {
	
	body.background section.flat-row {
		margin-left:15px;margin-right:15px;
	}

	body.background .flat-imagebox.style4 .owl-carousel-3.owl-theme .owl-controls .owl-nav div.owl-prev {
		left:-45px;
	}

	body.background .flat-imagebox.style4 .owl-carousel-3.owl-theme .owl-controls .owl-nav div.owl-next {
		right:-45px;
	}

	#mega-menu > ul.menu > li .drop-menu {
		width:704px;left:255px;
	}

	#mega-menu > ul.menu > li .drop-menu > .one-third {
		padding-left:0px;padding-right:3px;
	}

	.box-cart .inner-box ul.menu-compare-wishlist li {
		margin-right:5px;
	}

	.mainnav {
		padding-left:0px;
	}

	.mainnav ul.menu > li > a {
		padding:0 20px;
	}

	#mega-menu {
		width:250px;
	}

	.flat-team {
		padding:10px 0 50px;
	}

	ul.brands-tablist {
		padding:20px 20px;
	}

	article.main-post.style3,
	article.main-post.style3 .content-post {
		padding:0px;
	}

	.table-cart tr td .quanlity input {
		width:100%;
	}

	.table-cart tr td .quanlity span.btn-up {
		right:20px;
	}

	.flat-location .location,
	.flat-location .location-detail {
		width:50%;
	}

	.flat-location #flat-map-2 {
		width:100%;
	}

	.flex-control-thumbs li {
		margin-right:10px;margin-bottom:10px;
	}

	.box-cart.style2 .btn-add-cart a {
		width:100%;
	}

	.box-cart.style2 .compare-wishlist,
	.box-cart.style2 .btn-add-cart {
		display:block;margin-left:0px;text-align:center;
	}

	.imagebox .box-content .cat-name a:before,
	.imagebox .box-content .cat-name a:after {
		width:20%;
	}

	.flat-imagebox.style2 .product-wrap .tab-item .row .col-md-6 .product-box .imagebox .box-content .cat-name a:before,
	.flat-imagebox.style2 .product-wrap .tab-item .row .col-md-6 .product-box .imagebox .box-content .cat-name a:after {
		width:30%;
	}

	.imagebox.style5 {
		overflow:hidden;
	}

	.imagebox.style5 .box-text {
		padding:20px 0 20px;margin-right:0px;
	}

	.slider .slider-item.style6 .item-text {
		padding:30px 30px;
	}

	.slider .slider-item.style7 {
		position:relative;height:400px;
	}

	.slider .slider-item.style7 .item-text {
		padding:80px 0 0 30px;
	}

	.slider .slider-item.style7 .item-image {
		width:30%;position:absolute;padding:0;bottom:0;right:10px;
	}

	.top-search.style1 {
		width:520px;padding-left:30px;
	}

	.box-cart.style1 .inner-box > a > .price,
	.header-bottom.style1 .grid-right ul.flat-infomation {
		display:none;
	}

	.mainnav.style1 ul.menu > li > a {
		margin-right:22px;
	}

	.slider .slider-item.style8 .item-image {
		width:50%;margin-top:40px;
	}

	.box-6 {
		width:50%;padding:0 10px 0 10px;
	}

	.box-6.big {
		padding-right:10px;padding-left:10px;
	}

	.box-6 .product-box,
	.box-6.big .product-box {
		width:100%;
	}

	.header-bottom.style1 .grid-right .top-search.style1 {
		width:70%;
	}


}

@media only screen and (min-width:992px) and (max-width:1199px) {
	
	#mainnav ul.menu > li > a {
		padding:0 18px;
	}

	.imagebox.style1.v3 .box-price {
		width:200px;padding:30px 2px 0 20px;
	}

	.imagebox.style1.v3 .box-content {
		width:250px;
	}

	.imagebox.style1.v3 .box-image {
		width:calc(100% - 465px);
	}

	.drop-menu {
		width:710px;left:260px;
	}

	.drop-menu > .one-third {
		padding-left:0px;padding-right:0px;
	}

	.drop-menu > .one-third:first-child {
		padding-left:15px;
	}

	.box-right .img-line {
		padding-left:45px;margin-top:-100px;
	}

	.box-right .img-line img:first-child {
		margin-right:-60px;
	}

	.box-cart.style2 .compare-wishlist a.compare {
		display:block;margin-right:0px;
	}

	.product-detail.style2 .footer-detail .quanlity-box > div.quanlity {
		width:110px;margin-right:10px;
	}

	.product-detail .footer-detail .quanlity-box > div.colors {
		display:block;margin-bottom:20px;margin-left:0px;
	}

	.counter.style1 .counter-content .count-down .square {
		width:55px;
	}

	.top-search form.form-search .box-search .search-suggestions {
		width:670px;
	}

	.slider .slider-item .item-text {
		width:58%;padding:80px 40px;
	}

	.slider .slider-item.style5 .item-text {
		width:40%;
	}

	.slider .slider-item.style2 .item-text {
		width:40%;padding:30px 40px;
	}

	#mainnav.style1 ul.menu > li > a {
		padding:0 12px 0 12.5px;margin-right:0px;
	}

	#mainnav.style1 ul.menu > li.has-mega-menu .submenu {
		width:97%;
	}

	#mainnav.style2 ul.menu > li.has-mega-menu .submenu {
		width:97%;
	}


	.flexslider.style2 {
		width:56%;
	}
	#mega-menu > ul.menu > li .drop-menu {
		padding-left: 15px;
	}
	.slider .slider-item.style7 {
		height: 485px;
	}


}



@media only screen and (min-width:992px) {
	
	ul.submenu {
		word-spacing:2px;
	}

	.submenu {
		position:absolute;top:100px;right:15px;width:1140px;background-color:#fff;opacity:0;visibility:hidden;z-index:99;padding:30px;word-spacing:2px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:0px 2px 3px 0px rgba(0, 0, 0, 0.3);-webkit-transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;-ms-transition:all 0.3s ease-in-out;-o-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;
	}


}

@media only screen and (min-width:992px) and (max-width:1199px) {
	ul.menu > li.has-mega-menu .submenu {
		width: 130%;
	}

}

@media only screen and (max-width:991px) {
	
	.header-middle #logo.style1 {
		line-height:70px;margin-bottom:0px;
	}

	ul.flat-infomation.style1 li.phone {
		line-height:70px;margin-right:40px;
	}

	.owl-carousel-11.owl-theme .owl-controls .owl-dots {
		bottom: 0;
	}

	.btn-menu.style1 {
		background:#333;top:17px;
	}

	.btn-menu.style1.v1 {
		background:transparent;top:10px;
	}

	.btn-menu.style1.v2 {
		background:#333;top:10px;
	}

	.top-search.style1 {
		width:370px;padding-left:0px;right:15px;
	}

	.top-search.style1 form.form-search .box-search input {
		padding-left:20px;
	}

	.flat-row,
	.flat-iconbox.style1 {
		padding:30px 0;
	}

	.flat-product-content .container {
		padding:30px 15px;
	}

	.box-cart .inner-box > a > .price {
		display:none;
	}

	

	.btn-menu,
	.btn-menu-mega {
		display:block;
	}

	.btn-menu-mega {
		float:left;
	}

	.mainnav > ul.menu > li {
		height:auto;
	}

	.mainnav ul.menu > li > a:after {
		width:0px;
	}

	.mainnav ul.menu > li:hover > .submenu {
		top:100%;
	}

	#mainnav-mobi ul > li > a >.submenu {
		position:relative;top:0px;right:0px;width:100%;background-color:#222222;opacity:1;visibility:visible;z-index:99;padding:30px;word-spacing:4px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:0px 2px 3px 0px rgba(0, 0, 0, 0.3);-webkit-transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;-ms-transition:all 0.3s ease-in-out;-o-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;
	}

	#mainnav-mobi ul.menu li.has-mega-menu .submenu .row h3 {
		word-spacing:2px;cursor:pointer;font-weight:400;font-size:15px;margin-bottom:0px;padding:15px 0 15px 20px;
	}

	#mainnav-mobi ul.menu li.has-mega-menu .submenu .row .btn-submenu {
		top:-15px;
	}

	#mainnav-mobi ul.menu li.has-mega-menu .submenu .row ul {
		padding-left:30px;word-spacing:2px;padding-right:40px;
	}

	#mainnav-mobi ul.menu li.has-mega-menu .submenu .row ul li {
		border-top:none;border-bottom:1px solid #333;
	}

	#mainnav-mobi ul.menu li.has-mega-menu .submenu .row ul li > a {
		padding-left:5px;
	}

	#mainnav-mobi ul.menu li.has-mega-menu .submenu .row:nth-child(2),
	#mainnav-mobi ul.menu li.has-mega-menu .submenu .row .show,
	.box-right .img-line img:first-child,
	.box-left .img-line img:first-child,
	.flat-newsletter .form-newsletter .right {
		display:none;
	}

	#mainnav-mobi ul > li > a >.submenu li a {
		color:#484848;
	}

	ul.menu li.column-1 .submenu {
		width:100%;background:#222222;border-radius:0px;position:relative;top:-3px;opacity:1;word-spacing:2px;visibility:visible;padding:0;
	}

	.today-deal {
		margin-left:20px;
	}

	.image-about img,
	.box-flexslider, .product-detail.style5 {
		width:100%;
	}

	.product-detail.style5 {
		padding:0 30px;
	}

	.product-detail.style5 .header-detail .reviewed .status-product {
		text-align:left;
	}

	.product-detail.style5 .header-detail .reviewed .status-product span {
		display:inline-block;
	}

	.flexslider .slides img {
		width:auto;max-width:100%;
	}

	.iconbox.style1 {
		margin-bottom:30px;
	}

	.brands-list .brands-item {
		width:20%;
	}

	.imagebox.style1.v1 {
		margin-bottom:30px;
	}

	.imagebox.style1.v1 .box-content,
	.flat-contact {
		padding-top:0px;
	}

	.imagebox.style1.v1 .box-content .cat-name a {
		font-size:15px;
	}

	.flat-tab ul.tab-list {
		padding-left:0px;
	}

	.flat-tab .tab-content {
		padding:30px;
	}

	.progres {
		padding-right:0px;
	}

	.progress-circle {
		text-align:center;
	}

	.progress-circle .circle-item {
		margin-right:80px;
	}

	.order-tracking {
		padding:50px;
	}

	.term-conditions .text-wrap {
		margin-bottom:40px;
	}

	.term-conditions .text-wrap p {
		padding-right:0px;
	}

	.table-cart {
		margin-bottom:30px;
	}

	.form-login, .form-register {
		padding:30px;
	}

	.form-coupon {
		margin-top:40px;
	}

	.cart-totals form .btn-cart-totals {
		margin-top:50px;
	}

	.compare-content .table-compare {
		width:840px;overflow:auto;
	}

	.table-compare tr th {
		padding-left:20px;
	}

	.blog-pagination span {
		display:block;float:none;text-align:center;
	}

	ul.flat-pagination.style1,
	.reviewed .status-product,
	.product-detail.style3 .reviewed .status-product {
		float:none;
	}

	.product-box.style3 {
		height:360px;margin-bottom:30px;
	}

	.imagebox.style1.v3 {
		min-height:380px;padding:15px 20px 20px 20px;
	}

	.imagebox.style1.v3 .box-price {
		text-align:left;padding:0px 55px 0 0px;
	}

	.imagebox.style1.v3 .box-image {
		margin-right:0px;
	}

	.iconbox.style2 {
		margin-bottom:50px;
	}

	.box-right .img-line,
	.box-left,
	.box-right.style1 .img-line {
		text-align:center;margin-top:0px;
	}

	.box-left .img-line {
		margin-bottom:0px;
	}

	.product-detail .footer-detail .quanlity-box > div.colors {
		margin-bottom:20px;margin-right:20px;
	}

	.box-cart.style2 {
		margin:20px 0 20px;
	}

	.box-cart.style2 .btn-add-cart {
		margin-bottom:15px;
	}

	.flexslider.style1 .flex-viewport {
		margin:50px 0 50px;
	}

	.flexslider.style1 .flex-control-nav {
		top:auto;margin-top:0px;width:100%;position:relative;
	}

	.flexslider.style1 .flex-control-nav li {
		display:inline-block;width:auto;
	}

	.flexslider.style1 .slides img {
		display:inline-block;float:none;
	}

	.product-detail.style3 {
		margin-left:0px;
	}

	.box-cart.style2 .compare-wishlist, .box-cart.style2 .btn-add-cart {
		text-align:left;
	}

	.box-cart.style2 .btn-add-cart a {
		width:auto;padding:0 30px;
	}

	.flat-product-content.style2 > .row > .col-md-12 > .row {
		padding:50px 30px;
	}

	.description-text.style1 .box-text:first-child,
	.description-text.style1 .box-text:nth-child(3),
	.description-text.style1 .box-text:nth-child(4) {
		margin-right:0px;margin-top:30px;
	}

	.description-image.style1 {
		margin:0px;text-align:center;
	}

	.box-right.style1 .box-text,
	.box-right.style1 {
		margin-left:0px;
	}

	.box-counter .product-item,
	.counter {
		width:100%;padding:0;
	}

	.counter span.special {
		right:0px;
	}

	.count-down {
		text-align:center;
	}

	.count-down .square {
		margin:0 15px 15px;
	}

	.count-down .square:last-child {
		margin-right:15px;
	}

	.count-down .square .text {
		margin-left:0px;
	}

	.imagebox.style3 {
		padding:20px 20px;
	}

	.imagebox.style3 .box-image {
		float:none;margin-right:0;margin-bottom:20px;text-align:center;
	}

	.imagebox.style3 .box-image.save span {
		top:20px;
	}

	.imagebox.style3 .box-bottom .btn-add-cart a {
		width:auto;padding:0 50px;
	}

	.imagebox.style3 .box-content,
	.imagebox.style3 .box-bottom {
		text-align:center;
	}

	.box-wrap.style1 {
		height:auto;
	}

	.flat-newsletter .form-newsletter {
		padding:50px 20px;margin-top:30px;
	}

	.flat-newsletter .form-newsletter .left {
		float:none;text-align:center;padding-top:0px;
	}

	.widget-categories-ft,
	.box-left .img-product,
	.form-review.style2 {
		padding-left:0px;
	}

	.widget-ft {
		margin-bottom:20px;
	}

	

	.box-cart .inner-box .dropdown-box:before {
		right:15px;
	}

	

	.imagebox.style5 .box-text {
		text-align:center;float:none;width:100%;margin-right:0px;
	}

	.flexslider.style1 .slides img {
		padding-left: 0px;
	}

	.flexslider.style2 {
		width:100%;float:left;
	}

	.flexslider.style2 .flex-viewport {
		margin:50px 50px 0;
	}

	.flexslider.style2 .flex-control-nav {
		right:auto;left:0;width:20%;
	}

	.slider .slider-item .item-image {
		display:none;
	}

	.slider .slider-item.style4 .item-text {
		padding:80px 48px;width:100%;
	}

	.slider .slider-item.style5 .item-image,
	.slider .slider-item.style7 .item-image,
	.slider .slider-item.style2 .item-image {
		display:block;
	}

	.slider .slider-item.style6 .item-text {
		width:100%;padding-top:80px;
	}

	.slider .slider-item.style7 .item-text,
	.slider .slider-item.style2 .item-text {
		width:52%;padding-top:20px;
	}

	.slider .slider-item.style7 .item-text .content-item .regular {
		display:none;
	}

	.slider .slider-item.style7 .item-image,
	.slider .slider-item.style2 .item-image {
		width:45%;padding-right:20px;
	}

	.slider .slider-item.style8 .item-text .header-item h2 {
		font-size:52px;
	}

	.flat-iconbox.style6 .col-md-3 .iconbox {
		padding:0 0 !important;
	}

	

	.flat-unstyled.style1 {
		height:auto;line-height:100px;
	}

	.header-middle .grid-left #logo {
		line-height:100px;float:left;
	}

	.header-bottom.style1 .grid-left {
		width:15%
	}

	.flat-slider.style1 .grid-left {
		width:0;
	}

	.header-bottom.style1 .grid-right,
	.flat-slider.style1 .grid-right {
		width:100%;margin-left:0px;
	}

	.slider .slider-item.style10 .item-image {
		display:block;
	}

	.boxed.style2 .header-bottom .container-fluid {
		padding:0 15px;
	}

	.grid-right .show-search {
		display:block;float:right;margin-top:4px;
	}

	.grid-right .top-search.style1 {
		padding:10px 0;margin-right:0px;position:absolute;top:100px;right:15px;width:100%;opacity:0;visibility:hidden;-webkit-transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;-ms-transition:all 0.3s ease-in-out;-o-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;
	}

	.header-bottom.style1 .grid-right .top-search.style1.active {
		top:64px;opacity:1;visibility:visible;
	}

	.grid-right .box-cart.style1 {
		float:right;margin-right:15px;
	}

	.grid-left .btn-menu {
		background:#333;
	}

	.owl-carousel-4 .owl-item .imagebox.style4 {
		height:340px;
	}


}

@media only screen and (min-width:768px) and (max-width:991px) {
	
	ul.flat-unstyled {
		margin-left:-30px;
	}

	ul.flat-support {
		margin-right:-35px;
	}

	.text-about {
		padding:30px 50px;
	}

	.imagebox.style1.v3 .box-image {
		width:168px;
	}

	.box-owl-carousel .rows .imagebox.style1.v1 {
		padding:0 15px;
	}

	.top-search form.form-search .cat-wrap {
		display:none;
	}

	.top-search form.form-search .box-search input {
		padding-left:15px;
	}

	.owl-carousel-3 .imagebox.style4 {
		height:310px;
	}

	.banner-box.style2 .inner-box,
	.banner-box.style2 .inner-box:nth-child(2),
	.banner-box.style2 .inner-box a img {
		width:100%;
	}

	.banner-box.style2 .inner-box:nth-child(2) {
		margin-top:20px;
	}

	.slider .slider-item.style8 .item-image {
		display:block;
	}

	.slider .slider-item.style8 .item-text {
		width:50%;padding-top:30px;
	}
	.slider .slider-item.style9 .item-text {
		padding: 25px 20px;
	}
}

@media only screen and (max-width:767px) {
	ul.flat-unstyled,
	ul.flat-support {
		text-align:center;
	}

	.header-middle #logo {
		text-align:center;line-height:60px;margin:0px;
	}


	.box-cart.style1.v1 {
		padding:10px 0 15px;float:none;text-align:center;
	}

	.box-cart.style1 {
		text-align:right;float:right;margin-right:15px;
	}

	.slider .slider-item .item-text .header-item h2 {
		font-size: 44px;
	}

	.product-box.style2.v1 {
		float:none;
	}

	.iconbox {
		margin-bottom:30px;
	}

	.text-about {
		margin-left:0px;margin-right:0px;padding:30px;
	}

	article.main-post.style4 {
		text-align:center;
	}

	.member {
		text-align:center;
	}

	.brands-list .brands-item {
		width:25%;
	}

	.progress-circle .circle-item {
		margin-right:19px;
	}

	.order-tracking {
		padding:30px 30px;
	}

	.order-tracking form .one-half {
		width:100%;padding:0px;margin-bottom:20px;
	}

	.order-tracking form .btn-track button {
		margin-top:0px;margin-left:0px;
	}

	article.main-post.style2,
	article.main-post .featured-post a img,
	.box-counter.style1 .counter,
	.box-counter.style1 .product-item {
		width:100%;
	}

	.box-counter.style1 .product-item {
		padding-left:0px;
	}

	.imagebox.style3.v1 .box-image.save span {
		left:-29px;top:-25px;
	}

	

	.sort-product.style1 {
		padding:15px 25px;
	}

	.sort-product.style1 .icons,
	.sort-product.style1 .sort {
		float:none;
	}

	.sort-product .sort > div.popularity {
		margin-left:0px;
	}

	.description-image {
		margin-top:0px;text-align:center;
	}

	.box-right .img-line {
		padding-left:0px;
	}

	.product-detail.style1 > span {
		width:0px;
	}

	.product-detail.style4 {
		padding:15px;
	}

	.counter.style1 {
		margin-left:0px;width:100%;margin-top:30px;text-align:center;
	}

	.counter.style1 .item-sale {
		margin:0px 15px 15px;
	}

	.box-owl-carousel .rows {
		margin:0 15px;
	}

	.box-owl-carousel .rows .imagebox.style1.v1 {
		width:100%;padding-bottom:20px;margin-bottom:0px;border-right:none;border-bottom:1px solid #e5e5e5;
	}

	.box-owl-carousel .rows .imagebox:nth-child(3),
	.box-owl-carousel .rows .imagebox.style1.v1:nth-child(3) {
		border-bottom:none;
	}

	.banner-box {
		display:none;
	}

	.flat-newsletter .form-newsletter .left .title {
		float:none;margin-right:0px;margin-bottom:15px;
	}

	.footer-bottom.style3 {
		text-align:center;
	}

	.footer-bottom.style3 p.copyright,
	.footer-bottom.style3 .btn-scroll {
		float:none;
	}

	.product-box.style1.v1 {
		height:250px;
	}

	.flat-imagebox.style2 .product-wrap .tab-item .row .col-md-6 .product-box {
		padding-left:0px;
	}

	.box-cart {
		text-align:center;padding:18px 0;
	}

	.box-cart .inner-box ul.menu-compare-wishlist li {
		margin-right:25px;
	}

	.table-wishlist {
		width:750px;
	}

	.table-wishlist tbody tr td > div.delete {
		margin-right:30px;
	}

	.popup-newsletter .popup-text {
		width:100%;
	}

	.popup-newsletter .popup-image {
		display:none;
	}

	.popup-newsletter .container {
		width:720px
	}

	.slider .slider-item.style5 {
		height:400px;
	}

	.slider .slider-item.style8 .item-text {
		width:100%;
	}

	.slider .slider-item:before {
		right:50px;
	}

	.slider .slider-item.style2 .item-text {
		padding:20px;
	}

	.divider90 {
		display:none;
	}

	.owl-carousel-3 .imagebox.style4 {
		height:300px;
	}

	.counter.style1.v2, .bestsellers, .featured, .hot-sale,
	.box-6.big {
		width:100%;
	}

	.product-wrap.style1 .tab-item {
		padding:0 10px;
	}

	.header-middle .grid-left,
	.header-middle .grid-right {
		width:100%;margin-left:0px;text-align:center;
	}
	.cat-title.cursor-pointer {
    font-weight: 600;
    margin-top: 10px;
    }
	.header-middle .grid-right .flat-unstyled.style1 {
		float:none;line-height:50px;
	}

	.header-middle .grid-left #logo {
		line-height:60px;
	}

	.slider .slider-item.style10 .item-text {
		width:100%;
	}

	.slider .slider-item.style10 .item-image {
		display:none;
	}

	.header-bottom.style1 .grid-right .top-search.style1.active {
		top:64px;
	}

	.box-filter .widget {
		width: 50%;
	}


}

@media only screen and (max-width:575px) {
	
	.container {
		max-width:100%;
	}

	.header-middle #logo.style1 {
		float:none;width:100%;
	}

	ul.flat-infomation.style1 {
		float:left;
	}

	ul.flat-infomation.style1 li.phone {
		height:auto;
	}

	ul.flat-infomation.style1 li img {
		display:none;
	}

	.widget-apps .widget-title h3 {
		margin-top:0px;
	}

	ul.app-list li {
		
	}

	ul.app-list li.app-store {
		margin-bottom:20px;margin-right:0px;
	}

	.brands-list .brands-item {
		width:33.333%;
	}

	.flat-tab ul.tab-list li {
		padding:14px 25px;
	}

	.progress-circle .circle-item {
		margin-right:0px;display:block;margin-bottom:30px;
	}

	.progress-circle .circle-item .demo {
		position:relative;left:50%;margin-left:-83.5px;
	}

	article.main-post.style1 .featured-post {
		float:none;margin-right:0;margin-bottom:20px;
	}

	article.main-post .featured-post a img,
	.comment-respond .form-comment form .comment-form-name,
	.comment-respond .form-comment form .comment-form-email,
	.comment-respond .form-comment form .comment-form-comment {
		width:100%;
	}

	article.main-post.single .content-post .entry-post blockquote {
		padding-left:50px;
	}

	article.main-post.single .content-post .entry-post blockquote span {
		left:3px;
	}

	.fields-content .field-row .field-one-half,
	#form-contact .form-box.one-half {
		width:100%;padding:0px !important;
	}

	.table-cart table {
		width:650px;overflow:hidden;
	}

	.table-cart tr td .quanlity span.btn-up {
		right:20px;
	}

	.table-cart tr td .img-product {
		margin-right:15px;
	}

	.flat-location .location,
	.flat-location .location-detail,
	.flat-location #flat-map-2 {
		width:100%;
	}

	.product-box.style3 {
		min-height:580px;height:auto;
	}

	.imagebox.style1.v3 {
		text-align:center;min-height:600px;height:auto;
	}

	.imagebox.style1.v3 .box-image,
	.imagebox.style1.v3 .box-content,
	.imagebox.style1.v3 .box-price {
		width:100%;padding:0px;text-align:center;
	}

	.imagebox.style1.v3 .box-price .btn-add-cart a {
		display:inline-block;padding:0 40px;
	}

	.flex-control-thumbs {
		margin-top:30px;
	}

	.product-detail-bar li {
		padding:12px 12px;font-size:16px;
	}

	.product-detail-bar.style1 li {
		padding:12px;
	}

	body.background section.flat-row .container {
		padding:10px 15px 0;
	}

	.box-owl-carousel.style1 .imagebox.style7 {
		width:100%;border-right:none;
	}

	.popup-newsletter .container {
		width:480px
	}

	.flexslider.style2 .flex-viewport {
		margin:0 0 30px;
	}

	.flexslider.style2 .flex-control-nav {
		width:100%;position:relative;margin-top:0px;
	}

	.flexslider.style2 .flex-control-thumbs li {
		float:left;margin-bottom:10px;
	}

	.slider .slider-item.style6 .item-text {
		padding-top:30px;
	}

	.slider .slider-item.style7 .item-text,
	.slider .slider-item.style2 .item-text,
	.box-6 {
		width:100%;
	}

	.slider .slider-item.style7 .item-image,
	.slider .slider-item.style2 .item-image {
		display:none;
	}

	.slider .slider-item.style2 .item-text {
		padding:20px 20px;
	}

	.slider .slider-item.style4 .item-text .header-item h2 {
		font-size:50px;
	}

	.boxed.style1 .flat-row.flat-highlights {
		padding-top:30px;
	}

	.box-6.big .imagebox .box-bottom .btn-add-cart a {
		padding:0 35px;
	}

	.boxed.style2 .footer .container-fluid {
		padding:0 15px;
	}

	.imagebox.style3 .box-bottom .btn-add-cart a {
		padding:0 35px;
		width: 100%;
		margin-left: 0px;
	}

	.imagebox.style3 .box-bottom .compare-wishlist{
		text-align: center;
	}

	.imagebox.style3 .box-bottom .compare-wishlist a.compare{
		margin-left: 0px;
	}

	.box-filter .widget {
		width: 100%;
	}


	.slider .slider-item .item-text .header-item h2{font-size: 40px;}

}

@media only screen and (min-width:480px) and (max-width:767px) {
	
	.banner-box .inner-box a {
		margin-top:30px;text-align:center;
	}

	.slider .slider-item.style5 .item-image {
		width:43%;padding-right:30px;
	}


}

@media only screen and (min-width:480px) {
	
}

@media only screen and (max-width:480px) {
	
	.flat-breadcrumb ul.breadcrumbs li.trail-item a {
		margin-right:10px;
	}

	.wrap-error .content-error .form-search-error {
		padding:30px 30px;
	}

	.wrap-error .content-error .form-search-error form .search-input input {
		width:100%;margin-right:0px;display:block;margin-bottom:15px;
	}

	.brands-list .brands-item {
		width:50%;
	}

	.progres .progress-item .perc span {
		top:17px;
	}

	.btn-radio.style2 .radio-info label {
		width:180px;
	}

	.accordion-toggle .toggle-title:before {
		right:19.5px;
	}

	.accordion-toggle .toggle-title:after {
		right:12.5px;
	}

	.tabs ul.menu-tab {
		margin-bottom:20px;
	}

	.tabs ul.menu-tab li {
		margin-right:15px;font-size:16px;
	}

	ol.comment-list li.comment .comment-text .comment-metadata .name {
		float:none;
	}

	ol.comment-list li.comment .comment-text .comment-metadata .queue {
		text-align:left;line-height:24px;
	}

	

	.btn-order {
		padding:0px;
	}

	.form-coupon {
		padding:30px 15px;
	}

	.form-coupon form input {
		width:100%;margin-bottom:20px;margin-right:0px;
	}

	.sort-product .icons,
	.sort-product .sort,
	.wrap-imagebox .flat-row-title span {
		float:none;
	}

	.sort-product .sort > div {
		margin-left:0px;margin-bottom:15px;display:block;
	}

	.sort-product .sort > div select {
		width:100% !important;
	}

	.main-shop .wrap-imagebox .flat-row-title h3 {
		display:block;float:none;padding:0px 0 10px;
	}

	.owl-carousel-4.owl-theme .owl-controls .owl-nav div.owl-prev,
	.owl-carousel-4.owl-theme .owl-controls .owl-nav div.owl-next {
		border-radius:50%;border:1px solid #e5e5e5;left:-15px;width:45px;height:45px;line-height:42px;background-color:#fff;
	}

	.owl-carousel-4.owl-theme .owl-controls .owl-nav div.owl-next {
		right:-15px;left:auto;
	}

	.product-detail {
		padding:20px;
	}

	.rating .queue-box li span,
	.rating .score .queue {
		display:block;
	}

	.rating .queue-box li span.numb-star,
	.rating .score .queue {
		margin-left:0px;
	}

	.rating .score .queue {
		margin-top:20px;
	}

	.product-tab ul.tab-list li,
	.product-tab ul.tab-list li.active {
		margin-right:18px;font-weight:300;font-size:16px;
	}

	.product-tab ul.tab-list li {
		margin-right:15px;
	}

	.product-tab ul.tab-list li:hover {
		font-weight:400;
	}

	.banner-box {
		margin-bottom:20px;
	}

	.banner-box.one-half .inner-box {
		width:100%;margin-bottom:20px;
	}

	.banner-box.one-half {
		margin-bottom:0px;
	}

	.banner-box .inner-box a img,
	.banner-box.style2 .inner-box:nth-child(2) {
		width:100%;
	}

	.imagebox.style3 .box-content,
	.imagebox.style3 .box-bottom {
		text-align:left;
	}

	.flat-newsletter .form-newsletter .left form {
		display:block;
	}

	.flat-newsletter .form-newsletter .left form input {
		width:100%;
	}

	.flat-imagebox.style2 .product-wrap .tab-item .row .col-md-6 .product-box .imagebox .box-bottom .btn-add-cart a {
		padding:0 30px;
	}

	

	.box-cart .inner-box .dropdown-box {
		right:-57px;width:310px;padding:25px 15px;
	}

	.box-cart .inner-box .dropdown-box:before {
		right:73px;
	}

	.popup-newsletter .container {
		width:320px
	}

	.popup-newsletter .popup-text h2 {
		font-size:20px;
	}

	.popup-newsletter .popup-text p.subscribe {
		margin:15px 0 15px;
	}

	.popup-newsletter .popup-text .form-popup .checkbox {
		margin-top:0px;
	}

	.slider .slider-item.style4 .item-text {
		padding:15px 10px;
	}

	.slider .slider-item.style8 .item-text {
		padding:25px;
	}

	.owl-carousel-3 .imagebox.style4 {
		height:310px;
	}

	.slider .slider-item.style10 .item-text .header-item h2 {
		font-size:50px;
	}

	.header-bottom.style1 .grid-right .top-search.style1 {
		width:91%;
	}

	.owl-carousel-4 .imagebox.style4 {
		text-align:center;
	}

	.slider .slider-item .item-text {
		width:100%;padding:30px !important;
	}

	.owl-carousel-item .product-box.style1:last-child {
		margin-bottom:80px;
	}

	.slider .slider-item.style7 .item-text .header-item h2 {
		margin-top:0px;margin-bottom:0px;
	}

	.box-cart.style1.v1 .inner-box .dropdown-box {
		right:-80px;
	}

	.box-cart.style1.v1 .inner-box .dropdown-box:before {
		right:95px;
	}

	.slider .slider-item.style8 .item-text .header-item h2 {
		line-height:42px;
	}

	.flat-breadcrumb ul.breadcrumbs li.trail-item {
		margin-right:6px;
	}

	.slider .slider-item:before,
	.slider .slider-item.style1:before {
		right: 20px;
	}

}

@media (max-width:320px) {
	
}
.banner-container {
    width: auto;
    height: 430px;
    overflow: hidden;
}

.banner-image {
  width: 100%;
  height: auto; /* Maintains the aspect ratio of the image */
  display: block; /* Removes any extra space below the image */
}
.one-third {
    width: 33.3%;
    float: left;
    padding-left: 42px;
    padding-right: 15px;
}
.arrange {
    display: flex;
}
.cat-title {
    margin-bottom: 8px;
}
.textt {
    margin-right: 10px;
}
</style>
