import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startAddCardFromHome,
  startGetCardsFromHome,
  startGetPresentationFromHome,
} from '../../actions/home';
import { CardEditHome } from './CardEditHome';
import { CardEditPresentacionHome } from './CardEditPresentacionHome';

export const AdminHome = () => {
  const dispatch = useDispatch();
  const { cards, presentation } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(startGetCardsFromHome());
    dispatch(startGetPresentationFromHome());
  }, [dispatch]);

  const handleAddCard = () => {
    dispatch(startAddCardFromHome(cards[cards.length - 1].posicion));
  };

  return (
    <div className="admin-home">
      <h1>Presentacion</h1>
      <div className="admin-home__card-list">
        {presentation.mensaje && <CardEditPresentacionHome {...presentation} />}
      </div>
      <h1>Tarjetas</h1>
      <div className="admin-home__card-list">
        {cards.map((card) => (
          <CardEditHome key={card.id} {...card} max={cards.length} />
        ))}
      </div>
      <button onClick={handleAddCard}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};
