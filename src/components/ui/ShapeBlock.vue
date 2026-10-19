<script setup>
// Decorative footer shapes, built from border radius only (no custom CSS).
defineProps({
  kind: { type: String, required: true }, // 'square' | 'quarter' | 'arch'
  color: { type: String, required: true }, // Tailwind bg class
})
const radius = {
  square: 'rounded-t-lg',
  quarter: 'rounded-tl-[100%]',
  arch: 'rounded-t-full',
}
</script>

<template>
  <div class="h-full w-full" :class="[color, radius[kind]]" aria-hidden="true" />
</template>
