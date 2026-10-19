<script setup>
import BaseIcon from './BaseIcon.vue'

// One card, two looks. `dark` = plum card with yellow icon tile;
// `light` = bordered white card with plum icon tile.
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  variant: { type: String, default: 'dark', validator: (v) => ['dark', 'light'].includes(v) },
})
</script>

<template>
  <article
    class="flex min-h-48 flex-col justify-between gap-8 rounded-2xl xl:rounded-3xl p-4 transition duration-300
           hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none lg:min-h-64 xl:min-h-[400px] xl:p-10"
    :class="variant === 'dark' ? 'bg-plum text-white' : 'border border-plum/10 bg-white text-plum'"
  >
    <span class="grid size-9 place-items-center rounded-lg text-lg xl:size-[72px] xl:rounded-[20px] xl:text-3xl"
          :class="variant === 'dark' ? 'bg-lime text-plum' : 'bg-plum text-lime'">
      <BaseIcon :name="icon" />
    </span>
    <div class="space-y-1.5">
      <h3 class="text-sm font-bold xl:text-2xl">{{ title }}</h3>
      <p class="text-xs leading-relaxed xl:text-xl" :class="variant === 'dark' ? 'text-white/70' : 'text-plum/70'">{{ text }}</p>
    </div>
  </article>
</template>
