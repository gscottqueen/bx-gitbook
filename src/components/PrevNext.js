import React from 'react'

function prevnext(props) {
  return (
    <div>
      {props.previous ? (
        <span>
          previous:
          <a href={`/${props.previous.relativeDirectory}/${props.previous.name}`}>
            {props.previous.name}
          </a>
        </span>
      ) : null}
      <br />
      {props.next ? (
        <span>
          next:
          <a href={`/${props.next.relativeDirectory}/${props.next.name}`}>
            {props.next.name}
          </a>
        </span>
      ) : null}
    </div>
  )
}

export default prevnext

