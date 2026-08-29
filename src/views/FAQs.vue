<template>

  <main class="default-page">

    <ShortContact />
    
    <div style="padding-top: clamp(30px, 4.5vw, 60px);">
      <Navigator_desktop  />
    </div>

    <section class="default-section Hero">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius ba-Hero-content ">
          <div class=" default-media">
            <video
              class="hero-video"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
            >
              <source src="/media/envato_video_gen_Mar_20_2026_3_28_01.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>

    <FaqAccordion />
    <BeforeAfterModule />
    <FindUs />
  </main>
</template>

<script>
export default {
  name: 'FrequentlyAskedQuestions',
  components: {
    FaqAccordion,
    FindUs,
    BeforeAfterModule,
    ShortContact,
    Navigator_desktop
  },

}

import FaqAccordion from "@/components/FAQs.vue"
import FindUs from "@/components/FindUs.vue"

import BeforeAfterModule from '@/components/BeforeAfterModule.vue'
import ShortContact from '@/components/ShortContact.vue'
import Navigator_desktop from '@/components/Navigator_desktop.vue'



</script>

<style scoped>
.brand-overview {
  padding: 200px 40px;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

p {
  font-size: 20px;
}
</style>