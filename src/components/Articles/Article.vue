<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  image: string
  alt: string
  tags: Array<string>
  date: string
  title: string
  description?: string
  to: string
  toTags: string
}>()
</script>

<template>
  <router-link
    :to="to"
    class="max-w-lg rounded overflow-hidden shadow-lg card-hover dark:bg-elucidator-100"
  >
    <img
      :src="$props.image"
      class="h-auto object-cover w-full mb-2"
      :alt="$props.alt"
      loading="lazy"
    />
    <div class="mb-2 py-2 px-4">
      <span class="text-elucidator-700 mb-2 p-1 dark:text-elucidator-700">{{ $props.date }}</span>
      <h1 class="text-xl text-elucidator-800 font-bold p-1 mb-1">{{ $props.title }}</h1>
      <p
        :class="`text-sm text-elucidator-700 dark:text-elucidator-700 font-extralight mb-5 p-1`"
      >{{ $props.description }}</p>
      <Tag :tags="$props.tags" class="mb-5 flex flex-wrap flex-row justify-start" />
    </div>
  </router-link>
</template>

<style lang="scss">
.card-hover {
  transition: all 0.3s ease;
  position: relative;
  top: 0;
  &:hover {
    top: -10px;
  }
}
</style>
