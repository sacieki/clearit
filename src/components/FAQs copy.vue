<template>

  <div class="faq-page">

    <!-- PAGE HEADER -->
    <section class="faq-header">

      <h1>
        Frequently Asked Questions
      </h1>
      <!--
      <p>
        Find answers to common questions about CLEARiT,
        consultations, appointments, pricing, and treatment.
      </p>
      -->
    </section>


    <!-- ============================= -->
    <!-- DESKTOP TABS -->
    <!-- ============================= -->

    <div class="faq-tabs-wrapper">

      <div class="faq-tabs">

        <button
          v-for="tab in faqSections"
          :key="tab.id"
          type="button"
          class="faq-tab"
          :class="{ active: activeTab === tab.id }"
          @click="selectTab(tab.id)"
        >
          {{ tab.title }}
        </button>

      </div>


      <!-- TAB LINE -->

      <div class="faq-tab-line">

        <div
          class="faq-tab-indicator"
          :style="indicatorStyle"
        ></div>

      </div>

    </div>


    <!-- ============================= -->
    <!-- DESKTOP FAQ -->
    <!-- ============================= -->

    <section class="faq-desktop">

      <div class="faq-container">

        <FaqAccordion
          :items="currentSection.items"
        />

      </div>

    </section>


    <!-- ============================= -->
    <!-- MOBILE FAQ -->
    <!-- ============================= -->

    <section class="faq-mobile">

      <div
        v-for="section in faqSections"
        :key="section.id"
        class="mobile-faq-section"
      >

        <!-- CATEGORY -->

        <h2>
          {{ section.title }}
        </h2>


        <!-- QUESTIONS -->

        <FaqAccordion
          :items="section.items"
        />

      </div>

    </section>

    <p class="mx-auto" style="width:250px;transform:translateY(80px);text-align:center;color:#5C5A5A;">
      Still have questions?
      <a href="/contact-us" class="" style="color:#5C5A5A;">Contact Us</a>
    </p>
  </div>

</template>


<script>

import FaqAccordion from "@/components/FaqAccordion.vue";

export default {

  name: "FaqView",

  components: {
    FaqAccordion
  },


  data() {

    return {

      activeTab: "about",


      faqSections: [

        /* ========================= */
        /* ABOUT */
        /* ========================= */

        {
          id: "about",

          title: "About CLEARiT",

          items: [

            {
              question:
                "What makes CLEARiT different?",

              answer: [
                "CLEARiT believes tattoo removal should be engineered, not improvised. Each session is guided by how ink behaves in the skin and how the skin responds between treatments.",

                "Our protocol focuses on preparation, precision laser settings, and skin conditioning to support more consistent ink fragmentation and clearance. We prioritize measured progress, skin integrity, and clinical discipline.",

                "Every step, before, during, and after treatment is structured to maximize ink removal."
              ]
            },


            {
              question:
                "Are CLEARiT providers licensed and experienced?",

              answer: [
                "Yes. CLEARiT treatments are performed by licensed medical professionals who are trained specifically in laser tattoo removal.",

                "Our providers follow structured treatment protocols, calibrated laser parameters, and skin safety guidelines every session. Beyond operating the device, they are trained to assess pigment behavior and skin condition, then adjust the plan to keep results consistent.",

                "Experience matters in laser tattoo removal. Provider judgment, timing between sessions, and skin evaluation all play a role in achieving predictable, responsible progress."
              ]
            },


            {
              question:
                "Can CLEARiT completely remove my tattoo?",

              answer: [
                "Many tattoos can be significantly reduced or fully cleared, but complete removal cannot be guaranteed in every case. Ink composition, depth, color mix, and skin response all influence the final outcome. We set removal goals based on what is technically achievable while protecting tissue integrity."
              ]
            }

          ]
        },


        /* ========================= */
        /* CONSULTATIONS */
        /* ========================= */

        {
          id: "consultations",

          title: "Consultations",

          items: [

            {
              question:
                "Are consultations free?",

              answer: [
                "Yes, initial consultations at CLEARiT are complimentary. We want to ensure you have all the information you need before committing to a treatment plan."
              ]
            },


            {
              question:
                "What happens during a consultation?",

              answer: [
                "During your consultation, a licensed provider will assess your tattoo, discuss your removal goals, explain the process, and outline a personalized treatment plan."
              ]
            },


            {
              question:
                "How do I prepare for my consultation?",

              answer: [
                "Arrive with clean, moisturized skin and no active sun exposure on the tattooed area. Bring a list of any medications or skin conditions you'd like to discuss."
              ]
            }

          ]
        },


        /* ========================= */
        /* APPOINTMENTS */
        /* ========================= */

        {
          id: "appointments",

          title: "Appointments",

          items: [

            {
              question:
                "How do I book an appointment?",

              answer: [
                "You can book online through our website or call your nearest CLEARiT location directly. Same-week appointments are often available."
              ]
            },


            {
              question:
                "Can I reschedule?",

              answer: [
                "Yes. We ask for at least 48 hours notice for rescheduling to avoid a cancellation fee."
              ]
            },


            {
              question:
                "What should I bring to my appointment?",

              answer: [
                "A valid photo ID and any relevant medical history or documentation regarding the tattooed area. Wear loose, comfortable clothing that provides easy access to the treatment site."
              ]
            },


            {
              question:
                "How far in advance should I book?",

              answer: [
                "We recommend booking at least one week in advance, though we do accommodate last-minute appointments based on availability."
              ]
            },


            {
              question:
                "Will I see the same provider each visit?",

              answer: [
                "We make every effort to assign you a consistent provider. All CLEARiT providers follow the same structured protocols, so continuity of care is maintained regardless."
              ]
            }

          ]
        },


        /* ========================= */
        /* PRICING */
        /* ========================= */

        {
          id: "pricing",

          title: "Pricing & Promotions",

          items: [

            {
              question:
                "How much do CLEARiT treatments cost?",

              answer: [
                "Pricing is based on tattoo size, complexity, and number of sessions required. We provide a detailed quote during your consultation."
              ]
            },


            {
              question:
                "Does CLEARiT accept insurance for treatments?",

              answer: [
                "Tattoo removal is considered an elective cosmetic procedure and is generally not covered by insurance. We can provide documentation if needed for FSA/HSA reimbursement."
              ]
            },


            {
              question:
                "Do you offer financing or payment plans?",

              answer: [
                "Yes. CLEARiT offers flexible payment plans through trusted financing partners. Ask about options during your consultation."
              ]
            }

          ]
        },


        /* ========================= */
        /* TREATMENT */
        /* ========================= */

        {
          id: "treatment",

          title: "Treatment",

          items: [

            {
              question:
                "How does laser tattoo removal work?",

              answer: [
                "Laser energy is delivered in short pulses that fragment ink particles beneath the skin. Your immune system then clears the fragmented ink over the weeks following each session."
              ]
            },


            {
              question:
                "Which lasers do you use?",

              answer: [
                "CLEARiT uses FDA-cleared Q-switched and picosecond lasers, selected based on your ink colors and skin type to optimize clearance safely."
              ]
            },


            {
              question:
                "Does laser tattoo removal work on all ink colors?",

              answer: [
                "Most colors respond well to laser treatment. Dark blues and blacks typically clear most efficiently. Some pigments like light greens and yellows may require specialized wavelengths."
              ]
            },


            {
              question:
                "How many treatments will I need?",

              answer: [
                "Most clients require 6–10 sessions, spaced 6–8 weeks apart. The exact number depends on ink depth, color, skin type, and immune response."
              ]
            },


            {
              question:
                "How long does it take to see results?",

              answer: [
                "Fading becomes visible after 2–3 sessions. Significant clearance is typically achieved between sessions 5–8, depending on the tattoo."
              ]
            }

          ]
        }

      ]

    };

  },


  computed: {

    currentSection() {

      return this.faqSections.find(
        section => section.id === this.activeTab
      );

    },


    indicatorStyle() {

      const index =
        this.faqSections.findIndex(
          section => section.id === this.activeTab
        );

      const width =
        100 / this.faqSections.length;

      return {

        width: `${width}%`,

        left: `${index * width}%`

      };

    }

  },


  methods: {

    selectTab(id) {

      this.activeTab = id;

    }

  }

};

</script>


<style scoped>

.faq-page {
  padding-top: 180px;
  padding-bottom: 100px;

  background: #fff;
}


/* ================================= */
/* HEADER */
/* ================================= */

.faq-header {
  max-width: 830px;

  margin: 0 auto 60px;

  padding: 0 20px;

  text-align: center;
}


.faq-header h1 {

  margin-bottom: 20px;

  color: #1f1f1f;

  font-size: 42px;
  font-weight: 400;

  letter-spacing: 0.02em;

}


.faq-header p {

  color: #989898;

  font-size: 17px;

  line-height: 1.7;

}


/* ================================= */
/* TABS */
/* ================================= */

.faq-tabs-wrapper {

  max-width: 830px;

  margin: 0 auto 40px;

}


.faq-tabs {

  display: flex;

  align-items: flex-end;

  justify-content: center;

  gap: 32px;

}


.faq-tab {

  position: relative;

  padding: 0 0 12px;

  white-space: nowrap;

  border: none;

  background: none;

  cursor: pointer;

  color: #5c5a5a;

  font-size: 17px;

  font-weight: 400;

  letter-spacing: 0.025em;

  transition: color 0.2s ease;

}


.faq-tab:hover {

  color: #1f1f1f;

}


.faq-tab.active {

  color: #1f1f1f;

}


.faq-tab-line {

  position: relative;

  height: 3px;

  border-radius: 999px;

  background: #e6f3f8;

}


.faq-tab-indicator {

  position: absolute;

  top: 0;

  height: 3px;

  border-radius: 999px;

  background: #1f1f1f;

  transition:
    left 0.35s ease,
    width 0.35s ease;

}


/* ================================= */
/* DESKTOP */
/* ================================= */

.faq-desktop {

  display: block;

}


.faq-container {

  max-width: 1328px;

  margin: 0 auto;

  padding: 0 20px;

}


/* ================================= */
/* MOBILE */
/* ================================= */

.faq-mobile {

  display: none;

}


@media (max-width: 767px) {

  .faq-page {

    padding-top: 120px;

    padding-bottom: 60px;

  }


  .faq-header {

    margin-bottom: 40px;

  }


  .faq-header h1 {

    font-size: 30px;

  }


  .faq-header p {

    font-size: 15px;

  }


  /* Hide desktop */

  .faq-desktop {

    display: none;

  }


  .faq-tabs-wrapper {

    display: none;

  }


  /* Show mobile */

  .faq-mobile {

    display: block;

    padding: 0 20px;

  }


  .mobile-faq-section {

    margin-bottom: 50px;

  }


  .mobile-faq-section h2 {

    margin-bottom: 10px;

    color: #1f1f1f;

    font-size: 24px;

    font-weight: 400;

    letter-spacing: 0.02em;

  }

}

</style>