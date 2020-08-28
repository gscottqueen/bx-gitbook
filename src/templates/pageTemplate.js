import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GitEditButton from "../components/gitedit"
import PrevNext from "../components/prevnext"

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
          <span>Time to read: {timeToRead} min</span>
          <PrevNext previous={previous} next={next} />
          <ul>
            On this page:
            {headings.map((heading, i) => {
              return (
                  i > 0 ? <li key={i}>{heading.value}</li> : null
                )
            })}
          </ul>
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
