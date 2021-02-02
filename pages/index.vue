<template lang="pug">
  div
    h1.text-center(v-if="!homePage") The Tioga County, Pa Democrats

    nuxt-content(:document="homePage")
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $content }) {
    const homePage = await $content('home').fetch()

    return {
      homePage,
    }
  },
}
</script>
