import React, { useMemo, useContext } from "react";
import { __RouterContext } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import Content from "./components/Content";
import Home from "./components/Home";
import { oktaAuthConfig } from "./config/okta";
import OktaSignInWidget from "./components/OktaSignInWidget";

const App = () => {
  const { history } = useContext(__RouterContext);

  const oktaAuth = useMemo(() => new OktaAuth(oktaAuthConfig), []);

  const onAuthRequired = () => {
    console.log("in onAuthRequired");
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    console.log("in restoreOriginalUri");
    history.replace("/home");
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={onAuthRequired}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/login" />} /> */}
        <Route exact path="/login" component={OktaSignInWidget} />
        <Route exact path="/implicit/callback" component={LoginCallback} />
        <SecureRoute exact path="/home" component={Home} />
        <SecureRoute exact path="/content" component={Content} />
      </Switch>
    </Security>
  );
};

export default App;
