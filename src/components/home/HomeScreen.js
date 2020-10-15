import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startGetCardsFromHome,
  startGetPresentationFromHome,
} from '../../actions/home';
import { CardList } from '../card/CardList';
import { Presentation } from './Presentation';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { cards, presentation } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(startGetCardsFromHome());
    dispatch(startGetPresentationFromHome());
  }, [dispatch]);

  return (
    <div className="home-screen animate__animated animate__fadeIn">
      <Presentation {...presentation} />
      <CardList cards={cards} />
    </div>
  );
};
