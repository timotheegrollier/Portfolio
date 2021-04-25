import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Local Route
           */}
          {/* <Route path="/" exact component={Home} /> */}

          {/* Build/Github Route
           */}
          <Route path="/newPortfolio" component={Home} />

          <Route path="/competences" component={Knowledges} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/settings" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
