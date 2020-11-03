import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';

import './Table.scss';

export const AdminTable = ({ className, table, onEdit }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(table);

  return (
    <div className={'admin-table ' + className}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className={
                    'cell-' +
                    column.Header.toLocaleLowerCase().replace(/ /g, '')
                  }
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
                      className={
                        'cell-' +
                        cell.column.Header.toLowerCase().replace(/ /g, '')
                      }
                      {...cell.getCellProps()}
                    >
                      {cell.column.Header === 'Actions' ? (
                        <>
                          <i
                            onClick={() => onEdit(cell.row.index)}
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
  className: PropTypes.string,
};
