import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GitEditButton from "../components/GitEdit"
import PrevNext from "../components/prevnext"
import InPageNav from "../components/inpagenav"
import parse from "html-react-parser"
import Image from "../components/image"

export default function PageTemplate({ data, pageContext }) {
  const { markdownRemark } = data
  const { headings, html, fileAbsolutePath, timeToRead } = markdownRemark
  const { previous, next } = pageContext

  // build our github rel directory
  const regexDir = /.*(\/bx-techbook)+/
  const filePath = `${fileAbsolutePath}`
  const gitFile = filePath.replace(regexDir, "")

  const options = {
    replace: domNode => {
      if (!domNode.attribs) return

      if (domNode.name === "img") {
        return (
          <Fragment>
            <Image src={domNode.attribs.src} alt={domNode.attribs.alt} />
          </Fragment>
        )
      }
    },
  }

  return (
    <Layout>
      <div className="page-container">
        <div className="page-markdown">
          <GitEditButton gitFile={gitFile} />
          <br />
          <span>Time to read: {timeToRead} min</span>
          <br />
          <PrevNext previous={previous} next={next} />
          <br />
          <InPageNav headings={headings} />
          <div className="page-markdown-content">{parse(html, options)}</div>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($regex: String!) {
    markdownRemark(fileAbsolutePath: { regex: $regex }) {
      headings {
        value
      }
      html
      fileAbsolutePath
      timeToRead
    }
  }
`
