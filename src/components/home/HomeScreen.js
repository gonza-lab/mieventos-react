import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetCardsFromHome } from '../../actions/home';
import { CardList } from '../card/CardList';
import { Presentation } from './Presentation';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(startGetCardsFromHome());
  }, [dispatch]);

  return (
    <div className="home-screen animate__animated animate__fadeIn">
      <Presentation />
      <CardList cards={cards} />
    </div>
  );
};
