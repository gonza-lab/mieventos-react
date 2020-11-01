import React from 'react';
import PropTypes from 'prop-types';

export const AdminFormList = ({ list = [], value }) => {
  return (
    <select multiple value={value}>
      {list.map((value) => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
  );
};

AdminFormList.propTypes = {
  list: PropTypes.array.isRequired,
  value: PropTypes.string,
};
