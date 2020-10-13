import React from 'react';
import { setSrcAlt } from '../../helpers/setSrcAlt';
import { Slider } from '../slider/Slider';

export const Card = ({ titulo, informacion, imagenes, lado }) => {
  return (
    <div className={`card ${lado === 'izquierda' ? 'card__reverse' : ''}`}>
      <div className="card__info">
        <h3>{titulo}</h3>
        <p>{informacion}</p>
      </div>
      <div className="card__img">
        <Slider imgs={setSrcAlt(imagenes)} />
      </div>
    </div>
  );
};
