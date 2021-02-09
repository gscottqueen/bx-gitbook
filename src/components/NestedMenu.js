import React from 'react';
import { Link, useLocation } from "@reach/router"
import PropTypes from 'prop-types';
import styled from 'styled-components'

// our styles
const MenuList = styled.ul`
  margin:0;
  padding: 0;
  text-indent: 0;
  list-style-type: 0;
`

const MenuItem = styled.li`
  margin: ${props => props.sub ? '10px' : 0 };
  text-indent: 0;
  list-style-type: 0;
  border-left: ${props =>
    props.children[0].props.current === true ? '2px solid purple'
    : props.children[0].props.inPath === true ? '2px solid lightgrey'
    : 'none'
  };

  display: ${props =>
    props.children[0].props.parent === true ? 'block'
    : props.children[0].props.inPath === true ? 'block'
    : 'none'
  };
`

const MenuLink = styled(Link)`
  &:hover {
    background-color: purple;
    color: white;
  }
`

const MenuLinkSub = styled(MenuLink)``
// end styles


function NestedMenu(props) {

  function MenuItems(props) {
    const location = useLocation()

    return props.menuItems && props.menuItems.map((item, i) => {

    return (
      <MenuItem key={i} sub={props.sub}>
        {
          !item.children.length && props.child ?
          <MenuLinkSub
            child
            to={`/${item.relativeDirectory}/${item.name}`}
            key={`${item.name + i}`}
            current={
              location?.pathname.toString() === `/${item.relativeDirectory}/${item.name}`
              }
            inPath={
              location.pathname.includes(`${item.relativeDirectory}`)
              }
            >
            {item.titles.map(({ headings }) => {
              return headings.map(({ value }) => {
                return value
              })
            })}
          </MenuLinkSub>
          :
        <MenuLink
            parent
            to={`/${item.relativeDirectory}/${item.name}`}
            key={`${item.name + i}`}
            current={
              location?.pathname.toString() === `/${item.relativeDirectory}/${item.name}`
              }
            inPath={
              location.pathname.includes(`${item.relativeDirectory}`)
              }
            >
            {item.titles.map(({ headings }) => {
              return headings.map(({ value }) => {
                return value
              })
            })}
          </MenuLink>
        }
          {item.children.length > 0 && (
              <MenuList>
                <MenuItems menuItems={item.children} child sub/>
              </MenuList>
          )}
        </MenuItem>
      )
    })
  }

  return(
    <MenuList>
      <MenuItems menuItems={props.menuItems}/>
    </MenuList>
  );
}

NestedMenu.propTypes = {
	id: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
}

export default NestedMenu

