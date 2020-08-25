<template>
  <article>
    <nuxt-content v-if="page.extension === '.md'" :document="page" />

    <div v-if="page.extension !== '.md'">
      <h2>Important Links</h2>

      <p class="text-2xl text-gray-600">
        Here are some links we think you may find helpful.
      </p>

      <hr />

      <ul v-if="page.slug === 'links'">
        <li v-for="(link, i) in page.body" :key="`link-${i}`">
          <a
            :href="link.url"
            target="_blank"
            rel="noopener"
            v-if="link.external"
            >{{ link.text }}</a
          >
          <nuxt-link :to="link.url" v-else>{{ link.text }}</nuxt-link>
        </li>
      </ul>

      <p
        v-if="page.slug === 'links' && page.body.length === 0"
        class="text-2xl text-gray-600"
      >
        No links found.
      </p>

      <ul v-if="page.slug === 'events'">
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
export default {
  async asyncData({ $content, params, error }) {
    console.log(params)
    const page = await $content(params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
}
</script>
