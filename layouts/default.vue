<template lang="pug">
  div
    Header
    div.container
      Nuxt
</template>

<script>
import Header from '~/components/header'

import '~/assets/global.sass'

export default {
  components: {
    Header,
  },
}
</script>
