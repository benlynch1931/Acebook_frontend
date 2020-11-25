import React from 'react';

const List = ({ posts }) => {
  return (
    <ul>
    { (posts.length > 0) ? posts.map( (post, index) => {
      return (
        <li key={ post.id }>
          <table>
            <tbody>
              <tr>
                <td className='user-name'> { post.user.email } </td>
                <td className='create-time'> { post.created_at } </td>
                <td className='empty-cell'></td>
                <td className='more-cell'><div className='more-div'><div className='hidden-menu'></div></div></td>
              </tr>
              <tr>
                <td className='body-cell' colSpan='4'> { post.message } </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </li>
      )
    }) : 'Loading...'  }
    </ul>
  )

}

export default List
