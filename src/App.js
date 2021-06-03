import React, { useMemo, useContext } from "react";
import { __RouterContext } from "react-router";
import { Security } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import { oktaAuthConfig } from "./config/okta";
import Routes from "./Routes";

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
      <Routes />
    </Security>
  );
};

export default App;
