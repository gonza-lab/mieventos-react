import React from 'react';
import './Container.scss';
import PropTypes from 'prop-types';

export const AdminContainer = ({ children: Children }) => {
  return <div className="admin-container">{Children}</div>;
};

AdminContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
