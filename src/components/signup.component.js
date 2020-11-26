import React, { Component } from "react";
import { useState } from 'react';
import '../style.css'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  //
  // handleSubmitClick(e) {
  //     e.preventDefault();
  //     console.log(state.first)
  //     // if(state.password === state.confirmPassword) {
  //         // sendDetailsToServer()
  //     // } else {
  //         // props.showError('Passwords do not match');
  //     // }
  //   }
  render() {
      return (
          <form>
              <h3>Sign Up</h3>
              <div className="form-group">
                  <label>First name</label>
                  <input type="text" id='test' className="form-control" placeholder="First name" onChange={(event) => {
                    this.state = {...this.state, 'first_name': event.target.value }
                  }} />
              </div>

              <div className="form-group">
                  <label>Last name</label>
                  <input type="text" className="form-control" placeholder="Last name" onChange={(event) => {
                    this.state = {...this.state, 'last_name': event.target.value }
                  }} />
              </div>

              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => {
                    this.state = {...this.state, 'email': event.target.value }
                  }} />
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => {
                    this.state = {...this.state, 'password': event.target.value }
                  }} />
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Re-Enter password" onChange={(event) => {
                    this.state = {...this.state, 'password_confirm': event.target.value }
                  }} />
              </div>

              <button type="submit" className="btn btn-primary btn-block" onClick={ (event) => {
                event.preventDefault();
                // console.log(this.state)
                SignUp.postUser()
              }}>Sign Up</button>
              <p className="forgot-password text-right">
                  Already registered <a href="#">sign in?</a>
              </p>
          </form>
      );
  }

  static postUser() {
    // fetch('https://acebook-quixotic-production.herokuapp.com/api/v1/users/', {
    fetch('http://localhost:6030/api/v1/users', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa('test@example.com:1234'),
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }
}
