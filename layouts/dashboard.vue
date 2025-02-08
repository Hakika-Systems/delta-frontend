<template>
  <main>
    <!-- Import all the site's css files -->
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/assets/img/favicons/apple-icon-57x57.png"
      loading="lazy"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/assets/img/favicons/apple-icon-60x60.png"
      loading="lazy"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/assets/img/favicons/apple-icon-72x72.png"
      loading="lazy"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/assets/img/favicons/apple-icon-76x76.png"
      loading="lazy"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/assets/img/favicons/apple-icon-114x114.png"
      loading="lazy"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/assets/img/favicons/apple-icon-120x120.png"
      loading="lazy"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/assets/img/favicons/apple-icon-144x144.png"
      loading="lazy"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/assets/img/favicons/apple-icon-152x152.png"
      loading="lazy"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/assets/img/favicons/apple-icon-180x180.png"
      loading="lazy"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/assets/img/favicons/android-icon-192x192.png"
      loading="lazy"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/assets/img/favicons/favicon-32x32.png"
      loading="lazy"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/assets/img/favicons/favicon-96x96.png"
      loading="lazy"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/assets/img/favicons/favicon-16x16.png"
      loading="lazy"
    />
    <link rel="manifest" href="/assets/img/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="/assets/img/favicons/ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#ffffff" />

    <!--==============================
	  Google Fonts
	============================== -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Akshar:wght@300..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Shadows+Into+Light+Two&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/primeblocks.css" />
    <!-- Fontawesome Icon -->
    <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
    <!-- Magnific Popup -->
    <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
    <!-- Swiper Js -->
    <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
    <!-- Theme Custom CSS -->
    <link rel="stylesheet" href="/assets/css/style.css" />

    <!-- ========== header start ========== -->
    <DeltaHeader />
    <!-- ========== header end ========== -->

    <!-- ========== section start ========== -->
    <Hero />
    <slot />
    <DeltaFooter />
    <!-- ========== footer end =========== -->
  </main>
</template>

<script>
export default defineNuxtComponent({
  head() {
    return {
     
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [
        { src: "/assets/js/vendor/jquery-3.6.0.min.js", defer: true },
        { src: "/assets/js/swiper-bundle.min.js", defer: true },
        { src: "/assets/js/bootstrap.min.js", defer: true },
        { src: "/assets/js/jquery.magnific-popup.min.js", async: true },
        { src: "/assets/js/jquery.counterup.min.js", async: true },
        { src: "/assets/js/jquery-ui.min.js", async: true },
        { src: "/assets/js/imagesloaded.pkgd.min.js", async: true },
        { src: "/assets/js/isotope.pkgd.min.js", async: true },
        { src: "/assets/js/main.js", defer: true },
      ],
    };
  },
});
</script>
