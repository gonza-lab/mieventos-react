import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { GalleryCarrousel } from './GalleryCarrousel';
import { photos } from './photos';

export const GaleriaScreen = () => {
  return (
    <div className="galeria-screen animate__animated animate__fadeIn">
      <ParallaxBanner
        layers={[
          {
            image:
              'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            amount: 0.5,
            expanded: true,
            props: {
              style: {
                backgroundPositionY: 'bottom',
              },
            },
          },
        ]}
        style={{
          height: '70vh',
          width: '98%',
        }}
      />
      <div className="galeria-screen__galery-container">
        <GalleryCarrousel photos={photos} />
      </div>
    </div>
  );
};
