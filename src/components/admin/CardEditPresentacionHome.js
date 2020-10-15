import React from 'react';
import { useDispatch } from 'react-redux';
import { startSavePresentationFromHome } from '../../actions/home';
import { useForm } from '../../hooks/useForm';

export const CardEditPresentacionHome = ({ mensaje, urlImagen }) => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({ mensaje, urlImagen });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startSavePresentationFromHome({ ...values }));
  };

  return (
    <div className="card-edit animate__animated animate__backInRight">
      <form onSubmit={handleSubmit}>
        <div className="card-edit__item">
          <label htmlFor="mensaje">Mensaje: </label>
          <input
            name="mensaje"
            value={values.mensaje}
            onChange={handleInputChange}
          />
        </div>
        <div className="card-edit__item">
          <label htmlFor="urlImagen">urlImagen de la imagen: </label>
          <input
            name="urlImagen"
            type="urlImagen"
            value={values.urlImagen}
            onChange={handleInputChange}
          />
        </div>
        <div className="card-edit__buttons">
          <button type="submit" style={{ backgroundColor: '#3498db' }}>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
