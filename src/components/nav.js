import { graphql,useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default function Nav() {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            headings(depth: h1) {
              value
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)

  console.log(data.allMarkdownRemark.edges )

  return (
    <nav>
      <ul>
        {data.allMarkdownRemark.edges.map((navItems, i) => (
          <li key={i}>
            {navItems.node.headings.map((heading, i) => {
              console.log(heading);
              return (
                <Link to="/" key={i}>
                  {heading.value}
                </Link>
              )
            })}
          </li>
        ))}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}
