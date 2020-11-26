import React, { Component } from 'react';
// import Table from './components/Table.js';
import List from './components/List.js';
import './Interface.js'


class App extends Component { //witihin the react model we're importing component
  constructor(props) {
    super(props);  //relates to running the constructor in Component
    this.state = {
      user: 2,
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
    .then(json => json.posts)
    .then(posts => this.setState({ 'posts' : posts }))

  }

  render() {
    return (
      // <div id="tabledata" className="App">
      //   <Table users={this.state.users }/>
      // </div>
      <div>
        <div className='page-header'>Acebook</div>

        <div id='post-list' className='App'>
          <List state={ this.state } />
        </div>

        <div className='page-footer'>By Quioxtic</div>
      </div>
    );
  }

  // hideDropDown() { window.addEventListener('click', () => {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // })}



}

export default App;
