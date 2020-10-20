import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';

//pages
import Index from "./pages/index";
import Countdown from "./pages/countdown"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Countdown />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
