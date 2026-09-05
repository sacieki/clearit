```vue
<template>
  <section
    class="sticky short-contact mx-auto hidden lg:flex"
    :class="{ 'short-contact--expanded': isExpanded }"
  >

    <!-- TOP / CONTENT AREA -->
    <div class="short-contact__content">

      <!-- MENU -->
      <div class="short-contact__menu">

        <!-- Previous -->
        <button
          type="button"
          class="short-contact__menu-arrow short-contact__menu-arrow--prev"
          aria-label="Previous menu"
          @click="previousMenu"
        >
          &lt;
        </button>

        <!-- Menu Items -->
        <Transition :name="menuTransition">

          <div
            class="short-contact__menu-list"
            :key="currentMenuIndex"
          >

            <router-link
              v-for="item in visibleMenuItems"
              :key="item.to"
              :to="item.to"
              class="short-contact__menu-item"
            >
              {{ item.label }}
            </router-link>

          </div>

        </Transition>

        <!-- Next -->
        <button
          type="button"
          class="short-contact__menu-arrow short-contact__menu-arrow--next"
          aria-label="Next menu"
          @click="nextMenu"
        >
          &gt;
        </button>

      </div>


      <!-- CONTACT -->
      <div class="short-contact__contact">

        <h3>CONTACT</h3>

        <a href="mailto:info@yclearit.com">
          info@yclearit.com
        </a>

        <a href="tel:+187755325327">
          (+1) 877-552-5327 (CLEAR)
        </a>

      </div>


      <!-- FOLLOW US -->
      <div class="short-contact__social">

        <h3>FOLLOW US</h3>

        <div class="short-contact__social-links">

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/clearit_tattooremoval/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                ry="5"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
              />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>


          <!-- YouTube -->
          <a
            href="https://www.youtube.com/@CLEARiTTV1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M21.58 7.19a2.96 2.96 0 0 0-2.08-2.09C17.67 4.6 12 4.6 12 4.6s-5.67 0-7.5.5a2.96 2.96 0 0 0-2.08 2.09A30.6 30.6 0 0 0 1.92 12a30.6 30.6 0 0 0 .5 4.81 2.96 2.96 0 0 0 2.08 2.09c1.83.5 7.5.5 7.5.5s5.67 0 7.5-.5a2.96 2.96 0 0 0 2.08-2.09A30.6 30.6 0 0 0 22.08 12a30.6 30.6 0 0 0-.5-4.81Z"
              />
              <path
                d="m9.75 15.25 4.5-3.25-4.5-3.25v6.5Z"
                fill="white"
                stroke="none"
              />
            </svg>
          </a>


          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/company/clearittattooremoval"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
              />
              <path
                d="M8 10v7"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                fill="none"
              />
              <circle
                cx="8"
                cy="7"
                r="1"
                fill="white"
                stroke="none"
              />
              <path
                d="M12 17v-4a3 3 0 0 1 6 0v4"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                fill="none"
              />
              <path
                d="M12 10v7"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </a>

        </div>
      </div>

    </div>


    <!-- LOGO -->
    <div class="short-contact__logo">

      <router-link
        to="/"
        aria-label="CLEARiT Home"
      >
        <p class="logo">
          CLEAR<span class="colorBlue">i</span>T
        </p>
      </router-link>

    </div>


    <!-- TOGGLE BUTTON -->
    <button
      type="button"
      class="short-contact__toggle"
      :aria-label="
        isExpanded
          ? 'Close contact information'
          : 'Open contact information'
      "
      :aria-expanded="isExpanded"
      @click="toggleContact"
    >
      <span v-if="!isExpanded">...</span>
      <span v-else>×</span>
    </button>

  </section>
</template>


<script>
import { navItems } from "@/data/navigation";

export default {
  name: "ShortContact",

  data() {
    return {
      isExpanded: false,

      currentMenuIndex: 0,
      menuTransition: "menu-next",

      navItems: navItems
    };
  },

  computed: {
    visibleMenuItems() {
      const items = this.navItems;

      if (items.length <= 3) {
        return items;
      }

      // ทำให้เลื่อนได้แบบวนรอบ
      return [
        ...items,
        ...items
      ].slice(this.currentMenuIndex, this.currentMenuIndex + 3);
    }
  },

  methods: {

    toggleContact() {
      this.isExpanded = !this.isExpanded;
    },

    previousMenu() {
      this.menuTransition = "menu-prev";

      if (this.currentMenuIndex > 0) {
        this.currentMenuIndex--;
      } else {
        this.currentMenuIndex = this.navItems.length - 1;
      }
    },

    nextMenu() {
      this.menuTransition = "menu-next";

      if (this.currentMenuIndex < this.navItems.length - 1) {
        this.currentMenuIndex++;
      } else {
        this.currentMenuIndex = 0;
      }
    }

  }
};
</script>


<style scoped>

.logo {
  color: white;

  font-family: Figtree, sans-serif;
  font-weight: 500;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.4;

  letter-spacing: 5%;
  text-align: center;

  padding-left: clamp(5px, 0.8vw, 10px);
}

.logo span.colorBlue {
  color: #29BCFB;
}


/* ========================================================= */
/* SHORT CONTACT */
/* ========================================================= */

.short-contact {
  transform: translateX(-50%);

  position: fixed;

  top: 0;
  left: 50%;

  width: 100%;
  height: 40px;

  background: #1F1F1F;

  overflow: hidden;

  z-index: 9999;

  flex-direction: column;

  transition:
    height 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}


/* ========================================================= */
/* EXPANDED */
/* ========================================================= */

.short-contact--expanded {
  height: 320px;
}


/* ========================================================= */
/* CONTENT */
/* ========================================================= */

.short-contact__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  width: 100%;
  padding: 25px 45px 0;

  box-sizing: border-box;

  opacity: 0;
  transform: translateY(-20px);

  transition:
    opacity 0.35s ease,
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.short-contact--expanded .short-contact__content {
  opacity: 1;
  transform: translateY(0);
}



/* ========================================================= */
/* MENU */
/* ========================================================= */

.short-contact__menu {
  grid-column: 1 / -1;
  grid-row: 1;

  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 35px;
}

/* Menu list */

.short-contact__menu-list {
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
}


/* Menu item */

.short-contact__menu-item {
  flex: 1;

  text-align: center;

  padding: 0 8px;

  color: #F8F8F8;

  text-decoration: none;

  font-family: Figtree, sans-serif;

  font-size: clamp(11px, 1.2vw, 14px);

  font-weight: 400;

  letter-spacing: 0.04em;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
}

.short-contact__menu-item:hover {
  opacity: 0.55;
}


/* ========================================================= */
/* MENU ARROWS */
/* ========================================================= */

.short-contact__menu-arrow {
  flex: 0 0 30px;

  width: 30px;
  height: 30px;

  padding: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  background: transparent;

  border: none;

  color: #F8F8F8;

  cursor: pointer;

  font-family: Figtree, sans-serif;

  font-size: 22px;

  font-weight: 400;

  line-height: 1;

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.short-contact__menu-arrow:hover {
  opacity: 0.5;
}

.short-contact__menu-arrow--prev:hover {
  transform: translateX(-3px);
}

.short-contact__menu-arrow--next:hover {
  transform: translateX(3px);
}


/* ========================================================= */
/* CONTACT */
/* ========================================================= */

.short-contact__contact {
  grid-column: 1;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.short-contact__contact h3,
.short-contact__social h3 {
  margin: 0 0 22px;

  font-family: Figtree, sans-serif;

  font-size: 14px;

  font-weight: 500;

  letter-spacing: 0.08em;

  color: #989898;
}

.short-contact__social h3 {
  width: 100%;
  text-align: right;
}

.short-contact__contact a {
  color: #F8F8F8;

  text-decoration: none;

  font-family: Figtree, sans-serif;

  font-size: 16px;

  font-weight: 400;

  line-height: 1.8;

  letter-spacing: 0.25em;

  transition:
    opacity 0.25s ease;
}

.short-contact__contact a:hover {
  opacity: 0.55;
}


/* ========================================================= */
/* SOCIAL */
/* ========================================================= */

.short-contact__social {
  grid-column: 2;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 0;
}

.short-contact__social-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 14px;
}

.short-contact__social-links a {
  width: 30px;
  height: 30px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #111111;

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.short-contact__social-links a:hover {
  transform: translateY(-3px);

  opacity: 0.6;
}

.short-contact__social-links svg {
  width: 24px;
  height: 24px;

  fill: none;

  stroke: #F8F8F8;

  stroke-width: 1.7;
}


/* ========================================================= */
/* LOGO */
/* ========================================================= */

.short-contact__logo {
  position: absolute;

  left: 0;

  top: 50%;

  transform: translateY(-50%);

  transition:
    top 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.short-contact--expanded .short-contact__logo {
  top: auto;

  bottom: 5px;

  transform: translateY(0);
}


/* ========================================================= */
/* TOGGLE */
/* ========================================================= */

.short-contact__toggle {
  position: absolute;

  right: 40px;

  top: 18%;

  width: 40px;
  height: 40px;

  transform: translateY(-50%);

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0;

  background: transparent;

  border: none;

  color: #F8F8F8;

  cursor: pointer;

  font-family: Figtree, sans-serif;

  font-weight: 900;

  font-size: clamp(28px, 4.5vw, 48px);

  line-height: 1;

  letter-spacing: 0;

  transition:
    transform 0.35s ease,
    opacity 0.25s ease;
}

.short-contact__toggle:hover {
  opacity: 0.55;
}

.short-contact--expanded .short-contact__toggle {
  top: auto;

  bottom: 5px;

  transform: none;

  font-size: 32px;
}


/* ========================================================= */
/* TABLET LANDSCAPE */
/* ========================================================= */

@media (max-width: 1024px) and (orientation: landscape) {

  .short-contact {
    width: min(600px, 70vw);
  }

}


/* ========================================================= */
/* HIDE MOBILE + TABLET PORTRAIT */
/* ========================================================= */

@media (max-width: 1024px) and (orientation: portrait) {

  .short-contact {
    display: none !important;
  }

}

@media (max-width: 767px) {

  .short-contact {
    display: none !important;
  }

}

/* ========================================================= */
/* MENU SLIDE ANIMATION */
/* ========================================================= */

.short-contact__menu {
  position: relative;
  overflow: hidden;
}

.short-contact__menu-list {
  position: absolute;

  left: 30px;
  right: 30px;
  top: 0;

  height: 45px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* ========================================================= */
/* NEXT */
/* ========================================================= */

.menu-next-enter-active,
.menu-next-leave-active {
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.35s ease;
}

.menu-next-enter-from {
  opacity: 0;
  transform: translateX(35px);
}

.menu-next-leave-to {
  opacity: 0;
  transform: translateX(-35px);
}


/* ========================================================= */
/* PREVIOUS */
/* ========================================================= */

.menu-prev-enter-active,
.menu-prev-leave-active {
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.35s ease;
}

.menu-prev-enter-from {
  opacity: 0;
  transform: translateX(-35px);
}

.menu-prev-leave-to {
  opacity: 0;
  transform: translateX(35px);
}



</style>
