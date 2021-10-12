<script setup lang="ts">
const props = defineProps<{
  imageOne: string
  descOne: string
  altOne: string
  imageTwo: string
  altTwo: string
  descTwo: string
  imageThree: string
  altThree: string
  descThree: string
}>()
</script>

<template>
  <div class="flex flex-wrap flex-row justify-center items-center">
    <div class="flex flex-wrap flex-col sm:w-full lg:w-1/2">
      <img :src="$props.imageOne" :alt="$props.altOne" class="rounded w-full shadow" loading="lazy" />
      <p class="text-center">{{ $props.descOne }}</p>
    </div>
    <div class="flex flex-wrap flex-col sm:w-full lg:w-1/2">
      <img :src="$props.imageTwo" :alt="$props.altTwo" class="rounded w-full shadow" loading="lazy" />
      <p class="text-center">{{ $props.descTwo }}</p>
    </div>
    <div class="flex flex-wrap flex-col sm:w-full lg:w-1/2">
      <img
        :src="$props.imageThree"
        :alt="$props.altThree"
        class="rounded w-full shadow"
        loading="lazy"
      />
      <p class="text-center">{{ $props.descThree }}</p>
    </div>
  </div>
</template>
