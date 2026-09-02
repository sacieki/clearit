<script setup>
import ShortContact from '../components/ShortContact.vue'
import Navigator_desktop from '../components/Navigator_desktop.vue'
</script>

<template>
  <div class="py-12 md:py-24 lg:py-32">
    <ShortContact />

    <div style="">
      <Navigator_desktop  />
    </div>
    <section class="min-h-screen flex justify-center px-6 py-14">
      <div class="w-[92%] max-w-[1550px]">

        <!-- LOGO -->
        <div class="mb-5 px-10">
          <img
            alt="Logo"
            loading="lazy"
            width="413"
            height="82"
            decoding="async"
            class="w-35 lg:w-45"
            style="color: transparent"
            src="/media/logo.f02482b3.png"
          />
        </div>

        <!-- LINE -->
        <div class="h-px bg-[#29BCFB] mb-5"></div>

        <!-- CONTACT INFO -->
        <div class="text-xl text-gray-500 leading-relaxed mb-12 px-12">
          <p>(+1) 877-55-CLEAR (25327)</p>
          <p>info@yclearit.com</p>
        </div>

        <!-- FORM -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16">

          <!-- LEFT -->
          <div></div>

          <!-- RIGHT FORM -->
          <form
            class="flex flex-col gap-8"
            @submit.prevent="submitForm"
          >

            <!-- NAME -->
            <div>
              <span
                class="block text-base lg:text-xl font-medium text-[#1F1F1F] mb-6"
              >
                Name
                <span class="font-normal text-[#989898] ml-1">
                  (required)
                </span>
              </span>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-7">

                <!-- FIRST NAME -->
                <div>
                  <span
                    class="block text-base lg:text-xl text-[#1F1F1F] mb-1"
                  >
                    First Name
                  </span>

                  <input
                    v-model="form.firstName"
                    class="w-full border-b border-gray-300 bg-transparent py-2 text-base lg:text-lg text-gray-900 outline-none focus:border-gray-600 transition-colors"
                    required
                    name="firstName"
                    type="text"
                  />
                </div>

                <!-- LAST NAME -->
                <div>
                  <span
                    class="block text-base lg:text-xl text-[#1F1F1F] mb-1"
                  >
                    Last Name
                  </span>

                  <input
                    v-model="form.lastName"
                    class="w-full border-b border-gray-300 bg-transparent py-2 text-base lg:text-lg text-gray-900 outline-none focus:border-gray-600 transition-colors"
                    required
                    name="lastName"
                    type="text"
                  />
                </div>

              </div>
            </div>

            <!-- PHONE -->
            <div>
              <span
                class="block text-base lg:text-xl font-medium text-[#1F1F1F] mb-1"
              >
                Phone Number
                <span class="font-normal text-[#989898] ml-1">
                  (required)
                </span>
              </span>

              <input
                v-model="form.phone"
                class="w-full border-b border-gray-300 bg-transparent py-2 text-base lg:text-lg text-gray-900 outline-none focus:border-gray-600 transition-colors"
                required
                name="phone"
                type="tel"
              />
            </div>

            <!-- EMAIL -->
            <div>
              <span
                class="block text-base lg:text-xl font-medium text-[#1F1F1F] mb-1"
              >
                Email
                <span class="font-normal text-[#989898] ml-1">
                  (required)
                </span>
              </span>

              <input
                v-model="form.email"
                type="email"
                class="w-full border-b border-gray-300 bg-transparent py-2 text-base lg:text-lg text-gray-900 outline-none focus:border-gray-600 transition-colors"
                required
                name="email"
              />
            </div>

            <!-- PREFERRED METHOD -->
            <div>

              <span
                class="block text-base lg:text-xl font-medium text-[#1F1F1F] mb-6"
              >
                Preferred Method of Contact
              </span>

              <!-- DESKTOP -->
              <div class="hidden sm:flex gap-10 md:gap-15 lg:gap-20">

                <!-- EMAIL -->
                <label class="radio-option">
                  <input
                    v-model="form.contactMethod"
                    type="radio"
                    name="contactMethod"
                    value="email"
                  />

                  <span
                    class="radio-circle"
                    :class="{
                      selected: form.contactMethod === 'email'
                    }"
                  ></span>

                  <span>Email</span>
                </label>

                <!-- PHONE -->
                <label class="radio-option">
                  <input
                    v-model="form.contactMethod"
                    type="radio"
                    name="contactMethod"
                    value="phone"
                  />

                  <span
                    class="radio-circle"
                    :class="{
                      selected: form.contactMethod === 'phone'
                    }"
                  ></span>

                  <span>Phone</span>
                </label>

              </div>

              <!-- MOBILE -->
              <div class="grid grid-cols-2 gap-4 sm:hidden">

                <!-- EMAIL -->
                <label
                  class="mobile-radio-option"
                  :class="{
                    selected: form.contactMethod === 'email'
                  }"
                >

                  <input
                    v-model="form.contactMethod"
                    type="radio"
                    name="contactMethod"
                    value="email"
                  />

                  <span class="radio-circle">
                    <span
                      v-if="form.contactMethod === 'email'"
                      class="radio-dot"
                    ></span>
                  </span>

                  <span>Email</span>

                </label>

                <!-- PHONE -->
                <label
                  class="mobile-radio-option"
                  :class="{
                    selected: form.contactMethod === 'phone'
                  }"
                >

                  <input
                    v-model="form.contactMethod"
                    type="radio"
                    name="contactMethod"
                    value="phone"
                  />

                  <span class="radio-circle">
                    <span
                      v-if="form.contactMethod === 'phone'"
                      class="radio-dot"
                    ></span>
                  </span>

                  <span>Phone</span>

                </label>

              </div>

            </div>

            <!-- CITY / STATE -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-7">

              <!-- CITY -->
              <div>
                <span
                  class="block text-base lg:text-xl text-[#1F1F1F] mb-1"
                >
                  City
                </span>

                <input
                  v-model="form.city"
                  class="w-full border-b border-gray-300 bg-transparent py-2 text-base lg:text-lg text-gray-900 outline-none focus:border-gray-600 transition-colors"
                  name="city"
                  type="text"
                />
              </div>

              <!-- STATE -->
              <div>
                <span
                  class="block text-base lg:text-xl text-[#1F1F1F] mb-1"
                >
                  State
                </span>

                <input
                  v-model="form.state"
                  class="w-full border-b border-gray-300 bg-transparent py-2 text-base lg:text-lg text-gray-900 outline-none focus:border-gray-600 transition-colors"
                  name="state"
                  type="text"
                />
              </div>

            </div>

            <!-- TATTOO AGE -->
            <div>
              <span
                class="block text-base lg:text-xl font-medium text-[#1F1F1F] mb-1"
              >
                Tattoo Age
                <span class="font-normal text-[#989898] ml-1">
                  (required)
                </span>
              </span>

              <input
                v-model="form.tattooAge"
                class="w-full border-b border-gray-300 bg-transparent py-2 text-base lg:text-lg text-gray-900 outline-none focus:border-gray-600 transition-colors"
                required
                name="tattooAge"
                type="text"
              />
            </div>

            <!-- TATTOO COLOR -->
            <div>

              <span
                class="block text-base lg:text-xl font-medium text-[#1F1F1F] mb-6"
              >
                Tattoo Color
                <span class="font-normal text-[#989898] ml-1">
                  (required)
                </span>
              </span>

              <!-- DESKTOP -->
              <div class="hidden sm:flex gap-10 md:gap-15 lg:gap-20">

                <!-- BLACK -->
                <label class="radio-option">

                  <input
                    v-model="form.tattooColor"
                    type="radio"
                    name="tattooColor"
                    value="black"
                  />

                  <span
                    class="radio-circle"
                    :class="{
                      selected: form.tattooColor === 'black'
                    }"
                  ></span>

                  <span>Black</span>

                </label>

                <!-- COLOR -->
                <label class="radio-option">

                  <input
                    v-model="form.tattooColor"
                    type="radio"
                    name="tattooColor"
                    value="color"
                  />

                  <span
                    class="radio-circle"
                    :class="{
                      selected: form.tattooColor === 'color'
                    }"
                  ></span>

                  <span>Color</span>

                </label>

              </div>

              <!-- MOBILE -->
              <div class="grid grid-cols-2 gap-4 sm:hidden">

                <!-- BLACK -->
                <label
                  class="mobile-radio-option"
                  :class="{
                    selected: form.tattooColor === 'black'
                  }"
                >

                  <input
                    v-model="form.tattooColor"
                    type="radio"
                    name="tattooColor"
                    value="black"
                  />

                  <span class="radio-circle">
                    <span
                      v-if="form.tattooColor === 'black'"
                      class="radio-dot"
                    ></span>
                  </span>

                  <span>Black</span>

                </label>

                <!-- COLOR -->
                <label
                  class="mobile-radio-option"
                  :class="{
                    selected: form.tattooColor === 'color'
                  }"
                >

                  <input
                    v-model="form.tattooColor"
                    type="radio"
                    name="tattooColor"
                    value="color"
                  />

                  <span class="radio-circle">
                    <span
                      v-if="form.tattooColor === 'color'"
                      class="radio-dot"
                    ></span>
                  </span>

                  <span>Color</span>

                </label>

              </div>

            </div>

            <!-- TATTOO ARTIST -->
            <div>

              <span
                class="block text-base lg:text-xl font-medium text-[#1F1F1F] mb-6"
              >
                Tattoo Artist
                <span class="font-normal text-[#989898] ml-1">
                  (required)
                </span>
              </span>

              <!-- DESKTOP -->
              <div class="hidden sm:flex gap-10 md:gap-15 lg:gap-20">

                <!-- PROFESSIONAL -->
                <label class="radio-option">

                  <input
                    v-model="form.tattooArtist"
                    type="radio"
                    name="tattooArtist"
                    value="professional"
                  />

                  <span
                    class="radio-circle"
                    :class="{
                      selected: form.tattooArtist === 'professional'
                    }"
                  ></span>

                  <span>Professional</span>

                </label>

                <!-- NON PROFESSIONAL -->
                <label class="radio-option">

                  <input
                    v-model="form.tattooArtist"
                    type="radio"
                    name="tattooArtist"
                    value="non-professional"
                  />

                  <span
                    class="radio-circle"
                    :class="{
                      selected: form.tattooArtist === 'non-professional'
                    }"
                  ></span>

                  <span>Non-Professional</span>

                </label>

              </div>

              <!-- MOBILE -->
              <div class="grid grid-cols-2 gap-4 sm:hidden">

                <!-- PROFESSIONAL -->
                <label
                  class="mobile-radio-option"
                  :class="{
                    selected: form.tattooArtist === 'professional'
                  }"
                >

                  <input
                    v-model="form.tattooArtist"
                    type="radio"
                    name="tattooArtist"
                    value="professional"
                  />

                  <span class="radio-circle">
                    <span
                      v-if="form.tattooArtist === 'professional'"
                      class="radio-dot"
                    ></span>
                  </span>

                  <span>Professional</span>

                </label>

                <!-- NON PROFESSIONAL -->
                <label
                  class="mobile-radio-option"
                  :class="{
                    selected: form.tattooArtist === 'non-professional'
                  }"
                >

                  <input
                    v-model="form.tattooArtist"
                    type="radio"
                    name="tattooArtist"
                    value="non-professional"
                  />

                  <span class="radio-circle">
                    <span
                      v-if="form.tattooArtist === 'non-professional'"
                      class="radio-dot"
                    ></span>
                  </span>

                  <span>Non-Professional</span>

                </label>

              </div>

            </div>

            <!-- SEND -->
            <div class="mt-8">

              <button
                type="submit"
                class="group relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 cursor-pointer select-none bg-[#1F1F1F] hover:bg-[rgba(31,31,31,0.85)] text-[#F8F8F8] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-[50px] text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[3.6px] font-normal hover:text-[25px]"
              >
                <span class="transition-all duration-300 font-[Figtree]">
                  Send
                </span>
              </button>

            </div>

          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactUs",

  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        contactMethod: "phone",
        city: "",
        state: "",
        tattooAge: "",
        tattooColor: "color",
        tattooArtist: "professional"
      }
    };
  },

  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
    }
  }
};
</script>

<style scoped>

.brand-overview {
  padding: 200px 40px;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

p {
  font-size: 20px;
}


/* ========================================
   DESKTOP RADIO
======================================== */

.radio-option {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  color: #5c5a5a;
  font-size: 0.875rem;
}

.radio-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.radio-circle {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #d1d5db;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.radio-circle.selected {
  background: #29BCFB;
  border-color: #29BCFB;
}


/* ========================================
   MOBILE RADIO
======================================== */

.mobile-radio-option {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  height: 56px;

  border: 1px solid #d1d5db;
  border-radius: 6px;

  cursor: pointer;
  user-select: none;

  color: #6b7280;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
}

.mobile-radio-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.mobile-radio-option.selected {
  border-color: #29BCFB;
  color: #29BCFB;
  background: rgba(41, 188, 251, 0.05);
}

.mobile-radio-option .radio-circle {
  width: 20px;
  height: 20px;

  border: 1px solid #d1d5db;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-radio-option.selected .radio-circle {
  border-color: #29BCFB;
}

.radio-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #29BCFB;
}

</style>