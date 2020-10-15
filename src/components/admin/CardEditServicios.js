import React from 'react';
import { useDispatch } from 'react-redux';
import {
  startDeleteCardFromServicios,
  startSaveCardFromServicios,
} from '../../actions/servicios';
import { useForm } from '../../hooks/useForm';

export const CardEditServicios = ({
  servicio,
  horas,
  precio,
  max,
  posicion,
  id,
}) => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    servicio,
    horas,
    precio,
    posicion,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      startSaveCardFromServicios(id, {
        ...values,
        posicion: parseInt(values.posicion, 10),
      })
    );
  };

  const handleDelete = () => {
    dispatch(startDeleteCardFromServicios(id));
  };

  const options = [];

  for (let i = 0; i < max; i++) {
    options.push(
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    );
  }

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
        <div className="card-edit__options">
          <label htmlFor="posicion">Posicion:</label>
          <select
            value={values.posicion}
            name="posicion"
            onChange={handleInputChange}
          >
            {options}
          </select>
        </div>
        <div className="card-edit__buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
};
