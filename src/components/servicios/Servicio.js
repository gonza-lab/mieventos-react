import React from 'react';

export const Servicio = ({ title, hours, price }) => {
  return (
    <div className="servicios-screen__servicio animate__animated animate__fadeInLeft">
      <p className="name">{title}</p>
      <p className="price">
        {hours}hr ${price}
      </p>
      <button>+ Info</button>
    </div>
  );
};
