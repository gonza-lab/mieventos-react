import React from 'react';
import PropTypes from 'prop-types';

import './FormOption.scss';

export const AdminFormOption = ({ options }) => {
  return (
    <div className="admin-form-option">
      {options.values.map((value) => (
        <div key={value}>
          <input
            id={value + '-id'}
            type="radio"
            value={value}
            name={options.group}
            onChange={options.onChange}
          />
          <label htmlFor={value + '-id'}>{value}</label>
        </div>
      ))}
    </div>
  );
};

AdminFormOption.propTypes = {
  options: PropTypes.shape({
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    group: PropTypes.string.isRequired,
  }).isRequired,
};
