import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from "./Signup.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/signup" component={Signup} />
  </Router>,
   document.getElementById("root")

);


