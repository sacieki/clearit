<template>
  <div class="faq-list">

    <div
      v-for="(item, index) in items"
      :key="index"
      class="faq-item"
    >

      <!-- QUESTION -->
      <button
        type="button"
        class="faq-question"
        @click="toggle(index)"
      >

        <span class="faq-question-text">
          {{ item.question }}
        </span>

        <span class="faq-icon">
          {{ openIndex === index ? '−' : '+' }}
        </span>

      </button>


      <!-- ANSWER -->
      <transition name="faq">

        <div
          v-if="openIndex === index"
          class="faq-answer-wrapper"
        >

          <div class="faq-answer">

            <p
              v-for="(paragraph, paragraphIndex) in item.answer"
              :key="paragraphIndex"
            >
              {{ paragraph }}
            </p>

          </div>

        </div>

      </transition>

    </div>

  </div>
</template>


<script>
export default {
  name: "FaqAccordion",

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      openIndex: 0
    };
  },

  methods: {
    toggle(index) {
      if (this.openIndex === index) {
        this.openIndex = null;
      } else {
        this.openIndex = index;
      }
    }
  },

  watch: {
    items() {
      this.openIndex = 0;
    }
  }
};
</script>


<style scoped>

.faq-item {
  border-bottom: 1px solid #e6f3f8;
}


/* QUESTION */

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;

  text-align: left;

  background: none;
  border: none;

  cursor: pointer;
}


.faq-question-text {
  color: #5c5a5a;

  font-size: 18px;
  font-weight: 400;

  line-height: 1.4;

  letter-spacing: 0.025em;

  transition: color 0.2s ease;
}


.faq-question:hover .faq-question-text {
  color: #1f1f1f;
}


.faq-icon {
  flex-shrink: 0;

  margin-left: 16px;

  color: #5c5a5a;

  font-size: 22px;
  font-weight: 300;

  line-height: 1;
}


/* ANSWER */

.faq-answer-wrapper {
  overflow: hidden;
}


.faq-answer {
  padding-bottom: 24px;
  padding-right: 32px;
}


.faq-answer p {
  margin: 0 0 16px;

  color: #989898;

  font-size: 16px;
  font-weight: 400;

  line-height: 1.7;

  letter-spacing: 0.025em;
}


.faq-answer p:last-child {
  margin-bottom: 0;
}


/* ANIMATION */

.faq-enter-active,
.faq-leave-active {
  transition:
    max-height 0.35s ease,
    opacity 0.35s ease;
}


.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}


.faq-enter-to,
.faq-leave-from {
  max-height: 1000px;
  opacity: 1;
}


/* MOBILE */

@media (max-width: 640px) {

  .faq-question {
    padding: 18px 0;
  }

  .faq-question-text {
    font-size: 16px;
  }

  .faq-answer {
    padding-right: 16px;
    padding-bottom: 20px;
  }

  .faq-answer p {
    font-size: 15px;
    line-height: 1.65;
  }

}

</style>