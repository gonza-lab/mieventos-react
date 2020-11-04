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
import { AdminFormList } from '../../../components/admin/list/FormList';
import { AdminTable } from '../../../components/admin/table/Table';
import { AdminCard } from '../../../components/ui/card/Card';
import { AdminContainer } from '../../../components/ui/container/Container';
import { AdminHeader } from '../../../components/ui/header/Header';
import { toReactTableFormat } from '../../../helpers/toReactTableFormat';
import { useForm } from '../../../hooks/useForm';
import './Galeria.scss';

const formatTable = {
  image: 'URL',
};

export const AdminGaleria = () => {
  const [values, handleInputChange, reset] = useForm({
    image: '',
  });

  const { isOpenModalAdmin } = useSelector((state) => state.ui);
  const { activeCard, mode } = useSelector((state) => state.admin);
  const { galeria } = useSelector((state) => state.screen);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    reset();
    dispatch(closeModalAdmin());
  };

  const handleOpenModal = (index) => {
    if (Number.isInteger(index)) {
      const { __v, _id, screen, ...rest } = galeria.cards[index];
      dispatch(setMode('Edit'));
      dispatch(setActiveCard(galeria.cards[index]));
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
          startSaveCard('galeria', {
            ...activeCard,
            ...values,
          })
        );
        break;

      case 'Add':
        dispatch(
          startAddCard({ screenName: 'galeria', id: galeria._id }, values)
        );
        break;

      default:
        break;
    }

    handleCloseModal();
  };

  const handleDeleteCard = (index) => {
    dispatch(startDeleteCard('galeria', galeria.cards[index]._id));
  };
  return (
    <AdminContainer>
      <AdminHeader
        title="Galeria"
        subtitle="En esta seccion podras modificar el contenido de tu pantalla galeria."
        i="fas fa-images"
      />
      {galeria && (
        <AdminCard
          title="Imagenes"
          i={{ icon: 'fas fa-plus', onClick: () => handleOpenModal() }}
        >
          <AdminTable
            onEdit={handleOpenModal}
            onDelete={handleDeleteCard}
            table={toReactTableFormat(formatTable, galeria.cards, 'Actions')}
            className="admin-table-home"
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
                id="image"
                name="image"
                value={values.image}
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
