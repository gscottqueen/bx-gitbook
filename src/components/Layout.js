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
    <div id="page">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Nav/>
      {/* <Navi
          id="menu"
          options={{
            "extensions": [
              "pagedim-black"
            ]
          }}
        >
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/work">Our work</a></li>
            <li><span>About us</span>
              <ul>
                <li><a href="/about/history">History</a></li>
                <li><span>The team</span>
                  <ul>
                    <li><a href="/about/team/management">Management</a></li>
                    <li><a href="/about/team/sales">Sales</a></li>
                    <li><a href="/about/team/development">Development</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><span>Services</span>
              <ul>
                <li><a href="/services/design">Design</a></li>
                <li><a href="/services/development">Development</a></li>
                <li><a href="/services/marketing">Marketing</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Navi> */}
      <section className="content">
        <main>{children}</main>
        <aside/>
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
