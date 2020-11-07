export const toGalleryCarrouselFormat = (cards) => {
  return cards.map(({ image }) => ({
    src: image,
    width: 3,
    height: 2,
  }));
};
