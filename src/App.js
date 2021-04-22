import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Checkout from "./components/Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Grid />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
