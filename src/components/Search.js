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
  pagesIndex.map((page, i) => {

    const newPageItem = []

    function getAnchorPath(p,n) {
      const regexDir = /.*(\/pages)+/
      const filePath = `${p.fileAbsolutePath}`
      const newPath = filePath.replace(regexDir, "")
      const regexExt = /\.[^.]+$/
      const relPath = newPath.replace(regexExt, "")
      const anchorPath = `${relPath + '/' + n.children[0].attribs.href}`

      return anchorPath
    }

    function buildChildExcerpt(n) {

      let childExcerpts = []
      const childNodeDescriptions = n.next?.next?.children

      childNodeDescriptions.forEach(item => {
        console.log(item)

        if (item.type === "text" && item.data.length >= 2) {
          childExcerpts.push(item.data)
        }
      })

      return childExcerpts.join()
    }

    const options = {
      replace: domNode => {
        if (!domNode.attribs) return

        if (domNode.name === "h1") {
          newPageItem.id = page.id
          newPageItem.title = domNode.children[1].data
          newPageItem.href = getAnchorPath(page, domNode)
          newPageItem.text = page.excerpt === newPageItem.title ? null : page.excerpt
          newPageItem.type = "h1"

          return (
            [...newPageItem]
          )
        }

        if (domNode.name === "h2") {
          newPageItem.id = page.id
          newPageItem.title = domNode.children[1].data
          newPageItem.href = getAnchorPath(page, domNode)
          newPageItem.text = buildChildExcerpt(domNode)
          // newPageItem.text = "some excerpt"
          newPageItem.type = "h2"

          return (
            [...newPageItem]
          )
        }
      },
    }

    const detailedIndex = new Promise((resolve, reject) => {
        resolve(
          // console.log(page),
          parse(page.html, options)
        );
        reject(
          // console.log("this page didn't resolve", page.excerpt)
        )
    });

   return detailedIndex.then(
      search.addDocuments([newPageItem])
    )
  })

  // console.log(search)

  // search.addIndex = () => {

  // }


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

  return (
    <div>
      <input
        id="search"
        onChange={ e => handleChange(e) }
      ></input>
      {searchIndex && searchIndex.length > -1 ? (
        <ul>
          {searchIndex.map((page, i) => {
            // console.log(page)
            return (
              <li key={i}>
                { page.href !== "" || page.href !== undefined ?
                  <div>
                    <Link to={page.href}>
                      {page.type === "h1" ? <h3 style={{ textTransform: "capitalize" }}>{page.title}</h3> : <h4 style={{ textTransform: "capitalize", color: "gray" }}>{page.title}</h4>
                      }
                    </Link>
                    <p>{page.text}</p>
                  </div> : null
                }
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

