import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>home page</h1>
    <br />
    <Link to="/content">Click to go to Content page</Link>
  </div>
);

export default Home;
