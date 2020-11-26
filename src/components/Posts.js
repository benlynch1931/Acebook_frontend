import React, { Component } from 'react';
import PostList from './PostsRender.js';

class Posts extends Component {
  constructor(props) {
  super(props);  //relates to running the constructor in Component
  this.state = {
    user: 1,
    posts: []
  }
}

componentDidMount() {
  // fetch('https://reqres.in/api/users?page=2')
  // fetch('https://acebook-quixotic-production.herokuapp.com/api/v1/posts/', {
  fetch('http://localhost:6030/api/v1/posts', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa('test@example.com:1234'),
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }
  })
  .then(res => res.json())
  .then(json => json.posts)
  .then(posts => this.setState({ 'posts' : posts }))
}

  render() {
    return (
    <div id='post-list' className='App'>
          <PostList state={ this.state } />
        </div>
   )
  }
}

export default Posts
