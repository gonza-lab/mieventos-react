import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Svg } from './Svg';

export const Presentation = () => {
  return (
    <ParallaxBanner
      className="home-screen__presentation"
      layers={[
        {
          image:
            'https://images.unsplash.com/photo-1427477321886-abc24e8ce923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          amount: 0.3,
          props: {
            style: {
              backgroundPositionY: 'bottom',
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
        <h1>Miyara</h1>
        <p>
          <span>——</span>E V E N T O S<span>——</span>
        </p>
      </div>
      <Svg />
    </ParallaxBanner>
  );
};
