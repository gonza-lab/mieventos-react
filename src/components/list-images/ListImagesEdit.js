import React from 'react';
import Swal from 'sweetalert2';

export const ListImagesEdit = ({ imagenes, id, setListImages }) => {

  const handleDeleteImage = (idImage) => {
    console.log(idImage);
  };

  const handleAddImage = async (e) => {
    const { value: urlImage } = await Swal.fire({
      title: 'Ingrese el link de la imagen',
      input: 'url',
      inputLabel: 'Link de la imagen',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        }
      },
    });

    if (urlImage) {
      setListImages((prevImages) => [...prevImages, urlImage]);
    }
  };

  return (
    <div className="list-images-edit">
      <label>Imagenes: </label>
      <select multiple>
        {imagenes.map((image) => (
          <option key={image} onClick={() => handleDeleteImage(image)}>
            {image}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleAddImage}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};
