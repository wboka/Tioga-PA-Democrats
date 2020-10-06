<template lang="pug">
  div
    .flex.flex-wrap.hero
      div(class="w-1/2 sm:w-1/4 p-2")
        svg.us-flag.d-block.mx-auto(
          xmlns="http://www.w3.org/2000/svg",
          xmlns:xlink="http://www.w3.org/1999/xlink",
          viewbox="0 0 7410 3900"
        )
          rect(width="7410", height="3900", fill="#b22234")
          path(
            d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0",
            stroke="#fff",
            stroke-width="300"
          )
          rect(width="2964", height="2100", fill="#3c3b6e")
          g(fill="#fff")
            g#s18
              g#s9
                g#s5
                  g#s4
                    path#s(
                      d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
                    )
                    use(xlink:href="#s", y="420")
                    use(xlink:href="#s", y="840")
                    use(xlink:href="#s", y="1260")
                  use(xlink:href="#s", y="1680")
                use(xlink:href="#s4", x="247", y="210")
              use(xlink:href="#s9", x="494")
            use(xlink:href="#s18", x="988")
            use(xlink:href="#s9", x="1976")
            use(xlink:href="#s5", x="2470")

      div(class="hidden sm:block w-full sm:w-2/4 text-center")
        h1 Tioga County, Pa

        h2 Democrats

      div(class="w-1/2 sm:w-1/4 p-2")
        svg.democrat-logo.d-block.mx-auto(
          xmlns="http://www.w3.org/2000/svg",
          viewBox="0 0 86 86"
        )
          title Democratic party logo
          circle(
            cx=43,
            cy=43,
            r=37.5,
            stroke="#00aff3",
            stroke-width=11,
            fill="#ffffff"
          )
          path(
            d="M28.5,25.5v35h16.5a17.5,17.5 0 0,0 0,-35zM38.5,34h5a9,9 0 0,1 0,18h-5z",
            fill="#00aff3"
          )

    nav.flex.items-center.justify-between.flex-wrap.bg-democrat-blue.p-3.my-3
      .flex.items-center.flex-shrink-0.text-white.mr-6
        nuxt-link.font-semibold.text-xl.tracking-tight(to="/") Tioga Dems

      div(class="block lg:hidden")
        button(class="flex items-center px-3 py-2 text-white" @click="toggleMenu")
          svg(class="h-6 w-6" :class="{ block: !showMenu, hidden: showMenu }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
            title Menu
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")

          svg(class="h-6 w-6" :class="{ block: showMenu, hidden: !showMenu }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")


      #menu-items(class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" :class="{ hidden: !showMenu, block: showMenu }")
        div(class="text-center lg:text-right text-sm lg:flex-grow")
          nuxt-link(to="/" class="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4") Home
          nuxt-link(to="/news" class="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4") News
          nuxt-link(to="/our-candidates" class="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4") Our Candidates
          nuxt-link(to="/platform" class="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4") Platform
          a(href="mailto:tiogadems@gmail.com" class="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4") Contact Us
          nuxt-link(to="/links" class="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4") Links
          nuxt-link(to="/events" class="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4") Events
</template>

<style lang="sass" scoped>
.hero
  svg
    max-width: 250px
    width: 100%

  .democrat-logo
    max-width: 125px

.us-flag
  // @apply .transform .translate-y-1/2
</style>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  watch: {
    $route() {
      this.showMenu = false
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
