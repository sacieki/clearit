<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'
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
            src="/media/hm-vdo02.mp4"
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
              <ScrollReveal>
                <p class="hero-lead mx-auto colorBlue">
                  CLEARiT exists to redefine the tattoo removal experience. 
                  <br/><br/>We bring science, technology, treatment methodology and practitioner expertise together to create a more informed, connected and consistent approach to tattoo removal.
                </p>
              </ScrollReveal>

              <!--
              <ScrollReveal :delay="200">
                <p class="hero-body mx-auto">
                  By conditioning and priming the skin,<br />
                  CLEARiT helps the laser target ink more effectively, enabling safer,
                  faster, and more predictable tattoo-removal outcomes.
                </p>
              </ScrollReveal>
              -->
              
              <img
                  alt="image"
                  width="100%"
                  loading="lazy"
                  decoding="async"
                  class=""
                  style="margin-top: clamp(60px, 8vw, 120px);"
                  src="/media/hm-pic02.png"
                />

              <!--
              <div class="hero-feature-grid mx-auto">
                
                <ScrollReveal
                  v-for="(feature, index) in heroFeatures"
                  :key="feature.title"
                  :delay="200 + (index * 100)"
                >
                  <article class="feature-card mx-auto">
                    <span>{{ feature.title }}</span>
                  </article>
                </ScrollReveal>
                
                
              </div>
              -->
            </div>
          </div>
        </div>
      </section>
    


    <!-- Science / positioning -->
    
      <section class="science-section">
        <div class="home-container">
          <div class="media-placeholder science-portrait" >
            <ScrollReveal :delay="500">
              <div class=" default-media hm-vdo-size" style="height: auto;max-height: auto;">
                  <video
                    class="hero-video hm-vdo-fullscale"
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="auto"
                    height="250px"
                  >
                    <source src="/media/hm-vdo01.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
            </ScrollReveal>
          </div>

          <div class="science-quote">
            <ScrollReveal :delay="600">
              <b>Faster —</b> more ink removed per session <br/>
            </ScrollReveal>

            <ScrollReveal :delay="650">
              <b>Safer —</b> less thermal stress <br/>
            </ScrollReveal>

            <ScrollReveal :delay="700">
              <b>Predictable —</b> improved patient satisfaction
            </ScrollReveal>
          </div>

          <div class="science-copy mx-auto">
            
            <ScrollReveal :delay="800">
              <p class="" style="padding-top: clamp(30px, 4.5vw, 60px);">
                CLEARiT is engineered around how the body actually clears ink, maximizing each treatment session and improving consistency between visits through disciplined preparation, planning and execution.
              </p>
            </ScrollReveal>

            <ScrollReveal :delay="900">
              <p class="" style="padding-top: clamp(30px, 4.5vw, 60px);">Removal, guided by science, not guesswork.</p>
            </ScrollReveal>

          </div>
        </div>

        <div class="home-container control-message">
          <div class="blue-line"></div>

          <ScrollReveal :delay="1050">
            <router-link to="/welcome-book" class="solid-button">
                LEARN MORE
            </router-link>
          </ScrollReveal>

          <img
              alt="Logo"
              loading="lazy"
              decoding="async"
              class=""
              style="color: transparent"
              src="/media/hm-pic01.png"
            />
        </div>
      </section>
    


    <!-- Session -->
    
      <section id="session" class="session-section ">
        <div class="home-container background-card">
          <div class="split-copy">
            <ScrollReveal :delay="1150">
              <span class="section-kicker">Your Laser Tattoo Removal Session</span>
            </ScrollReveal>

            <ScrollReveal :delay="1200">
              <p>
                Laser tattoo removal using the CLEARiT method is not guesswork. <br/><br/>It is a structured process built around how ink behaves in the skin and how skin heals.
              </p>
            </ScrollReveal>

            <ScrollReveal :delay="1250">
              <p>
                Our role is to guide that process carefully and deliberately.
              </p>
            </ScrollReveal>

            <ScrollReveal :delay="1300">
              <p>
                Each treatment begins with a professional assessment of your tattoo including ink type, density, depth, and placement, so your laser settings are determined with intention, not approximation.
              </p>
            </ScrollReveal>

            <ScrollReveal :delay="1350">
              <router-link to="/contact-us" class="solid-button" style="margin-top: clamp(60px, 8vw, 120px);margin-bottom: clamp(20px, 4.0vw, 60px);">
                  BOOK CONSULTATION
              </router-link>
            </ScrollReveal>
          </div>

          <div class="preparation-copy mx-auto">
            <ScrollReveal :delay="1400">
              <span class="section-kicker">How to Prepare for Laser Tattoo Removal</span>
            </ScrollReveal>

            <ScrollReveal :delay="1450">
              <p>Proper skin preparation helps ensure consistent laser response and supports predictable healing between sessions.</p>
            </ScrollReveal>

            <ScrollReveal :delay="1500">
              <p><br/>Before your appointment:</p>
            </ScrollReveal>

            <ScrollReveal :delay="1550">
              <ul>
                <li>Avoid tanning, sun exposure, and self tanning products for at least two weeks prior to treatment</li>
                <li>Use daily SPF on the area that may be exposed to sunlight</li>
                <li>Pause exfoliants, retinoids, peels, and other potentially irritating products in the treatment zone, keeping the skin intact</li>
                <li>Arrive with clean, product free skin (no makeup, lotion, or sunscreen on the area)</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal :delay="1600">
              <p class="preparation-note">
                <br/>Your CLEARiT practitioner will review your tattoo and skin condition and provide session specific pre-care guidance.
              </p>
            </ScrollReveal>
            <ScrollReveal :delay="1750">
              <p class="preparation-note">
                Preparation is part of the process, it helps ensure treatment accuracy, skin safety, and consistent progress across sessions.
              </p>
            </ScrollReveal>
            <ScrollReveal :delay="1800">
              <router-link
                to="/contact-us"
                aria-label="Contact us"
                class="outline-button"
                style="letter-spacing: .04em;text-transform: uppercase;"
              >
                Get Started
              </router-link>
            </ScrollReveal>
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
