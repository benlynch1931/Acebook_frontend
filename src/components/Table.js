import React from 'react';

const Table = ({users}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>first name</th>
          <th>second name</th>
          <th>avatar</th>
          <th>id</th>
        </tr>
      </thead>
      <tbody>
        { (users.length > 0) ? users.map( (user, index) => {
        return (
        <tr key= { index }>
          <td> {user.id } </td>
          <td> {user.email } </td>
          <td> {user.first_name } </td>
          <td> {user.last_name } </td>
          <td> {user.avatar } </td>
          <td> {user.id } </td>
        </tr>
      )
    }) : <tr><td colSpan="5">Loading...</td></tr>  }
      </tbody>
    </table>
);
}

export default Table
