import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
