<template>
  <article>
    <nuxt-content v-if="page.extension === '.md'" :document="page" />

    <div v-if="page.extension !== '.md'">
      <ul v-if="page.slug === 'links'">
        <h2>Important Links</h2>

        <p class="text-2xl text-gray-600">
          Here are some links we think you may find helpful.
        </p>

        <hr />

        <li v-for="(link, i) in page.body" :key="`link-${i}`">
          <a
            v-if="link.external"
            :href="link.url"
            target="_blank"
            rel="noopener"
            >{{ link.text }}</a
          >
          <nuxt-link v-else :to="link.url">{{ link.text }}</nuxt-link>
        </li>
      </ul>

      <p
        v-if="page.slug === 'links' && page.body.length === 0"
        class="text-2xl text-gray-600"
      >
        No links found.
      </p>

      <ul v-if="page.slug === 'events'">
        <h2>Upcoming Events</h2>

        <p class="text-2xl text-gray-600">
          Come join us out and about the county.
        </p>

        <hr />

        <li v-for="(event, i) in page.body" :key="`event-${i}`">
          <h3>{{ event.date }}</h3>
          <p class="text-xl text-gray-600">
            {{ event.details }}
          </p>

          <a :href="event.website" target="_blank" rel="noopener">
            Visit Event Website for More Details
          </a>
        </li>
      </ul>

      <p
        v-if="page.slug === 'events' && page.body.length === 0"
        class="text-2xl text-gray-600"
      >
        No events found.
      </p>
    </div>
  </article>
</template>

<script>
import socialMedia from '~/helpers/social-tags'

export default {
  name: 'Page',
  async asyncData({ $content, params, error }) {
    const page = await $content(params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
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
