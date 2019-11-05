/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import links from "../../data/menus.json"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-blue-200">
      <Header siteTitle={data.site.siteMetadata.title} />
      <>
        <main className="container mx-auto p-4 ">{children}</main>
        <footer className="p-4 bg-democrat-blue-700 text-white text-center">
          <p className="uppercase">
            {links
              ? links.map(link => {
                  return link.showInFooter ? (
                    <div
                      key={link.url + link.text}
                      className="block hover:bg-white text-center md:text-left md:inline-block hover:text-democrat-blue-700 md:rounded"
                    >
                      {link.isExternalLink ? (
                        <a
                          href={link.url}
                          key={link.url + link.text}
                          target={link.shouldOpenInNewTab ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="block p-2 no-underline"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <Link
                          to={link.url}
                          key={link.url + link.text}
                          target={link.shouldOpenInNewTab ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="block p-2 no-underline"
                        >
                          {link.text}
                        </Link>
                      )}
                    </div>
                  ) : null
                })
              : null}
          </p>

          <hr />

          <p>
            &copy; {new Date().getFullYear()}, Web Development by
            {` `}
            <a
              href="https://www.bokasolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline text-white hover:shadow-lg hover:bg-blue-200 hover:text-blue-900 hover:no-underline rounded"
            >
              Wayne Boka, Web Developer
            </a>
          </p>

          <p>
            <a
              href="/admin"
              className="inline-block bg-blue-900 hover:shadow-lg hover:bg-blue-200 hover:text-blue-900 rounded p-2 m-2 shadow no-underline text-white"
            >
              Enter Admin Dashboard
            </a>
          </p>
        </footer>
      </>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
