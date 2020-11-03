import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AdminFormList = ({ list = [], name, onChange }) => {
  const [selected, setSelected] = useState();

  const handleChange = ({ target }, index) => {
    list.splice(index, 1, target.value);
    // console.log(`Index: ${index}, New: ${target.value}`);

    onChange({ target: { name, value: list } });
  };

  const handleDelete = (index) => {
    list.splice(index, 1);
    onChange({ target: { name, value: list } });
  };

  return (
    <div className="admin-form-list">
      {list.map((item, index) => (
        <input
          key={index}
          value={item}
          readOnly={index !== selected}
          onFocus={() => setSelected(index)}
          onBlur={() => setSelected(null)}
          onChange={(e) => handleChange(e, index)}
          onDoubleClick={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

AdminFormList.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
