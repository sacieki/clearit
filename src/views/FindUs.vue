<script setup>
  import FindUs from '../components/FindUs.vue'
  import ShortContact from '../components/ShortContact.vue'
  import Navigator_desktop from '../components/Navigator_desktop.vue'
</script>
<template>
   <main class="home-page">
    <ShortContact />
    
    <div style="padding-top: clamp(30px, 4.5vw, 60px);">
      <Navigator_desktop  />
    </div>

    <section class="">
        <div class="  ">
          <FindUs />
        </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'FindUs'
}
</script>

<style scoped>
  @import '../css/defaultStyle.css';
</style>
