import React, { Component } from "react";
import { useState } from 'react';
import '../style.css'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.testArr = {};
  //   const [state , setState] = useState({
  //         first: "",
  //         email : "",
  //         password : ""
  //     })
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
                    this.testArr = {...this.testArr, 'first_name': event.target.value }
                  }} />
              </div>

              <div className="form-group">
                  <label>Last name</label>
                  <input type="text" className="form-control" placeholder="Last name" onChange={(event) => {
                    this.testArr = {...this.testArr, 'last_name': event.target.value }
                  }} />
              </div>

              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => {
                    this.testArr = {...this.testArr, 'email': event.target.value }
                  }} />
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => {
                    this.testArr = {...this.testArr, 'password': event.target.value }
                  }} />
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Re-Enter password" onChange={(event) => {
                    this.testArr = {...this.testArr, 'password_confirm': event.target.value }
                  }} />
              </div>

              <button type="submit" className="btn btn-primary btn-block" onClick={ (event) => {
                event.preventDefault();
                // console.log("Event: " + event.target)
                // const {id , value} = event.target
                // console.log({id , value});
                console.log(this.testArr)
              }}>Sign Up</button>
              <p className="forgot-password text-right">
                  Already registered <a href="#">sign in?</a>
              </p>
          </form>
      );
  }

  postUser() {

  }
}
