<script setup>
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

    <section class="default-section Hero" style="margin-top: clamp(-60px, -8vw, -120px);">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius tl-Hero-content BG-GradientGrayToWhite">
          <div class="tl-Hero-Topics">
            <div class="tl-Hero-Topics__image">
              <img
                alt="Logo"
                loading="lazy"
                decoding="async"
                class="img-overflow-top"
                src="/media/b 62fe4efe-67bf-462e-9371-3b8fc7b3d96f-2026-08-21 1.png"
              />
            </div>

            <div class="tl-Hero-Topics__content">
              <p class="tl-hero-p1 colorBlack underline-blue">
                YOUR SKIN.<br />
                YOUR CONFIDENCE.<br />
                OUR PRIORITY.
              </p>
            </div>
          </div>
          <p class="tl-hero-p2 colorGray">
            THE SKIN FIRST PHILOSOPHY
          </p>

          <div class="blue-line" style="width:99%"></div>
        </div>
      </div>
    </section>

    <section class="default-section OurMission">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius tl-OurMission-content ">
          <div class="tl-OurMission-Topics mx-auto">
            <p class="tl-OurMission-p1 colorGray">
              Our mission is simple: 
            </p>
            <p class="tl-OurMission-p2 colorGray mx-auto">
              Deliver tattoo removal in significantly fewer sessions, with reduced cost, and less pain.
            </p>

            <p class="tl-OurMission-p3 colorGray mx-auto">
              At CLEARiT, we believe meaningful skin transformation begins beneath the surface where precision technology and thoughtful technique work together to create visible change over time.
            </p>

            <p class="tl-OurMission-p4 colorGray mx-auto">
              Our approach is guided by science, consistency, and respect for the skin’s natural process.
            </p>

            <p class="tl-OurMission-p5 colorGray mx-auto">
              Born from extensive clinical research, CLEARiT was engineered with one intention:
            </p>

            <p class="tl-OurMission-p6 colorGray mx-auto">
              Make the tattoo-removal journey safer, faster, and more predictable.
            </p>
            <a href="#contact" class="solid-button mx-auto BookConsultationBtn" style=" ">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>

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

            <div class="default-split-content bg-image default-content-border-radius tl-Technology-step">
              <div class="default-split-content__image" style="width:30%">
                <img
                  alt="Logo"
                  loading="lazy"
                  decoding="async"
                  class="img-overflow-both"
                  src="/media/Clearit step 1 4.png"
                />
              </div>

              <div class="default-split-content__content" style="width:70%">
                <p class="tl-Technology-p3 colorBlue">
                  Step 1: Clean
                </p>

                <p class="tl-Technology-p4 colorGray">
                  A pre-treatment exfoliating gel that reduces surface moisture and prepares the stratum corneum.
                </p>

                <p class="tl-Technology-p5 colorGray">
                  This allows for safe, consistent, and precise laser treatments.
                </p>
              </div>
            </div>
          </div>


          <div class="tl-TechnologyStep1-Topics mx-auto">
              <div class="team-grid">

                <!-- Card 1 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/envato-labs-image-edit-26 1.png"
                      alt="Richard Goldfarb, M.D."
                      loading="lazy"
                    />
                  </div>

                  <div class="team-card__content">

                    <h3 class="team-card__name">
                      CLEARiT Clean
                    </h3>

                    <p class="team-card__description">
                     Strategically targets cellular aggregation on the skin’s surface to refine texture with precision.
                    </p>

                  </div>

                </article>


                <!-- Card 2 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/CLARiT About Product 1.png"
                      alt="Team Member"
                      loading="lazy"
                    />
                  </div>

                  <div class="team-card__content">

                    <h3 class="team-card__name">
                      Gentle Exfoliation
                    </h3>

                    <p class="team-card__description">
                      Our proprietary complex helps refine skin texture and supports natural skin renewal revealing smoother skin.
                    </p>

                  </div>

                </article>


                <!-- Card 3 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/envato-labs-image-edit-34 1.png"
                      alt="Team Member"
                      loading="lazy"
                    />
                  </div>

                  <div class="team-card__content">

                    <h3 class="team-card__name">
                      Optimized Surface
                    </h3>

                    <p class="team-card__description">
                      Skin is prepped and refined for a smooth, consistent treatment experience. 
                    </p>

                  </div>

                </article>

              </div>
          </div>


          <div class="default-split-content bg-image default-content-border-radius" style="margin-top: clamp(80px, 13vw, 200px);">
              <div class="default-split-content__image" style="width 70%;text-align:right;">
                <p class="tl-Technology-p3 colorBlue" style="width: min(540px, 100%);">
                  Step 2: Condition
                </p>

                <p class="tl-Technology-p4 colorGray" style="width: min(540px, 100%);">
                  An oil-based topical that absorbs into the dermis and helps prepare the microenvironment. This reduces steam (frosting), minimizing thermal trauma and improving pigment access.
                </p>
              </div>

              <div class="default-split-content__content" style="width:20%">
                <img
                  alt="Logo"
                  loading="lazy"
                  decoding="async"
                  class="img-overflow-both"
                  src="/media/clear 2 condition 5.png"
                />
                
              </div>
            </div>
          </div>


          <div class="tl-TechnologyStep2-Topics mx-auto">
              <div class="team-grid">

                <!-- Card 1 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/image-gen-36 1.png"
                      alt="Richard Goldfarb, M.D."
                      loading="lazy"
                    />
                  </div>

                  <div class="team-card__content">
                    <p class="team-card__description">
                     A biomimetic lipid oil is designed to penetrate and blend within the skin’s natural layers.
                    </p>

                  </div>

                </article>


                <!-- Card 2 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/Group 59 1.png"
                      alt="Team Member"
                      loading="lazy"
                    />
                  </div>

                  <div class="team-card__content">

                    <p class="team-card__description">
                      Conditioning the skin regulates surface moisture, leaving the skin balanced.
                    </p>

                  </div>

                </article>


                <!-- Card 3 -->
                <article class="team-card">

                  <div class="team-card__image">
                    <img
                      src="/media/envato-labs-image-edit-39 2.png"
                      alt="Team Member"
                      loading="lazy"
                    />
                  </div>

                  <div class="team-card__content">

                    <p class="team-card__description">
                      The lipid layer optimizes the skin surface ensuring pigments are dispersed evenly.
                    </p>

                  </div>

                </article>

              </div>



        </div>
      </div>
    </section>

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
              <span class="colorBlue">Supports</span> even pigment dispersion.
            </p>

            <img
                src="/media/7f0be2b9-ba10-45dd-afa7-5a2588ffa5f5.png"
                alt="Team Member"
                loading="lazy"
                width="50%"
                class="img-overflow-bottom-right small-hide"
              />
          </div>
        </div>
      </div>
    </section>

    <section class="default-section RemovalPhilosophy">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius tl-RemovalPhilosophy-content bg-image">
          <div class="tl-RemovalPhilosophy-Topics mx-auto">
            <p class="tl-RemovalPhilosophy-p1 colorBlack">
              The CLEARiT 
              
            </p>
            <p class="tl-RemovalPhilosophy-p2 colorBlue">Removal Philosophy</p>

            <p class="tl-RemovalPhilosophy-p3 colorGray mx-auto">
              We take a smarter, more methodical approach to laser tattoo removal. The combination of our specialized skin preparation and reverse tattoo techniques, we deliver consistent, precise treatment in every session, resulting in higher client satisfaction.
            </p>
          </div>

          <div class="default-split-content bg-image default-content-border-radius tl-RemovalPhilosophy-content2" style="">
            <div class="" style="padding-left: clamp(10px, 1.5vw, 20px);">
              <p class="tl-RemovalPhilosophy-p4 colorGray">CLEAR<span class="colorBlue">i</span>T APP</p>
              <div class="blue-line" style="width:60px;margin-left:0px;margin-top:clamp(5px, 0.8vw, 10px);"></div>
              <p class="tl-RemovalPhilosophy-p5 colorBlue">Smart. Simple. Predictable.</p>

              <p class="tl-RemovalPhilosophy-p6 colorGray">Removes guesswork, ensures faster, more consistent treatments.</p>
              <p class="tl-RemovalPhilosophy-p7 colorGray"></p>
            </div>
          </div>

          <div>
            <p class="tl-RemovalPhilosophy-p8 colorBlack">
              CLEAR<span class="colorBlue">i</span>T Diagnostic App™ (CDA)
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
                  The CDA leverages AI and digital imaging to take the guesswork out of laser therapy. 
                </p>
              </div>
            </div>

            <div class="default-split-content default-content-border-radius" style="padding:0px clamp(10px, 1.5vw, 20px)">
              <div class="default-split-content__image small-full">
                <p class="tl-RemovalPhilosophy-p11 colorGray">
                  By analyzing ink colors, the CDA matches pigments to specific laser wavelengths. The app then analyzes the depth of the pigment to deliver a data-driven treatment plan. The CDA will track progress in real-time, helping to achieve better results through scientific accuracy. (Launching late 2026). 
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

            <p class="tl-RemovalPhilosophy-p13 mx-auto colorGray">
              CLEARiT’s 2-step topical, CDA, and products in development form the backbone of a new, systematic approach to tattoo removal. Gone are the days of indiscriminate lasering. 
            </p>

            <p class="tl-RemovalPhilosophy-p14 mx-auto colorGray">
              The CLEARiT reverse tattooing technique discreetly targets tattoo particles in sequence.
            </p>

            <p class="tl-RemovalPhilosophy-p15 mx-auto colorGray">
              This approach reduces the number and intensity of laser treatments, accelerating the path to clear skin. Through targeted treatments, we prioritize skin health, pliability, and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>

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