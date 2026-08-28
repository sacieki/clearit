<template>
  <div class="fixed top-0 left-0 right-0 z-50">

    <!-- TOP BAR -->
    <!--
    <div
      class="hidden sm:flex flex-wrap sm:flex-nowrap gap-y-3 gap-x-4 items-center justify-between bg-[#1a1a1a] text-white py-3 px-4 sm:px-8 text-sm font-medium tracking-wide"
    >
      <div class="flex items-center gap-4 sm:gap-10">

        <div
          class="cursor-pointer flex items-center gap-1.5 text-sm sm:text-lg lg:text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin size-3 sm:size-4 lg:size-5"
            aria-hidden="true"
          >
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            />
            <circle cx="12" cy="10" r="3" />
          </svg>

          Affiliate locator
        </div>

        <div class="opacity-85 text-sm sm:text-lg lg:text-xl">
          United States
        </div>

      </div>

      <div
        class="flex items-center gap-1.5 text-sm sm:text-lg lg:text-xl font-medium opacity-100 cursor-pointer tracking-wide transition-opacity duration-200 hover:opacity-70"
      >
        Book a consultation

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right size-3 sm:size-4 lg:size-6"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
    -->

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

        <!-- ABOUT -->
        <div>

          <div
            class="text-left text-2xl lg:text-2.5xl font-normal text-black tracking-wide mb-5"
          >
            About
          </div>

          <div class="menu-content flex flex-col gap-5 text-left ">

            <router-link to="/brand-overview"  @click="closeMenu">
                Who We Are
            </router-link>

            <router-link to="/techno-lab"  @click="closeMenu">
                What We Do
            </router-link>

            <router-link to="/techno-lab"  @click="closeMenu">
                Why CLEARiT
            </router-link>

            <router-link to="/brand-overview"  @click="closeMenu">
                Our Difference
            </router-link>

          </div>

        </div>


        <!-- PRESS & BLOG -->
        <div>

          <div
            class="text-left  text-2xl lg:text-2.5xl font-normal text-black tracking-wide mb-5"
          >
            Press &amp; Blog
          </div>

          <div class="menu-content flex flex-col gap-5 text-left ">
            <!--
            <a href="/press">
              Press releases
            </a>

            <a href="/press">
              Featured articles
            </a>

            <a href="/press">
              News / Blog
            </a>
            -->
            <a
              href="mailto:info@clearit.com?subject=Media Inquiry&body=Hello CLEARiT team,"
            >
              Media contact email
            </a>
            

          </div>

        </div>


        <!-- PRODUCT / SCIENCE -->
        <div>

          <div
            class="text-left text-2xl lg:text-2.5xl font-normal text-black tracking-wide mb-5"
          >
            Product / Science
          </div>

          <div class="menu-content flex flex-col gap-5 text-left ">

            <router-link to="/techno-lab"  @click="closeMenu">
                The CLEARiT System
            </router-link>
            <!--
            <a href="/brand-overview">
              Research philosophy
            </a>

            <a href="#">
              Data
            </a>
            -->
          </div>

        </div>


        <!-- LEARN -->
        <div>

          <div
            class="text-left text-2xl lg:text-2.5xl font-normal text-black tracking-wide mb-5"
          >
            Learn
          </div>

          <div class="menu-content flex flex-col gap-5 text-left ">

            <router-link to="/before-after"  @click="closeMenu">
                Before &amp; After
            </router-link>

            <router-link to="/techno-lab"  @click="closeMenu">
                The Skin First Solution
            </router-link>

            <router-link to="/techno-lab"  @click="closeMenu">
                Your Tattoo Removal Journey
            </router-link>

            <router-link to="/faqs" @click="closeMenu">
              FAQs
            </router-link>
          </div>

        </div>


        <!-- CONTACT -->
        <div>

          <div
            class="text-left text-2xl lg:text-2.5xl font-normal text-black tracking-wide mb-5"
          >
            Contact
          </div>

          <div class="menu-content flex flex-col gap-5 text-left ">

            <router-link to="/contact-us" @click="closeMenu">
                Contact Us
            </router-link>

          </div>

        </div>


        <!-- INVESTORS -->
        <div>

          <div
            class="text-left text-2xl lg:text-2.5xl font-normal text-black tracking-wide mb-5"
          >
            Investors
          </div>

          <div class="menu-content flex flex-col gap-5 text-left ">

            <router-link to="/brand-overview"  @click="closeMenu">
                Company overview
            </router-link>

            <router-link to="/brand-overview" @click="closeMenu">
                Vision &amp; Roadmap
            </router-link>
            
            <router-link to="/brand-overview#team" @click="closeMenu">
                Leadership team
            </router-link>
            <!--
            <a href="/brand-overview#team">
              Scientific advisory board
            </a>

            <a href="#">
              Investor deck
            </a>
            -->
          </div>

        </div>

      </div>

    </div>
  </div>
  
</template>


<script>
export default {
  name: "SiteHeader",

  data() {
    return {
      isMenuOpen: false
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