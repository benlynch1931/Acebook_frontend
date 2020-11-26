import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Table from './components/Table.js';
import TableApp from './components/TableApp.js';
import AboutUs from './components/About.js';
import Posts from './components/Posts.js';

export default function App() {
  return (
    <Router>
      <div>
      <h1>Welcome to Acebook</h1>
        <nav>
            <div><Link to="/signup">Sign Up</Link>
                <br /> <Link to="/Login">Log In</Link>
                <br /> <Link to="/Aboutus">About Us</Link>
                <br /> <Link to="/Posts">Posts</Link></div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <TableApp />
          </Route>
          <Route path="/Aboutus">
            <AboutUs />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
)};
