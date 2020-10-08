import React from 'react';
import { CardList } from '../card/CardList';
import { Presentation } from './Presentation';

export const HomeScreen = () => {
  return (
    <div className="home-screen animate__animated animate__fadeIn">
      <Presentation />
      <CardList cards={[1, 2, 3, 4]} />
    </div>
  );
};
