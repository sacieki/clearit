<template>
  <section
    class="sticky short-contact mx-auto hidden lg:flex"
    :class="{ 'short-contact--expanded': isExpanded }"
  >

    <!-- TOP / CONTENT AREA -->
    <div class="short-contact__content">

      <!-- CONTACT -->
      <div class="short-contact__contact">
        <h3>CONTACT</h3>

        <a href="mailto:info@yclearit.com">
          info@yclearit.com
        </a>

        <a href="tel:+187755325327">
          (+1) 877-55-CLEAR (25327)
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
        <!--
        <img
          src="/media/logoWhite.f02482b3.png"
          alt="CLEARiT"
        />
        -->
        <p class="logo">
        CLEAR<span class="colorBlue">i</span>T
        </p>
      </router-link>
    </div>


    <!-- TOGGLE BUTTON -->
    <button
      type="button"
      class="short-contact__toggle"
      :aria-label="isExpanded ? 'Close contact information' : 'Open contact information'"
      :aria-expanded="isExpanded"
      @click="toggleContact"
    >
      <span v-if="!isExpanded">...</span>
      <span v-else>×</span>
    </button>

  </section>
</template>


<script>
export default {
  name: "ShortContact",

  data() {
    return {
      isExpanded: false
    };
  },

  methods: {
    toggleContact() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>


<style scoped>
.logo {
  color:white;
  font-family: Figtree, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.4;
  letter-spacing: 5%;
  text-align: center;
  padding-left:clamp(5px, 0.8vw, 10px);
}
.logo span.colorBlue {
  color:#29BCFB;
}
.short-contact {
  transform: translateX(-50%);
  position: fixed;
  top: 0;
  left: 50%;

  width: 600px;
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
  height: 280px;
}


/* ========================================================= */
/* CONTENT */
/* ========================================================= */

.short-contact__content {
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 45px 45px 0;

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
/* CONTACT */
/* ========================================================= */

.short-contact__contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.short-contact__contact h3,
.short-contact__social h3 {
  margin: 0 0 22px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #989898;
}

.short-contact__contact a {
  color: #F8F8F8;
  text-decoration: none;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.25em;

  transition: opacity 0.25s ease;
}

.short-contact__contact a:hover {
  opacity: 0.55;
}


/* ========================================================= */
/* SOCIAL */
/* ========================================================= */

.short-contact__social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.short-contact__social-links {
  display: flex;
  align-items: center;
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

  left: 0px;
  top: 50%;

  transform: translateY(-50%);

  transition:
    top 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.short-contact__logo img {
  display: block;
  width: 180px;
  height: auto;
}


/* Logo moves to bottom when expanded */
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

  font-family: Figtree;
  font-weight: 900;
  font-style: Black;
  font-size: clamp(28px, 4.5vw, 48px);
  line-height: 100px;
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;

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
</style>