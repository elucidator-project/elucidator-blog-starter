<script setup lang="ts">
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
    class="max-w-lg rounded shadow-lg card-hover flex flex-col "
  >
    <img
      :src="$props.image"
      class="h-auto object-cover w-full "
      :alt="$props.alt"
      loading="lazy"
    />
    <div class="article-content flex content-between flex-1 flex-col dark:bg-elucidator-100 py-2 px-4">
      <div class="article-content-top  flex-1">
        <span class="text-elucidator-700 mb-2 text-xs p-1 dark:text-elucidator-700">{{ $props.date }}</span>
        <h1 class="text-xl text-elucidator-800 font-bold p-1 mb-1">{{ $props.title }}</h1>
        <p
          :class="`text-sm text-elucidator-700 dark:text-elucidator-700 font-extralight mb-5 p-1`"
        >{{ $props.description }}</p>
      </div>
      <div class="article-content-bottom">
        <Tag :tags="$props.tags" class="mb-5 flex flex-wrap flex-row justify-start" />
      </div>
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
