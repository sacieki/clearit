<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>


<script>
import Header from "./components/Header.vue";
import SiteFooter from '@/components/Footer.vue'
export default {
  name: "App",
  components: {
    Header,
    SiteFooter
  }
};

</script>