import React from 'react'

import './Animal.css'

export default function Animal({ name, left, top, type, says }) {
  return (
    <div className="animal" style={{ top: top, left: left }}>
      <img height="100" src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} alt={name} />
      <span className="name">{name}</span>
      <span>{says}</span>
    </div>
  )
}
