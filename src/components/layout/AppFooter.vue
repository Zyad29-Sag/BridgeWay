<script setup>
import SocialIcon from '../ui/SocialIcon.vue'
import ShapeBlock from '../ui/ShapeBlock.vue'
import { socials, shapes } from '../../data/content.js'
</script>

<template>
  <!--
    Mobile: ~347px tall, content on top, shapes pinned to the bottom.
    xl: 629px tall (Desktop - 3), 100px top padding, shapes ~200x160 with 16px gaps
        touching the bottom edge.
  -->
  <footer id="contact"
          class="mx-auto flex min-h-[347px] max-w-[1440px] flex-col justify-between px-5 pt-16 md:px-8
                 lg:block lg:min-h-0 lg:px-12 xl:flex xl:min-h-[629px] xl:px-20 xl:pt-[100px]">
    <div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div class="space-y-3">
        <p class="font-display text-sm font-bold xl:text-[32px]">Bridgeway</p>
        <p class="text-xs text-plum/70 sm:text-sm xl:text-[28px]">Everything payments, on one bridge</p>
      </div>
      <nav aria-label="Social" class="-ml-2 flex gap-1 md:ml-0 xl:gap-10">
        <SocialIcon v-for="s in socials" :key="s.label" v-bind="s" />
      </nav>
    </div>

    <!-- Decorative shape row -->
    <div class="mt-10 grid h-16 grid-cols-6 gap-2 sm:h-20 md:gap-4 lg:h-24 xl:h-40">
      <ShapeBlock v-for="(s, i) in shapes" :key="i" v-bind="s" />
    </div>
  </footer>
</template>
