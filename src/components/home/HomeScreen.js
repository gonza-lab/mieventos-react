import React from 'react';
import { useSelector } from 'react-redux';

import { CardList } from '../card/CardList';
import { Presentation } from './Presentation';

export const HomeScreen = () => {
  const { cards } = useSelector((state) => state.screen.home);

  return (
    <div className="home-screen animate__animated animate__fadeIn">
      <Presentation urlImagen="https://images.unsplash.com/photo-1481653125770-b78c206c59d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <CardList cards={cards} />
    </div>
  );
};
