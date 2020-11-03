import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAdmin, openModalAdmin } from '../../../actions/ui';

import { AdminTable } from '../../../components/admin/table/Table';
import { AdminCard } from '../../../components/ui/card/Card';
import { AdminContainer } from '../../../components/ui/container/Container';
import { AdminHeader } from '../../../components/ui/header/Header';
import { AdminFormList } from '../../../components/admin/list/FormList';
import { AdminFormLabel } from '../../../components/admin/label/FormLabel';
import { AdminFormOption } from '../../../components/admin/option/FormOption';

import './Home.scss';
import '../../../components/admin/Modal.scss';
import '../../../components/admin/AdminForm.scss';
import { toReactTableFormat } from '../../../helpers/toReactTableFormat';
import { useForm } from '../../../hooks/useForm';
import { startAddCard, startSaveCard } from '../../../actions/screen';
import { setActiveCard, setMode } from '../../../actions/admin';

Modal.setAppElement('#root');
Modal.defaultStyles = {};

const formatTable = {
  title: 'Titulo',
  information: 'Informacion',
  images: 'Cdad. de imagenes',
  side: 'Lado',
  position: 'Posicion',
};

export const AdminHome = () => {
  const [values, handleInputChange, reset] = useForm({
    title: '',
    information: '',
    side: 'r',
    position: '',
    images: [],
  });

  const { isOpenModalAdmin } = useSelector((state) => state.ui);
  const { activeCard, mode } = useSelector((state) => state.admin);
  const { home } = useSelector((state) => state.screen);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    reset();
    dispatch(closeModalAdmin());
  };

  const handleOpenModal = (index) => {
    if (Number.isInteger(index)) {
      const { __v, _id, screen, ...rest } = home.cards[index];
      dispatch(setMode('Edit'));
      dispatch(setActiveCard(home.cards[index]));
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
          startSaveCard('home', {
            ...activeCard,
            ...values,
          })
        );
        break;

      case 'Add':
        dispatch(startAddCard({ screenName: 'home', id: home._id }, values));
        break;

      default:
        break;
    }

    handleCloseModal();
  };

  return (
    <AdminContainer>
      <AdminHeader
        title="Home"
        subtitle="En esta seccion podras modificar el contenido de tu pantalla home."
        i="fas fa-home"
      />
      {home && (
        <AdminCard
          title="Tabla"
          i={{ icon: 'fas fa-plus', onClick: () => handleOpenModal() }}
        >
          <AdminTable
            onEdit={handleOpenModal}
            table={toReactTableFormat(formatTable, home.cards, 'Actions')}
            headers={['Titulo', 'Informacion', 'Imagenes', 'Lado', 'Posicion']}
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
                id="title"
                name="title"
                value={values.title}
                onChange={handleInputChange}
              />
            </AdminFormLabel>
            <AdminFormLabel htmlFor="information" text="Informacion">
              <textarea
                id="information"
                name="information"
                value={values.information}
                onChange={handleInputChange}
              ></textarea>
            </AdminFormLabel>
            <AdminFormLabel text="Posicion">
              <input
                type="number"
                min="1"
                name="position"
                value={values.position}
                onChange={handleInputChange}
              />
            </AdminFormLabel>
            <AdminFormLabel
              text="Imagenes"
              i={{
                icon: 'fas fa-plus-square',
                action: () =>
                  handleInputChange({
                    target: {
                      name: 'images',
                      value: [...values.images, 'Nueva imagen'],
                    },
                  }),
              }}
            >
              <AdminFormList
                list={values.images}
                name="images"
                onChange={handleInputChange}
              />
            </AdminFormLabel>
            <AdminFormLabel text="Lado">
              <AdminFormOption
                value={values.side}
                options={{
                  values: [
                    { label: 'Derecha', value: 'r' },
                    { label: 'Izquierda', value: 'l' },
                  ],
                  group: 'side',
                  onChange: handleInputChange,
                }}
              />
            </AdminFormLabel>
          </form>
        </AdminCard>
      </Modal>
    </AdminContainer>
  );
};
