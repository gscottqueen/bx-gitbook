import React from "react"
import Logo from './Logo'
import Nav from "./Nav"

const Header = () => (
  <header style={{"display": "flex"}} id="header">
    <div>
      <h1><Logo/></h1>
    </div>
    <a href="#menu">Menu</a>
    <Nav />
  </header>
)

export default Header
