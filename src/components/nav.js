import { graphql,useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default function Nav() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "pages" }, extension: { eq: "md" } }
        sort: { fields: relativePath }
      ) {
        edges {
          node {
            relativeDirectory
            relativePath
            name
          }
        }
      }
    }
  `)

  const pagesData = data.allFile.edges
  console.log(pagesData)

  // Add an item node in the tree, at the right position
  function addToTree(node, treeNodes) {
    // Check if the item node should inserted in a subnode
    for (var i = 0; i < treeNodes.length; i++) {
      var treeNode = treeNodes[i]

      // README files are needed but cause too much trouble because they are returned in the query as part of the reative path
      let path = node.node.relativePath.replace("\/README.md", "")

      if (path.indexOf(treeNode.relativePath) !== -1) {
        addToTree(node, treeNode.children)

        // Item node was added, we can quit
        return
      }
    }

    // Item node was not added to a subnode, so it's a sibling of these treeNodes
    treeNodes.push({
      name: node.node.name,
      relativeDirectory: node.node.relativeDirectory,
      relativePath: node.node.relativePath.replace("\/README.md", ""),
      children: [],
    })
  }

  //Create the item tree starting from menuItems
  function createTree(nodes) {
    var tree = []

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i]
      addToTree(node, tree)
    }

    return tree
  }

  const menuItemsTree = createTree(pagesData)

  console.log('menu', menuItemsTree)

  return (
    <nav>
      {menuItemsTree.map((items, i) => (
        <ul key={i}>
          <li>
            <Link to={`/${items.relativeDirectory}/${items.name}`} key={i}>
              {items.relativePath}
            </Link>
              {items.children
                ? items.children.map((child, i) => {
                    return (
                      <ul>
                        <li key={i}>
                          <Link
                            to={`/${child.relativeDirectory}/${child.name}`}
                            key={"sub-" + i}
                          >
                            {child.relativePath}
                          </Link>
                          {child.children
                            ? child.children.map((child, i) => {
                                return (
                                  <ul>
                                    <li key={i}>
                                      <Link
                                        to={`/${child.relativeDirectory}/${child.name}`}
                                        key={"sub-" + i}
                                      >
                                        {child.relativePath}
                                      </Link>
                                    </li>
                                  </ul>
                                )
                              })
                            : null}
                        </li>
                      </ul>
                    )
                  })
                : null}
          </li>
        </ul>
      ))}
    </nav>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}
