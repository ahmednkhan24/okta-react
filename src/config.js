const baseUrl = "https://dev-95390738.okta.com";
const issuerId = "default";
const issuer = `${baseUrl}/oauth2/${issuerId}`;
const clientId = "0oa69wf3eB0CgATd75d6";
const redirectUri = "http://localhost:3000/implicit/callback";
const scopes = ["openid", "profile", "email"];

export const oktaAuthConfig = {
  baseUrl,
  issuer,
  clientId,
  redirectUri,
  scopes,
  pkce: true,
  disableHttpsCheck: false,
};

export const widgetConfig = {
  baseUrl,
  clientId,
  redirectUri,
  authParams: {
    issuer,
    scopes,
  },
  language: "en",
  features: {
    idpDiscovery: true,
  },
};
