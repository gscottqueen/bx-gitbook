/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// build our tech pages
async function createTechPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "pages" }, extension: { eq: "md" } }
      ) {
        edges {
          next {
            relativeDirectory
            name
          }
          previous {
            relativeDirectory
            name
          }
          node {
            relativeDirectory
            name
          }
        }
      }
    }
  `)

  data.allFile.edges.forEach(file => {

    actions.createPage({
      path: `/${file.node.relativeDirectory}/${file.node.name}/`,
      component: require.resolve(`./src/templates/PageTemplate.js`),
      context: {
        regex: `/(\/${file.node.relativeDirectory})+(\/${file.node.name})+/`,
        previous: file.previous ? file.previous : null,
        next: file.next ? file.next : null,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([createTechPages({ graphql, actions })])
}
