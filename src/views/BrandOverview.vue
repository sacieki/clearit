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

    <section class="default-section Hero">
      <div class="default-container  ">
        <div class="default-content-width default-content-border-radius ba-Hero-content ">
        <div class=" default-media">
          <video
            class="hero-video"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          >
            <source src="/media/envato_video_gen_Mar_20_2026_3_28_01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>

    <ScrollReveal>
      <section class="default-section default-hero">
        <div class="default-container  ">
          
          <div class="default-content-width BG-GradientWhiteToGray default-content-border-radius bo-hero-content">
            
            <div class="bo-hero-Topics mx-auto">
              
              <span class="mx-auto colorBlue">About</span>
              <img
                alt="Logo"
                loading="lazy"
                width="480"
                height="auto"
                decoding="async"
                class="mx-auto"
                style="color: transparent"
                src="/media/logo.f02482b3.png"
              />
            </div>

            <div class="default-hero__content bo-hero-text">
              <p class="mx-auto bo-hero-p1 colorGray">CLEARiT exists for one purpose:</p>
              <p class="mx-auto bo-hero-p2 colorGray">to make tattoo removal</p>
              <div class="bo-hero-p3-wrapper">
                <p
                  v-for="(word, index) in heroWords"
                  :key="word"
                  class="bo-hero-p3 colorBlue"
                  :class="{
                    active: index === activeWord,
                    next: index === nextWord
                  }"
                >
                  {{ word }}
                </p>
              </div>
            </div>

            <div class="bo-hero-textdetail colorGray">
              <p class="mx-auto bo-hero-textdetail-p1">We developed the CLEARiT method around science, technology and intelligence.</p>

              
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="100">
      <section class="default-section WhyWeDevelop" style="margin-top: clamp(-20px, -3vw, -40px);">
          <div class="default-container  ">
            <div class="default-content-width BG-GradientGrayToWhite default-content-border-radius bo-WhyWeDevelop-content ">
              <img
                alt="Logo"
                loading="lazy"
                width="100%"
                height="auto"
                decoding="async"
                class="mx-auto img-overflow-top"
                style="color: transparent;"
                src="/media/Clearit_Home_img01.png"
              />
              <div class="bo-WhyWeDevelop-Topics mx-auto">
                <p class="mx-auto bo-WhyWeDevelop-p1 colorBlue">Why We Developed CLEARiT</p>
                <p class="mx-auto bo-WhyWeDevelop-p2 colorGray">Tattoo removal should never be guesswork. 
    It is a calculated process.</p>
                <p class="mx-auto bo-WhyWeDevelop-p3 colorGray">That's why the CLEARiT method made clarity and intelligence a top priority. Our science driven technology focused approch brings a smarter way to tattoo removal. Designed around clinical intelligence and a more informed treatment journey. </p>
                <p class="mx-auto bo-WhyWeDevelop-p4 colorGray"><br/>Out with the old, in with the new. </p>
                <p class="mx-auto bo-WhyWeDevelop-p5 colorGray"><br/>The CLEARiT method of tattoo removal </p> 
                <p class="mx-auto bo-WhyWeDevelop-p6 colorBlack">smarter science- smarter technology- smarter removal. </p>
              </div>
            </div>
          </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="200">
      <section class="default-section ClearitDifferent">
          <div class="default-container  ">
            <div class="default-content-width default-content-border-radius bo-ClearitDifferent-content bg-image fade-top">
              <img
                alt="Logo"
                loading="lazy"
                width="100%"
                height="auto"
                decoding="async"
                class="mx-auto"
                style="color: transparent; headimage-OverY"
                src="/media/bo-pic02.png"
              />
              <div class="bo-ClearitDifferent-Topics mx-auto">
                <p class="bo-ClearitDifferent-p1 colorBlack">
                  The CLEAR<span class="colorBlue">i</span>T 
                </p>
                <p class="colorBlue bo-ClearitDifferent-p1-Second">Difference</p>

                <p class="bo-ClearitDifferent-p2 colorGray">
                  We take a smarter, more methodical approach to laser tattoo removal. The combination of our specialized skin preparation and reverse tattoo techniques, we deliver consistent, precise treatment in every session, resulting in higher client satisfaction.
                </p>

                <p  class="bo-ClearitDifferent-p3 colorGray">
                  Removing a tattoo is a journey. CLEARiT is designed to guide that journey with precision and care.
                </p>
                
                <router-link
                  to="/contact-us"
                  class="solid-button mx-auto BookConsultationBtn"
                >
                  Book Consultation
                </router-link>
                
                <p  class="bo-ClearitDifferent-p4 colorGray mx-auto">
                  Engineered Around Skin Behavior<br/>
    CLEARiT focuses on how skin actually behaves under <br/>
    treatment, optimizing every session so lasers can perform <br/>
    closer to their full potential.<br/>
                
                </p>

                <ul class="bo-ClearitDifferent-ul colorGray">
                  <li>
                    Controlled, repeatable session outcomes
                  </li>
                  <li>
                    Protection and support of the skin
                  </li>
                  <li>
                    Safer, more predictable removal journeys
                  </li>
                </ul>
                <img
                  alt="Logo"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  decoding="async"
                  class="mx-auto img-overflow-bottom"
                  style="color: transparent; transform: translateY(clamp(60px, 8vw, 120px));"
                  src="/media/Product 111 1.png"
                />
              </div>
            </div>
          </div>
      </section>
    </ScrollReveal>
    
    <ScrollReveal :delay="300">
      <section class="default-section OurPhilosophy">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius bo-OurPhilosophy-content ">
              <div class="bo-ClearitDifferent-Topics mx-auto">
                <p class="bo-OurPhilosophy-p1 colorBlack">
                  <span class="colorBlue">Our</span><br>Philosophy
                </p>

                <p class="bo-OurPhilosophy-p2 colorGray">
                  Laser tattoo removal is no longer a game of trial and error. It is a process engineered around preparation, skin behavior, and controlled ink elimination.
                </p>

                <p class="bo-OurPhilosophy-p3 colorGray">
                  Preparation matters. Skin condition matters. Consistency matters.
                </p>

                <p class="bo-OurPhilosophy-p4 colorGray">
                  CLEARiT exists to bring structure, intention, and predictability to every session so progress is measurable, repeatable, and real.
                </p>

                <div class="blue-line"></div>
              </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  
    <ScrollReveal :delay="400">
      <section class="default-section OurVision">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius bo-OurVision-content ">
            <div class="bo-OurVision-Topics mx-auto">
              <p class="bo-OurVision-p1">
                <span class="colorBlue">Our</span> Vision
              </p>

              <!---
              <p class="bo-OurVision-p2">
                Leading the Next Era of Tattoo Removal Technology
              </p>
              -->
              <img
                    alt="Slogan"
                    loading="lazy"
                    decoding="async"
                    class=""
                    style="padding-top: clamp(40px, 6vw, 80px);margin:auto;"
                    src="/media/bo-pic04.png"
                  />
              <!--
              <div class="flex-column bo-OurVision-columnsplit colorGray">
                <div class="left">
                  <p class="bo-OurVision-columnsplit-top">Greater Clarity</p>
                  <div class="lineblueColumnsplit" style="width: 33%;height: 1px;background: #29BCFB;"></div>
                  <p class="bo-OurVision-columnsplit-bottom">for patients</p>
                </div>

                <div class="center">
                  <p class="bo-OurVision-columnsplit-top">Greater Intelligence</p>
                  <div class="lineblueColumnsplit" style="width: 33%;height: 1px;background: #29BCFB;"></div>
                  <p class="bo-OurVision-columnsplit-bottom">for providers</p>
                </div>

                <div class="right">
                  <p class="bo-OurVision-columnsplit-top">Scalable</p>
                  <div class="lineblueColumnsplit" style="width: 33%;height: 1px;background: #29BCFB;"></div>
                  <p class="bo-OurVision-columnsplit-bottom">for providers</p>
                </div>
              </div>
              -->
              <p class="bo-OurVision-p3 mx-auto colorGray">
                CLEARiT was engineered as part of a comprehensive professional protocol, creating consistent surface conditions and clinically evaluated technique for every tattoo removal session. Founded by industry experts, the brand is dedicated to elevating standards and providing reliable, repeatable preparation to optimize our clients’ tattoo removal experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    
      <section class="default-section MeettheTeam ">
        <div class="default-container  ">
          <div class="default-content-width default-content-border-radius bo-MeettheTeam-content bg-image fade-bottom">
            <div class="bo-MeettheTeam-Topics mx-auto ">
              <p class="bo-MeettheTeam-p1 colorBlack">
                Meet the <br/><span class="bo-MeettheTeam-p1-team colorBlue">Team</span>
                <span class="bo-MeettheTeam-p1-behide">Behind CLEARiT</span>
              </p>
              <div class="flex-column bo-MeettheTeam-columnsplit colorGray bo-MeettheTeam-columnsplitMain" style="margin-top: clamp(60px, 8vw, 120px);">
                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="240"
                    height="auto"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-1-1.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    Martin E. Schmieg
                  </p>
                  <p class="bo-MeettheTeam-position">
                    President & CEO
                  </p>
                </div>

                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="240"
                    height="auto"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-1-2.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    David Monk
                  </p>
                  <p class="bo-MeettheTeam-position">
                    Executive Vice President
                    <br/>Chief Operating Officer
                  </p>
                </div>

                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="240"
                    height="auto"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-1-3.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    Dimitri Karabatsos
                  </p>
                  <p class="bo-MeettheTeam-position">
                    Chief Technology Officer
                  </p>
                </div>

                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="240"
                    height="385"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-1-4.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    Richard Goldfarb, M.D.
                  </p>
                  <p class="bo-MeettheTeam-position">
                    Chief Medical Officer
                  </p>
                </div>
              </div>

              <div class="flex-column bo-MeettheTeam-columnsplit colorGray bo-MeettheTeam-columnsplitSup mx-auto">
                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="204"
                    height="auto"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-2-1.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    Chaz Wilson
                  </p>
                  <p class="bo-MeettheTeam-position">
                    Vice President, Consumer Marketing
                  </p>
                </div>

                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="204"
                    height="auto"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-2-2.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    Blair Redd Schmieg
                  </p>
                  <p class="bo-MeettheTeam-position">
                    Vice President, CLEARiT Centers
                  </p>
                </div>

                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="204"
                    height="auto"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-2-3.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    Ragan Reppond
                  </p>
                  <p class="bo-MeettheTeam-position">
                    Vice President, Regulatory Affairs and Quality Control
                  </p>
                </div>

                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="204"
                    height="auto"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-2-4.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    Simerpreet “Preet” Edwards
                  </p>
                  <p class="bo-MeettheTeam-position">
                    Controller
                  </p>
                </div>

                <div class="bo-MeettheTeam-card">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="204"
                    height="auto"
                    decoding="async"
                    class="mx-auto "
                    style="color: transparent;"
                    src="/media/image-gen p-2-5.png"
                  />
                  <p class="bo-MeettheTeam-name">
                    Pearl Pongwasit
                  </p>
                  <p class="bo-MeettheTeam-position">
                    Director, CLEARiT Brand
                  </p>
                </div>
              </div>

              <p class="bo-MeettheTeam-p2 colorBlue mx-auto">
                Engineering the Future of Tattoo Removal
              </p>

              <p class="bo-MeettheTeam-p3 colorGray mx-auto">
                CLEARiT combines world-class advisory expertise in clinical medicine and artificial intelligence. We are dedicated to replacing subjectivity with science, providing the governance to lead CLEARiT as the new global standard in tattoo removal technology.
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
  name: 'BrandOverview',
  data() {
    return {
      activeWord: 0,

      heroWords: [
        "FASTER",
        "SAFER",
        "MORE PREDICTABLE"
      ]
    };
  },
  computed: {
    nextWord() {
      return (this.activeWord + 1) % this.heroWords.length;
    }
  },
    mounted() {
    this.wordInterval = setInterval(() => {
      this.activeWord = this.nextWord;
    }, 2500);
  },

  beforeUnmount() {
    clearInterval(this.wordInterval);
  },
}
</script>

<style scoped>
  @import '../css/defaultStyle.css';
  @import '../css/BrandOverview.css';
</style>
