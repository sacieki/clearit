<template>
  <div class="fixed top-0 left-0 right-0 z-50">

 


    <!-- ====================================================== -->
    <!-- DESKTOP NAVIGATION -->
    <!-- PC ONLY: lg and above -->
    <!-- ====================================================== -->
    <nav
      class="hidden lg:flex items-center bg-white px-8 py-6 relative z-50"
    >
      <div class="flex items-center w-full">

        

        <!-- DESKTOP MENU -->
        <div
          class="flex items-center gap-8 ml-auto"
        >
          <router-link
            to="/brand-overview"
            class="desktop-nav-link"
          >
            About
          </router-link>

          <router-link
            to="/techno-lab"
            class="desktop-nav-link"
          >
            Products
          </router-link>

          <router-link
            to="/before-after"
            class="desktop-nav-link"
          >
            Gallery
          </router-link>

          <router-link
            to="/patient-journey"
            class="desktop-nav-link"
          >
            Patient Journey
          </router-link>

          <router-link
            to="/faqs"
            class="desktop-nav-link"
          >
            FAQs
          </router-link>

          <router-link
            to="/contact-us"
            class="desktop-nav-link"
          >
            Contact Us
          </router-link>

          <!-- Investor: No route yet -->
          <span class="desktop-nav-link desktop-nav-link--disabled">
            Investor
          </span>
        </div>

      </div>
    </nav>


  </div>
</template>


<script>
export default {
  name: "Navigator_desktop",

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
}

a:hover {
  color: #000;
}


/* ========================================================= */
/* DESKTOP NAVIGATION */
/* ========================================================= */

.desktop-nav-link {
  color: #111;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.015em;
  white-space: nowrap;
  margin-bottom: 0;
  transition:
    color 0.25s ease,
    opacity 0.25s ease;
}

.desktop-nav-link:hover {
  color: #5c5a5a;
}

.desktop-nav-link--disabled {
  cursor: default;
}


/* ========================================================= */
/* MOBILE MENU */
/* ========================================================= */

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
  color: #5c5a5a;
  margin-bottom: 1.25rem;
  text-decoration: none;
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