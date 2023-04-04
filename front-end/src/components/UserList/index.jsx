import React, { useContext, useEffect } from 'react';
import adminContext from '../../hooks/adminContext';

export default function UserList() {
  const { dataUsers, getUsers } = useContext(adminContext);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  console.log('ta chamando?');

  return (
    <>
      <h3>Lista de usuários</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((e, index) => (
            <tr key={ index + 1 }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                { e.name }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                { e.email }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                { e.role }
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
