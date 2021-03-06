/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import { SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import Nav from '../components/Nav'

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
    <SkipNavLink />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Nav/>
    <div id="page">
      <section className="content">
        <main>{children}</main>
      </section>
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
