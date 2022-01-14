/** @format */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Commment */}
        <Route exact path='/' component={Home} />
        <Route path='/search/:name' component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
