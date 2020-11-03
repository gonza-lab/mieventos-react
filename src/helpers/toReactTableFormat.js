// const formatt = {
//   title: 'Titulo',
//   information: 'Informacion',
//   images: 'Imagenes',
//   side: 'Lado',
//   position: 'Posicion',
// };

export const toReactTableFormat = (format, data, extra) => {
  const columns = [];
  const rows = [];
  let counter = 1;

  for (const header in format) {
    columns.push({
      accessor: `col${counter}`,
      Header: format[header],
    });

    counter++;
  }

  if (extra) {
    columns.push({
      accessor: `col${counter}`,
      Header: extra,
    });
  }
  counter = 1;

  data.forEach((info) => {
    const row = {};
    for (const header in format) {
      row[`col${counter}`] = Array.isArray(info[header])
        ? info[header].length
        : info[header];
      counter++;
    }
    counter = 1;
    rows.push(row);
  });

  return { columns, data: rows };
};
