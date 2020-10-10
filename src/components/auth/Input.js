import React from 'react';

export const Input = ({
  text,
  type,
  handleInputChange,
  value,
  name = '',
}) => {
  return (
    <label className="auth__input-item">
      {text}:
      <div>
        <input
          className={value && 'auth__isWrited'}
          autoComplete="off"
          type={type}
          name={name || text.toLowerCase()}
          value={value}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
    </label>
  );
};
