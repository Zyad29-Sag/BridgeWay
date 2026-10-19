<script setup>
import { partners } from '../../data/content.js'
</script>

<template>
  <!-- Infinite marquee. The list is rendered twice and the track moves -50% for a seamless loop.
       Edges fade out via an arbitrary mask; hover pauses; reduced-motion stops it. -->
  <section aria-label="Trusted by" class="group mx-auto mt-8 max-w-[1440px] xl:mt-12 overflow-hidden
           [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
    <div class="flex w-max animate-marquee gap-12 py-4 group-hover:[animation-play-state:paused]
                motion-reduce:animate-none md:gap-16 xl:gap-20">
      <template v-for="n in 2" :key="n">
        <span v-for="p in partners" :key="`${n}-${p}`" :aria-hidden="n === 2"
              class="text-lg font-bold tracking-tight text-plum/70 transition-colors duration-300
                     hover:text-plum md:text-2xl xl:text-5xl">
          {{ p }}
        </span>
      </template>
    </div>
  </section>
</template>
