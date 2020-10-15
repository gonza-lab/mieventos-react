import React from 'react';
import { Servicio } from './Servicio';

export const ServiciosList = ({ cards: servicios }) => {
  return (
    <div className="servicios-screen__servicios">
      {servicios.map((servicio) => (
        <>
          <Servicio key={servicio.id} {...servicio} />
        </>
      ))}
    </div>
  );
};
