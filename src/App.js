import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./states/store";
import AppLayout from "./containers/AppLayout";
import AuthLayout from "containers/AuthLayout";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/auth" component={AuthLayout} />
          <Route path="/" component={AppLayout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
