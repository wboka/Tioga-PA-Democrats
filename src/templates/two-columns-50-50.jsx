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

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
          <div
            dangerouslySetInnerHTML={{
              __html: markdown.toHTML(frontmatter.left_column),
            }}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div
            dangerouslySetInnerHTML={{
              __html: markdown.toHTML(frontmatter.right_column),
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        left_column
        right_column
      }
    }
  }
`
