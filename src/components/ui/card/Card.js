import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

export const AdminCard = ({ title, children, className, i }) => {
  return (
    <div
      className={
        'admin-card-container animate__animated animate__fadeIn ' + className
      }
    >
      <div className="admin-card">
        <div>
          {title}
          {i && (
            <button onClick={i.onClick}>
              <i className={i.icon}></i>
            </button>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

AdminCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  i: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};
