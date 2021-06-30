<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  image: string;
  alt: string;
  tags: Array<string>;
  date: string;
  title: string;
  description: string;
  to: string;
  toTags: string;
}>();
</script>
<template>
  <router-link :to="to" class="flex flex-wrap flex-row">
    <img
      :src="$props.image"
      class="rounded h-sm object-cover mx-auto w-full lg:w-1/2"
      :alt="$props.alt"
      :aria-label="$props.alt"
      role="img"
      loading="lazy"
    />
    <div class="flex flex-col px-5 py-1 sm:w-full lg:w-1/2">
      <span
        class="mb-2 sm:mt-5 lg:mt-0 text-elucidator-700 dark:text-elucidator-50"
      >Published at {{ $props.date }}</span>
      <router-link
        :to="to"
        class="text-3xl text-elucidator-800 dark:text-dark-repulser-400 font-bold mb-2"
      >
        {{
          $props.title
        }}
      </router-link>
      <p
        class="text-sm font-light mb-5 text-elucidator-700 dark:text-elucidator-50"
      >{{ $props.description }}</p>
      <Tag :tags="$props.tags" class="mb-5 flex flex-row justify-start" />
    </div>
  </router-link>
</template>
