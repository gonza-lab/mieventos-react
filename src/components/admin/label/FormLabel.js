import React from 'react';
import PropTypes from 'prop-types';

import './FormLabel.scss';

export const AdminFormLabel = ({ text, children, htmlFor, i }) => {
  return (
    <div className="admin-form-label">
      <label htmlFor={htmlFor}>
        {text} {i && <i onClick={i.action} className={i.icon}></i>}
      </label>
      {children}
    </div>
  );
};

AdminFormLabel.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  htmlFor: PropTypes.string,
  i: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
};
