const path = require(`path`)
const { kebabCase } = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      pagesRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.*cms/pages.*/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              page_type
              two_column_layout
            }
          }
        }
      }
    }
  `).then(result => {
    const pages = result.data.pagesRemark.edges

    pages.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `./src/templates/${kebabCase(
            node.frontmatter.page_type +
              (/two columns/i.test(node.frontmatter.page_type)
                ? " " + node.frontmatter.two_column_layout
                : "")
          ).toLowerCase()}.jsx`
        ),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
