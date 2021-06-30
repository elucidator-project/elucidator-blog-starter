import type { ViteSSGContext } from "vite-ssg"

export type UserModule = (ctx: ViteSSGContext) => void

type Network = "facebook" | "twitter" | "telegram" | "whatsapp" | "pinterest"

export interface DataShare {
  icon: string
  network: Network
  url: string
  name: string
  title?: string
  description?: string
  quote?: string
  hashtags?: string
  twitterUser?: string
  media?: string
}

export interface NavbarMenu {
  name: string
  to: string
}

export interface RelatedArticles {
  limit: number
  tags: Array<string>
  name: string
}

export interface PaginateData {
  articles: Array<unknown>
  currentPage: number
  pageSize: number
}

export interface Paginate {
  totalItems: number
  currentPage: number
  pageSize: number
  maxPages?: number
}
