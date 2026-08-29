```vue
<template>
  <button
    type="button"
    class="scroll-to-top"
    :class="{ 'scroll-to-top--visible': isVisible }"
    aria-label="Back to top"
    @click="scrollToTop"
  >
    <img
      src="/media/CaptainClearit.png"
      alt=""
      class="scroll-to-top__image"
    />
  </button>
</template>

<script>
export default {
  name: "ScrollToTop",

  data() {
    return {
      isVisible: false
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll, {
      passive: true
    });

    this.handleScroll();
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;

  right: clamp(18px, 3vw, 40px);
  bottom: clamp(18px, 3vw, 40px);

  width: clamp(45px, 5vw, 65px);
  height: clamp(45px, 5vw, 65px);

  padding: 0;

  border: none;
  background: transparent;

  cursor: pointer;

  z-index: 9998;

  opacity: 0;
  visibility: hidden;

  transform: translateY(20px);

  transition:
    opacity 0.4s ease,
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0.4s ease;
}

.scroll-to-top--visible {
  opacity: 1;
  visibility: visible;

  transform: translateY(0);
}


/* IMAGE */

.scroll-to-top__image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  transition:
    transform 0.3s ease;
}


/* Hover */

.scroll-to-top:hover .scroll-to-top__image {
  transform: translateY(-4px);
}


/* Mobile */

@media (max-width: 640px) {
  .scroll-to-top {
    right: 18px;
    bottom: 18px;

    width: 48px;
    height: 48px;
  }
}


/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .scroll-to-top,
  .scroll-to-top__image {
    transition: none;
  }
}


.scroll-to-top__image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  animation: scrollTopFloat 1.8s ease-in-out infinite;
}


/* ลอยขึ้นลง */

@keyframes scrollTopFloat {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
