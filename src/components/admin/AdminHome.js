import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startAddCardFromHome,
  startGetCardsFromHome,
} from '../../actions/home';
import { CardEdit } from './CardEdit';
// import { NavAdmin } from './NavAdmin';

export const AdminHome = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(startGetCardsFromHome());
  }, [dispatch]);

  const handleAddCard = () => {
    dispatch(startAddCardFromHome(cards[cards.length - 1].posicion));
  };

  return (
    <div className="admin-home">
      {/* <NavAdmin screen="Home" /> */}
      <h1>Admin Home</h1>
      <div className="admin-home__card-list">
        {cards.map((card) => (
          <CardEdit key={card.id} {...card} max={cards.length} />
        ))}
      </div>
      <button onClick={handleAddCard}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};
