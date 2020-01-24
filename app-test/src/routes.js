import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import People from "./People";

const createRoutes = () => (
  <Router>
    <div>
      <Router path="/" component={App} />
      <Router path="/People" component={People} />
    </div>
  </Router>
);

export default createRoutes;
