<script setup>
import BaseButton from '../ui/BaseButton.vue'
import ctaPhoto from '../../assets/images/cta-photo.jpg'
</script>

<template>
  <!--
    Photo + yellow arch, with a dark card overlapping both.
    < lg : stacked, card first (as in the mobile frame, 24px gap).
    xl   : absolute composition inside the 1280px content box
           (photo ~649x450, arch ~374x520, card ~600x315), matching the 1440 design.
  -->
  <section class="mx-auto mt-20 max-w-[1440px] px-5 md:px-8 lg:mt-32 lg:px-12 xl:mt-0 xl:px-20 xl:pb-[113px] xl:pt-[125px]">
    <div class="relative flex flex-col lg:block lg:h-[420px] xl:h-[636px]">
      <!-- Yellow arch (desktop only) -->
      <div class="absolute right-0 top-0 hidden w-[29%] rounded-t-[8rem] bg-lime lg:block lg:h-[330px] xl:h-[520px]" />

      <img :src="ctaPhoto" alt="Hand holding a card above a payment terminal" loading="lazy"
           class="relative h-56 w-full rounded-2xl object-cover md:h-72 lg:absolute lg:left-0 lg:top-0 lg:h-[280px] lg:w-[51%] xl:h-[450px] xl:rounded-3xl" />

      <div class="relative z-10 -mt-6 space-y-3 rounded-2xl bg-plum p-5 text-white shadow-xl
                  max-lg:order-first max-lg:mb-6 max-lg:mt-0
                  lg:absolute lg:bottom-0 lg:left-[32%] lg:w-[47%] lg:p-6
                  xl:bottom-auto xl:top-[321px] xl:min-h-[315px] xl:space-y-4 xl:rounded-3xl xl:p-10">
        <h2 class="text-xl font-bold leading-tight md:text-2xl xl:text-[40px] xl:leading-none xl:tracking-[-0.02em]">
          <span class="block">Ready to cross over to</span>
          <span class="block text-lime">better payments?</span>
        </h2>
        <p class="text-xs text-white/70 xl:text-xl">Get set up in minutes. No hidden fees, no long contracts.</p>
        <BaseButton href="#contact">Get Started</BaseButton>
      </div>
    </div>
  </section>
</template>
