/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./Nav"

import Header from "./Header"
import "../css/holy-grail-grid.css"

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
    <div className="container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />
        <main>{children}</main>
        <aside/>
        <footer>
          © {new Date().getFullYear()},{" "}
          <a href="https://www.bixal.com">Bixal</a> Documentation
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
