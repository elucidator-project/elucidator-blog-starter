/* https://jasonwatmore.com/post/2018/08/07/javascript-pure-pagination-logic-in-vanilla-js-typescript */
import type { Paginate } from "~/types"

export const usePaginate = ({
  totalItems,
  currentPage = 1,
  pageSize = 10,
  maxPages = 10,
}: Paginate) => {
  // calculate total pages
  const totalPages = Math.ceil(totalItems / pageSize)

  // ensure current page isn't out of range
  if (currentPage < 1) currentPage
  else if (currentPage > totalPages) currentPage = totalPages

  let startPage: number, endPage: number
  if (totalPages <= maxPages) {
    startPage = 1
    endPage = totalPages
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
    const maxPagesAfterCurrentPage = Math.floor(maxPages / 2) - 1
    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1
      endPage = maxPages
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1
      endPage = totalPages
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage
      endPage = currentPage + maxPagesAfterCurrentPage
    }
  }

  // calculate start and end item indexes
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i,
  )

  return {
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages,
  }
}
