import React from 'react';

export const Presentation = ({ src = '', alt = '', text = '' }) => {
  return (
    <div className="presentation">
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
};
