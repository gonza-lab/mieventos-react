import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

export const AdminCard = ({ title, children, className }) => {
  return (
    <div className={'admin-card-container ' + className}>
      <div className="admin-card">
        <div>{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

AdminCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};
