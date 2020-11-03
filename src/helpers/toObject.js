export const toObject = (array) => {
  const obj = {};

  array.forEach((item) => {
    ojb[item.name] = item;
  });

  return obj;
};
