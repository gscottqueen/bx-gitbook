import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { headings, html } = markdownRemark

  return (
    <Layout>
      <div className="page-container">
        <div className="page-markdown">
          <h1>{headings.value}</h1>
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
