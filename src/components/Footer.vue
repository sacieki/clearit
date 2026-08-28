<template>
  <footer class="site-footer default-page">

    <section class="default-section Footer">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius ft-Footer-content ">
          <div class="ft-Footer-Topics mx-auto BG-GradientWhiteToGray default-content-border-radius">

            <div class="flex flex-col gap-5">
              <router-link
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                :aria-label="item.label"
              >
                {{ item.label }}
              </router-link>
            </div>

            <div style="width:50%;margin-right:clamp(60px, 8vw, 120px);">

              <div class="footer-newsletter underline-gray-fullwidth">
                <h2>Partner with CLEARiT</h2>

                <form class="newsletter-form" style="display:flex" @submit.prevent>
                  <input
                    type="email"
                    placeholder="Your email here"
                    aria-label="Your email"
                  />

                  <button type="submit" aria-label="Subscribe" style="align-items: end;margin-left:auto;">
                    →
                  </button>
                </form>
              </div>

              <div class="ft-contact-zone">
                <div class="underline-gray-fullwidth">
                  <p class="contact-topic colorGray">E-MAIL ADDRESS</p>
                  <p class="contact-data colorBlue">info@yclearit.com</p>
                </div>

                <div class="underline-gray-fullwidth">
                  <p class="contact-topic colorGray">PHONE NUMBER</p>
                  <p class="contact-data colorBlue">(+1) 877-55-CLEAR (25327)</p>
                </div>

                <div class="underline-gray-fullwidth">
                  <p class="contact-topic colorGray">PHONE NUMBER</p>
                  <p class="contact-data colorBlue">(+1) 877-55-CLEAR (25327)</p>
                </div>
              </div>

              <div class="ft-social-zone">
                <div class="underline-gray-fullwidth">
                  <p class="contact-topic colorGray">INSTAGRAM</p>
                </div>
                <div class="underline-gray-fullwidth">
                  <p class="contact-topic colorGray">LINKEDIN</p>
                </div>
                <div class="underline-gray-fullwidth">
                  <p class="contact-topic colorGray">YOUTUBE</p>
                </div>
              </div>

              
            </div>

            <img
                alt="Logo"
                loading="lazy"
                height="auto"
                width="50%"
                decoding="async"
                class=" image-container__bg img-overflow-bottom"
                style="color: transparent"
                src="/media/7f0be2b9-ba10-45dd-afa7-5a2588ffa5f5.png"
              />
          </div>
        </div>
      </div>
    </section>

  </footer>
</template>

<script>
    export default {
      name: "SiteFooter",
      data() {
        return {
          navItems: [
            { label: "Home", to: "/" },
            { label: "Locations", to: "/locations" },
            { label: "Brand Overview", to: "/brand-overview" },
            { label: "Product", to: "/techno-lab" },
            { label: "Team", to: "/brand-overview#team" },
            { label: "Patient Journey", to: "/patient-journey" },
            { label: "FAQs", to: "/faqs" },
            { label: "Contact", to: "/contact-us" }
          ]
        };
      }
    };
</script>
<style scoped>
@import "../css/defaultStyle.css";

div:has(> .image-container__bg) {
  overflow: visible;
}
.image-container__bg {
  position: absolute;
  bottom: -1%;
  left: 0%;

  width: 40%;
  height: auto;

  
  z-index: 0;
  pointer-events: none;

  transform: translateY(clamp(30px, 4.5vw, 60px));
}

.image-container > *:not(.image-container__bg) {
  position: relative;
  z-index: 1;
}

.ft-Footer-Topics {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.ft-contact-zone {
  margin-top: clamp(40px, 6vw, 80px);
}

.ft-contact-zone div{
  margin-top: clamp(20px, 3vw, 40px);
}

.ft-social-zone {
  margin-top: clamp(40px, 6vw, 80px);
  padding-bottom: clamp(80px, 12vw, 160px);
}

.ft-social-zone div{
  margin-top: clamp(20px, 3vw, 40px);
}

.ft-Footer-Topics div a {
  font-family: Figtree, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.4;
  letter-spacing: 0.02em;
  padding-left: clamp(5px, 0.8vw, 10px);
}

.footer-newsletter h2 {
  font-family: Figtree, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: clamp(28px, 4vw, 39px);
  line-height: 1.4;
  letter-spacing: 0;
}

.contact-topic {
  font-family: Figtree, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: clamp(14px, 1.5vw, 17px);
  line-height: 1.4;
  letter-spacing: 0;
}

.contact-data {
  font-family: Figtree, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: clamp(14px, 1.5vw, 17px);
  line-height: 1.4;
  letter-spacing: 25%;
}

/************************************************************************* */
.site-footer {
  width: 100%;
  background: #fff;
  padding: 70px 3% 45px;
  color: #202020;
}


/* =========================
   Tablet
========================= */

@media (max-width: 1024px) {
  .site-footer {
    padding: 60px 5% 35px;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 55px 40px;
  }

  .footer-newsletter {
    padding-left: 0;
  }
}

/* =========================
   Mobile
========================= */

@media (max-width: 640px) {
  .site-footer {
    padding: 50px 24px 30px;
  }

  .footer-brand {
    padding-bottom: 50px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 50px;
  }

  .footer-column nav {
    margin-top: 25px;
  }

  .footer-newsletter {
    padding-left: 0;
  }

  .footer-newsletter h2 {
    font-size: clamp(26px, 8vw, 36px);
  }

  .footer-bottom {
    margin-top: 50px;
  }

  .footer-bottom p {
    line-height: 1.7;
  }

  .copyright-divider {
    display: none;
  }
}
</style>