import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GitEditButton from "../components/gitedit"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { headings, html, fileAbsolutePath} = markdownRemark

  // build our github rel directory
  const regexDir = /.*(\/bx-techbook)+/
  const filePath = `${fileAbsolutePath}`
  const gitFile = filePath.replace(regexDir, '')

  return (
    <Layout>
      <div className="page-container">
        <div className="page-markdown">
          <h1>{headings.value}</h1>
          <GitEditButton gitFile={gitFile}/>
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
  query($id: String!) {
    markdownRemark(fileAbsolutePath: { regex: $id }) {
      headings(depth: h1) {
        value
      }
      html
      fileAbsolutePath
    }
  }
`
