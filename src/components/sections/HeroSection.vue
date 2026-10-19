<script setup>
import AppHeader from '../layout/AppHeader.vue'
import BaseIcon from '../ui/BaseIcon.vue'
import heroDesktop from '../../assets/images/hero-desktop.svg'
import heroMobile from '../../assets/images/hero-mobile.svg'
</script>

<template>
  <!--
    One markup, two looks.
    < lg : stacked dark card (matches the mobile frame; also used on tablet).
    >= lg: organic dark blob + yellow blob (shapes approximated with border radii;
           swap for the exported Figma SVG paths for pixel-perfect curves).
  -->
  <section id="top" class="relative isolate mx-auto max-w-[1440px] lg:min-h-[640px] xl:min-h-[790px]">
    <!-- Dark surface -->
    <div class="absolute inset-0 -z-20 rounded-b-3xl bg-plum lg:rounded-bl-[14rem] lg:rounded-br-[6rem] lg:rounded-tr-[6rem]" />
    <AppHeader />

    <div class="px-5 pb-6 pt-6 motion-safe:animate-fade-up md:px-8 lg:flex lg:min-h-[520px] lg:flex-col lg:justify-between lg:px-12 lg:pb-10 xl:min-h-[640px] xl:px-20 xl:pb-16">
      <!-- Desktop image sits at the top of the blob -->
      <img :src="heroDesktop" alt="" class="hidden h-44 w-full rounded-2xl object-cover lg:block xl:h-64" />

      <!-- Headline + subtitle. On desktop this is a 2-column grid: "Your way to" on the dark
           blob, "better payments" with the subtitle underneath it on the yellow blob.
           `lg:contents` lets the h1's spans take part in that grid. -->
      <div class="lg:relative lg:grid lg:grid-cols-[auto_1fr] lg:items-baseline lg:gap-x-5 lg:pr-28 xl:pr-40">
        <!-- Yellow blob (desktop only). Absolutely positioned inside grid column 2, so its left edge
             follows the headline instead of a fixed percentage. -->
        <div aria-hidden="true"
             class="absolute -bottom-6 -left-3 -right-6 -top-24 -z-10 hidden rounded-tl-[10rem] rounded-br-[3rem] bg-lime
                    lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:block xl:-bottom-10 xl:-right-12 xl:-top-32" />
        <h1 class="text-[40px] font-bold leading-none tracking-[-0.02em] text-lime md:text-5xl lg:contents lg:tracking-[-0.04em]">
          <span class="block lg:text-6xl xl:text-[70px]">Your way to</span>
          <span class="block lg:text-6xl lg:text-plum xl:text-[70px]">better payments</span>
        </h1>
        <p class="mt-3 max-w-xs text-xs leading-relaxed text-white/80 md:text-sm lg:col-start-2 lg:mt-4 lg:text-plum xl:max-w-lg xl:text-[28px] xl:leading-normal">
          Accept, send, and reconcile payments in one place.
        </p>
      </div>

      <!-- Arrow button: bottom-right of the yellow blob on desktop -->
      <a href="#benefits" aria-label="Explore benefits"
         class="absolute bottom-10 right-12 hidden size-20 place-items-center rounded-3xl bg-plum text-3xl text-lime
                transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none
                lg:grid xl:bottom-16 xl:right-20 xl:size-28 xl:text-5xl">
        <BaseIcon name="arrow-up-right" />
      </a>

      <!-- Mobile/tablet image + arrow -->
      <div class="mt-6 flex items-end justify-between lg:hidden">
        <img :src="heroMobile" alt="" class="h-36 w-1/2 rounded-xl object-cover md:h-56 md:w-2/5" />
        <a href="#benefits" aria-label="Explore benefits"
           class="pb-2 text-2xl text-lime transition duration-300 hover:-translate-y-1 hover:translate-x-1 motion-reduce:transition-none">
          <BaseIcon name="arrow-up-right" />
        </a>
      </div>
    </div>
  </section>
</template>
