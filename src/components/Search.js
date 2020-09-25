import React, { useState } from "react"
import * as JsSearch from "js-search"
import * as Mark from "mark.js"
import {
  useStaticQuery,
  graphql,
  Link
} from "gatsby"
import parse from "html-react-parser"


export default function Search() {
  const searchData = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          id
          headings(depth: h1) {
            value
          }
          excerpt(pruneLength: 300, format: PLAIN)
          html
          fileAbsolutePath
        }
      }
    }
  `)

  const pagesIndex = searchData.allMarkdownRemark.nodes

  const search = new JsSearch.Search("id") // passing a uid

  // parse all our pages and construct our own index object
  pagesIndex.forEach((page, i) => {

    const newPage = {
      id: "",
      title: "",
      href: "",
      text: ""
    }

    const options = {
      replace: domNode => {
        if (!domNode.attribs) return

        if (domNode.name === "h1") {
          const regexDir = /.*(\/pages)+/
          const filePath = `${page.fileAbsolutePath}`
          const newPath = filePath.replace(regexDir, "")
          const regexExt = /\.[^.]+$/
          const relPath = newPath.replace(regexExt, "")
          const anchorPath = `${relPath + '/' + domNode.children[0].attribs.href}`

          newPage.id = page.id
          newPage.title = domNode.children[1].data
          newPage.href = anchorPath
          newPage.text = page.excerpt == newPage.title ? null : page.excerpt

          return (
            newPage
          )
        }

        if (domNode.name === "h2") {
          const regexDir = /.*(\/pages)+/
          const filePath = `${page.fileAbsolutePath}`
          const newPath = filePath.replace(regexDir, "")
          const regexExt = /\.[^.]+$/
          const relPath = newPath.replace(regexExt, "")
          const anchorPath = `${relPath + '/' + domNode.children[0].attribs.href}`
          let childExcerpt = ""

          if (domNode.next?.next?.children[0].type === "text") {
            childExcerpt = domNode.next?.next?.children[0].data
          }

          newPage.id = page.id
          newPage.title = domNode.children[1].data
          newPage.href = anchorPath
          newPage.text = childExcerpt

          return (
            newPage
          )
        }
      },
    }
    const detailedIndex = new Promise((resolve, reject) => {
      resolve(parse(page.html, options));
    });

    detailedIndex.then(
      search.addDocuments([newPage])
    )
  })

  search.addIndex = () => {

  }

  const documents = [...search._documents]
  const [searchIndex, setSearchIndex] = useState(documents)

  // mark.js
  const [keyword, setKeyword] = useState("")
  const context =
    typeof document !== "undefined" ? document.querySelectorAll("a") : ""

  if (context !== null) {
    const instance = new Mark(context)
    const markOptions = {
      "accuracy": "complementary",
      "wildcards": "enabled",
      "ignoreJoiners": true,
    }
    instance.mark(keyword, [markOptions])
  }

  function handleChange(e) {
    if (e.target.value) {
      setKeyword(e.target.value)
      setSearchIndex(search.search(e.target.value))
    } else {
      setSearchIndex(documents)
      setKeyword("")
    }
  }

//  console.log(search)

  return (
    <div>
      <input
        id="search"
        onChange={ e => handleChange(e) }
      ></input>
      {searchIndex && searchIndex.length > -1 ? (
        <ul>
          {searchIndex.map((page, i) => {

            console.log(page)
            return (
              <li key={i}>
                <Link to={page.href}>
                  <h3>{page.title}</h3>
                  <p>{page.text}</p>
                </Link>
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

