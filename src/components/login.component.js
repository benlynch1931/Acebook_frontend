import React, { Component } from "react";
import './FormStyle.css'

export default class Login extends Component {
    render() {
        return (
          <div className='log-in-div'>
          <h3>Log In</h3>
            <form className='log-in-form'>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                < br />

                <div className="form-group">
                    <label>Password</label>< br />
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                < br />

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                < br />

                <button type="submit" className="btn btn-primary btn-block">Log In</button>
                <p className="forgot-password text-right">
                    Forgot <a href="login/forgot-password">password?</a>
                </p>
            </form>
          </div>
        );
    }
}
