import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchScene from "./scenes/search";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <SearchScene />} />
      </Switch>
    </Router>
  );
}

export default Routes;
