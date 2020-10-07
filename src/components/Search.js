import React, { useState } from "react"
import * as JsSearch from "js-search"
import * as Mark from "mark.js"
import {
  useStaticQuery,
  graphql,
  Link
} from "gatsby"
import parse from "html-react-parser"

const htmlparser2 = require("htmlparser2");


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

    function buildChildExcerpt(markup) {

      let childExcerpts = []

      function getText(markup) {
        const parser = new htmlparser2.Parser({
          ontext(text) {
            // is our text really text?
            const regexPattern = /(\b)/g
            if (text.match(regexPattern)) {
              childExcerpts.push(text)
            }
          },
        });
        parser.write(
          markup
        );
        parser.end();
      }
      getText(markup) // get our excerpts
      return childExcerpts.join().slice(0, 600).concat("...")
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
          newPageItem.text = buildChildExcerpt(page.html)
          newPageItem.type = "h2"

          return (
            [...newPageItem]
          )
        }
      },
    }

    const detailedIndex = new Promise((resolve, reject) => {
        resolve(parse(page.html, options));
        reject(new Error("DOH!"));
    });

   return detailedIndex.then(
      search.addDocuments([newPageItem])
    )
  })

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

