<template>
  <header class="th-header header-layout3">
    <div class="menu-top">
      <div class="containerr">
        <div class="row align-items-center justify-content-between">
          <div class="col-2">
            <div class="header-logoo">
              <a href="#"
                ><img
                  src="/assets/img/okshop.jpg"
                  alt="OK shop easy"
                  style="height: auto;width:200px;"
              /></a>
            </div>
          </div>
          <div class="col-8 d-none d-lg-block">
           
            <InputGroup class="w-full">
                        <IconField class="w-full" iconPosition="left">
                        <InputText  class="searchinput p-inputtext p-component surface-section text-600 surface-border w-full"  placeholder="What are you looking for..."/>
                        <!-- <input @keydown="isKeyDown = true" @keyup="searchProducts()"  v-model="search_text" class="searchinput p-inputtext p-component surface-section text-600 surface-border w-full" data-pc-name="inputtext" data-pc-section="root" type="text" placeholder="Search Product | Category | Brand"> -->
                    </IconField>
                    <Button style="border-radius:0px 30px 30px 0px"   icon="pi pi-search seachbutton" severity="warning" />
                </InputGroup>
       
          </div>
          <div class="col-2">
            <div class="header-icons">
              <Button type="button" label="My Account" icon="pi pi-user" class="my-account" />
              <!-- <a href="wishlist.html" class="icon-btn d-none d-sm-block">
                <span class="badge">3</span>
                <i class="far fa-heart"></i>
              </a>
              <button type="button" class="icon-btn sideMenuToggler">
                <span class="badge">5</span>
                <i class="far fa-cart-shopping"></i>
              </button> -->
              <!-- <button
                type="button"
                class="icon-btn sideMenuInfo d-none d-lg-block"
              >
                <i class="fal fa-grid"></i>
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-top">
      <div class="">
        <div class="row align-items-center justify-content-between">
        
          <!-- <div class="col-4 d-none d-lg-block">
            <form class="header-search">
              <input type="text" placeholder="Enter Keyword" />
              <button type="submit"><i class="far fa-search"></i></button>
            </form>
          </div> -->
          <div class="col-3">

          </div>
          <div class="col-3">
            <div v-if="loading" class="grid grid-nogutter align-items-center">
              <div
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                  <Skeleton class="h-3rem" />
              </div>
              <div
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                  <Skeleton class="h-3rem" />
              </div>
              <div
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                  <Skeleton class="h-3rem" />
              </div>
              <div
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                  <Skeleton class="h-3rem" />
              </div>
            </div>
            <div v-else class="grid grid-nogutter align-items-center">
              <div v-for="brand in brands" :key="brand.id" 
                  class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                  @click="selectShop(brand?.id,brand?.logo,brand?.name)">
                  <img :src="brand.logo" :alt="brand.name" class="h-3rem">
              </div>
            </div>
</div>
        </div>
      </div>
    </div>
    <div class="sticky-wrapper">
      <!-- Main Menu Area -->
      <div class="menu-area">
        <div class="">
          <div class="row align-items-center justify-content-between">
            <div class="col-3 d-none d-xl-block">
              <div class="category-menu-wrap">
                <a class="menu-expand" href="#"
                  ><i class="far fa-bars"></i>Shop by Isle</a
                >
                <!-- <nav class="category-menu">
                  <ul>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/img/icon/category_1_1.svg"
                          alt="Icon"
                        />Fresh Vegetables</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/img/icon/category_1_2.svg"
                          alt="Icon"
                        />Grocery & Frozen</a
                      >
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#"
                        ><img
                          src="/assets/img/icon/category_1_3.svg"
                          alt="Icon"
                        />Fresh Fruits</a
                      >
                      <ul class="sub-menu">
                        <li>
                          <a href="#"
                            ><img
                              src="/assets/img/icon/category_1_4.svg"
                              alt="Icon"
                            />Salad</a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><img
                              src="/assets/img/icon/category_1_5.svg"
                              alt="Icon"
                            />Butter & Egg</a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><img
                              src="/assets/img/icon/category_1_6.svg"
                              alt="Icon"
                            />Milk Cream</a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><img
                              src="/assets/img/icon/category_1_7.svg"
                              alt="Icon"
                            />Fresh Meat</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/img/icon/category_1_4.svg"
                          alt="Icon"
                        />Salad</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/img/icon/category_1_6.svg"
                          alt="Icon"
                        />Milk Cream</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/img/icon/category_1_7.svg"
                          alt="Icon"
                        />Fresh Meat</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/img/icon/category_1_8.svg"
                          alt="Icon"
                        />Fresh Fish</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/img/icon/category_1_10.svg"
                          alt="Icon"
                        />Bread & Bakery</a
                      >
                    </li>
                  </ul>
                </nav> -->
              </div>
            </div>
            <div class="col-auto">
              <!-- <nav class="main-menu menu-style1 d-none d-lg-inline-block">
                <ul>
                  <li class="menu-item-has-children">
                    <a href="home-organic-farm.html">Home</a>
                    <ul class="sub-menu">
                      <li><a href="home-organic-farm.html">Organic Farm</a></li>
                      <li><a href="home-organic-food.html">Organic Food</a></li>
                      <li><a href="home-mega-#">Mega Shop</a></li>
                      <li>
                        <a href="home-organic-farming.html">Organic Farming</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="about.html">About Us</a></li>
                  <li class="menu-item-has-children">
                    <a href="#">Service</a>
                    <ul class="sub-menu">
                      <li><a href="service.html">Service</a></li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul class="sub-menu">
                      <li class="menu-item-has-children">
                        <a href="#">Shop</a>
                        <ul class="sub-menu">
                          <li><a href="#">Shop</a></li>
                          <li><a href="shop-details.html">Shop Details</a></li>
                          <li><a href="cart.html">Cart Page</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="wishlist.html">Wishlist</a></li>
                        </ul>
                      </li>
                      <li><a href="team.html">Team</a></li>
                      <li><a href="team-details.html">Team Details</a></li>
                      <li><a href="project.html">Project Gallery</a></li>
                      <li>
                        <a href="project-details.html">Project Details</a>
                      </li>
                      <li><a href="faq.html">Faq Page</a></li>
                      <li><a href="error.html">Error Page</a></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav> -->
            
            </div>
            <!-- <div class="col-auto">
              <div class="call-btn">
                <div class="box-icon">
                  <i class="far fa-headphones"></i>
                </div>
                <div class="media-body">
                  <p class="box-subtitle">Call Us 24/7</p>
                  <h3 class="box-title">
                    <a href="tel:+1632543654">(+163)-254-3654</a>
                  </h3>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <Dialog v-model:visible="select_shop" modal header="Edit Profile" :style="{ width: '25rem' }">
    <template #header>
        <div class="inline-flex align-items-center justify-content-center gap-2">
            <Avatar :image="shopLogo" shape="circle" />
            <span class="font-bold white-space-nowrap">Welcome to {{shopName}}</span>
        </div>
    </template>
    <span class="p-text-secondary block mb-5">Select Branch.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <Dropdown v-model="shopBranch" :options="branches" filter optionLabel="name" optionValue="id" placeholder="Select a Store" checkmark :highlightOnSelect="false" class="w-full" />
    </div>
    <template #footer>
        <Button :loading="loading" label="Continue Shopping" outlined severity="secondary" :disabled="!shopBranch" @click="goToShop()" autofocus />
    </template>
</Dialog>
</template>

<script setup lang="ts">
const shop_d = ref("okmart")
const frontStore = useFrontStore()
const brands:any = storeToRefs(frontStore).brands
const select_shop = ref(false)
const loading = ref(true)
const shopBranch = ref()
const branches = ref()
const shopID = ref()
const featured = ref()
const shopLogo = ref()
const featuredProductsByBrand:any = storeToRefs(frontStore).brand_featured_products
const shopName = ref()
const selectShop = async (shopIDD:any,logo:any,name:any) => {
  select_shop.value = true
  shopID.value = shopIDD
  shopLogo.value = logo
  await getShopsForBrand(shopIDD)
  shopName.value = name
}
const getShopsForBrand = (brandId:any) => {
  branches.value = null
  //@ts-ignore
  let branchess = brands.value.find(brand => brand.id === brandId);
  branches.value = branchess?.shops
}
const goToShop = () => {
     loading.value = true
     navigateTo(`/shop-${shopID.value}-${shopBranch.value}`)
     loading.value = false
}
onMounted(async() => {
  let result_one = await frontStore.getBrands().then( async(data) => {
    console.log("djkds",data?.data?.shopbrands)
    brands.value = data?.data?.shopbrands
    await getAllBrandsFeaturedProducts()
    loading.value = false
  })
})

const getAllBrandsFeaturedProducts = async () => {
  const brandss:any = brands.value

  // Create an object to store the featured products for each brand


  // Loop through each brand and get featured products
  for (const brand of brands.value) {
    let products = await getFeaturedProducts(brand.id);
    featuredProductsByBrand.value[brand.name] = products; // Store the products in the object
  }

  // Now you have an object containing featured products for each brand
  console.log(featuredProductsByBrand.value);
};

const getFeaturedProducts = async (brand_id:any) => {
  let params = {
        page: 1,
        per_page: 10,
        id: brand_id,
        is_shop_brand: true
    }
    let productsd =  await frontStore.getFeaturedProducts(params).then((data) => {
      featured.value = {}
      featured.value = data?.data?.products
    })
    return featured.value
}
</script>



<style scoped>
.header-layout3 .header-top {
    --body-color: #54595f;
    background-color: #e48b4b !important;
    border-bottom: 1px solid var(--th-border-color);
}
.header-links li, .header-links span, .header-links p, .header-links a {
    color: #ffffff !important;
}
.header-layout3 .menu-area {
    position: relative;
    z-index: 2;
    background-color: #ffffff !important;
}
.menu-top {
    border-bottom: 1px solid #d8caca;
}
input.p-inputtext.p-component.searchinput.p-inputtext.p-component.surface-section.text-600.surface-border.w-full {
    border-radius: 30px 0px 0px 30px;
}
.menu-expand {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    margin-left: 31px;
    border-radius: 69px;
    text-transform: uppercase;
    color: var(--white-color);
    background-color: #f7941f;
    padding: 8px 40px;
    width: 63%;
}
img.h-3rem {
    border-radius: 32px;
}
button.p-button.p-component.my-account {
    background-color: white;
    color: black;
    border-radius: 30px;
    border-color: #d0d0d0;
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css");
</style>
