<template lang="pug">
  div
    .row
      .col-5.col-sm-4
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

      .col-4.text-center
        h1 Tioga County, Pa

        h2 Democrats

      .col-3.col-sm-4
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

    nav.navbar.navbar-dark.navbar-expand-sm.bg-democrat-blue
      a.navbar-brand(href="#") Tioga Dems
      button.navbar-toggler(
        type="button",
        data-toggle="collapse",
        data-target="#navbar-top",
        aria-controls="navbar-top",
        aria-expanded="false",
        aria-label="Toggle navigation"
      )
        span#navbar-top.navbar-toggler-icon
      .collapse.navbar-collapse
        ul.navbar-nav
          li.nav-item
            a.nav-link(href="#") Home
</template>

<style lang="sass" scoped>
svg
  max-width: 250px
  width: 100%

.democrat-logo
  max-width: 150px
</style>
