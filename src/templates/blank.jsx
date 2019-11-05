import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { markdown } from "markdown"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title ? frontmatter.title : ``} />

      <div
        dangerouslySetInnerHTML={{
          __html: markdown.toHTML(frontmatter.content),
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        content
      }
    }
  }
`
