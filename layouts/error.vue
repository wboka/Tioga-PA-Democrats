<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Whoops, page not found</h1>
    <h1 v-else>Sorry, an error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
