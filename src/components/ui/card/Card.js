import React from 'react';
import './Card.scss';

export const AdminCard = ({ title, children }) => {
  return (
    <div className="admin-card-container">
      <div className="admin-card">
        <div>{title}</div>
        {children}
      </div>
    </div>
  );
};
