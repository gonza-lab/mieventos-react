import React from 'react';
import { setSrcAlt } from '../../helpers/setSrcAlt';
import { Slider } from '../slider/Slider';

export const Card = ({ title, information, images, side}) => {

  return (
    <div
      className={`card animate__animated animate__fadeInLeft ${
        side === 'l' ? 'card__reverse' : ''
      }`}
    >
      <div className="card__info">
        <h3>{title}</h3>
        <p>{information}</p>
      </div>
      <div className="card__img">
        <Slider imgs={setSrcAlt(images)} />
      </div>
    </div>
  );
};
