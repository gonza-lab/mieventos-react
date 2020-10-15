import React from 'react';
import { useForm } from '../../hooks/useForm';

export const CardEditServicios = ({ servicio, horas, precio }) => {
  const [values, handleInputChange] = useForm({
    servicio,
    horas,
    precio,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card-edit animate__animated animate__backInRight">
      <form onSubmit={handleSubmit}>
        <div className="card-edit__item">
          <label htmlFor="servicio">Servicio: </label>
          <input
            onChange={handleInputChange}
            value={values.servicio}
            name="servicio"
          />
        </div>
        <div className="card-edit__item">
          <label htmlFor="horas">Horas: </label>
          <input
            onChange={handleInputChange}
            value={values.horas}
            name="horas"
          />
        </div>
        <div className="card-edit__item">
          <label htmlFor="precio">Precio: </label>
          <input
            onChange={handleInputChange}
            value={values.precio}
            name="precio"
          />
        </div>
        <div className="card-edit__buttons">
          <button type="submit">Guardar</button>
          <button type="button">Eliminar</button>
        </div>
      </form>
    </div>
  );
};
