<script setup>
  import BeforeAfterModule from '../components/BeforeAfterModule.vue'
  import FindUs from '../components/FindUs.vue'
  import FAQ from '../components/FAQs.vue'
  import BookANAppointment from '../components/BookANAppointment.vue'
</script>
<template>
   <main class="home-page">
    <section class="default-section TheCLEARiTDifference">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius pj-TheCLEARiTDifference-content ">
          <div class="pj-TheCLEARiTDifference-Topics mx-auto">
          </div>
        </div>
      </div>
    </section>

    <BeforeAfterModule/>
    <FindUs />
    <FAQ />
    <BookANAppointment />

  </main>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style scoped>
  @import '../css/defaultStyle.css';
</style>
