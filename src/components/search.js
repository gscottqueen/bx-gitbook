import React, { useState, useEffect } from "react"
import * as JsSearch from "js-search"
import * as Mark from "mark.js"
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

  // console.log(search)
  search.addIndex("excerpt")

  pagesIndex.forEach((page, i) => {
    search.addDocuments([page])
  })

  const documents = [...search._documents]
  const [searchIndex, setSearchIndex] = useState(documents)

  // mark.js
  const [keyword, setKeyword] = useState("")
  const context =
    typeof document !== "undefined" ? document.querySelectorAll("a") : ""

  if (context !== "") {
    const instance = new Mark(context)
    const markOptions = {
      accuracy: "exactly",
    }

    instance.mark(keyword, [markOptions])
  }

  function handleChange(e) {
    console.log(e.target.value)
    if (e.target.value) {
      setKeyword(e.target.value)
      setSearchIndex(search.search(e.target.value))
    } else {
      setSearchIndex(documents)
      setKeyword("")
    }
  }


  return (
    <div>
      <input
        id="search"
        onChange={ e => handleChange(e) }
      ></input>
      {searchIndex && searchIndex.length ? (
        <ul>
          {searchIndex.map((page, i) => {
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

