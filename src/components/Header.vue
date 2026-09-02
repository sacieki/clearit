<template>
  <div class="fixed top-0 left-0 right-0 z-50">

    <!-- NAVIGATION -->
    <nav
      class="bg-white lg:hidden flex items-center justify-between pb-6 px-4 pt-6 lg:pb-12 sm:px-8 relative z-50"
    >

      <!-- MENU BUTTON -->
      <div
        class="flex items-center gap-3 cursor-pointer select-none"
        tabindex="0"
        role="button"
        aria-label="Open menu"
        @click="openMenu"
        @keydown.enter="openMenu"
        @keydown.space.prevent="openMenu"
      >

        <div class="flex flex-col gap-1.5 w-6 lg:w-8">

          <span
            class="block h-0.5 lg:h-[3px] bg-black rounded-full transition-all duration-300"
          ></span>

          <span
            class="block h-0.5 lg:h-[3px] bg-black rounded-full transition-all duration-300"
          ></span>

          <span
            class="block h-0.5 lg:h-[3px] bg-black rounded-full transition-all duration-300"
          ></span>

        </div>

        <span
          class="hidden sm:block text-2xl lg:text-2.5xl font-normal text-black tracking-wide"
        >
          Menu
        </span>

      </div>


      <!-- LOGO -->
      <div class="nav-logo cursor-pointer">
        <router-link to="/" class="outline-button ">
          <img
            alt="Logo"
            loading="lazy"
            width="250"
            height="40"
            decoding="async"
            class="w-35 lg:w-45"
            style="color: transparent"
            src="/media/logo.f02482b3.png"
          />
        </router-link>
      </div>


      <!-- INVESTOR -->
      <div
        class="hidden sm:block text-2xl lg:text-2.5xl font-normal text-black tracking-wide"
      >
        Investor
      </div>

    </nav>


    <!-- MENU -->
    <div
      v-if="isMenuOpen"
      class="fixed top-0 left-0 bottom-0 bg-white z-[100] overflow-y-auto p-10! w-full sm:w-[60vw] shadow-2xl"
    >

      <!-- CLOSE -->
      <button
        type="button"
        class="menu-close"
        tabindex="0"
        aria-label="Close menu"
        @click="closeMenu"
      >
        ✕
      </button>


      <!-- MENU CONTENT -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-20 max-w-[760px] mx-auto"
      >

        <div class="flex flex-col gap-5 footer-nav">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :aria-label="item.label"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>
        </div>


      





     



      </div>

    </div>
  </div>
  
</template>


<script>
import { navItems } from "@/data/navigation";
export default {
  name: "SiteHeader",

  data() {
    return {
      navItems,
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true;
      document.body.style.overflow = "hidden";
    },

    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = "";
    }
  },

  beforeUnmount() {
    document.body.style.overflow = "";
  }
};
</script>


<style scoped>

body {
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-figtree);
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #5c5a5a;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.025em;
  margin-bottom: 1.25rem;
}

a:hover {
  color: #000;
}

.menu-close {
  color: #fff;
  cursor: pointer;
  background: #111;
  border: none;
  border-radius: 50%;
  outline: none;
  flex-shrink: 0;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  line-height: 1;

  position: absolute;
  top: 24px;
  right: 24px;

  transform: scale(1);

  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.3s ease,
    opacity 0.3s ease;
}

.menu-close:hover {
  transform: scale(1.15);
  background: #333;
  opacity: 0.8;
}

.menu-content a {
  display: block;
  text-align: left;
  font-size: 1rem;
  font-weight: 300;
  color: #5C5A5A;
  margin-bottom: 1.25rem;
  text-decoration: none;

  /* Animation */
  transform: translateX(0);
  transition:
    transform 0.5s ease,
    color 0.3s ease;
}

.menu-content a:hover {
  transform: translateX(8px);
  color: #000;
}
</style>