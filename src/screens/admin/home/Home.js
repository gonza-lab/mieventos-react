import React from 'react';
import { AdminContainer } from '../../../components/ui/container/Container';
import { AdminHeader } from '../../../components/ui/header/Header';

export const AdminHome = () => {
  return (
    <AdminContainer>
      <AdminHeader
        title="Dashboard"
        subtitle="Example dashboard overview and content summary"
        i="fas fa-home"
      />
    </AdminContainer>
  );
};
