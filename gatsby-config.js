module.exports = {
  siteMetadata: {
    title: `Tioga County, PA Democrats`,
    description: `Home of Pennsylvania's Tioga County Democrats.`,
    author: `@wtboka`,
    siteUrl: `https://tiogadems.bokasolutions.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/cms/pages`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tioga County, PA Democrats`,
        short_name: `Tioga Dems`,
        start_url: `/`,
        background_color: `#2fabe1`,
        theme_color: `#2fabe1`,
        display: `standalone`,
        icon: `static/images/logo.png`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
					{
						site {
							siteMetadata {
								title
								description
								siteUrl
								site_url: siteUrl
							}
						}
					}
				`,
        feeds: [
          {
            serialize: ({ query: { site, obituariesRemark, pagesRemark } }) => {
              return pagesRemark.edges.map(edge => {
                const { fields, frontmatter } = edge.node

                return Object.assign({}, frontmatter, {
                  description: frontmatter.description
                    ? frontmatter.description
                    : ``,
                  date: new Date(),
                  url: site.siteMetadata.siteUrl + fields.slug,
                  guid: site.siteMetadata.siteUrl + fields.slug,
                  custom_elements: [
                    {
                      "content:encoded": frontmatter.content
                        ? frontmatter.content
                        : `${frontmatter.left_column}${frontmatter.right_column}`,
                    },
                  ],
                })
              })
            },
            query: `
						{
							pagesRemark: allMarkdownRemark(filter: {
								fileAbsolutePath: {
									regex: "/.*cms/pages.*/"
								}
							}
							sort: {
								fields: [frontmatter___title]
								order: [ASC]
							}) {
								edges {
									node {
										fields {
											slug
										}
										frontmatter {
											description
											title
											left_column
											right_column
											content
										}
									}
								}
							}
						}
						`,
            output: `/rss.xml`,
            title: `Tioga Dems RSS Feed`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
