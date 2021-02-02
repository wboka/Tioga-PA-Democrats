<template lang="pug">
  article
    nuxt-content(:document="page")

    p.italic Published on {{ format(new Date(page.datePublished), 'MMMM dd, yyyy') }}
</template>

<script>
import { format } from 'date-fns'
import socialMedia from '~/helpers/social-tags'

export default {
  name: 'News',
  async asyncData({ $content, params, error }) {
    const page = await $content('news', params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
  data() {
    return {
      format,
    }
  },
  head() {
    const options = {
      url: 'https://tiogadems.vercel.app',
      title: this.page.title,
      site_name: 'Democrats of Tioga County, Pa',
      description: this.page.description,
      locale: 'en_US',
      themeColor: '#3c3b6e',
    }
    return {
      title: this.page.title,
      description: this.page.description,
      meta: socialMedia(options),
    }
  },
}
</script>
