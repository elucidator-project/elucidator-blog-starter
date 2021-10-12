<script setup lang="ts">
const props = defineProps<{
  imageOne: string
  descOne?: string
  altOne: string
  imageTwo: string
  altTwo: string
  descTwo?: string
}>()
</script>

<template>
  <div class="grid inline-grid gap-2 sm:grid-cols-1 lg:grid-cols-2">
    <div class="flex flex-wrap flex-col">
      <img :src="$props.imageOne" :alt="$props.altOne" class="rounded w-full shadow" loading="lazy" />
      <p class="text-center">{{ $props.descOne }}</p>
    </div>
    <div class="flex flex-wrap flex-col">
      <img :src="$props.imageTwo" :alt="$props.altTwo" class="rounded w-full shadow" loading="lazy" />
      <p class="text-center">{{ $props.descTwo }}</p>
    </div>
  </div>
</template>
