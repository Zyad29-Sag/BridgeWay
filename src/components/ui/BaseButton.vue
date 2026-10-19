<script setup>
import BaseIcon from './BaseIcon.vue'

// Pill CTA used in the header, hero-adjacent areas and the CTA card.
// `lime` = yellow pill (on dark surfaces), `plum` = dark pill (on light surfaces).
defineProps({
  href: { type: String, default: '#' },
  tone: { type: String, default: 'lime', validator: (v) => ['lime', 'plum'].includes(v) },
})
</script>

<template>
  <a
    :href="href"
    class="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold
           transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0
           motion-reduce:transition-none sm:text-sm xl:gap-3 xl:px-6 xl:py-3 xl:text-xl"
    :class="tone === 'lime' ? 'bg-lime text-plum hover:bg-white' : 'bg-plum text-lime hover:bg-mauve'"
  >
    <slot />
    <!-- Arrow nudges right on hover -->
    <BaseIcon name="arrow-right" class="transition-transform duration-300 group-hover:translate-x-1" />
  </a>
</template>
