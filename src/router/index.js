import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import BrandOverview from '../views/BrandOverview.vue'
import ContactUs from '../views/ContactUs.vue'
import FAQs from '../views/FAQs.vue'
import TechnoLab from '../views/TechnoLab.vue'
import PatientJourney from '../views/PatientJourney.vue'
import BeforeAfter from '../views/BeforeAfter.vue'
import Welcomebook from '../views/Welcomebook.vue'
import FindUs from '../views/FindUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brand-overview',
    name: 'BrandOverview',
    component: BrandOverview
  },
  {
    path: '/techno-lab',
    name: 'TechnoLab',
    component: TechnoLab
  },
  {
    path: '/patient-journey',
    name: 'PatientJourney',
    component: PatientJourney
  },
  {
    path: '/before-after',
    name: 'BeforeAfter',
    component: BeforeAfter
  },
  {
    path: '/welcome-book',
    name: 'Welcomebook',
    component: Welcomebook
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: FAQs
  },
  {
    path: '/find-us',
    name: 'FindUs',
    component: FindUs
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // ถ้ากด Back / Forward ให้กลับตำแหน่งเดิม
    if (savedPosition) {
      return savedPosition;
    }

    // เปลี่ยนหน้าใหม่ → ขึ้นบนสุด
    return {
      top: 0,
      left: 0,
      behavior: "smooth"
    };
  }
});



export default router