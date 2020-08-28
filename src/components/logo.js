import React from 'react'
import { Link } from 'gatsby'
import ImageSVG from '../components/imagesvg'

function logo(props) {
  return (
    <div>
      <Link to="/">
        <ImageSVG
          src="logo.svg"
          alt=""
        />
      </Link>
    </div>
  )
}

export default logo

