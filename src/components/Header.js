import React from "react"
import Logo from './Logo'
import {Link} from 'gatsby'

export default function Header() {
  <header style={{"display": "flex"}} id="header">
    <div>
      <h1><Logo/></h1>
    </div>
    <a href="#menu">Menu</a>
    <Link to="/search">Search</Link>
  </header>
}
