<template>
  <main class="default-page">
    
    <section class=" BeforeAfterModule">

      <div class="default-container">

        <div
          class="default-content-width bm-BeforeAfterModule-content"
        >

          <div class="bm-BeforeAfterModule-Topics mx-auto">

            <div
              class="default-split-content bm-before-after-split"
            >

              <!-- =========================
                   IMAGE SLIDER
              ========================== -->

              <div class="default-split-content__image bm-image-slider">

                <img
                  v-for="(image, index) in images"
                  :key="image"
                  :src="image"
                  :alt="`Before and After ${index + 1}`"
                  class="bm-fade-image"
                  :class="{ active: currentImage === index }"
                />

              </div>


              <!-- =========================
                   CONTENT
              ========================== -->

              <div class="default-split-content__content bm-before-after-content">

                <p class="bm-BeforeAfterModule-p1 colorBlack">
                  REAL PROGRESS. REAL PEOPLE.
                </p>

                <router-link to="/before-after" class="solid-button" style="margin-top: clamp(60px, 8vw, 120px);width:294px;min-height: 36px;font-size: clamp(16px, 2vw, 19px);padding:0;">
                    SEE MORE >
                </router-link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  </main>
</template>


<script>
export default {
  name: "PatientJourney",

  data() {
    return {
      currentImage: 0,

      images: [
        "/media/After 1.png",
        "/media/After 2.png",
        "/media/After 3.png",
        "/media/After 4.png",
        "/media/After 5.png"
      ],

      imageInterval: null
    };
  },

  mounted() {
    this.imageInterval = setInterval(() => {
      this.currentImage =
        (this.currentImage + 1) % this.images.length;
    }, 3000);
  },

  beforeUnmount() {
    clearInterval(this.imageInterval);
  }
};
</script>


<style scoped>

@import "../css/defaultStyle.css";


/* ========================================
   MAIN CONTENT
======================================== */

.bm-BeforeAfterModule-content {
  position: relative;
  overflow: visible;
}


/* ========================================
   TOPICS
======================================== */

.bm-BeforeAfterModule-Topics {
  width: 100%;
  overflow: visible;
}


/* ========================================
   SPLIT CONTENT
======================================== */

.bm-before-after-split {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(30px, 5vw, 100px);

  margin-top: clamp(80px, 13vw, 200px);
}


/* ========================================
   IMAGE
======================================== */

.bm-image-slider {
  position: relative;

  width: 50%;

  flex-shrink: 0;

  overflow: visible;

  /*
    สำคัญ:
    กำหนด aspect-ratio ให้พื้นที่รูป
    เพื่อให้รูป absolute ไม่ทำให้ layout หาย
  */
  aspect-ratio: 1 / 1;
}


/* ========================================
   EACH IMAGE
======================================== */

.bm-fade-image {
  position: absolute;

  top: 0;
  left: 0;

  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  opacity: 0;

  transition:
    opacity 1s ease-in-out;

  pointer-events: none;
}


/* ========================================
   ACTIVE IMAGE
======================================== */

.bm-fade-image.active {
  opacity: 1;
}


/* ========================================
   TEXT CONTENT
======================================== */

.bm-before-after-content {
  width: 40%;

  align-items: center;
  justify-content: flex-start;
}


/* ========================================
   TEXT
======================================== */

.bm-BeforeAfterModule-p1 {
  width: min(650px, 100%);

  margin: 0;

  font-family: "Figtree", sans-serif;

  font-weight: 400;

  font-style: normal;

  font-size: clamp(
    20px,
    2.4vw,
    29px
  );
  line-height: 2;

  letter-spacing: 10%;
}

.bm-BeforeAfterModule-p1::after {
  content: "";
  display: block;

  width: 10%;
  height: 2px;

  margin-top: 8px;

  background: #29BCFB;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 1024px) {

  .bm-before-after-split {
    gap: clamp(25px, 4vw, 60px);
  }

  .bm-image-slider {
    width: 58%;
  }

  .bm-before-after-content {
    width: 42%;
  }

}


/* ========================================
   TABLET / SMALL
======================================== */

@media (max-width: 768px) {

  .bm-before-after-split {
    flex-direction: column;

    gap: clamp(40px, 8vw, 80px);

    margin-top: clamp(
      80px,
      13vw,
      160px
    );
  }

  .bm-image-slider {
    width: 80%;

    max-width: 600px;
  }

  .bm-before-after-content {
    width: 100%;

    justify-content: center;

    text-align: center;
  }

  .bm-BeforeAfterModule-p1 {
    width: min(
      540px,
      90%
    );

    text-align: center;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .bm-before-after-split {
    gap: 40px;
  }

  .bm-image-slider {
    width: 90%;

    max-width: 450px;
  }

  .bm-BeforeAfterModule-p1 {
    width: 90%;
  }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {

  .bm-before-after-split {
    margin-top: 80px;

    gap: 30px;
  }

  .bm-image-slider {
    width: 100%;
  }

  .bm-BeforeAfterModule-p1 {
    width: 100%;

    font-size: clamp(
      18px,
      5vw,
      24px
    );
  }

}

</style>