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

  response.data.allFile.edges.forEach(edge => {
    createPage({
      path: `/agenda/${edge.node.name}`,
      component: path.resolve("src/templates/agenda.js"),
      context: {
        name: edge.node.name,
      },
    })
  })
}

module.exports = { createPages }
