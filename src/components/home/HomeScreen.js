import React from 'react';
import { useSelector } from 'react-redux';

import { CardList } from '../card/CardList';
import { Presentation } from './Presentation';

export const HomeScreen = () => {
  const { cards, presentation } = useSelector((state) => state.home);

  return (
    <div className="home-screen animate__animated animate__fadeIn">
      <Presentation {...presentation} />
      <CardList cards={cards} />
    </div>
  );
};
