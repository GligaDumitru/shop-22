import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Shop from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/hats" component={HatsPage} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </Router>

      </div>
    );
  }
}
