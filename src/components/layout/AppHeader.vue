<script setup>
import BaseButton from '../ui/BaseButton.vue'
import NavLink from '../ui/NavLink.vue'
import { navLinks } from '../../data/content.js'
</script>

<template>
  <!-- Sits on the dark hero. Mobile: links wrap to their own row (as in the design). -->
  <header class="flex flex-wrap items-center justify-between gap-y-4 px-5 pt-4 text-white md:px-8 lg:px-12 lg:pt-8 xl:px-20 xl:pt-10">
    <a href="#top" class="font-display text-sm font-bold tracking-tight xl:text-2xl">Bridgeway</a>

    <nav aria-label="Main"
         class="order-3 flex w-full gap-5 md:order-none md:ml-10 md:w-auto md:flex-1 xl:ml-16 xl:gap-10">
      <NavLink v-for="l in navLinks" :key="l.label" :href="l.href">{{ l.label }}</NavLink>
    </nav>

    <BaseButton href="#contact">Get Started</BaseButton>
  </header>
</template>
