import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Pages/Home";
import Contact from "./component/Pages/Contact";
import Footer from "./component/Footer";
import AboutUs from "./component/Pages/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
