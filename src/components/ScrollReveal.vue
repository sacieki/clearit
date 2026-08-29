```vue
<template>
  <div
    ref="element"
    class="scroll-reveal"
    :class="{ 'scroll-reveal--visible': isVisible }"
    :style="{ '--reveal-delay': `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ScrollReveal",

  props: {
    delay: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      isVisible: false,
      observer: null
    };
  },

  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;

            // Run only once
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    this.observer.observe(this.$refs.element);
  },

  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;

  transform: translateY(35px);

  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);

  transition-delay: var(--reveal-delay);

  will-change: opacity, transform;
}

.scroll-reveal--visible {
  opacity: 1;

  transform: translateY(0);
}


/* Accessibility */

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
