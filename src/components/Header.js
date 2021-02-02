import React from "react"
import Logo from './Logo'

export default function Header() {

  return (
    <header style={{"display": "flex"}} id="header">
      <div>
        <h1><Logo/></h1>
      </div>
    </header>
  )
}
