import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./states/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./containers/AppLayout";
import "./App.scss";
import Spinner from "components/commons/Spinner";
import AuthLayout from "containers/AuthLayout";

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
