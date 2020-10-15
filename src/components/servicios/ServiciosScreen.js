import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startLoadCardsFromServicios,
  startLoadPresentationFromServicios,
} from '../../actions/servicios';
import { Presentation } from '../presentation/Presentation';
import { ServiciosList } from './ServiciosList';

export const ServiciosScreen = () => {
  const dispatch = useDispatch();
  const { cards, presentation } = useSelector((state) => state.servicios);

  useEffect(() => {
    dispatch(startLoadCardsFromServicios());
    dispatch(startLoadPresentationFromServicios());
  }, [dispatch]);

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
