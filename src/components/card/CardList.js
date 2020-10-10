import React from 'react';
import { Card } from './Card';

export const CardList = ({ cards = [1] }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};
