import React, { Component } from 'react';
import Table from './Table.js';

class TableApp extends Component { //witihin the react model we're importing component
  constructor(props) {
    super(props);  //relates to running the constructor in Component
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(json => json.data)
    .then(data => this.setState({ 'users' : data }))
  }

  render() {
  return (
    <div id="tabledata" className="App">
     <br />
     <br />
      <Table users={this.state.users }/>
    </div>
  );
 }
}

export default TableApp;
