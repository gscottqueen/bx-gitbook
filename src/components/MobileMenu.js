import React, { useLayoutEffect } from 'react';
// import { navigate, Link } from "@reach/router"
import PropTypes from 'prop-types';

import 'mmenu-js/dist/mmenu'
import 'mmenu-js/dist/mmenu.css';
import 'mmenu-js/dist/mmenu.polyfills'

// Core
import Mmenu from "mmenu-js/dist/core/oncanvas/mmenu.oncanvas";

// Core Add-Ons
import offcanvas from "mmenu-js/dist/core/offcanvas/mmenu.offcanvas";
import screenReader from "mmenu-js/dist/core/screenreader/mmenu.screenreader";
import scrollBugFix from "mmenu-js/dist/core/scrollbugfix/mmenu.scrollbugfix";

// Add-Ons
import autoheight from "mmenu-js/dist/addons/autoheight/mmenu.autoheight";
import backbutton from "mmenu-js/dist/addons/backbutton/mmenu.backbutton";
import columns from "mmenu-js/dist/addons/columns/mmenu.columns";
import counters from "mmenu-js/dist/addons/counters/mmenu.counters";
import dividers from "mmenu-js/dist/addons/dividers/mmenu.dividers";
import drag from "mmenu-js/dist/addons/drag/mmenu.drag";
import dropdown from "mmenu-js/dist/addons/dropdown/mmenu.dropdown";
import fixedelements from "mmenu-js/dist/addons/fixedelements/mmenu.fixedelements";
import iconbar from "mmenu-js/dist/addons/iconbar/mmenu.iconbar";
import iconpanels from "mmenu-js/dist/addons/iconpanels/mmenu.iconpanels";
import keyboardnavigation from "mmenu-js/dist/addons/keyboardnavigation/mmenu.keyboardnavigation";
import lazysubmenus from "mmenu-js/dist/addons/lazysubmenus/mmenu.lazysubmenus";
import navbars from "mmenu-js/dist/addons/navbars/mmenu.navbars";
import pagescroll from "mmenu-js/dist/addons/pagescroll/mmenu.pagescroll";
import searchfield from "mmenu-js/dist/addons/searchfield/mmenu.searchfield";
import sectionindexer from "mmenu-js/dist/addons/sectionindexer/mmenu.sectionindexer";
import setselected from "mmenu-js/dist/addons/setselected/mmenu.setselected";
import sidebar from "mmenu-js/dist/addons/sidebar/mmenu.sidebar";
import toggles from "mmenu-js/dist/addons/toggles/mmenu.toggles";

// Debugger
// import 'mmenu-js/src/mmenu.debugger' // TODO: get this to work

function MobileMenu(props) {
  const w = typeof window !== 'undefined' && window

  Mmenu.addons = {

    // Core
    offcanvas,
    screenReader,
    scrollBugFix,

    // Add-Ons
    autoheight,
    backbutton,
    columns,
    counters,
    dividers,
    drag,
    dropdown,
    fixedelements,
    iconbar,
    iconpanels,
    keyboardnavigation,
    lazysubmenus,
    navbars,
    pagescroll,
    searchfield,
    sectionindexer,
    setselected,
    sidebar,
    toggles,
  };

  // console.log(menuRoot)
  useLayoutEffect(() => {
    w.Mmenu = Mmenu
    w && props.ready && new Mmenu( "#" + props.id, props.options, props.configuration )
  },[props, w])

  console.log({props})

  function NavigationItems(props) {

  return props.menuItems && props.menuItems.map((item, i) => {

    // const handleNavigation = (e) => {
    //   return navigate(e.target.href)
    // }

    return (
      <li key={i}>
      {/* TODO: For a more flexible component allow
      severall types of links to go through,
      Not just gatsby */}
        {/* <Link
            to={`/${item.relativeDirectory}/${item.name}`}
            key={`${item.name + i}` }
            activeClassName="active"
            partiallyActive={true}
            onClick={e => handleNavigation(e)}
            replace={true}
          >
            {item.titles.map(({ headings }) => {
              return headings.map(({ value }) => {
                return value
              })
            })}
          </Link> */}
          <a
            href={`/${item.relativeDirectory}/${item.name}`}
            key={`${item.name + i}` }
          >
            {item.titles.map(({ headings }) => {
              return headings.map(({ value }) => {
                return value
              })
            })}
          </a>
          {item.children.length > 0 && (
            <ul>
              <NavigationItems menuItems={item.children}/>
            </ul>
          ) }
        </li>
      )
    })
  }

  return(
    <nav id={props.id}>
      <ul>
        <NavigationItems menuItems={props.menuItems} />
      </ul>
    </nav>
  );
}

MobileMenu.propTypes = {
	id: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  menuItems: PropTypes.array.isRequired,
  ready: PropTypes.bool,
	children: PropTypes.element
}

export default MobileMenu

