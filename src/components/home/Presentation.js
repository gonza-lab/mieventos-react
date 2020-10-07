import React from 'react'
import img from './home.jpg';

export const Presentation = () => {
  return (
    <div className="presentation">
      <img src={img} alt="" />
      <div className="presentation__brand">
        <h1>Miyara</h1>
        <p>EVENTOS</p>
      </div>
    </div>
  )
}
