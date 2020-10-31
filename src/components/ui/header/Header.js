import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

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

AdminHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  i: PropTypes.string,
};
