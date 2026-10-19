<script setup>
// Tiny inline-SVG icon set (24x24, stroke based). No icon packs: paths are drawn here.
defineProps({ name: { type: String, required: true } })

const icons = {
  'arrow-right': ['M5 12h14M13 6l6 6-6 6'],
  'arrow-up-right': ['M7 17L17 7M8 7h9v9'],
  card: ['M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM3 10h18'],
  sync: ['M20 11a8 8 0 0 0-14-4M4 5v4h4M4 13a8 8 0 0 0 14 4M20 19v-4h-4'],
  send: ['M12 4v11M7 10l5 5 5-5M5 20h14'],
  shield: ['M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z', 'M9 12l2 2 4-4'],
  chart: ['M12 3v9h9a9 9 0 1 1-9-9z'],
  code: ['M9 8l-4 4 4 4M15 8l4 4-4 4'],
  linkedin: ['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M8 11v5M8 8v.01M12 16v-5M12 13a2 2 0 0 1 4 0v3'],
  facebook: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M14.5 8H13a2 2 0 0 0-2 2v10M9 13h6'],
  instagram: ['M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z', 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z', 'M17.5 6.5v.01'],
}
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="size-[1em]">
    <path v-for="d in icons[name]" :key="d" :d="d" />
  </svg>
</template>
