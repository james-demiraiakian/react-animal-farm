import React from 'react'
import { animals } from '../../data.js'

export default function Animal(props) {
  return <div className="animal">
    <img src={`${process.env.PUBLIC_URL}/animals/${}`}
  </div>
}
