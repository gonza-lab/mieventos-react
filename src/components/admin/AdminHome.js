import React from 'react';
import { CardEdit } from './CardEdit';

export const AdminHome = () => {
  const cards = [1, 2, 3, 4];

  return (
    <div className="admin-home">
      <h1>Pantalla de home</h1>
      <div className="admin-home__card-list">
        {cards.map((card) => (
          <CardEdit key={card} />
        ))}
      </div>
    </div>
  );
};
