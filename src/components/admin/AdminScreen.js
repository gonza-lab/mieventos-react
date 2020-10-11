import React from 'react';
import { AdminRouter } from '../../routers/AdminRouter';
import { Sidebar } from './Sidebar';

export const AdminScreen = () => {
  return (
    <div className="admin-screen">
      <Sidebar />
      <AdminRouter />
    </div>
  );
};
