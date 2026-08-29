<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
      <ScrollToTop />
    </main>
    <SiteFooter />
  </div>
</template>


<script>

import Header from "./components/Header.vue";
import SiteFooter from '@/components/Footer.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
export default {
  name: "App",
  components: {
    Header,
    ScrollToTop,
    SiteFooter
  }
};

</script>