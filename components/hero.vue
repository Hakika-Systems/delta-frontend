<template>
  
  <div v-if="!banners && !loading" class="th-hero-wrapper hero-3" id="hero" style="background-image: url(&quot;/images/se1.jpg&quot;);background-size: contain;">
  </div>
  <div v-else class="hero heroheight">
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperNavigation,SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :navigation="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
  <SwiperSlide v-for="(image, index) in banners" :key="index">
      <img :src="image?.file" />
    </SwiperSlide>
  </Swiper>
</div>
</template>
<script lang="ts" setup>
const frontStore = useFrontStore()
const loading = ref(false)
const banners = ref()
onMounted(async() => {
loading.value = true;
let params = {
  slug: "Home"
}
let home_banners = await frontStore.getBanners(params).then((data) => {
  banners.value = data?.data
  loading.value = false;
})
})
const getParsedImages = (images: string) => {
  try {
    const parsedImages = JSON.parse(images);
    
    // Check if parsedImages is not null or undefined before calling replace
    if (parsedImages) {
      const cleanedString = JSON.parse(parsedImages.replace(/\\/g, ''));
      return cleanedString;
    }
  } catch (error) {
    console.error('Error parsing images JSON:', error);
  }

  return '/images/placeholder.png'; // Return null if parsing fails or if parsedImages is null
};
</script>
<style>
.th-hero-wrapper {
    position: relative;
    z-index: 2;
    width: 1920px !important;
    height: 480px !important;
    overflow: hidden;
}
</style>
<style>

.swiper-button-prev, .swiper-button-next {
  color:#231f20
}
.swiper-button-prev:after, .swiper-button-next:after {
    font-family: swiper-icons;
    font-size: 20px !important;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
}
.hero {
  /* height: 600px; */
  overflow: hidden;
}

.hero .swiper-container {
  height: 100%;
}

.hero .swiper-slide img {
  width: 100%;
  height: auto;
}
span.tagline {
    background-color: #0052ff;
    padding: 10px;
    color: white;
    font-size: 15px;
    border-radius: 21px;
    width: 250px;
}
.border-1 {
  border-style: none !important;
}
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: #d41f0c !important;
}
/* .hero {
    display: flex;
    height: 100vh;
    background-color: #121c2d;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
} */

.hero-left {
  flex: 1;
  padding: 0px 0px 60px 0; /* Remove padding on the left */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
}

.TagLine {
    font-size: 3em;
    margin-bottom: 15px;
    color: white;
}

.Heading-tag {
  color: #fd8d14;
}


.Hero-button:hover {
    background-color: #f2f3f7;
    border: 1px solid #231f20;
    color: #313131;
}
.avatar-section {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.avatar-group {
  display: flex;
  gap: -20px;
}

.avatar-group img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: transform 0.3s;
  margin-left: -5px;
}




/* Responsive styles for smaller devices */
@media only screen and (max-width: 768px) {
  .hero {
    flex-direction: column;
  }

  .hero-left {
    margin-top: 5rem;
    text-align: center;
     margin-left: 0px;
  }

  
  .avatar-section {
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .avatar-text {
    text-align: center;
  }
  
  .avatar-num{
 color: #fd8d14;
   font-size: 1em;
  font-weight:bold;
    
}

}
</style>