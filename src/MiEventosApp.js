import React from 'react';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const MiEventosApp = () => {
  return (
    <>
      <ParallaxProvider>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ParallaxProvider>
    </>
  );
};
