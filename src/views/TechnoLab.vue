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


    <section class="">
        <div class="  ">
          <div class="default-content-border-radius ">
              <div class=" default-media" style="height:calc(100vh - 132px);">
              <video
                class="hero-video"
                autoplay
                muted
                loop
                playsinline
                preload="auto"

                style="height: calc(100vh - 100px);"
              >
                <source src="/media/tn-vdo01.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
    </section>
    

    <ScrollReveal>
      <section class="default-section Hero" style="margin-top: clamp(-60px, -8vw, -120px);">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius tl-Hero-conten">
            
            <p class="tl-hero-p2 colorGray">
              THE SKIN FIRST PHILOSOPHY
            </p>

            <div class="blue-line" style="width:99%"></div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="100">
      <section class="default-section OurMission">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius tl-OurMission-content ">
            <div class="tl-OurMission-Topics mx-auto">
              <!--
              <p class="tl-OurMission-p1 colorGray">
                Our mission is simple: 
              </p>
              <p class="tl-OurMission-p2 colorGray mx-auto">
                Deliver tattoo removal in significantly fewer sessions, with reduced cost, and less pain.
              </p>
              -->
              <p class="tl-OurMission-p3 colorGray mx-auto">
                At CLEARiT, we believe meaningful skin transformation begins beneath the surface where precision technology and thoughtful technique work together to create visible change over time.
              </p>

              <p class="tl-OurMission-p4 colorGray mx-auto">
                Our approach is guided by science, consistency, and respect for the skin’s natural process.
              </p>

              <p class="tl-OurMission-p5 colorGray mx-auto">
                Born from extensive clinical research, CLEARiT METHOD OF TATTOO REMOVAL is engineered with one intention:
              </p>

              <p class="tl-OurMission-p6 colorGray mx-auto">
                Make the tattoo-removal journey safer, faster, and predictable.
              </p>
              <a href="#contact" class="solid-button mx-auto BookConsultationBtn" style=" ">Book Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

      <section class="default-section Technology">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius tl-Technology-content ">
            <div class="tl-Technology-Topics mx-auto">
              <p class="tl-Technology-p1 colorBlack">
                CLEAR<span class="colorBlue">i</span>T
              </p>
              <p class="tl-Technology-p2 colorBlue">
                Technology
              </p>

              
            </div>

            <img
              alt="Logo"
              loading="lazy"
              decoding="async"
              style="padding-top: clamp(40px, 6vw, 80px);"
              class=""
              src="/media/tn-pic-01.png"
            />
               
            <img
              alt="Logo"
              loading="lazy"
              decoding="async"
              class=""
              style="padding-top: clamp(80px, 12vw, 160px);"
              src="/media/tn-pic-02.png"
            />


          </div>
        </div>
      </section>

    <ScrollReveal :delay="300">
      <section class="default-section TwoStepProtocol">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius tl-TwoStepProtocol-content bg-image fade-top">
            <div class="tl-TwoStepProtocol-Topics mx-auto">
              <p class="tl-TwoStepProtocol-p1 colorBlack">
                The <span class="colorBlue">Two</span>-Step Protocol
              </p>

              <p class="tl-TwoStepProtocol-p2 colorGray">
                <span>Clean → Condition</span> 
                <br/>A coordinated, engineered approach that:
              </p>

              <p class="tl-TwoStepProtocol-p3 colorGray">
                <span class="colorBlue">Optimizes</span> the skin surface.
              </p>

              <p class="tl-TwoStepProtocol-p4 colorGray">
                <span class="colorBlue">Reduces</span> skin friction.
              </p>

              <p class="tl-TwoStepProtocol-p5 colorGray">
                <span class="colorBlue">Supports</span> even ink dispersion.
              </p>

              <img
                  src="/media/ft-pic01.png"
                  alt="Team Member"
                  loading="lazy"
                  width="50%"
                  class="img-overflow-bottom small-hide"
                />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="400">
      <section class="default-section RemovalPhilosophy">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius tl-RemovalPhilosophy-content bg-image">
            <div class="tl-RemovalPhilosophy-Topics mx-auto">
              <p class="tl-RemovalPhilosophy-p1 colorBlack">
                The CLEARiT 
                
              </p>
              <p class="tl-RemovalPhilosophy-p2 colorBlue">Removal Philosophy</p>

              <p class="tl-RemovalPhilosophy-p3 colorGray mx-auto">
                We take a smarter, more methodical approach to laser tattoo removal. Through the combination of our specialized skin preparation and reverse tattoo techniques, we deliver consistent, precise treatment in every session, resulting in higher client satisfaction.
              </p>
            </div>

            <div class="default-split-content bg-image default-content-border-radius tl-RemovalPhilosophy-content2" style="">
              <div class="" style="padding-left: clamp(10px, 1.5vw, 20px);">
                <p class="tl-RemovalPhilosophy-p4 colorGray">CLEAR<span class="colorBlue">i</span>T APP</p>
                <div class="blue-line" style="width:60px;margin-left:0px;margin-top:clamp(5px, 0.8vw, 10px);"></div>
                <p class="tl-RemovalPhilosophy-p5 colorBlue">Smart. Simple. Predictable.</p>

                <p class="tl-RemovalPhilosophy-p6 colorGray">The CLEARiT App brings treatment imaging, documentation and information together in one connected experience, helping practitioners plan, document and follow treatment progression more consistently.</p>
              </div>

              <img
                alt="Logo"
                loading="lazy"
                decoding="async"
                width="50%"
                class="ml-auto"
                src="/media/tn-pic03-01.png"
              />
            </div>

            <div>
              <p class="tl-RemovalPhilosophy-p8 colorBlack">
                The CLEAR<span class="colorBlue">i</span>T App™
              </p>
              <p class="tl-RemovalPhilosophy-p9 colorGray">
                : The Future of <span class="colorBlue">Precision</span> Removal
              </p>

              <div class="default-split-content default-content-border-radius" style="align-items: end;padding:0px clamp(10px, 1.5vw, 20px)">
                <div class="default-split-content__image smallone-full" style="width:30%">
                  <img
                    alt="Logo"
                    loading="lazy"
                    decoding="async"
                    class=""
                    src="/media/Screenshot01.png"
                  />
                </div>

                <div class="default-split-content__content" style="width:70%;">
                  <p class="tl-RemovalPhilosophy-p10 colorGray">
                    The App leverages technology and digital imagery to bring greater clarity and consistency to laser tattoo removal.
                  </p>
                </div>
              </div>

              <div class="default-split-content default-content-border-radius" style="padding:0px clamp(10px, 1.5vw, 20px)">
                <div class="default-split-content__image small-full">
                  <p class="tl-RemovalPhilosophy-p11 colorGray">
                    By analyzing ink colors, the app matches ink to specific laser wavelengths. The app then analyzes intensity of the ink to provide data-driven insight to support the treatment plane. The app will track progress in real-time, helping to achieve better results through scientific accuracy. 
                  </p>
                </div>

                <div class="default-split-content__content small-full">
                  <img
                      alt="Logo"
                      loading="lazy"
                      decoding="async"
                      class=""
                      src="/media/img-p-1.png"
                    />
                </div>
              </div>

            </div>

            <div class="default-content-border-radius mx-auto" style="width:90%;margin-top: clamp(60px, 8vw, 120px);">
              <img
                    alt="Logo"
                    loading="lazy"
                    decoding="async"
                    class=""
                    src="/media/ripple-blur-water-texture-with-shadows-on-white-2026-03-19-06-36-35-utc 9.png"
                  />
            </div>

            <div>
              <p class="tl-RemovalPhilosophy-p12 mx-auto colorBlack">
                The Future of <span class="colorBlue">Tattoo</span> Removal
              </p>
              <!--
              <p class="tl-RemovalPhilosophy-p13 mx-auto colorGray">
                CLEARiT’s 2-step topical, CDA, and products in development form the backbone of a new, systematic approach to tattoo removal. Gone are the days of indiscriminate lasering. 
              </p>

              <p class="tl-RemovalPhilosophy-p14 mx-auto colorGray">
                The CLEARiT reverse tattooing technique discreetly targets tattoo particles in sequence.
              </p>
              -->
              <p class="tl-RemovalPhilosophy-p15 mx-auto colorGray">
                This approach reduces the number and intensity of laser treatments, accelerating the path to clear skin. Through targeted treatments, we prioritize skin health, pliability, and integrity.
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
  name: 'TechnoLab'
}
</script>

<style scoped>
  @import '../css/defaultStyle.css';
  @import '../css/technolab.css';
</style>