import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';

//pages
import Index from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
