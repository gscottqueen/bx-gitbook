import React, { useState, useRef } from "react"
import * as JsSearch from "js-search"
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
          excerpt(pruneLength: 300, format: PLAIN)
          html
          fileAbsolutePath
        }
      }
    }
  `)

  const pagesIndex = searchData.allMarkdownRemark.nodes

  const search = new JsSearch.Search("id") // passing a uid
  search.addIndex("title")
  search.addIndex("text")

  // parse all our pages and construct our own index object
  pagesIndex.map((page) => {

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
      return childExcerpts.join()
    }

    const options = {
      replace: domNode => {
        if (!domNode.attribs) return

        if (domNode.name === "h1") {
          newPageItem.id = page.id
          newPageItem.title = domNode.children[1].data
          newPageItem.href = getAnchorPath(page, domNode)
          newPageItem.text = buildChildExcerpt(page.html)
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
  const searchInput = useRef(null)

  function handleChange() {
    if (searchInput.current.value) {
      setSearchIndex(search.search(searchInput.current.value))
    } else {
      setSearchIndex(documents)
    }
  }

  return (
    <div>
      <input
        id="search"
        ref={searchInput}
        onChange={handleChange}
      ></input>
      {searchIndex && searchIndex.length > -1 ? (
        <ul>
          {searchIndex.map((page) => {
            return (
            <li key={page.id}>
              <Link to={page.href}>
                <h3>{page.title}</h3>
              </Link>
                <p>{ page.text.length < 600 ? page.text : page.text.slice(0, 600).concat("...")}</p>
            </li>
            )
          })}
        </ul>
      ) : (
        <div>no results found, reset search</div>
      )}
    </div>
  )
}

