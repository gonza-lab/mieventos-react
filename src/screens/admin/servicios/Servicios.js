import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCard, setMode } from '../../../actions/admin';
import {
  startAddCard,
  startDeleteCard,
  startSaveCard,
} from '../../../actions/screen';
import { closeModalAdmin, openModalAdmin } from '../../../actions/ui';
import { AdminFormLabel } from '../../../components/admin/label/FormLabel';
import { AdminTable } from '../../../components/admin/table/Table';
import { AdminCard } from '../../../components/ui/card/Card';
import { AdminContainer } from '../../../components/ui/container/Container';
import { AdminHeader } from '../../../components/ui/header/Header';
import { toReactTableFormat } from '../../../helpers/toReactTableFormat';
import { useForm } from '../../../hooks/useForm';

import './Servicios.scss';

const formatTable = {
  title: 'Servicio',
  hours: 'Horas',
  price: 'Precio',
  position: 'Posicion',
};

export const AdminServicios = () => {
  const [values, handleInputChange, reset] = useForm({
    title: '',
    hours: 1,
    price: 1,
    position: 1,
  });

  const { isOpenModalAdmin } = useSelector((state) => state.ui);
  const { activeCard, mode } = useSelector((state) => state.admin);
  const { servicios } = useSelector((state) => state.screen);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    reset();
    dispatch(closeModalAdmin());
  };

  const handleOpenModal = (index) => {
    if (Number.isInteger(index)) {
      const { __v, _id, screen, ...rest } = servicios.cards[index];
      dispatch(setMode('Edit'));
      dispatch(setActiveCard(servicios.cards[index]));
      reset(rest);
    } else {
      dispatch(setMode('Add'));
      dispatch(setActiveCard(null));
      reset();
    }

    dispatch(openModalAdmin());
  };

  const handleSaveModal = () => {
    switch (mode) {
      case 'Edit':
        dispatch(
          startSaveCard('servicios', {
            ...activeCard,
            ...values,
          })
        );
        break;

      case 'Add':
        dispatch(
          startAddCard({ screenName: 'servicios', id: servicios._id }, values)
        );
        break;

      default:
        break;
    }

    handleCloseModal();
  };
  
  const handleDeleteCard = (index) => {
    dispatch(startDeleteCard('servicios', servicios.cards[index]._id));
  };

  return (
    <AdminContainer>
      <AdminHeader
        title="Servicios"
        subtitle="En esta seccion podras modificar el contenido de tu pantalla servicios."
        i="fas fa-concierge-bell"
      />
      {servicios && (
        <AdminCard
          title="Servicios"
          i={{ icon: 'fas fa-plus', onClick: () => handleOpenModal() }}
        >
          <AdminTable
            onEdit={handleOpenModal}
            onDelete={handleDeleteCard}
            table={toReactTableFormat(formatTable, servicios.cards, 'Actions')}
            className="admin-table-servicios"
          />
        </AdminCard>
      )}
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
        <AdminCard
          i={{ icon: 'far fa-save', onClick: handleSaveModal }}
          className="admin-modal-card"
          title={`${mode} card`}
        >
          <form>
            <AdminFormLabel htmlFor="title" text="Titulo">
              <input
                id="title"
                name="title"
                value={values.title}
                onChange={handleInputChange}
                required
              />
            </AdminFormLabel>
            <AdminFormLabel htmlFor="hours" text="Horas">
              <input
                id="hours"
                name="hours"
                value={values.hours}
                type="number"
                onChange={handleInputChange}
              />
            </AdminFormLabel>
            <AdminFormLabel text="Posicion">
              <input
                type="number"
                min="1"
                name="position"
                value={values.position}
                onChange={handleInputChange}
                required
              />
            </AdminFormLabel>
            <AdminFormLabel text="Precio">
              <input
                type="number"
                min="1"
                name="price"
                value={values.price}
                onChange={handleInputChange}
                required
              />
            </AdminFormLabel>
          </form>
        </AdminCard>
      </Modal>
    </AdminContainer>
  );
};
