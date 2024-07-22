<template>
  <OkMartShopHeader />
  <div class="layout-content">
    <div>
      <div class="block-category-title">Order Summary</div>
      <div class="block-header">
        <span class="block-title">
          <span>My Order</span>
          <!---->
          <!---->
        </span>
      </div>
      <div class="block-section">
        <div class="block-content">
          <div class="">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
              <span class="text-700 text-xl">Thanks!</span>
              <div class="text-900 font-bold text-4xl my-2">Successful Order 🚀</div>
              <p class="text-700 text-xl mt-0 mb-4 p-0">Your order is on the way. It'll be delivered today. We'll inform you.</p>
              <div style="height: 3px; background: linear-gradient(90deg, rgb(33, 150, 243) 0%, rgba(33, 150, 243, 0) 50%);"></div>
              <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-5">
                <div class="mb-3 sm:mb-0">
                  <span class="font-medium text-xl text-900 mr-2">Order number:</span>
                  <span class="font-medium text-xl text-blue-500">451234</span>
                </div>
                <div>
                  <button class="p-button p-component p-button-outlined p-button-secondary mr-2" type="button" aria-label="Details" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                    <span class="p-button-icon p-button-icon-left pi pi-list" data-pc-section="icon"></span>
                    <span class="p-button-label" data-pc-section="label">Details</span>
                    <!---->
                    <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                  </button>
                  <button class="p-button p-component p-button-outlined p-button-secondary" type="button" aria-label="Print" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                    <span class="p-button-icon p-button-icon-left pi pi-print" data-pc-section="icon"></span>
                    <span class="p-button-label" data-pc-section="label">Print</span>
                    <!---->
                    <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                  </button>
                </div>
              </div>
              <div class="border-round surface-border border-1">
                <ul class="list-none p-0 m-0">
                  <li class="p-3 border-bottom-1 surface-border flex align-items-start sm:align-items-center">
                    <img src="/images/products/jacobs_coffee.jpg" class="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2">
                    <div class="flex flex-column">
                      <span class="text-900 font-medium text-xl mb-2">Product Name</span>
                      <span class="text-600 mb-3">Blue | Medium</span>
                      <span class="text-900 font-medium">Quantity 1</span>
                    </div>
                    <span class="text-900 font-medium text-lg ml-auto">$12.00</span>
                  </li>
                  <li class="p-3 flex align-items-center">
                    <img src="/images/products/mazoe.jpg" class="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2">
                    <div class="flex flex-column">
                      <span class="text-900 font-medium text-xl mb-2">Product Name</span>
                      <span class="text-600 mb-3">Yellow | Large</span>
                      <span class="text-900 font-medium">Quantity 1</span>
                    </div>
                    <span class="text-900 font-medium text-lg ml-auto">$24.00</span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-wrap mt-5 pb-3">
                <div class="w-full lg:w-6 pl-3">
                  <span class="font-medium text-900">Delivery Address</span>
                  <div class="flex flex-column text-900 mt-3 mb-5">
                    <span class="mb-1">37 Binton Rd</span>
                    <span class="mb-1">Greystone Park P O, Harare Zimbabwe</span>
                    <span>(786) 713-8616</span>
                  </div>
                  <span class="font-medium text-900">Payment</span>
                  <div class="flex align-items-center mt-3">
                    <img src="/images/paynow.png" class="w-4rem mr-3">
                    <div class="flex flex-column">
                      <span class="text-900 mb-1">Visa Debit Card</span>
                      <span class="text-900 font-medium">**** **** **** 1234</span>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
                  <ul class="list-none p-0 m-0 w-full">
                    <li class="mb-3">
                      <span class="font-medium text-900">Summary</span>
                    </li>
                    <li class="flex justify-content-between mb-3">
                      <span class="text-900">Subtotal</span>
                      <span class="text-900 font-medium text-lg">$36.00</span>
                    </li>
                    <li class="flex justify-content-between mb-3">
                      <span class="text-900">Delivery</span>
                      <span class="text-900 font-medium text-lg">$5.00</span>
                    </li>
                    <li class="flex justify-content-between mb-3">
                      <span class="text-900">VAT</span>
                      <span class="text-900 font-medium text-lg">$4.00</span>
                    </li>
                    <li class="flex justify-content-between border-top-1 surface-border py-3">
                      <span class="text-900 font-medium">Total</span>
                      <span class="text-900 font-bold text-lg">$41.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>