import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query READ_AGENDA($name: String!) {
    file(name: { eq: $name }) {
      childMarkdownRemark {
        html
      }
    }
  }
`

const Agenda = ({ data }) => {
  const { html } = data.file.childMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default Agenda
