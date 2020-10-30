import React from 'react';
import './Header.scss';

export const AdminHeader = ({ title, subtitle, i }) => {
  return (
    <header className="admin-header">
      <div>
        <h1>
          <i className={i} />
          {title}
        </h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};
