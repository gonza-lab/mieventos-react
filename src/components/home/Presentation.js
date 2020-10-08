import React from 'react'
import img from './home.jpg';

export const Presentation = () => {
  return (
    <div className="home-screen__presentation">
      <img src={img} alt="" />
      <div className="home-screen__presentation-brand">
        <h1>Miyara</h1>
        <p>EVENTOS</p>
      </div>
    </div>
  )
}
