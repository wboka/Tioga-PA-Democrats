<template lang="pug">
  div
    h1 News

    ul.list-none.ml-0
      li(v-for="(post, i) in news" :key="`post-${i}`")
        .mb-6.shadow-md.rounded.bg-blue-200
          nuxt-link(:to="`/news/${post.slug}`")
            .p-3
              h2.font-light.tracking-tight {{ post.title }}

              p.text-xl.text-gray-700 {{ post.description }}

              p.italic Published on {{ format(new Date(post.datePublished), 'MMMM dd, yyyy') }}
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'News',
  async asyncData({ $content }) {
    const news = await $content('news')
      .where({ draft: false })
      .sortBy('datePublished', 'desc')
      .fetch()
    return {
      news,
    }
  },
  data() {
    return {
      format,
    }
  },
}
</script>
