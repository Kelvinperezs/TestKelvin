import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import People from "./components/People";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/people" component={People}></Route>
        </Switch>
      </Router>
    </div>
  );
}
