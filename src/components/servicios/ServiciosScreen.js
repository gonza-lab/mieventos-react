import React from 'react';
import { Presentation } from '../presentation/Presentation';
import { ServiciosList } from './ServiciosList';

export const ServiciosScreen = () => {
  return (
    <div className="servicios-screen animate__animated animate__fadeIn">
      <Presentation
        text="Convertimos tus sueños en realidad"
        alt=""
        src="https://images.unsplash.com/photo-1524563216914-d552816e4d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <ServiciosList />
    </div>
  );
};
