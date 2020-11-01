import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAdmin } from '../../../actions/ui';

import { AdminTable } from '../../../components/admin/table/Table';
import { AdminCard } from '../../../components/ui/card/Card';
import { AdminContainer } from '../../../components/ui/container/Container';
import { AdminHeader } from '../../../components/ui/header/Header';
import { AdminFormList } from '../../../components/admin/list/FormList';

import './Home.scss';
import '../../../components/admin/Modal.scss';
import { AdminFormLabel } from '../../../components/admin/label/FormLabel';

Modal.setAppElement('#root');
Modal.defaultStyles = {};

export const AdminHome = () => {
  const { isOpenModalAdmin } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModalAdmin());
  };

  return (
    <AdminContainer>
      <AdminHeader
        title="Home"
        subtitle="En esta seccion podras modificar el contenido de tu pantalla home."
        i="fas fa-home"
      />
      <AdminCard title="Tabla">
        <AdminTable
          headers={['Titulo', 'Informacion', 'Imagenes', 'Lado', 'Posicion']}
          className="admin-table-home"
        />
      </AdminCard>
      <Modal
        isOpen={isOpenModalAdmin}
        onRequestClose={handleCloseModal}
        overlayClassName={`animate__animated animate__${
          isOpenModalAdmin ? 'fadeIn' : 'fadeOut'
        }`}
        className={`animate__animated animate__${
          isOpenModalAdmin ? 'slideInDown' : 'slideOutDown'
        }`}
        closeTimeoutMS={1000}
      >
        <AdminCard className="admin-modal-card" title="Edit">
          <form>
            <AdminFormLabel htmlFor="title" text="Titulo">
              <input id="title" name="title" />
            </AdminFormLabel>
            <AdminFormLabel htmlFor="information" text="Informacion">
              <textarea id="information" name="information"></textarea>
            </AdminFormLabel>
            <AdminFormLabel
              text="Imagenes"
              i={{
                icon: 'fas fa-plus-square',
                action: () => console.log('Hola'),
              }}
            >
              <AdminFormList list={['Hello', 'World', '!']} />
            </AdminFormLabel>
          </form>
        </AdminCard>
      </Modal>
    </AdminContainer>
  );
};
