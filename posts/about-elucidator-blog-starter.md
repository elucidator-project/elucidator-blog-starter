---
name: About Elucidator Blog starter Vue 3 + Vite
thumbnail: https://i.ibb.co/d4hScjv/banner.png
date: 2021-06-29
description: Elucidator blog starter is a starter blog built with Vue 3, Typescript and Vite. You can create and publish your post just with markdown file :D.
tags: ["vue", "blog", "vite starter", "vue starter"]
---

<h1>Table Of Contents</h1>

[[toc]]

# Introduction

Elucidator blog starter is a starter blog built with [Vuejs 3](https://v3.vuejs.org/), [Vite](https://vitejs.dev/), and [Typescript](https://www.typescriptlang.org/). You can create publish your post just with markdown file. This starter has so many features for develop your own blog and it's fast ⚡. If you have some experience in vuejs and want to create a personal blog, you can use this starter for create your own blog. If you get bored with this design, you can create your own design. Not to forget, this css framework blog starter was built with [WindiCSS (Next generation utility-first CSS framework)](https://windicss.org/).

# Features

Elucidator blog starter has several features such as:

- Utilities Vue Composition API using [Vueuse](https://vueuse.org/)
- Document head manager for Vue 3 [Vueuse head](https://github.com/vueuse/head)
- Next generation utility first CSS framework using [WindiCSS](https://windicss.org)
- Style with [SCSS](https://sass-lang.com/)
- File system based route generator using [Vite Plugin Pages](https://github.com/hannoeru/vite-plugin-pages)
- Auto importing component using [Vite Plugin Component](https://github.com/antfu/vite-plugin-components)
- Markdown with Vue for Vite using [Vite Plugin Md](https://github.com/antfu/vite-plugin-md)
- Access thousands icons as Vue component in Vite using [Vite Plugin Icons](https://github.com/antfu/vite-plugin-icons)
- Progress bar like youtube, github, etc using [Nprogress](https://github.com/rstacruz/nprogress)
- Code syntax highlighter using [Prismjs](https://prismjs.com/)
- Comment the article using [Vue Disqus](https://github.com/evillt/vue-cusdis)
- Share your article using [Vue Social Sharing](https://github.com/nicolasbeauvais/vue-social-sharing)
- Typescript support :D
- Dark mode support :D

# Components

In this blog starter, we have several components to easier own your blog, and if you have an idea to add some components, you can make a pull request in this repository on github.

## Article Component

The article component `<Article />` is useful for display the article data that you have, and this component has a several properties, you can see this component detail in [...]

## Latest Component

This component (`<Latest />`) is useful for display the latest article you have, and same with article component, this component has a several properties you can use, you can see this component detail in [...]

## Share component

This component is useful for share your article to several platform like facebook, twitter, etc. This component would not have been possible without this library [Vue Social Sharing](https://github.com/nicolasbeauvais/vue-social-sharing).

## Tag component

You can use this component to display tag in the article component, latest component and post component. This component refer to the tag page and display the data of tag that the user click before.

## To Top Button

This button is useful to make the page back to top.

## Pagination

Pagination will paginate your data, you can limit your own data article as you want to paginate your data articles. Example to use this component, you can see here for more detail [...].

# Markdown Support

Thanks to Anthony Fu's [Vite Plugin Md](https://github.com/antfu/vite-plugin-md), this starter can use markdown file to create your article post. In this markdown you can use your own component in this file, example:

<ImageTwo 
  imageOne="https://source.unsplash.com/collection/94734566/1920x1080"
  altOne="example-image-one"
  descOne="Example image"
  imageTwo="https://source.unsplash.com/collection/94734566/1920x1080"
  altTwo="example-image-two"
  descTwo="Example image"
/>

# Comment System

Since this starter use disqus for comment system, first you should get the shortname, you can get the shortname from the official website [disqus](https://disqus.com/) and if you have the shortname, make sure you have to fill the value in the `.env` file. For more detail, you can read the documentation from [Vue Disqus](https://ktquez.github.io/vue-disqus/).

For more detail you can see the [Vite Plugin Md's](https://github.com/antfu/vite-plugin-md) Github reposistory. Not to forget again, thanks to [Markdown It Table Of Contents](https://github.com/cpadilla/markdown-it-table-of-contents), you can use table of content by fill `[[toc]]` in the markdown.

# Usage and Installation

## Development

I used pnpm for the package manager, you can adjust with your favorite package manager.

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

After finish the build process, you will see dist folder successfully generated.

# About The Name

Elucidator is a kirito's sword from the anime [Sword Art Online(SAO)](https://anilist.co/anime/11757/Sword-Art-Online/), and I like that anime, therefore i named this template with Elucidator :D.

# Credit

This starter was heavily inspired by [Vitesse](https://github.com/antfu/vitesse).
