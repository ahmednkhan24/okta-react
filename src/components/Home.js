import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>home page</h1>
    <br />
    <Link to="/content">Click to go to Content page</Link>
    <br />
    <br />
    <br />
    <button onClick={() => window.location.reload()}>
      Click me to refresh entire application
    </button>
  </div>
);

export default Home;
