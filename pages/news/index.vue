<template lang="pug">
  div
    h1 News

    ul.list-none.ml-0
      li(v-for="(post, i) in news" :key="`post-${i}`")
        .p-3.mb-6.shadow-md.rounded.bg-blue-200
          nuxt-link(:to="`/news/${post.slug}`")
            h2.font-light.tracking-tight {{ post.title }}

            p.text-xl.text-gray-700 {{ post.description }}
</template>

<script>
export default {
  name: 'News',
  async asyncData({ $content }) {
    const news = await $content('news').where({ draft: false }).fetch()
    return {
      news,
    }
  },
}
</script>
