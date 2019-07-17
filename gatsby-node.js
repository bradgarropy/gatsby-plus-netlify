/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const response = await graphql(`
    query READ_AGENDAS {
      allFile(filter: { sourceInstanceName: { eq: "agendas" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  const agendas = response.data.allFile.edges.map(edge => edge.node)

  agendas.forEach(agenda => {
    const { name } = agenda

    createPage({
      path: `/agenda/${name}`,
      component: path.resolve("src/templates/agenda.js"),
      context: { name },
    })
  })
}

module.exports = { createPages }
