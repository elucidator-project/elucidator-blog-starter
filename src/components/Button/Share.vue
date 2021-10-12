<script setup lang="ts">
type Icons = "line" | "facebook" | "twitter" | "telegram" | "whatsapp"

const props = defineProps<{
  icon: Icons
  name: string
  network: string
  url: string
  title?: string
  description?: string
  quote?: string
  hashtags?: string
  twitterUser?: string
  media?: string
}>()
</script>

<template>
  <client-only>
    <ShareNetwork
      :network="$props.network"
      :url="$props.url"
      :title="$props.title"
      :description="$props.description"
      :quote="$props.quote"
      :hashtags="$props.hashtags"
      :twitter-user="$props.twitterUser"
      :media="$props.media"
    >
      <button
        class="bg-transparent border border-dark-repulser-300 rounded py-2 px-4 inline-flex items-center mr-2 mb-2 transition ease-in-out"
      >
        <span
          class="iconify text-xl text-elucidator-500 dark:text-dark-repulser-50 mr-2"
          :data-icon="`uim:${$props.icon}`"
          data-inline="false"
        ></span>
        <span class="text-elucidator-800 dark:text-dark-repulser-50">{{ $props.name }}</span>
      </button>
    </ShareNetwork>
  </client-only>
</template>
