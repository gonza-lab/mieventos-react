import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Svg } from './Svg';

export const Presentation = ({ mensaje, urlImagen }) => {
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
