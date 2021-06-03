import React, { useEffect, useRef } from "react";
import { useOktaAuth } from "@okta/okta-react";
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import { widgetConfig } from "../config/okta";

const OktaSignInWidget = () => {
  const { oktaAuth } = useOktaAuth();
  const widgetRef = useRef();

  useEffect(() => {
    if (!widgetRef.current) return false;

    const widget = new OktaSignIn(widgetConfig);

    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
        scopes: widgetConfig.authParams.scopes,
      })
      .then((tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
      })
      .catch((err) => {
        console.log("widget error: ", err);
        throw err;
      });

    return () => widget.remove();
  }, [oktaAuth]);

  return <div ref={widgetRef} />;
};
export default OktaSignInWidget;
