<script setup>
import BeforeAfterModule from '../components/BeforeAfterModule.vue'
import FindUs from '../components/FindUs.vue'
import FAQ from '../components/FAQs.vue'
import BookANAppointment from '../components/BookANAppointment.vue'
</script>

<template>
  <main class="home-page">
    <!-- Hero -->
    <section class="hero-section">
      <div class="home-container hero-inner pt-5">
        <div class="hero-visual media-placeholder hero-products">
          <img
            alt="Logo"
            width="auto"
            loading="lazy"
            decoding="async"
            class="hero-visual-img"
            style=""
            src="/media/7f0be2b9-ba10-45dd-afa75a2588ffa5f5.png"
          />
        

          <div class="hero-copy">
            <div class="eyebrow-title">
              <span>TATTOO REMOVAL</span>
              <strong>REDEFINED</strong>
            </div>

            <p class="hero-lead mx-auto">
              CLEARiT is a science-driven <br />
              skin preparation system <br />
              designed to optimize <br />
              how skin behaves <br />
              between laser sessions.
            </p>

            <p class="hero-body mx-auto">
              By conditioning and priming the skin, <br />
              CLEARiT helps the laser target ink more effectively, enabling safer, <br />
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

    <!-- Science / positioning -->
    <section class="science-section">
      <div class="home-container science-grid">
        <div class="media-placeholder science-portrait">
          <img
            alt="Logo"
            loading="lazy"
            decoding="async"
            class="block !w-[90%] !max-w-[90%] mx-auto"
            src="/media/60c1bc6905b3fcab37c2b671307aed0d82eb7c46.gif"
          />
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

          <a href="#session" class="outline-button button-radius">LEARN MORE</a>
        </div>
      </div>

      <div class="home-container control-message">
        <p class="control-heading">
          MOST PROBLEMS DON'T COME FROM TOO LITTLE POWER.<br />
          THEY COME FROM TOO LITTLE CONTROL.
        </p>

        <div class="blue-line"></div>

        <a href="#contact" class="solid-button">Book Consultation</a>

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

          <a href="#contact" class="outline-button button-radius">BOOK CONSULTATION</a>
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
    <BookANAppointment />

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
