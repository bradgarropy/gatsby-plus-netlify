/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

const createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "/agenda",
    component: path.resolve("src/templates/agenda.js"),
    context: {
      name: "value",
    },
  })
}

module.exports = { createPages }
