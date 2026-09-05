```vue
<template>
  <div class="navigator-desktop">

    <!-- DESKTOP ONLY -->
    <nav
      class="hidden lg:flex items-center justify-center bg-white relative z-50 navigator-desktop__nav"
    >

      <!-- LEFT -->
      <button
        v-if="showControls"
        class="navigator-arrow navigator-arrow--left"
        @click="prevMenu"
        aria-label="Previous menu"
      >
        ‹
      </button>


      <!-- MENU -->
      <div
        ref="menuViewport"
        class="navigator-menu-viewport"
      >
        <div
          ref="menuTrack"
          class="navigator-menu-track"
          :style="{
            transform: `translateX(-${menuOffset}px)`
          }"
        >

          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="desktop-nav-link"
          >
            {{ item.label }}
          </router-link>

        </div>
      </div>


      <!-- RIGHT -->
      <button
        v-if="showControls"
        class="navigator-arrow navigator-arrow--right"
        @click="nextMenu"
        aria-label="Next menu"
      >
        ›
      </button>

    </nav>

  </div>
</template>


<script>
export default {
  name: "Navigator_desktop",

  data() {
    return {
      menuOffset: 0,
      currentIndex: 0,
      itemWidths: [],
      showControls: false,

      navItems: [
        {
          label: "About",
          path: "/brand-overview"
        },
        {
          label: "The CLEARiT Method",
          path: "/the-clearit-method"
        },
        {
          label: "Results",
          path: "/before-after"
        },
        {
          label: "Patient Journey",
          path: "/patient-journey"
        },
        {
          label: "Find Clearit Providers",
          path: "/find-us"
        },
        {
          label: "FAQs",
          path: "/faqs"
        },
        {
          label: "Contact Us",
          path: "/contact-us"
        }
      ]
    };
  },


  mounted() {
    this.$nextTick(() => {
      this.checkMenuOverflow();

      window.addEventListener(
        "resize",
        this.checkMenuOverflow
      );
    });
  },


  beforeUnmount() {
    window.removeEventListener(
      "resize",
      this.checkMenuOverflow
    );
  },


  methods: {

    checkMenuOverflow() {

      this.$nextTick(() => {

        const viewport =
          this.$refs.menuViewport;

        const track =
          this.$refs.menuTrack;

        if (!viewport || !track) return;

        this.showControls =
          track.scrollWidth >
          viewport.clientWidth;

        this.currentIndex = 0;
        this.menuOffset = 0;

        this.calculateItemWidths();
      });
    },


    calculateItemWidths() {

      const track =
        this.$refs.menuTrack;

      if (!track) return;

      const items =
        track.querySelectorAll(
          ".desktop-nav-link"
        );

      this.itemWidths =
        Array.from(items).map(
          item => item.offsetWidth + 32
        );
    },


    nextMenu() {

      if (!this.showControls) return;

      const viewport =
        this.$refs.menuViewport;

      const track =
        this.$refs.menuTrack;

      if (!viewport || !track) return;

      this.currentIndex++;

      /*
       * ถึงรายการสุดท้าย
       * วนกลับรายการแรก
       */
      if (
        this.currentIndex >=
        this.itemWidths.length
      ) {
        this.currentIndex = 0;
        this.menuOffset = 0;
        return;
      }

      const itemWidth =
        this.itemWidths[
          this.currentIndex - 1
        ] || 0;

      this.menuOffset += itemWidth;

      const maxOffset =
        track.scrollWidth -
        viewport.clientWidth;

      if (
        this.menuOffset >
        maxOffset
      ) {
        this.menuOffset = maxOffset;
      }
    },


    prevMenu() {

      if (!this.showControls) return;

      this.currentIndex--;

      /*
       * ก่อนรายการแรก
       * ไปท้ายสุด
       */
      if (this.currentIndex < 0) {

        this.currentIndex =
          this.itemWidths.length - 1;

        const track =
          this.$refs.menuTrack;

        const viewport =
          this.$refs.menuViewport;

        if (!track || !viewport) return;

        this.menuOffset =
          Math.max(
            0,
            track.scrollWidth -
            viewport.clientWidth
          );

        return;
      }

      const itemWidth =
        this.itemWidths[
          this.currentIndex
        ] || 0;

      this.menuOffset =
        Math.max(
          0,
          this.menuOffset -
          itemWidth
        );
    }

  }
};
</script>


<style scoped>

.navigator-desktop {
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
}


/* =========================================================
   NAV
========================================================= */

.navigator-desktop__nav {
  width: 100%;
  max-width: 100vw;

  min-width: 0;

  padding: 24px 20px;

  overflow: hidden;
}


/* =========================================================
   MENU VIEWPORT
========================================================= */

.navigator-menu-viewport {

  /*
   * เมนูอยู่ตรงกลาง
   */
  flex: 0 1 auto;

  width: auto;
  max-width: calc(100vw - 120px);

  min-width: 0;

  overflow: hidden;
}


/* =========================================================
   MENU TRACK
========================================================= */

.navigator-menu-track {

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 32px;

  width: max-content;

  transition:
    transform 0.5s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}


/* =========================================================
   MENU ITEM
========================================================= */

.desktop-nav-link {

  flex: 0 0 auto;

  color: #111;

  text-decoration: none;

  white-space: nowrap;

  margin-bottom: 0;

  transition:
    color 0.25s ease,
    opacity 0.25s ease;

  font-family: Figtree, sans-serif;

  font-weight: 400;

  font-style: normal;

  font-size: 24px;

  line-height: 100%;

  letter-spacing: 0;

  text-align: center;
}


.desktop-nav-link:hover {
  color: #5c5a5a;
}


.desktop-nav-link:hover::after {

  content: "";

  display: block;

  width: 100%;

  height: 2px;

  margin-top: 10px;

  background: #29BCFB;
}


/* =========================================================
   DISABLED
========================================================= */

.desktop-nav-link--disabled {
  cursor: default;
}


/* =========================================================
   ARROWS
========================================================= */

.navigator-arrow {

  flex: 0 0 auto;

  width: 40px;
  height: 40px;

  border: 0;

  background: transparent;

  font-size: 38px;

  line-height: 1;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;

  z-index: 2;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}


.navigator-arrow:hover {
  transform: scale(1.15);
}


.navigator-arrow--left {
  margin-right: 10px;
}


.navigator-arrow--right {
  margin-left: 10px;
}


/* =========================================================
   SMALL DESKTOP
========================================================= */

@media (max-width: 1200px) {

  .navigator-desktop__nav {
    padding-left: 10px;
    padding-right: 10px;
  }

  .navigator-menu-viewport {
    max-width: calc(100vw - 90px);
  }

  .navigator-menu-track {
    gap: 24px;
  }

  .desktop-nav-link {
    font-size: 20px;
  }
}


/* =========================================================
   TABLET LANDSCAPE / SMALL DESKTOP
========================================================= */

@media (max-width: 1100px) {

  .navigator-menu-track {
    gap: 20px;
  }

  .desktop-nav-link {
    font-size: 18px;
  }
}

</style>
