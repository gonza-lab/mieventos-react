import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

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

AdminCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
