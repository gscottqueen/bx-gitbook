import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import NestedMenu from './NestedMenu';

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
            children {
              ... on MarkdownRemark {
                id
                headings(depth: h1) {
                  value
                }
              }
            }
          }
        }
      }
    }
  `)

  const pagesData = data.allFile.edges
  const [menuItemsTree, setMenuItemsTree] = useState([])

  useEffect(() => {
  // Add an item node in the tree, at the right position
  function addToTree(node, treeNodes) {
    // Check if the item node should inserted in a subnode
    for (let i = 0; i < treeNodes.length; i++) {
      const treeNode = treeNodes[i]

      // README files are needed but cause too much trouble because they are returned in the query as part of the reative path
      let path = node.node.relativePath.replace("/README.md", "")

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
      relativePath: node.node.relativePath.replace("/README.md", ""),
      titles: node.node.children,
      children: [],
    })
  }

  //Create the item tree starting from menuItems
  function createTree(nodes) {
      const tree = []

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      addToTree(node, tree)
    }
    return tree
  }

  setMenuItemsTree(createTree(pagesData))

  }, [pagesData])

  return (
    <NestedMenu
      id="menu"
      menuItems={menuItemsTree}
    />
  )
}
