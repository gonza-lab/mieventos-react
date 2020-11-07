import React from 'react';
import { CardList } from '../card/CardList';

export const ContactoScreen = () => {
  return (
    <div className="contacto-screen animate__animated animate__fadeIn">
      <CardList
        cards={[
          {
            position: 1,
            title: 'Contacto',
            information: 'Numero de contacto: +11-1111-1111',
            side: 'r',
            images: [
              'https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1399&q=80',
            ],
          },
        ]}
      />
    </div>
  );
};
