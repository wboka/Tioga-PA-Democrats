export default function socialMeta(options) {
  const tags = []

  // All meta tags
  const metaTags = [
    // Global
    { name: 'author', content: options.url },
    { name: 'publisher', content: options.url },
    { name: 'apple-mobile-web-app-title', content: options.title },
    { name: 'theme-color', content: options.themeColor },

    // Facebook & LinkedIn
    { property: 'og:title', content: options.title },
    { property: 'og:description', content: options.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: options.url },
    { property: 'og:image', content: options.img },
    { property: 'og:locale', content: options.locale },
    { property: 'og:site_name', content: options.site_name },

    // Twitter
    { name: 'twitter:card', content: options.twitter_card },
    { name: 'twitter:site', content: options.twitter },
    { name: 'twitter:creator', content: options.twitter },
    { name: 'twitter:title', content: options.title },
    { name: 'twitter:description', content: options.description },
    { name: 'twitter:image', content: options.img },
  ]

  // Add meta tags to head
  metaTags.forEach((tag) => {
    if (tag.content !== undefined && tag.content !== null) {
      if (tag.name) {
        tags.push({
          hid: tag.name,
          name: tag.name,
          content: tag.content,
        })
      } else if (tag.property) {
        tags.push({
          hid: tag.property,
          property: tag.property,
          content: tag.content,
        })
      }
    }
  })

  return tags
}
