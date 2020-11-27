import React, { Component } from "react";
import { useState } from 'react';
import './FormStyle.css'

export default class ForgotPassword extends Component {
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
        <div className='log-in-div'>
        <h3>Reset Password</h3>
          <form className='forgot-password-form'>

              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              < br />

              <div className="form-group">
                  <label>Confirm</label>< br />
                  <input type="email" className="form-control" placeholder="Re-Enter email" />
              </div>
              < br />


              <button type="submit" className="btn btn-primary btn-block">Send Link</button>

          </form>
        </div>
      );
  }

  static postUser() {
    fetch('https://acebook-quixotic-production.herokuapp.com/api/v1/users/', {
    // fetch('http://localhost:6030/api/v1/users', {
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
