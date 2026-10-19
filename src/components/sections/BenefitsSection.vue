<script setup>
import FeatureCard from '../ui/FeatureCard.vue'
import { features } from '../../data/content.js'
</script>

<template>
  <section id="benefits" class="mx-auto max-w-[1440px] px-5 pt-16 md:px-8 lg:px-12 lg:pt-24 xl:px-20 xl:pb-[159px] xl:pt-[125px]">
    <!-- Heading: stacked on mobile, two columns from md -->
    <div class="grid gap-4 md:grid-cols-2 md:items-end md:gap-12 xl:grid-cols-[1fr_555px] xl:gap-10">
      <h2 class="text-[40px] font-bold leading-none tracking-[-0.02em] md:text-4xl lg:tracking-[-0.04em] lg:text-5xl xl:text-[70px]">
        Everything payments,<br class="hidden md:block" /> on one bridge
      </h2>
      <p class="max-w-md text-xs leading-relaxed text-plum/80 sm:text-sm xl:max-w-xl xl:text-[28px] xl:leading-normal">
        One platform connects you to customers, banks, and your own books, so money moves without the friction.
      </p>
    </div>

    <!-- 1 col mobile, 2 col tablet, 3 col desktop.
         Variant alternates by index (dark, light, ...). On the 3-col grid that
         produces the checkerboard from the design. On the 2-col tablet grid it
         becomes alternating columns, which still reads as intentional. -->
    <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:mt-20 xl:gap-6">
      <FeatureCard v-for="(f, i) in features" :key="f.title" v-bind="f"
                   :variant="i % 2 === 0 ? 'dark' : 'light'" />
    </div>
  </section>
</template>
