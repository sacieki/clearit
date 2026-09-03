```vue
<template>

  <div class="faq-page" style="margin-top: clamp(-80px, -13vw, -200px);">

    <!-- ================================= -->
    <!-- PAGE HEADER -->
    <!-- ================================= -->

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


    <!-- ================================= -->
    <!-- DESKTOP TABS -->
    <!-- ================================= -->

    <div class="faq-tabs-wrapper">

      <div class="faq-tabs">

        <button
          v-for="tab in faqSections"
          :key="tab.id"
          ref="faqTabs"
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


    <!-- ================================= -->
    <!-- DESKTOP FAQ -->
    <!-- ================================= -->

    <section class="faq-desktop">

      <div class="faq-container">

        <FaqAccordion
          :items="currentSection.items"
        />

      </div>

    </section>


    <!-- ================================= -->
    <!-- MOBILE FAQ -->
    <!-- ================================= -->

    <section class="faq-mobile">

      <div
        v-for="section in faqSections"
        :key="section.id"
        class="mobile-faq-section"
      >

        <h2>
          {{ section.title }}
        </h2>

        <FaqAccordion
          :items="section.items"
        />

      </div>

    </section>


    <!-- ================================= -->
    <!-- CONTACT -->
    <!-- ================================= -->

    <p class="faq-contact">

      Still have questions?

      <router-link to="/contact-us">
        Contact Us
      </router-link>

    </p>

  </div>

</template>


<script>

import { nextTick } from "vue";
import FaqAccordion from "@/components/FaqAccordion.vue";

export default {

  name: "FaqView",

  components: {
    FaqAccordion
  },


  data() {

    return {

      activeTab: "about",

      indicatorLeft: 0,

      indicatorWidth: 0,


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
                "CLEARiT treatments are delivered by licensed practitioners authorized to perform laser tattoo removal under applicable law."
              ]
            },


            {
              question:
                "Can CLEARiT completely remove my tattoo?",

              answer: [
                "Many tattoos can be significantly reduced or fully cleared, Ink composition, depth, color mix, and skin response all influence the final outcome. We set removal goals based on what is technically achievable while protecting tissue integrity."
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
                "Arrive with clean skin and no active sun exposure on the tattooed area. Bring a list of any medications or skin conditions you'd like to discuss."
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
                "You can book online through our website or call us at (+1) 877-55-CLEAR (25327). Same-week appointments are often available."
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
                "Pricing is based on tattoo size and complexity. We provide a detailed quote during your consultation."
              ]
            },


            {
              question:
                "Does CLEARiT accept insurance for treatments?",

              answer: [
                "Tattoo removal is considered an elective cosmetic procedure and is generally not covered by insurance."
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
                "Laser energy is delivered in short pulses that fragment ink particles beneath the skin. Your immune system then clears the fragmented ink over the time following each session."
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
                "Does The CLEARiT Method of Tattoo Removal work on all ink colors?",

              answer: [
                "Yes, the CLEARiT Method works on all Ink colors."
              ]
            },


            {
              question:
                "How many treatments will I need?",

              answer: [
                "Using the CLEARiT Method of Tattoo Removal, the number of treatments will be determined during your consultation."
              ]
            }

          ]
        }

      ]

    };

  },


  computed: {

    /* ========================= */
    /* CURRENT SECTION */
    /* ========================= */

    currentSection() {

      return this.faqSections.find(
        section => section.id === this.activeTab
      );

    },


    /* ========================= */
    /* INDICATOR */
    /* ========================= */

    indicatorStyle() {

      return {

        width: `${this.indicatorWidth}px`,

        transform: `translateX(${this.indicatorLeft}px)`

      };

    }

  },


  mounted() {

    this.updateIndicator();

    window.addEventListener(
      "resize",
      this.updateIndicator
    );

  },


  beforeUnmount() {

    window.removeEventListener(
      "resize",
      this.updateIndicator
    );

  },


  methods: {

    /* ========================= */
    /* SELECT TAB */
    /* ========================= */

    async selectTab(id) {

      this.activeTab = id;

      await nextTick();

      this.updateIndicator();

    },


    /* ========================= */
    /* UPDATE INDICATOR */
    /* ========================= */

    updateIndicator() {

      const tabs = this.$refs.faqTabs;

      if (!tabs) {
        return;
      }


      const activeIndex =
        this.faqSections.findIndex(
          section => section.id === this.activeTab
        );


      const activeTab = tabs[activeIndex];

      if (!activeTab) {
        return;
      }

      const tabsContainer = activeTab.parentElement;

      const tabRect = activeTab.getBoundingClientRect();

      const containerRect = tabsContainer.getBoundingClientRect();


      this.indicatorWidth =
        activeTab.offsetWidth;


      this.indicatorLeft =
        tabRect.left - containerRect.left;

    }

  }

};

</script>


<style scoped>

/* ================================= */
/* PAGE */
/* ================================= */

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

  font-size: clamp(32px, 5vw, 42px);

  font-weight: 400;

  line-height: 1.4;

  letter-spacing: 0.02em;

}


.faq-header p {

  color: #989898;

  font-size: clamp(14px, 1.5vw, 17px);

  line-height: 1.4;

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

  width: 100%;

}


.faq-tab {

  position: relative;

  padding: 0 0 12px;

  white-space: nowrap;

  border: none;

  background: none;

  cursor: pointer;

  color: #5c5a5a;

  font-family: Figtree, sans-serif;

  font-size: clamp(14px, 1.5vw, 17px);

  font-weight: 400;

  line-height: 1.4;

  letter-spacing: 0.025em;

  transition: color 0.2s ease;

}


.faq-tab:hover {

  color: #1f1f1f;

}


.faq-tab.active {

  color: #1f1f1f;

}


/* ================================= */
/* TAB LINE */
/* ================================= */

.faq-tab-line {

  position: relative;

  width: 100%;

  height: 3px;

  border-radius: 999px;

  background: #e6f3f8;

}


.faq-tab-indicator {

  position: absolute;

  top: -2px;

  left: 0;

  height: 3px;

  border-radius: 999px;

  background: #1f1f1f;

  pointer-events: none;

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
/* CONTACT */
/* ================================= */

.faq-contact {

  width: 250px;

  margin: 80px auto 0;

  text-align: center;

  color: #5c5a5a;

}


.faq-contact a {

  color: #5c5a5a;

  text-decoration: none;

  transition: color 0.2s ease;

}


.faq-contact a:hover {

  color: #29bcfb;

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

    font-size: clamp(24px, 7vw, 30px);

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

    font-size: clamp(20px, 5vw, 24px);

    font-weight: 400;

    line-height: 1.4;

    letter-spacing: 0.02em;

  }


  .faq-contact {

    margin-top: 40px;

  }

}

</style>