import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startSaveCardFromHome } from '../../actions/home';
import { useForm } from '../../hooks/useForm';
import { ListImagesEdit } from '../list-images/ListImagesEdit';

export const CardEdit = ({ titulo, informacion, imagenes, lado, id }) => {
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({ titulo, informacion, lado });
  const [listImages, setListImages] = useState(imagenes);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startSaveCardFromHome(id, { ...values, imagenes: listImages }));
  };

  return (
    <div className="card-edit">
      <form onSubmit={handleSubmit}>
        <div className="card-edit__item">
          <label htmlFor="titulo">Titulo: </label>
          <input
            name="titulo"
            value={values.titulo}
            onChange={handleInputChange}
          />
        </div>
        <div className="card-edit__item">
          <label htmlFor="informacion">Informacion: </label>
          <textarea
            name="informacion"
            value={values.informacion}
            onChange={handleInputChange}
          />
        </div>
        <ListImagesEdit
          setListImages={setListImages}
          id={id}
          imagenes={listImages}
        />
        <div className="card-edit__radio-group">
          <label>
            <input
              checked={values.lado === 'derecha'}
              onChange={handleInputChange}
              type="radio"
              name="lado"
              value="derecha"
            />{' '}
            Derecha
          </label>
          <label>
            <input
              checked={values.lado === 'izquierda'}
              onChange={handleInputChange}
              type="radio"
              name="lado"
              value="izquierda"
            />{' '}
            Izquierda
          </label>
        </div>
        <div className="card-edit__buttons">
          <button type="submit">Guardar</button>
          <button>Eliminar</button>
        </div>
      </form>
    </div>
  );
};
