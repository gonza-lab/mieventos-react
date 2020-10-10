import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppRouter } from './routers/AppRouter';

export const MiEventosApp = () => {
  return (
    <>
      <ParallaxProvider>
        <AppRouter />
      </ParallaxProvider>
    </>
  );
};
