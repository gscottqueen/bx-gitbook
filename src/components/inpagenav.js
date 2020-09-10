import React from 'react'
import { animateScroll as scroll } from "react-scroll"

function inpagenav(props) {

  const jumpTo = id => (e) => {
    e.preventDefault()
    let cleanID = id.replace(/[^\w\s]/gi, "")
    let formatedID = cleanID.replace(/ +/g, "-").toLowerCase()

    const jumpElement = document.getElementById(formatedID)
    const elementPosition = jumpElement.offsetTop

    if (jumpElement !== null) {
      scroll.scrollTo(`${elementPosition}`, {
        duration: 500,
        smooth: true,
      })
    }
  }

  return (
    <ul>
      {props.headings.length > 1 && <div>On this page:</div>}
      {props.headings.map((heading, i) => {
        return i > 0 ? (
          <li key={i}>
            <a href={`${heading.value}`} onClick={jumpTo(`${heading.value}`)}>
              {heading.value}
            </a>
          </li>
        ) : null
      })}
    </ul>
  )
}

export default inpagenav

