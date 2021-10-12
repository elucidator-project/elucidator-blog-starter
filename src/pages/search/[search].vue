<script setup lang="ts">
import { getArticlesSearch, getParams, paginateData } from '~/data'
import { unslug, slug, limitString } from '~/utils'

const searchParams: any = getParams('search')
const search = getArticlesSearch([unslug(searchParams)])

// Get data search paginate
const currentPage = ref<number>(1)
const dataSearch = computed(() => {
  const paginate = paginateData({
    articles: search,
    currentPage: currentPage.value,
    pageSize: 3
  })

  return paginate
})

// Pagination
const clickStartPage = () => {
  currentPage.value = dataSearch.value.startPage
}
const clickPaginate = (paginate: number) => {
  currentPage.value = paginate
}
const clickEndPage = () => {
  currentPage.value = dataSearch.value.endPage
}
</script>

<template>
  <div class="flex flex-col flex-wrap mb-2 px-4 lg:px-0">
    <h1
      class="text-3xl text-elucidator-700 dark:text-dark-repulser-400 font-bold"
    >Search: {{ searchParams }} ({{ getArticlesSearch([unslug(searchParams)]).length }})</h1>
    <div class="flex flex-col flex-wrap mb-2">
      <div
        class="mx-auto grid inline-grid gap-4 py-10 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2"
      >
        <Article
          v-for="(data,i) in dataSearch.listArticles"
          :key="i"
          :image="data.meta.frontmatter.thumbnail"
          :alt="`blog-banner-${slug(data.meta.frontmatter.name)}`"
          :tags="data.meta.frontmatter.tags"
          :date="`${new Date(data.meta.frontmatter.date).toDateString()}`"
          :title="data.meta.frontmatter.name"
          :description="limitString(data.meta.frontmatter.description, 100)"
          :to="data.path"
          :to-tags="`/tags/${data.meta.frontmatter.tags}`"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-center mb-5">
      <Paginate
        :start-page="dataSearch.startPage"
        :end-page="dataSearch.endPage"
        :mid="dataSearch.mid"
        :current-page="currentPage"
        :click-start-page="clickStartPage"
        :click-paginate="clickPaginate"
        :click-end-page="clickEndPage"
      />
    </div>
  </div>
</template>
