<script setup lang="ts">
import { isClient } from '@vueuse/core';
import { getRelatedArticles } from '~/data';
import { slug, limitString } from '~/utils'
import type { DataShare } from '~/types'

const { frontmatter } = defineProps<{ frontmatter: any }>()

const relatedArticles = computed(() => {
  return getRelatedArticles({
    limit: 4,
    tags: frontmatter.tags,
    name: frontmatter.name
  })
})

const router = useRoute()
const routes = router.fullPath
let url: string = ""
if (typeof window !== "undefined") {
  url = window.location.origin + routes
}
const dataShare: DataShare[] = [
  {
    icon: "facebook",
    network: "facebook",
    name: "Facebook",
    url: url,
    title: frontmatter.name,
    description: frontmatter.description,
    hashtags: "test",
  },
  {
    icon: "twitter",
    network: "twitter",
    name: "Twitter",
    url: url,
    title: frontmatter.name,
    hashtags: "test",
  },
  {
    icon: "whatsapp",
    network: "whatsapp",
    name: "Whatsapp",
    url: url,
    description: frontmatter.description,
    title: frontmatter.name,
  },
  {
    icon: "telegram",
    network: "telegram",
    name: "Telegram",
    url: url,
    description: frontmatter.description,
    title: frontmatter.name
  },
]

/* 
  Inspired by https://github.com/antfu/antfu.me/blob/HEAD/src/components/Post.vue
*/
if (isClient) {
  const navigate = () => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEventListener(window, 'hashchange', navigate, false)

  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault()
        const href = a.getAttribute('href')
        history.replaceState({}, '', href)
        navigate()
      })
    })

    navigate()
    setTimeout(navigate, 500)
  })
}
</script>

<template>
  <div class="py-5 px-4">
    <h1
      class="mb-5 text-transparent bg-clip-text bg-gradient-to-r text-center font-bold text-5xl from-elucidator-500 to-elucidator-700 dark:from-dark-repulser-500 dark:to-dark-repulser-300 md:block"
    >{{ frontmatter.name }}</h1>
    <p
      class="text-center font-normal mb-5 text-dark-100 dark:text-elucidator-50"
    >{{ frontmatter.description }}</p>
    <div class="flex flex-row flex-wrap justify-center">
      <carbon-calendar class="mr-1 mt-2px dark:text-elucidator-50" />
      <p
        class="text-center text-dark-100 font-light mb-5 dark:text-elucidator-50"
      >{{ new Date(frontmatter.date).toDateString() }}</p>
    </div>
    <Tag :tags="frontmatter.tags" class="mb-5 flex flex-row justify-center" />
    <img
      :src="frontmatter.thumbnail"
      :alt="`thumbnail-${frontmatter.name}`"
      class="w-full h-md object-cover rounded-md shadow-lg"
      loading="lazy"
    />
    <div
      class="mt-5 mb-5 text-elucidator-500 divide-y dark:text-elucidator-50"
      style="border-bottom: 1px solid #63C0B6;"
    >
      <slot />
    </div>
    <h2
      class="text-center text-3xl font-bold text-elucidator-700 dark:text-dark-repulser-400 mt-5 mb-4"
    >Share this article</h2>
    <div class="flex flex-wrap justify-center items-center">
      <Share
        v-for="(share, i) in dataShare"
        :key="i"
        :icon="share.icon"
        :name="share.name"
        :network="share.network"
        :url="share.url"
        :title="share.title"
        :description="share.description"
        :quote="share.quote"
        :hashtags="share.hashtags"
        :twitter-user="share.twitterUser"
        :media="share.media"
      />
    </div>
    <div class="mt-5 mb-5">
      <client-only>
        <Disqus />
      </client-only>
    </div>
    <div class="flex flex-wrap flex-col px-4 lg:px-0">
      <h1
        class="mb-5 mt-8 text-3xl text-elucidator-700 dark:text-dark-repulser-400 font-bold"
      >Related Articles</h1>
      <div class="mx-auto grid inline-grid gap-4 mb-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        <Article
          v-for="(data, i) in relatedArticles"
          :key="i"
          :image="data.meta.frontmatter.thumbnail"
          :alt="`blog-banner-${slug(data.meta.frontmatter.name)}`"
          :tags="data.meta.frontmatter.tags"
          :date="`${new Date(data.meta.frontmatter.date).toDateString()}`"
          :title="data.meta.frontmatter.name"
          :to="data.path"
          :description="limitString(data.meta.frontmatter.description, 200)"
          :to-tags="`/tags/${data.meta.frontmatter.tags}`"
        />
      </div>
    </div>
  </div>
</template>
