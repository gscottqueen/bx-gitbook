import React, { useState } from "react"
import * as JsSearch from "js-search"
import { useStaticQuery, graphql, Link } from "gatsby"


export default function Search() {
  const searchData = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          id
          headings(depth: h1) {
            value
          }
          excerpt(pruneLength: 600, format: PLAIN)
          html
          fileAbsolutePath
        }
      }
    }
  `)

  const pagesIndex = searchData.allMarkdownRemark.nodes
  const search = new JsSearch.Search("id") // passing a uid

  console.log(search)
  search.addIndex("html")

  pagesIndex.forEach((page, i) => {
    search.addDocuments([page])
  })

  const documents = [...search._documents]
  const [searchIndex, setSearchIndex] = useState(documents)

  return (
    <div>
      <input
        onChange={e =>
          e.target.value !== ""
            ? setSearchIndex(search.search(e.target.value))
            : setSearchIndex(documents)
        }
      ></input>
      {searchIndex && searchIndex.length ? (
        <ul>
          {searchIndex.map((page, i) => {
            console.log(page)

            // clean-build our rel path
            const regexDir = /.*(\/pages)+/
            const filePath = `${page.fileAbsolutePath}`
            const newPath = filePath.replace(regexDir, "")
            const regexExt = /\.[^.]+$/
            const relPath = newPath.replace(regexExt, "")

            return (
              <li key={i}>
                <Link to={relPath}>{page.excerpt}</Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <div>reset search</div>
      )}
    </div>
  )
}

