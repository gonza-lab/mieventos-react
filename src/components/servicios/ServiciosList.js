import React from 'react';
import { Servicio } from './Servicio';

export const ServiciosList = () => {
  const servicios = [1, 2, 3, 4, 5];

  return (
    <div className="servicios-screen__servicios">
      {servicios.map((servicio) => (
        <>
          <Servicio key={servicio} />
        </>
      ))}
    </div>
  );
};
