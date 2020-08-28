import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GitEditButton from "../components/gitedit"
import PrevNext from "../components/prevnext"
import InPageNav from "../components/inpagenav"

export default function PageTemplate({ data, pageContext }) {
  const { markdownRemark } = data
  const { headings, html, fileAbsolutePath, timeToRead } = markdownRemark
  const { previous, next } = pageContext

  // build our github rel directory
  const regexDir = /.*(\/bx-techbook)+/
  const filePath = `${fileAbsolutePath}`
  const gitFile = filePath.replace(regexDir, "")

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
          <div
            className="page-markdown-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
