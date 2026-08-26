<script setup>
  import BeforeAfterModule from '../components/BeforeAfterModule.vue'
  import FindUs from '../components/FindUs.vue'
  import FAQ from '../components/FAQs.vue'
  import BookANAppointment from '../components/BookANAppointment.vue'
</script>
<template>
   <main class="home-page">

    <section class="default-section TheCLEARiTDifference">
      <div class="default-container">
        <div
              v-for="(image, index) in galleryImages"
              :key="image"
              class="ba-gallery-content"
            >
              <img
                :src="image"
                :alt="`beforeafter-${index + 1}`"
                loading="lazy"
                decoding="async"
              />
            </div>


            
      </div>
    </section>


    <BeforeAfterModule />

    <FindUs />

    <FAQ />

    <BookANAppointment />

  </main>
</template>

<script>
export default {
  name: 'WelcomebookWelcomebook',

  data() {
    return {
      isModalOpen: false,
      currentImage: 0,
      galleryImages : [
        "/media/welcomebook/gallery-welcome-p1.png",
        "/media/welcomebook/gallery-welcome-p2.png",
        "/media/welcomebook/gallery-welcome-p3.png",
        "/media/welcomebook/gallery-welcome-p4.png",
        "/media/welcomebook/gallery-welcome-p5.png",
        "/media/welcomebook/gallery-welcome-p6.png"
      ]
    }
  }
}
</script>

<style scoped>
  @import '../css/defaultStyle.css';
</style>





