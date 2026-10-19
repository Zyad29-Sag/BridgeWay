<script setup>
import HeroSection from './components/sections/HeroSection.vue'
import LogoMarquee from './components/sections/LogoMarquee.vue'
import BenefitsSection from './components/sections/BenefitsSection.vue'
import CtaSection from './components/sections/CtaSection.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <main class="overflow-x-clip">
    <HeroSection />
    <LogoMarquee />
    <BenefitsSection />
    <CtaSection />
  </main>
  <AppFooter />
</template>
