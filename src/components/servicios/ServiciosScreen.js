import React from 'react';
import { useSelector } from 'react-redux';

import { Presentation } from '../presentation/Presentation';
import { ServiciosList } from './ServiciosList';

export const ServiciosScreen = () => {
  const { cards } = useSelector((state) => state.screen.servicios);

  return (
    <div className="servicios-screen animate__animated animate__fadeIn">
      <Presentation
        text="Convertimos tus sueños en realidad"
        src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <ServiciosList cards={cards} />
    </div>
  );
};
