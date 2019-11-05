import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Swal from "sweetalert2"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title ? frontmatter.title : ``} />

      {frontmatter.show_title ? <h1>{frontmatter.title}</h1> : null}

      <p className="py-2 italic">Click image to view full size</p>

      <div className="flex flex-wrap">
        {frontmatter.images
          ? frontmatter.images.map(image => {
              return (
                <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
                  <img
                    className="clickable mx-auto shadow-lg"
                    src={image.image}
                    alt={image.caption}
                    onClick={e => Swal.fire({ imageUrl: image.image, imageAlt: image.caption, width: `auto` })}
                  />
                  <p className="py-3">{image.caption}</p>
                </div>
              )
            })
          : null}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        show_title
        images {
          image
          caption
        }
      }
    }
  }
`
