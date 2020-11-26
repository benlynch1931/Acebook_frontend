import React from 'react';
// import App from '../App.js'
var dateFormat = require('dateformat');

const PostList = ({ state }) => {
  return (
    <div className='list-post'>
      { (state.posts.length > 0) ? state.posts.map( (post, index) => {
        return (
          <div className='post-div'>
            <table className='post-table'>
              <tbody>
                <tr className='header'>
                  <td className='user-date'> { post.user.first + ' ' + post.user.last + ' on ' + dateFormat(post.created_at, "dd mmm yyyy") } </td>
                  <td className='more-cell'>
                  { (post.user.id === state.user) ?
                    <div className='more-div' onClick={() => {document.getElementById(`dropDown${post.id}`).classList.toggle("show")} }>
                      {'. . .'}
                      <div className='drop-down-menu' id={'dropDown' + post.id }>
                        <a href="#">Update</a>
                        <a href="#">Delete</a>
                      </div>
                    </div>
                    : <div></div>
                  }
                  </td>
                </tr>
                <tr>
                  <td className='body-cell' colSpan='2'> { post.message } </td>
                </tr>
                <tr className='footer'>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      }) : 'Loading...'  }
    </div>
  )
}
export default PostList
