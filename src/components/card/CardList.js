import React from 'react';
import { Card } from './Card';

export const CardList = ({ cards = [] }) => {
  cards.sort((a, b) => a.position - b.position);

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} card={card} {...card} />
      ))}
    </div>
  );
};
