<script setup>
  import ShortContact from '../components/ShortContact.vue'
  import Navigator_desktop from '../components/Navigator_desktop.vue'
</script>
<template>
   <main class="home-page">

    <ShortContact />

    <div style="padding-top: clamp(30px, 4.5vw, 60px);">
      <Navigator_desktop  />
    </div>


        <div class="in-investor-content ">
          <div class="in-investor-img">
            <img
              src="/media/in-pic01.png"
              alt="investor"
              loading="lazy"
              decoding="async"
            />
            
          </div>  
          <div class="in-investor-Topics mx-auto">

            <p class="in-investor-p1 colorBlack">Get in Touch</p>
            <p class="in-investor-p2"><br/>To request our investor deck, financial projections, or cap table details, please connect directly with our corporate team.</p>
            <p class="in-investor-p3"><br/>Email: <a href="mailto:info@yclearit.com" class="contact-data colorBlue">investors@clearit.com</a></p>
            <p class="in-investor-p4"><br/>Phone: <a href="tel:+187755325327" class="contact-data colorBlue">(+1) 877-552-5327</a></p>
            <p class="in-investor-p5"><br/>Inquiries: All investor communications are treated with strict confidentiality.</p>
          </div>
        </div>

   

  </main>
</template>

<script>
export default {
  name: 'InvestorPage'
}
</script>

<style scoped>
  @import '../css/defaultStyle.css';
  @import '../css/investor.css';
</style>
