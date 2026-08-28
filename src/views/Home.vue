<script setup>
import BeforeAfterModule from '../components/BeforeAfterModule.vue'
import FindUs from '../components/FindUs.vue'
import FAQ from '../components/FAQs.vue'
import ShortContact from '../components/ShortContact.vue'
import Navigator_desktop from '../components/Navigator_desktop.vue'


</script>

<template>
  <main class="home-page ">
    
    <ShortContact />
    <!-- Hero --><!--
      <div class="hero ">
        
        <video
          class="hero-video"
          autoplay
          muted
          loop
          playsinline
        >
          <source
            src="/media/8972fd41-39dc-49f3-bc80-8c81d430fe7e.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <img
          src="/media/d1d81a7ea8f071f0bcbc9ec4233a30b171192312.gif"
          alt="Team Member"
          loading="lazy"
          width="100%"
          style=
          class=""
        />
      -->
       
      <section class="text-overlap TheCLEARiTDifference ">
        <div class="default-containerBK ho-contrainer-banner text-overlap__top" style="position: relative;padding-left:40px;">
          <div class=" ho-hero-banner ">
            <div class="ho-hero-Topics mx-auto">
              <div class="splitLeft" style="width:60%">
                <p class="ho-hero-Topics-p1">
                  TATTOO REMOVAL
                </p>
                <p class="ho-hero-Topics-p2">
                  REDEFINED
                </p>
              </div>
              <div class="splitRgiht" style="">
                <div class="InvestorText">
                  Investor
                </div>

                <div class="contact-bar">
                  <span class="contact-bar__text">
                    CONTACT US
                  </span>

                  <span class="contact-bar__arrow">
                    →
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    <div class="blue-line" style="width:95%;"></div>
    <Navigator_desktop />

    <section class="default-section hero-section">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius ho-hero-content BG-GradientGrayToWhite">
          <div class="hero-copy">

            <p class="hero-lead mx-auto colorBlue">
              CLEARiT is a science-driven <br />
              skin preparation system <br />
              designed to optimize <br />
              how skin behaves <br />
              between laser sessions.
            </p>

            <p class="hero-body mx-auto">
              By conditioning and priming the skin,<br />
              CLEARiT helps the laser target ink more effectively, enabling safer,
              faster, and more predictable tattoo-removal outcomes.
            </p>

            <div class="hero-feature-grid mx-auto">
              <article
                v-for="feature in heroFeatures"
                :key="feature.title"
                class="feature-card mx-auto"
              >
                <span>{{ feature.title }}</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>






<!--
    <section class="hero-section ">
      <div class="default-container  home-container hero-inner pt-5">
        <div class="default-content-width hero-visual media-placeholder hero-products">
          
          
          
        </div>
      </div>
    </section>
 -->   
    <!-- Science / positioning -->
    <section class="science-section">
      <div class="home-container science-grid">
        <div class="media-placeholder science-portrait">
          <div class=" default-media">
              <video
                class="hero-video"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
              >
                <source src="/media/0bf7bc18-71ca-4e63-85a5-7001d1652cc9.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
        </div>

        <div class="science-quote">
          <b>Faster throughput —</b> more ink removed per session <br/>
          <b>Safer multi-pass protocol —</b> less thermal stress <br/>
          <b>Predictable planning —</b> improved patient satisfaction
        </div>

        <div class="science-copy mx-auto">
          

          <p>
            CLEARiT is engineered around how the body actually clears ink, maximizing each treatment window and improving consistency between visits through disciplined preparation, planning and execution.
          </p>

          <p class="" style="padding-top: clamp(30px, 4.5vw, 60px);">Removal, guided by science, not guesswork.</p>

          <router-link to="/welcome-book" class="outline-button ">
              LEARN MORE
          </router-link>

        </div>
      </div>

      <div class="home-container control-message">
        <p class="control-heading">
          MOST PROBLEMS DON'T COME FROM TOO LITTLE POWER.<br />
          THEY COME FROM TOO LITTLE CONTROL.
        </p>

        <div class="blue-line"></div>

        <router-link to="/contact-us" class="solid-button">
            BOOK CONSULTATION
        </router-link>

        <img
            alt="Logo"
            loading="lazy"
            decoding="async"
            class=""
            style="color: transparent"
            src="/media/82fea67e-691a-46b4-81d6-f9b5eef6f74e 2.png"
          />
      </div>
    </section>

    <!-- Session -->
    <section id="session" class="session-section ">
      <div class="home-container background-card">
        <div class="split-copy">
          <span class="section-kicker">Your Laser Tattoo Removal Session</span>

          <p>
            Laser tattoo removal is not guesswork. <br/>It is a structured process built around how ink behaves in the skin and how skin heals.
          </p>

          <p>
            Our role is to guide that process carefully and deliberately.
          </p>

          <p>
            Each treatment begins with a professional assessment of your tattoo including pigment type, density, depth, and placement, so your session settings are performed with intention, not approximation.
          </p>

          <router-link to="/contact-us" class="solid-button" style="margin-top: clamp(60px, 8vw, 120px);">
              BOOK CONSULTATION
          </router-link>

        </div>

        <div class="preparation-copy mx-auto">
          <span class="section-kicker">How to Prepare for Laser Tattoo Removal</span>
          <p>Proper skin preparation helps ensure consistent laser response and supports predictable healing between sessions.</p>

          <p><br/>Before your appointment:</p>

          <ul>
            <li>Avoid tanning, sun exposure, and self tanning products for at least two weeks prior to treatment</li>
            <li>Use daily SPF on the area that may be exposed to sunlight</li>
            <li>Pause exfoliants, retinoids, peels, and other potentially irritating products in the treatment zone, keeping the skin intact</li>
            <li>Arrive with clean, product free skin (no makeup, lotion, or sunscreen on the area)</li>
          </ul>

          <p class="preparation-note">
            <br/>Your CLEARiT clinician will review your tattoo and skin condition and provide session specific pre-care guidance.
          </p>

          <p class="preparation-note">
            Preparation is part of the process, it helps ensure treatment accuracy, skin safety, and consistent progress across sessions.
          </p>

          <a href="#contact" class="outline-button">Get Started</a>
        </div>

      </div>
    </section>

    <BeforeAfterModule />
    <FindUs />
    <FAQ />

  </main>
</template>

<script>
export default {
  name: 'HomeView',

  data() {
    return {
      heroFeatures: [
        { title: 'Advanced Technology' },
        { title: 'Refined Methodology' },
        { title: 'Managed Experience' }
      ],

      methodItems: [
        {
          number: '01',
          title: 'Advanced Technology',
          text: 'Faster throughput — more ink removed per session.'
        },
        {
          number: '02',
          title: 'Refined Methodology',
          text: 'Safer multi-pass protocol — less thermal stress.'
        },
        {
          number: '03',
          title: 'Managed Experience',
          text: 'Predictable planning — improved patient satisfaction.'
        }
      ],
      
    }
  }
}
</script>

<style scoped>
@import '../css/home.css';
</style>
