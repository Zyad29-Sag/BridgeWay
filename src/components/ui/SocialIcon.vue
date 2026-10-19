<script setup>
import BaseIcon from './BaseIcon.vue'

defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true }, // accessible name (icon-only link)
  href: { type: String, default: '#' },
})
</script>

<template>
  <a :href="href" :aria-label="label"
     class="inline-grid size-9 place-items-center rounded-full text-xl text-plum transition duration-300
            xl:size-14 xl:text-[40px] hover:-translate-y-1 hover:bg-lime hover:shadow-md motion-reduce:transition-none">
    <BaseIcon :name="icon" />
  </a>
</template>
