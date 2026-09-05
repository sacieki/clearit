<template>
  <footer class="site-footer default-page">

    <section class="default-section Footer">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius ft-Footer-content ">
          <div class="ft-Footer-Topics mx-auto BG-GradientWhiteToGray bg-image-pic default-content-border-radius">

            <div class="flex flex-col gap-5 footer-nav">
              <div style="display:none;">
                <router-link
                  v-for="item in navItems"
                  :key="item.to"
                  :to="item.to"
                  :aria-label="item.label"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>

            <div class="ft-contact-contrainer">

              <div class="footer-newsletter underline-gray-fullwidth">
                <h2>Partner with <span class="colorBlack">CLEAR</span><span class="colorBlue">i</span><span class="colorBlack">T</span></h2>

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
                  <a href="mailto:info@yclearit.com" class="contact-data colorBlue">
                    info@yclearit.com
                  </a>
                </div>

                <div class="underline-gray-fullwidth">
                  <p class="contact-topic colorGray">PHONE NUMBER</p>
                  <a href="tel:+187755325327" class="contact-data colorBlue">
                    (+1) 877-552-5327 (CLEAR)
                  </a>
                </div>

                
              </div>

              <div class="ft-social-zone">

                <div class="underline-gray-fullwidth">
                  <a
                    href="https://www.instagram.com/clearit_tattooremoval/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CLEARiT Instagram"
                    class="contact-topic colorGray"
                  >
                    INSTAGRAM
                  </a>
                </div>

                <div class="underline-gray-fullwidth">
                  <a
                    href="https://www.linkedin.com/company/clearittattooremoval"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CLEARiT LinkedIn"
                    class="contact-topic colorGray"
                  >
                    LINKEDIN
                  </a>
                </div>

                <div class="underline-gray-fullwidth">
                  <a
                    href="https://www.youtube.com/@CLEARiTTV1"
                    target="_blank"
                    aria-label="CLEARiT YouTube"
                    class="contact-topic colorGray"
                  >
                    YOUTUBE
                  </a>
                </div>

                
              </div>
              
              
            </div>
            
            <div style="display:flex;justify-content:flex-end;align-items:flex-end;width:100%;">
              
            </div>

          </div>
          
            
        </div>
        <div>
          <p class="colorGray copyright-divider">
            Copyright 2026 © Clear Intradermal Technologies, Inc | All rights reserved
          </p>
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
            { label: "The CLEARiT Method", to: "/the-clearit-method" },
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

  bottom: -3%;

  left: 50%;
  transform: translateX(-50%);

  width: clamp(250px, 40%, 700px);
  height: auto;

  z-index: 0;
  pointer-events: none;
}

.image-container > *:not(.image-container__bg) {
  position: relative;
  z-index: 1;
}

.ft-Footer-Topics {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  
  padding-bottom: clamp(120px, 20vw, 300px);
}

.ft-Footer-content .BG-GradientWhiteToGray::before {
  position:unset;
}

.ft-contact-zone {
  margin-top: clamp(40px, 6vw, 80px);
}

.ft-contact-zone div{
  margin-top: clamp(20px, 3vw, 40px);
}

.ft-social-zone {
  margin-top: clamp(40px, 6vw, 80px);
  /*padding-bottom: clamp(120px, 20vw, 300px);*/
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

.copyright-divider {
  font-family: Figtree, sans-serif;
  font-weight: 400;
  font-size: clamp(7px, 0.9vw, 12px);
  line-height: 1;
  letter-spacing: 0.02em;
  text-align: center;
  margin-top: clamp(20px, 3vw, 40px);
  padding-right: clamp(10px, 1.5vw, 20px);
}

.ft-contact-contrainer {
  width:50%;
  margin-right:clamp(60px, 8vw, 120px);
}
/************************************************************************* */
.site-footer {
  width: 100%;
  background: #fff;
  padding: 70px 3% 45px;
  color: #202020;
}

.ft-social-zone div a:hover{
  color:#29bcfb;
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

  .footer-nav {
    display: none!important;
  }

  .ft-contact-contrainer {
    padding-left: clamp(15px, 2.5vw, 30px);
    width:100%
  }
  .image-container__bg {
    margin-top: clamp(40px, 6vw, 80px);
    /*display:none;*/
  }

  .bg-image-pic {
    background-image:none !important;
    z-index: 2;
    
  }
  .ft-social-zone .underline-gray-fullwidth::after {
    z-index: 3;
  }
}

.footer-nav {
  display: flex;
  
  flex-direction: column;
  gap: 1.25rem;
}

a.contact-topic.colorGray:hover {
  color: #29bcfb;
}
a.contact-data.colorBlue:hover {
  color: #1f1f1f;
}

.bg-image-pic {
  position: relative;

  background-image: url("../assets//ft-img-bg.png");
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: clamp(180px, 25vw, 340px);
}

</style>