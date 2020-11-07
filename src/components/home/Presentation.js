import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Svg } from './Svg';

export const Presentation = ({
  mensaje = 'MiEventos',
  urlImagen = 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
}) => {
  return (
    <ParallaxBanner
      className="home-screen__presentation"
      layers={[
        {
          image: urlImagen,
          amount: 0.3,
          props: {
            style: {
              backgroundPosition: 'center bottom',
            },
          },
        },
      ]}
      style={{
        width: '98%',
        padding: '16px',
        height: '80vh',
      }}
    >
      <div className="home-screen__presentation-brand">
        <h1>{mensaje}</h1>
        <p>
          <span>——</span>E V E N T O S<span>——</span>
        </p>
      </div>
      <Svg />
    </ParallaxBanner>
  );
};
