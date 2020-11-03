import React from 'react';
import PropTypes from 'prop-types';

import './FormOption.scss';

export const AdminFormOption = ({ options, value: valueChecked }) => {
  return (
    <div className="admin-form-option">
      {options.values.map((value) => (
        <div key={value.value}>
          <input
            id={value.value + '-id'}
            type="radio"
            value={value.value}
            name={options.group}
            onChange={options.onChange}
            checked={valueChecked === value.value}
          />
          <label htmlFor={`${value.value}-id`}>{value.label}</label>
        </div>
      ))}
    </div>
  );
};

AdminFormOption.propTypes = {
  options: PropTypes.shape({
    values: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    group: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.string,
};
