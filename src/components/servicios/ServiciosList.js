import React from 'react';
import { Servicio } from './Servicio';

export const ServiciosList = ({ cards: servicios }) => {
  servicios.sort((a, b) => a.position - b.position);
  return (
    <div className="servicios-screen__servicios">
      {servicios.map((servicio) => (
        <Servicio key={servicio._id} {...servicio} />
      ))}
    </div>
  );
};
