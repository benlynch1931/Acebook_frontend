import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './style.css'
import Table from './components/Table.js';
import TableApp from './components/TableApp.js';
import AboutUs from './components/About.js';
import Posts from './components/Posts.js';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import ForgotPassword from "./components/forgotPassword.component";

export default function App() {
  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">

        <div className="container">
          <table className='nav-table'>
            <tbody>
              <tr>
                <td colSpan='4'>
                  <Link className="navbar-brand" to={"/"}>Acebook</Link>
                </td>
              </tr>

                  <tr className="navbar-nav ml-auto">
                    <td className='empty-cell'></td>
                    <td className='nav-item'>
                      <Link className="nav-link" to={"/posts"}>Posts</Link>
                    </td>
                    <td className="nav-item">
                      <Link className="nav-link" to={"/login"}>Login</Link>
                    </td>
                    <td className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </td>
                  </tr>

            </tbody>
          </table>
        </div>
      </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route path="/Aboutus">
            <AboutUs />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/login/forgot-password">
            <ForgotPassword />
          </Route>
        </Switch>
      </div>
    </Router>
)};
