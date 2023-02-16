import React from "react";

import { Route, Router } from "react-router-dom";
import { ManageRooms } from "../ManageRooms/ManageRooms";
import { createBrowserHistory } from "history";


const history = createBrowserHistory()
class App extends React.Component {

  change = () => {
    console.log("----in app.js----------");
  };

  onlinkChange = () => {
    console.log("");
  };
  CheckUser = () => {
  };

  render() {
    return (

      <Router history={history}>
        <Route exact path="/" component={ManageRooms} />
      </Router>

    );
  }
}

export { App };
