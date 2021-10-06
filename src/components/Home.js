import React from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { oktaAuth } = useOktaAuth();

  return (
    <div>
      <h1>home page</h1>
      <br />
      <Link to="/content">Click to go to Content page</Link>
      <br />
      <br />
      <br />
      <button onClick={() => window.location.reload()}>
        Refresh entire application to test persistence
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          oktaAuth.signOut();
          // oktaAuth.stop();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
