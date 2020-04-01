import React from "react";
import axios from "axios";

import { Switch, Route } from "react-router-dom";

import "./bootstrap.min.css";
import "./App.css";

// Pages
import home from "./pages/home";
import addcustomer from "./pages/addcustomer";
import editcustomer from "./pages/editcustomer";
import notfound from "./pages/notfound";

// Components
import Navbar from "./components/Navbar";

axios.defaults.baseURL = "http://slimapp/api";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/add-customer" component={addcustomer} />
        <Route exact path="/edit-customer/:id" component={editcustomer} />
        <Route component={notfound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
