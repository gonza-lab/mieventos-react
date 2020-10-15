import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startAddCardFromServicios,
  startLoadCardsFromServicios,
} from '../../actions/servicios';
import { CardEditServicios } from './CardEditServicios';

export const AdminServicios = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.servicios);

  const handleAddCard = () => {
    dispatch(startAddCardFromServicios(cards.length));
  };

  useEffect(() => {
    dispatch(startLoadCardsFromServicios());
  }, [dispatch]);

  return (
    <div className="admin-home">
      <h1>Admin Servicios</h1>
      <div className="admin-home__card-list">
        {cards.map((card) => (
          <CardEditServicios key={card.id} {...card} />
        ))}
      </div>
      <button onClick={handleAddCard}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};
