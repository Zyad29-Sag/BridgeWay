<script setup>
// Text link with an animated underline that grows from the left on hover.
defineProps({ href: { type: String, required: true } })
</script>

<template>
  <a :href="href"
     class="relative text-xs font-medium after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full
            after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300
            hover:after:scale-x-100 motion-reduce:after:transition-none sm:text-sm xl:text-xl">
    <slot />
  </a>
</template>
