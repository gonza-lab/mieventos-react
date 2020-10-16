import React from 'react';
import { useSelector } from 'react-redux';

import { Presentation } from '../presentation/Presentation';
import { ServiciosList } from './ServiciosList';

export const ServiciosScreen = () => {
  const { cards, presentation } = useSelector((state) => state.servicios);

  return (
    <div className="servicios-screen animate__animated animate__fadeIn">
      <Presentation
        text={presentation.mensaje}
        alt=""
        src={presentation.urlImagen}
      />
      <ServiciosList cards={cards} />
    </div>
  );
};
