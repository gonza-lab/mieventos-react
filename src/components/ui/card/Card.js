import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

export const AdminCard = ({ title, children, className, i }) => {
  return (
    <div className={'admin-card-container ' + className}>
      <div className="admin-card">
        <div>
          {title} {i && <i onClick={i.onClick} className={i.icon}></i>}
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
