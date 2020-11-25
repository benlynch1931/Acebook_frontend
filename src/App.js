import React, { Component } from 'react';
import Table from './components/Table.js';
import List from './components/List.js';


class App extends Component { //witihin the react model we're importing component
  constructor(props) {
    super(props);  //relates to running the constructor in Component
    this.state = {
      // users: []
      posts: []
    }
  }

  componentDidMount() {
    // fetch('https://reqres.in/api/users?page=2')
    fetch('https://acebook-quixotic-production.herokuapp.com/api/v1/posts/', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('test@example.com:1234'),
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }
    })
    .then(res => res.json())
    .then(json => json.data)
    .then(data => this.setState({ 'posts' : data }))
    // console.log(data)
    console.log('--------')
    console.log(this.state.posts)
  }

  render() {
  return (
    // <div id="tabledata" className="App">
    //   <Table users={this.state.users }/>
    // </div>
    <div id='post-list' className='App'>
      <List posts={this.state.posts }/>
    </div>
  );
 }
}

export default App;
