import React from 'react';

export const ListImagesEdit = () => {
  const images = [234234, 3254234524, 234523453, 214243];

  const handleDeleteImage = (idImage) => {
    console.log(idImage);
  };

  return (
    <ul className="list-images-edit">
      {images.map((image) => (
        <li key={image} onClick={() => handleDeleteImage(image)}>
          {image}
        </li>
      ))}
      <li className="list-images-edit__add">Añadir imagen</li>
    </ul>
  );
};
