import React from 'react';
import { AdminTable } from '../../../components/admin/table/Table';
import { AdminCard } from '../../../components/ui/card/Card';
import { AdminContainer } from '../../../components/ui/container/Container';
import { AdminHeader } from '../../../components/ui/header/Header';

export const AdminHome = () => {
  return (
    <AdminContainer>
      <AdminHeader
        title="Home"
        subtitle="En esta pantalla podras modificar el contenido de tu pantalla home."
        i="fas fa-home"
      />
      <AdminCard title="Tabla">
        <AdminTable
          headers={['Titulo', 'Informacion', 'Lado', 'Posicion', 'Imagenes']}
        />
      </AdminCard>
    </AdminContainer>
  );
};
