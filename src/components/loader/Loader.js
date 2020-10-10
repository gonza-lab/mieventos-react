import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

export const Loader = ({ size }) => {
  return (
    <div className="loader">
      <PropagateLoader size={size} />
    </div>
  );
};
