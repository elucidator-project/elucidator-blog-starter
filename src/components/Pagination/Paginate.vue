<script setup lang="ts">
import { isDark } from "~/utils"

const props = defineProps<{
  startPage: number
  endPage: number
  mid: Array<number>
  currentPage: number
  clickStartPage: () => void
  clickPaginate: (paginate: number) => void
  clickEndPage: () => void
}>()

</script>

<template>
  <ul v-if="$props.endPage > $props.startPage" class="flex">
    <li
      class="mx-1 py-2 px-4 bg-gray-200 text-gray-700 hover:bg-elucidator-400 hover:text-gray-200 rounded-1/2 cursor-pointer"
      :class="$props.currentPage == $props.startPage ? isDark ? '' : 'bg-elucidator-400' : isDark ? 'bg-elucidator-400' : '' "
      @click="clickStartPage"
    >
      <a class="font-bold">{{ $props.startPage }}</a>
    </li>
    <li
      v-for="(paginate, i) in $props.mid"
      :key="i"
      class="mx-1 py-2 px-4 bg-gray-200 text-gray-700 hover:bg-elucidator-400 hover:text-gray-200 rounded-1/2 cursor-pointer"
      :class="$props.currentPage == paginate ? isDark ? '' : 'bg-elucidator-400' : isDark ? 'bg-elucidator-400' : '' "
      @click="clickPaginate(paginate)"
    >
      <a class="font-bold">{{ paginate }}</a>
    </li>
    <li
      class="mx-1 py-2 px-4 bg-gray-200 text-gray-700 hover:bg-elucidator-400 hover:text-gray-200 rounded-1/2 cursor-pointer"
      :class="$props.currentPage == $props.endPage ? isDark ? '' : 'bg-elucidator-400' : isDark ? 'bg-elucidator-400' : '' "
      @click="clickEndPage"
    >
      <a class="font-bold">{{ $props.endPage }}</a>
    </li>
  </ul>
</template>
