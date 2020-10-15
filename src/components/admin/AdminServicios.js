import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startAddCardFromServicios,
  startLoadCardsFromServicios,
  startLoadPresentationFromServicios,
} from '../../actions/servicios';
import { CardEditPresentacionServicios } from './CardEditPresentacionServicios';
import { CardEditServicios } from './CardEditServicios';

export const AdminServicios = () => {
  const dispatch = useDispatch();
  const { cards, presentation } = useSelector((state) => state.servicios);

  const handleAddCard = () => {
    dispatch(startAddCardFromServicios(cards.length));
  };

  useEffect(() => {
    dispatch(startLoadCardsFromServicios());
    dispatch(startLoadPresentationFromServicios());
  }, [dispatch]);

  return (
    <div className="admin-home">
      <h1>Presentacion</h1>
      <div className="admin-home__card-list">
        {presentation.mensaje && (
          <CardEditPresentacionServicios {...presentation} />
        )}
      </div>
      <h1>Tarjetas</h1>
      <div className="admin-home__card-list">
        {cards.map((card) => (
          <CardEditServicios max={cards.length} key={card.id} {...card} />
        ))}
      </div>
      <button onClick={handleAddCard}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};
