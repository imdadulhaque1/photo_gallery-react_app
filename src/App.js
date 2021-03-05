import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import PhotoGallery from "./components/PhotoGallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Switch, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/photogallery" component={PhotoGallery} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/footer" component={Footer} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
