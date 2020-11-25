import React from 'react';

const List = ({ posts }) => {
  return (
    <ul>
    { (posts.length > 0) ? posts.map( (post, index) => {
      return (
        <li>
          <table>
            <tr>
              <td class='user-name'> { post.user.email } </td>
              <td class='create-time'> { post.created_at } </td>
              <td class='empty-cell'></td>
              <td class='more-cell'><div class='more-div'><div class='hidden-menu'></div></div></td>
            </tr>
            <tr>
              <td class='body-cell' colspan='4'> { post.message } </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </li>
      )
    }) : 'Loading...'  }
    </ul>
  )

}

export default List
