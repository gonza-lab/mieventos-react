import React from 'react';
import { ListImagesEdit } from '../list-images/ListImagesEdit';

export const CardEdit = () => {
  return (
    <div className="card-edit">
      <div className="card-edit__item">
        <label htmlFor="titulo">Titulo: </label>
        <input name="titulo" />
      </div>
      <div className="card-edit__item">
        <label htmlFor="informacion">Informacion: </label>
        <textarea name="informacion" />
      </div>
      <ListImagesEdit />
    </div>
  );
};
