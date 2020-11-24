import React, { Component } from 'react';
import Table from './components/Table.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(json => json.data)
    .then(users => this.setState({ 'users' : users }))
  }

  render() {
  return (
    <div className="App">
      <Table users={this.state.users }/>
    </div>
  );
 }
}

export default App;
