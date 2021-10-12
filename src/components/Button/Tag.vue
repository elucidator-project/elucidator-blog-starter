<script setup lang="ts">
import { capitalizeStr } from '~/utils'

const props =
  defineProps<{
    tags: Array<string>
  }>()
</script>

<template>
  <div>
    <router-link
      v-for="(data, i) in $props.tags"
      :key="i"
      :to="`/tags/${data.toLowerCase()}`"
      class="text-elucidator-400 p-1 text-xs bg-elucidator-500 dark:bg-elucidator-700 rounded-xl m-1"
    >
      <span class="p-2 text-white dark:text-elucidator-50">{{ capitalizeStr(data) }}</span>
    </router-link>
  </div>
</template>

<style lang="scss">
.card-hover {
  transition: all 0.3s ease;
  position: relative;
  top: 0;
  &:hover {
    top: -5px;
  }
}
</style>
