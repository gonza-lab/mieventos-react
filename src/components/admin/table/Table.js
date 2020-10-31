import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';

import './Table.scss';
import { useDispatch } from 'react-redux';
import { openModalAdmin } from '../../../actions/ui';
import { setActiveCard } from '../../../actions/admin';

export const AdminTable = ({ headers, className }) => {
  const dispatch = useDispatch();

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'Columna 3',
        col4: 'Derecho',
        col5: '1',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      ...headers.map((header, index) => ({
        accessor: `col${index + 1}`,
        Header: header,
      })),
      { accessor: `col${headers.length + 1}`, Header: 'Actions' },
    ],
    [headers]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const handleOpenModal = (id) => {
    console.log(id);
    dispatch(setActiveCard({ title: 'Servicio 1 ', info: 'Informacion 1 ' }));
    dispatch(openModalAdmin());
  };

  return (
    <div className={'admin-table ' + className}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className={'cell-' + column.Header.toLocaleLowerCase()}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className={'cell-' + cell.column.Header.toLowerCase()}
                      {...cell.getCellProps()}
                    >
                      {cell.column.Header === 'Actions' ? (
                        <>
                          <i
                            onClick={() => handleOpenModal(cell.row.index)}
                            className="fas fa-pen"
                          ></i>
                          <i className="far fa-trash-alt"></i>
                        </>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

AdminTable.propTypes = {
  headers: PropTypes.array.isRequired,
  className: PropTypes.string,
};
