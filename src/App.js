import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Content from "./components/Content";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/content" component={Content} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
