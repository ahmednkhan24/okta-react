import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const isEmptyObject = (obj) => !Object.keys(obj).length;

const useOktaStorageTokens = () => {
  const [oktaTokens, setOktaTokens] = useState(null);
  const {
    oktaAuth,
    authState: { isAuthenticated },
  } = useOktaAuth();

  useEffect(() => {
    const getOktaTokens = async () => {
      try {
        const tokens = await oktaAuth.tokenManager.getTokens();
        if (isEmptyObject(tokens)) {
          setOktaTokens(null);
        } else {
          setOktaTokens(tokens);
        }
      } catch (err) {
        setOktaTokens(null);
      }
    };

    getOktaTokens();
  }, [oktaAuth, isAuthenticated]);

  return oktaTokens;
};

export { useOktaStorageTokens };
