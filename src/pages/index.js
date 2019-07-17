import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query READ_AGENDAS {
    allFile(filter: { sourceInstanceName: { eq: "agendas" } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const agendas = data.allFile.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="Home" />

      <h1>Agendas</h1>
      {agendas.map((agenda, index) => {
        const { name } = agenda

        return (
          <Link key={index} to={`/agenda/${name}`}>
            <p>{name}</p>
          </Link>
        )
      })}

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
