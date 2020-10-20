import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
