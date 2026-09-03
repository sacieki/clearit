<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'
import BeforeAfterModule from '../components/BeforeAfterModule.vue'
import FindUs from '../components/FindUs.vue'
import FAQ from '../components/FAQs.vue'
import ShortContact from '../components/ShortContact.vue'
import Navigator_desktop from '../components/Navigator_desktop.vue'
</script>

<template>
  <main class="default-page">

    <ShortContact />

    <div style="padding-top: clamp(30px, 4.5vw, 60px);">
      <Navigator_desktop  />
    </div>
    <ScrollReveal>
      <section class="default-section Hero" style="margin-top: clamp(-60px, -8vw, -120px);">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius pj-Hero-content BG-GradientGrayToWhite">
            <div class="pj-Hero-Topics">
              <img
                alt="Logo"
                loading="lazy"
                decoding="async"
                class=""
                src="/media/pj-pic-01.png"
              />
            </div>
            <p class="pj-hero-p2 colorGray">
              Your Tattoo Removal Journey
            </p>

            <div class="blue-line" style="width:99%;"></div>

            <p class="pj-hero-p3 colorGray mx-auto">
              A smarter, client first guide to how laser tattoo removal works, how to prepare, and what to expect at every step.
            </p>

            <p class="pj-hero-p4 colorGray mx-auto">
              Engineered with the preparation mindset, the CLEARiT journey focuses on the client experience attention to skin condition during and between sessions allows treatment to be performed more efficiently and safely.
            </p>

            
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="100">
      <section class="default-section OurVision" style="margin-top: clamp(-30px, -4.5vw, -60px);">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius pj-OurVision-content bg-image fade-top">
            <div class="pj-OurVision-Topics mx-auto">
              <div class="default-content-border-radius mx-auto" style="width:90%;margin-top: clamp(60px, 8vw, 120px);">
                <img
                      alt="Logo"
                      loading="lazy"
                      decoding="async"
                      class=""
                      src="/media/ripple-blur-water-texture-with-shadows-on-white-2026-03-19-06-36-35-utc 10.png"
                    />
              </div>

              <div class="pj-hero-description mx-auto">
                <p class="pj-hero-description-p1 colorBlue">
                  Your Laser Tattoo Removal Appointment
                </p>

                <p class="pj-hero-description-p2 colorGray">
                  At a CLEARiT Provider, your tattoo removal journey begins with a personalized evaluation, precision-focused and results driven. No rushed protocols. Just structured treatment built around your skin and your ink.
                </p>

                <p class="pj-hero-description-p3 colorGray">
                  Your journey begins with a consultation. We assess your tattoo’s size, color range, density, and placement, then maps a treatment plan that works specifically for you and your goals.
                </p>

                <p class="pj-hero-description-p4 colorGray">
                  Each session is calibrated for both performance and comfort. Most appointments take under an hour, depending on tattoo size and complexity. Patients often describe the sensation as brief and manageable.
                </p>

                <p class="pj-hero-description-p5 colorGray">
                  After treatment, it is normal to see mild redness, or slight swelling similar to a light sun reaction. These effects typically settle within a few days. Most people return to normal daily activity immediately after treatment. 
                </p>

                <p class="pj-hero-description-p6 colorGray">
                  Over time, your body clears the ink fragments, revealing clearer skin with each step forward.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

  
      <section class="default-section GetStarted">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius pj-GetStarted-content ">
          <div class="pj-GetStarted-Topics mx-auto">
              <p class="pj-GetStarted-p1 colorBlack mx-auto">
                <span class="colorBlue">Get Started</span> in 3 simple steps...
              </p>

              <p class="pj-GetStarted-p2 colorGray mx-auto">
                Starting your tattoo removal journey with CLEARiT is simple, structured, and client first. Here’s how we guide you from your first contact to first treatment with clarity and intention at every step.
              </p>
          </div>

          <div class="pj-TechnologyStep1-Topics mx-auto">
              <div class="team-grid">

                <!-- Card 1 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/pj-c-01.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div class="team-card__content">

                    <h3 class="team-card__name" style="font-size: clamp(16px, 2vw, 18px);">
                      Book Your Free Consultation
                    </h3>

                    <p class="team-card__description">
                     Schedule a quick phone consultation and complete a short intake form. You’ll share details about your tattoo’s size, color range, and placement so we can review your case in advance and prepare intelligently.
                    </p>

                  </div>

                </article>


                <!-- Card 2 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/pj-c-02.png"
                      alt=""
                      loading="lazy"
                      width="50%"
                      style="width:70%;"
                    />
                  </div>

                  <div class="team-card__content">

                    <h3 class="team-card__name" style="font-size: clamp(16px, 2vw, 18px);">
                      Speak With Our Treatment Specialist
                    </h3>

                    <p class="team-card__description">
                      Connect one-on-one with a specialist who will answer your questions, explain the treatment and preparation approach, and map a personalized plan including session strategy and between visit skin prep guidance.
                    </p>

                  </div>

                </article>


                <!-- Card 3 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/pj-c-03.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div class="team-card__content">

                    <h3 class="team-card__name" style="font-size: clamp(16px, 2vw, 18px);">
                      Arrive for Your First Appointment
                    </h3>

                    <p class="team-card__description">
                      Begin your treatment with our expert medical team using precision laser technology and advanced skin protocols. Each session is performed with results, safety, and skin condition in mind never rushed, never generic. 
                    </p>

                  </div>

                </article>

              </div>
          </div>

          <router-link
            to="/contact-us"
            class="solid-button mx-auto BookConsultationBtn"
          >
            Schedule Your Consultation
          </router-link>

        </div>
      </div>
      </section>


    <ScrollReveal :delay="300">
      <section class="default-section TheCLEARiTDifference" style="margin-top: clamp(-60px, -8vw, -120px);">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius pj-TheCLEARiTDifference-content bg-image">
            <div class="pj-TheCLEARiTDifference-Topics mx-auto">
                <p class="pj-TheCLEARiTDifference-p1 colorBlue">
                  The CLEARiT Difference
                </p>

                <p class="pj-TheCLEARiTDifference-p2 colorGray mx-auto">
                  We take a smarter, more methodical approach to laser tattoo removal. The combination of our specialized skin preparation and reverse tattoo techniques, we deliver consistent, precise treatment in every session, resulting in higher client satisfaction.
                </p>

                <img
                  src="/media/water-miracle-bubble-or-cosmetic-liquid-serum-drop-2024-10-18-04-12-05-utc copy 2.png"
                  alt=""
                  loading="lazy"
                  style="height:400px;margin-left: auto;margin-right: -160px;"
                />

                <p class="pj-TheCLEARiTDifference-p3 colorBlack mx-auto">
                  Technology can turn more information into greater treatment intelligence. 
                </p>

                <p class="pj-TheCLEARiTDifference-p3 colorBlack mx-auto">
                  CLEARiT is building technology-enabled tools, designed to support more informed tattoo removal.
                </p>

                <img
                  src="/media/Clearit_Home_img01.png"
                  alt=""
                  loading="lazy"
                  class="img-overflow-bottom"
                  
                />
                <!---style="transform: translateY(clamp(120px, 20vw, 300px));"-->
                  
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="400">
      <section class="default-section Engineered" style="margin-top: clamp(80px, 13vw, 200px);">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius pj-Engineered-content ">
            <div class="pj-Engineered-Topics mx-auto">
                

                <p class="pj-Engineered-p1 mx-auto colorGray">
                  Engineered Around Skin Behavior 
                </p>
                <!---
                <p class="pj-Engineered-p2 colorGray mx-auto">
                  CLEARiT is not a laser, it is what makes the laser work smarter.
                </p>

                <p class="pj-Engineered-p3 colorGray mx-auto">
                  We focus on how skin actually behaves under treatment, optimizing every session so lasers can perform closer to their full potential. 
                </p>

                <div class="pj-TheCLEARiTDifference-ul mx-auto colorGray">
                  <ul >
                    <li>Surface clarity for consistent laser absorption</li>
                    <li>Controlled, repeatable session outcomes </li>
                    <li>Protection and support for treatment-day skin biology</li>
                    <li>Safer, more predictable removal journeys</li>
                  </ul>
                </div>
                --->
                <p class="pj-Engineered-p2ex1 mx-auto colorBlue">
                  CLEARiT is not another laser.
                </p>

                <p class="pj-Engineered-p2ex2 mx-auto colorBlue">
                  We are the method behind the laser.
                </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  




    <BeforeAfterModule/>
    <FindUs />
    <FAQ />
  </main>
</template>

<script>
export default {
  name: 'PatientJourney'
}
</script>

<style scoped>
  @import '../css/defaultStyle.css';
  @import '../css/patientjourney.css';
</style>