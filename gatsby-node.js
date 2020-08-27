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
        nodes {
          id
          relativePath
          relativeDirectory
          name
        }
      }
    }
  `)

  data.allFile.nodes.forEach(file => {
    let regex = `/\/${file.name}*\\w+/`

    actions.createPage({
      path: `/${file.relativeDirectory}/${file.name}/`,
      component: require.resolve(`./src/templates/pageTemplate.js`),
      context: { id: regex },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([createTechPages({ graphql, actions })])
}
