import React from 'react';

export const Servicio = ({ servicio, precio, horas }) => {
  return (
    <div className="servicios-screen__servicio animate__animated animate__fadeInLeft">
      <p className="name">{servicio}</p>
      <p className="price">
        {horas}hr ${precio}
      </p>
      <button>+ Info</button>
    </div>
  );
};
