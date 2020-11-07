import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Navi from './Navi.js';

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

  // Add an item node in the tree, at the right position
  function addToTree(node, treeNodes) {
    // Check if the item node should inserted in a subnode
    for (var i = 0; i < treeNodes.length; i++) {
      var treeNode = treeNodes[i]

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
    var tree = []

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i]
      addToTree(node, tree)
    }

    return tree
  }

  const menuItemsTree = createTree(pagesData)

  function NavigationItems(props) {
    return props.menuItems.map((item, i) => {
      return (
        <li>
          <Link
              to={`/${item.relativeDirectory}/${item.name}`}
              key={`${item.name + i}` }
            >
              {item.titles.map(({ headings }) => {
                return headings.map(({ value }) => {
                  return value
                })
              })}
            </Link>
            {item.children.length > 0 && (
              <ul>
                <NavigationItems menuItems={item.children}/>
              </ul>
            ) }
          </li>
      )
    })
  }

  return (
    <Navi
      id="menu"
      options={{
        "slidingSubmenus": true,
        "extensions": [
          "position-right",
          "shadow-panels",
          "theme-white",
          "position-front"
        ],
        "keyboardNavigation": {
          "enable": true,
          "enhance": true,
        },
        "setSlected": {
          "hover": true,
          "parent": true
        }
      }}
    >
    <ul>
      <NavigationItems menuItems={menuItemsTree} />
    </ul>
  </Navi>
  )
}
