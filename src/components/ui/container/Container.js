import React from 'react';
import './Container.scss';

export const AdminContainer = ({ children: Children }) => {
  return <div className="admin-container">{Children}</div>;
};
