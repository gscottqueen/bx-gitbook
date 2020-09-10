import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import PropTypes from "prop-types"

const Image = ({ src, ...imgAttr }) => {
  // sourceInstanceName defined in gatsby-config
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const findImage = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  if (!findImage) return null

  let { node: { childImageSharp } = {} } = findImage

  return <Img loading="lazy" fluid={childImageSharp.fluid} {...imgAttr} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default Image
