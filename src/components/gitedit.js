import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const GitEditButton = ({gitFile}) => {
    const { site } = useStaticQuery(
      graphql`
      query{
        site {
          siteMetadata {
            gitrepo
          }
        }
      }
    `
    )

    return (
      <button>
        <a
        href={`${site.siteMetadata.gitrepo}/edit/master${gitFile}`}
        target="_blank"
        rel="noopener noreferrer">Edit on GitHub</a>
      </button>
    )
}

export default GitEditButton
