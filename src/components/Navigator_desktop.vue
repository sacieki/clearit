<template>
  <div class=" top-0 z-50 navigator-desktop">
    
    <!-- ====================================================== -->
    <!-- DESKTOP NAVIGATION -->
    <!-- PC ONLY: lg and above -->
    <!-- ====================================================== -->
    <nav
      class="hidden lg:flex items-center bg-white px-8 py-6 relative z-50 navigator-desktop__nav"
    >
      <div class="flex items-center w-full">

      

        <!-- DESKTOP MENU -->
        <div
          class="flex items-center gap-8 mx-auto"
        >
          <router-link
            to="/brand-overview"
            class="desktop-nav-link"
          >
            About
          </router-link>

          <router-link
            to="/the-clearit-method"
            class="desktop-nav-link"
          >
            The CLEARiT Method
          </router-link>

          <router-link
            to="/before-after"
            class="desktop-nav-link"
          >
            Results
          </router-link>

          <router-link
            to="/patient-journey"
            class="desktop-nav-link"
          >
            Patient Journey
          </router-link>

          <router-link
            to="/find-us"
            class="desktop-nav-link"
          >
            Find Clearit Providers
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
  name: "Navigator_desktop"
};
</script>


<style scoped>
.navigator-desktop {
  /*padding-top: 200px;*/
}

.navigator-desktop__nav {
  /*
  position: sticky;
  top: 0;
  z-index: 50;
  background: #fff;
  */
  /*margin-top: 200px;*/
}

.desktop-nav-link {
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

.desktop-nav-link--disabled {
  cursor: default;
}
</style>