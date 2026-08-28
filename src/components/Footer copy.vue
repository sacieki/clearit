<template>
  <footer class="site-footer">
    <!-- Logo -->
    <div class="footer-brand">
      <div class="footer-logo">
        CLEAR<span style="color:#29bcfb;">i</span>T
      </div>

      <div class="footer-tagline">
        TATTOO REMOVAL REDEFINED
      </div>
    </div>

    <!-- Divider -->
    <div class="footer-divider"></div>

    <!-- Footer Content -->
    <div class="footer-content">

      <!-- About -->
      <div class="footer-column">
        <h3>About CLEARiT</h3>

        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/find-us">Locations</router-link>
          <router-link to="/brand-overview">Brand Overview</router-link>
          <router-link to="/product">Product</router-link>
          <router-link to="/team">Team</router-link>
        </nav>

        <div class="footer-social">
          <h3>Follow us</h3>

          <div class="social-links">
            <a href="#" aria-label="Instagram">
              <span class="social-icon">◎</span>
            </a>

            <a href="#" aria-label="YouTube">
              <span class="social-icon youtube">▶</span>
            </a>

            <a href="#" aria-label="TikTok">
              <span class="social-icon">♪</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Learn -->
      <div class="footer-column">
        <h3>Learn</h3>

        <nav>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/press-media">Press &amp; Media</router-link>
          <router-link to="/faqs">FAQs</router-link>
        </nav>
      </div>

      <!-- Contact -->
      <div class="footer-column">
        <h3>Contact Us</h3>
      </div>

      <!-- Newsletter -->
      <div class="footer-newsletter">
        <h2>Partner with CLEARiT</h2>

        <form class="newsletter-form" @submit.prevent>
          <input
            type="email"
            placeholder="Your email here"
            aria-label="Your email"
          />

          <button type="submit" aria-label="Subscribe">
            →
          </button>
        </form>
      </div>

    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>
        Copyright 2026 ©
        <strong>Clear Intradermal Technologies, Inc</strong>
        <span class="copyright-divider">|</span>
        All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
    export default {
    name: "SiteFooter",
    };
</script>
<style scoped>
.site-footer {
  width: 100%;
  background: #fff;
  padding: 70px 3% 45px;
  color: #202020;
}

/* =========================
   Brand
========================= */

.footer-brand {
  text-align: center;
  padding-bottom: 75px;
}

.footer-logo {
  font-family: 'Lato', sans-serif;
  font-size: clamp(48px, 5vw, 76px);
  font-weight: 300;
  letter-spacing: 0.08em;
  line-height: 1;
}

.footer-logo span {
  position: relative;
  color: #202020;
}

.footer-tagline {
  margin-top: 14px;

  font-family: 'Figtree', sans-serif;
  font-size: clamp(12px, 1.2vw, 18px);
  font-weight: 400;
  letter-spacing: 0.25em;
}

/* =========================
   Divider
========================= */

.footer-divider {
  width: 100%;
  height: 1px;
  background: #29bcfb;
}

/* =========================
   Main Content
========================= */

.footer-content {
  display: grid;
  grid-template-columns:
    minmax(170px, 1fr)
    minmax(150px, 0.9fr)
    minmax(150px, 0.9fr)
    minmax(350px, 2fr);

  gap: 40px;

  padding-top: 80px;
}

/* =========================
   Columns
========================= */

.footer-column h3,
.footer-newsletter h2 {
  margin: 0;

  font-family: 'Figtree', sans-serif;
  font-weight: 400;
}

.footer-column h3 {
  font-size: clamp(18px, 1.6vw, 24px);
  line-height: 1.3;
}

.footer-column nav {
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 45px;
}

.footer-column nav a {
  color: #666;
  text-decoration: none;

  font-family: 'Figtree', sans-serif;
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 400;
  letter-spacing: 0.08em;

  transition: color 0.2s ease;
}

.footer-column nav a:hover {
  color: #29bcfb;
}

/* =========================
   Social
========================= */

.footer-social {
  margin-top: 48px;
}

.footer-social h3 {
  margin-bottom: 18px;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.social-links a {
  color: #606060;
  text-decoration: none;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  font-family: Arial, sans-serif;
  font-size: 34px;
  font-weight: 600;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.social-icon:hover {
  color: #29bcfb;
  transform: translateY(-3px);
}

.social-icon.youtube {
  font-size: 24px;
}

/* =========================
   Newsletter
========================= */

.footer-newsletter {
  padding-left: 20px;
}

.footer-newsletter h2 {
  color: #5d5d5d;

  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.2;
}

.newsletter-form {
  display: flex;
  align-items: center;

  width: 100%;

  margin-top: 30px;
  border-bottom: 1px solid #888;
}

.newsletter-form input {
  flex: 1;

  min-width: 0;

  border: 0;
  outline: none;
  background: transparent;

  padding: 12px 0;

  font-family: 'Figtree', sans-serif;
  font-size: clamp(18px, 2vw, 28px);
  font-weight: 400;
  color: #333;
}

.newsletter-form input::placeholder {
  color: #d7d7d7;
}

.newsletter-form button {
  flex-shrink: 0;

  border: 0;
  background: transparent;

  padding: 0 0 5px 20px;

  color: #29bcfb;

  font-family: Arial, sans-serif;
  font-size: 48px;
  font-weight: 300;
  line-height: 1;

  cursor: pointer;

  transition: transform 0.2s ease;
}

.newsletter-form button:hover {
  transform: translateX(6px);
}

/* =========================
   Bottom
========================= */

.footer-bottom {
  margin-top: 70px;
}

.footer-bottom p {
  margin: 0;

  color: #666;

  font-family: 'Figtree', sans-serif;
  font-size: clamp(13px, 1.3vw, 18px);
  font-weight: 400;
  letter-spacing: 0.06em;
}

.footer-bottom strong {
  font-weight: 700;
}

.copyright-divider {
  margin: 0 8px;
}

/* =========================
   Tablet
========================= */

@media (max-width: 1024px) {
  .site-footer {
    padding: 60px 5% 35px;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 55px 40px;
  }

  .footer-newsletter {
    padding-left: 0;
  }
}

/* =========================
   Mobile
========================= */

@media (max-width: 640px) {
  .site-footer {
    padding: 50px 24px 30px;
  }

  .footer-brand {
    padding-bottom: 50px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 50px;
  }

  .footer-column nav {
    margin-top: 25px;
  }

  .footer-newsletter {
    padding-left: 0;
  }

  .footer-newsletter h2 {
    font-size: clamp(26px, 8vw, 36px);
  }

  .footer-bottom {
    margin-top: 50px;
  }

  .footer-bottom p {
    line-height: 1.7;
  }

  .copyright-divider {
    display: none;
  }
}
</style>