import React, { useState, useEffect } from "react"
import * as JsSearch from "js-search"
import { useStaticQuery, graphql } from "gatsby"


export default function Search() {
  const searchData = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          id
          headings(depth: h1) {
            value
          }
          excerpt
        }
      }
    }
  `)

  const pagesIndex = searchData.allMarkdownRemark.nodes
  const search = new JsSearch.Search("id") // needs a uid

  console.log(search)
  search.addIndex('excerpt')

  pagesIndex.forEach((page, i) => {
    search.addDocuments([page])
  })

  console.log(search.search("Security"))
  const documents = [...search._documents]

  const [searchIndex, setSearchIndex] = useState(documents)

  return (
    <div>
      <input
        onChange={
          e =>  e.target.value !== ""
          ? setSearchIndex(search.search(e.target.value))
          : setSearchIndex(documents)
        }
      ></input>
      {searchIndex && searchIndex.length ? (
        <ul>
          {searchIndex.map((page, i) => {
            return <li key={i}>{page.excerpt}</li>
          })}
        </ul>
      ) : (
        <div>reset search</div>
      )}
    </div>
  )
}

