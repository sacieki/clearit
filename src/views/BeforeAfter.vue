<script setup>
  import FindUs from '../components/FindUs.vue'
  import FAQ from '../components/FAQs.vue'
  import ShortContact from '../components/ShortContact.vue'
  import Navigator_desktop from '../components/Navigator_desktop.vue'
</script>
<template>
   <main class="home-page">

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

    <div class="ba-BeforeAfter-Topics mx-auto">
        <p class="ba-BeforeAfter-p1 mx-auto">BEFORE & AFTER</p>

        <div class="blue-line" style="margin-top: clamp(20px, 3vw, 40px);"></div>
    </div>

    <section class="default-section BeforeAfter">
        <div class="default-container  ">
            <div class="default-content-width default-content-border-radius ba-BeforeAfter-content ">

                <div class="ba-BeforeAfter-content-gallery">
                    <div
                        v-for="(item, index) in galleryItems"
                        :key="item.image"
                        class="ba-gallery-item"
                        @click="openModal(index)"
                    >
                        <img
                        :src="item.image"
                        :alt="`beforeafter-${index + 1}`"
                        loading="lazy"
                        decoding="async"
                        />
                    </div>
                </div>

            </div>
        </div>
    </section>


    <div
        v-if="isModalOpen"
        class="ba-gallery-modal"
        @click.self="closeModal"
        >
        
        <button
            class="ba-gallery-modal__close"
            @click="closeModal"
            aria-label="Close"
        >
            ×
        </button>
        <!--
        <button
            class="ba-gallery-modal__prev"
            @click.stop="prevImage"
            aria-label="Previous"
        >
            ‹
        </button>
        -->
        <video
            :key="galleryItems[currentImage].video"
            class="ba-gallery-modal__video"
            :src="galleryItems[currentImage].video"
            autoplay
            muted
            loop
            playsinline
            controls
        ></video>
        <!--
        <button
            class="ba-gallery-modal__next"
            @click.stop="nextImage"
            aria-label="Next"
        >
            ›
        </button>
        -->
        
    </div>



    <FindUs />
    <FAQ />

  </main>
</template>

<script>
export default {
  name: 'BeforeAfter',

  data() {
    return {
      isModalOpen: false,
      currentImage: 0,

      galleryItems: [
        
        /*{
            image: "/media/gallery-p1.png",
            video: "/media/viedo-beforeafter-p1.mp4"
        },*/
        {
            image: "/media/gallery-p2.png",
            video: "/media/viedo-beforeafter-p2.mp4"
        },
        {
            image: "/media/gallery-p3.png",
            video: "/media/viedo-beforeafter-p3.mp4"
        },
        {
            image: "/media/gallery-p4.png",
            video: "/media/viedo-beforeafter-p4.mp4"
        },
        {
            image: "/media/gallery-p5.png",
            video: "/media/viedo-beforeafter-p5.mp4"
        },
        {
            image: "/media/gallery-p6.png",
            video: "/media/viedo-beforeafter-p6.mp4"
        }
        ]
    };
  },

  methods: {

    openModal(index) {
        this.currentImage = index;
        this.isModalOpen = true;

        document.body.style.overflow = "hidden";
    },

    closeModal() {
        this.isModalOpen = false;

        document.body.style.overflow = "";
    },

    nextImage() {
        this.currentImage =
        (this.currentImage + 1) %
        this.galleryItems.length;
    },

    prevImage() {
        this.currentImage =
        (this.currentImage - 1 + this.galleryItems.length) %
        this.galleryItems.length;
    }

    }
};
</script>

<style scoped>
  @import '../css/defaultStyle.css';
  @import '../css/beforeafter.css';
</style>
