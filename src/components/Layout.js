/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Nav from "../components/Nav"

import Header from "./Header"
import "normalize.css"

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <aside
          style={{
            display: "block",
            float: "left",
            width: "33%",
            height: "100%",
          }}
        >
          <Link to="/search">Search</Link>
          <Nav />
        </aside>
        <main
          style={{
            maxWidth: "80%"
          }}
        >
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()},{" "}
          <a href="https://www.bixal.com">Bixal</a> Documentation
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
