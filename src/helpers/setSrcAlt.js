export const setSrcAlt = (imagenes) => {
  return imagenes.map((imagen) => ({
    src: imagen,
    alt: '',
  }));
};
