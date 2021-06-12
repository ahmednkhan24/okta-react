import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginCallback, SecureRoute, useOktaAuth } from "@okta/okta-react";
import OktaSignInWidget from "./components/OktaSignInWidget";
import Content from "./components/Content";
import Home from "./components/Home";

const Routes = () => {
  const {
    authState: { isPending, isAuthenticated },
  } = useOktaAuth();

  return (
    <Switch>
      <Route exact path="/login" component={OktaSignInWidget} />
      <Route exact path="/implicit/callback" component={LoginCallback} />
      <SecureRoute exact path="/home" component={Home} />
      <SecureRoute exact path="/content" component={Content} />
      <Route
        render={() =>
          isAuthenticated ? (
            <Redirect to="/home" />
          ) : isPending ? (
            <h1>loading...</h1>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </Switch>
  );
};

export default Routes;
