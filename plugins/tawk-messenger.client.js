export default defineNuxtPlugin(() => {
    if (process.client) {
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function() {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/65d6f4de8d261e1b5f63986c/1ic5vbd7r";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    }
  });
  