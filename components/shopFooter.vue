<template>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid pb-6 border-bottom-1 border-300">
      <div class="col-12 md:col-3">
        <div class="text-900 font-bold line-height-3 mb-3">Company</div>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">About Us</a>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">News</a>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">Investor Relations</a>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">Careers</a>
        <a class="text-700 block cursor-pointer line-height-3">Media Kit</a>
      </div>
      <div class="col-12 md:col-3">
        <div class="text-900 font-bold line-height-3 mb-3">Resourses</div>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">Get Started</a>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">Learn</a>
        <a class="text-700 block cursor-pointer line-height-3">Case Studies</a>
      </div>
      <div class="col-12 md:col-3">
        <div class="text-900 font-bold line-height-3 mb-3">Community</div>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">Discord</a>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">Events</a>
        <a class="text-700 block cursor-pointer line-height-3 mb-2">FAQ</a>
        <a class="text-700 block cursor-pointer line-height-3">Blog</a>
      </div>
      <div class="col-12 md:col-3">
        <div class="text-700 line-height-3 mb-3">Join our community to get weekly updates and unique gifts every friday.</div>
        <input class="p-inputtext p-component border-round border-400 p-3 mb-3 w-full" data-pc-name="inputtext" data-pc-section="root" placeholder="Enter your email">
        <button class="p-button p-component px-5 py-3" type="button" aria-label="Join" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <!---->
          <span class="p-button-label" data-pc-section="label">Join</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
    <div class="flex flex-wrap align-items-center justify-content-between mt-6">
      <div class="flex align-items-center justify-content-start md:mb-0 mb-3">
        <NuxtImg src="/assets/img/okshop.jpg" alt="Image" loading="lazy" format="webp" style="height: auto;width:200px;" />
      </div>
      <div class="flex align-items-center justify-content-between md:mb-0 mb-3">
        <a class="text-700 cursor-pointer md:ml-5 ml-2">Brand Policy</a>
        <a class="text-700 cursor-pointer md:ml-5 ml-2">Privacy Policy</a>
        <a class="text-700 cursor-pointer md:ml-5 ml-2">Terms of Service</a>
      </div>
      <div class="flex align-items-center justify-content-between">
        <a class="cursor-pointer text-500 md:ml-3 ml-2">
          <i class="pi pi-twitter text-xl"></i>
        </a>
        <a class="cursor-pointer text-500 md:ml-3 ml-2">
          <i class="pi pi-facebook text-xl"></i>
        </a>
        <a class="cursor-pointer text-500 md:ml-3 ml-2">
          <i class="pi pi-github text-xl"></i>
        </a>
      </div>
    </div>
  </div>
</template>
