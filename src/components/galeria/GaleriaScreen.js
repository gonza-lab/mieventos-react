import React from 'react';
import { useSelector } from 'react-redux';
import { ParallaxBanner } from 'react-scroll-parallax';
import { toGalleryCarrouselFormat } from '../../helpers/toGalleryCarrouselFormat';
import { GalleryCarrousel } from './GalleryCarrousel';

export const GaleriaScreen = () => {
  const { cards } = useSelector((state) => state.screen.galeria);

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
        <GalleryCarrousel photos={toGalleryCarrouselFormat(cards)} />
      </div>
    </div>
  );
};
