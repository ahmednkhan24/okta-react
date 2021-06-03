const oktaAuthConfig = {
  baseUrl: "https://dev-95390738.okta.com",
  issuer: "https://dev-95390738.okta.com/oauth2/default",
  clientId: "0oa69wf3eB0CgATd75d6",
  redirectUri: "http://localhost:3000/implicit/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: false,
};

const widgetConfig = {
  baseUrl: "https://dev-95390738.okta.com",
  clientId: "0oa69wf3eB0CgATd75d6",
  redirectUri: "http://localhost:3000/implicit/callback",
  authParams: {
    issuer: "https://dev-95390738.okta.com/oauth2/default",
    scopes: ["openid", "profile", "email"],
  },
  language: "en",
  features: {
    idpDiscovery: true,
  },
};

export { oktaAuthConfig, widgetConfig };
