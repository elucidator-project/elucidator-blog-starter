<script setup lang="ts">
import { latestArticle, getArticles } from '~/data'
import { limitString, slug } from "~/utils"

// Get latest article
const latest = computed(() => {
  return latestArticle()
})

// Get articles data
const articles = computed(() => {
  return getArticles(6)
})
</script>

<template>
  <div class="inline-grid px-4 lg:px-0">
    <h1
      class="mb-5 text-3xl text-elucidator-700 dark:text-dark-repulser-400 font-bold"
    >Latest Article</h1>
    <Latest
      :image="latest.thumbnail"
      :alt="`blog-banner-${slug(latest.name)}`"
      :tags="latest.tags"
      :date="`${new Date(latest.date).toDateString()}`"
      :title="latest.name"
      :description="limitString(latest.description, 200)"
      :to="articles[0].path"
      :to-tags="`/tags/${latest.tags}`"
    />
  </div>
  <div class="flex flex-col flex-wrap mb-2 mt-12 px-4 lg:px-0">
    <div class="grid inline-grid grid-cols-2 mb-5">
      <h1 class="text-3xl font-bold text-elucidator-700 dark:text-dark-repulser-400">All post</h1>
      <router-link
        to="/articles"
        class="cursor-pointer text-right my-auto text-elucidator-700 dark:text-dark-repulser-400"
      >See all</router-link>
    </div>
    <div
      class="mx-auto inline-grid gap-4 mb-5 sm:grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <Article
        v-for="(data, i) in articles"
        :key="i"
        :image="data.meta.frontmatter.thumbnail"
        :alt="`blog-banner-${slug(data.meta.frontmatter.name)}`"
        :tags="data.meta.frontmatter.tags"
        :date="`${new Date(data.meta.frontmatter.date).toDateString()}`"
        :title="data.meta.frontmatter.name"
        :to="data.path"
        :description="limitString(data.meta.frontmatter.description, 100)"
        :to-tags="`/tags/${data.meta.frontmatter.tags}`"
      />
    </div>
  </div>
</template>
