import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query READ_AGENDA($name: String!) {
    file(name: { eq: $name }) {
      childMarkdownRemark {
        html
      }
    }
  }
`

const Agenda = ({ pageContext, data }) => {
  console.log(pageContext)
  console.log(data)

  return (
    <div>
      <h1>Agenda</h1>
    </div>
  )
}

export default Agenda
