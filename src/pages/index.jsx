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
      <SEO title="Home" />

      {frontmatter.content ? (
        <div
          dangerouslySetInnerHTML={{
            __html: markdown.toHTML(frontmatter.content),
          }}
        />
      ) : (
        <>
          <h1>Hello! Welcome to your new website!</h1>

          <p className="text-xl">
            Create a new <b>Page</b> in the <b>Admin</b> dashboard (link found
            below) called <q>Home</q> to replace this content.
          </p>
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { regex: "/home/i" } }) {
      frontmatter {
        content
      }
    }
  }
`
