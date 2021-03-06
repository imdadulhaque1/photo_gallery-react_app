import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import PhotoGallery from "./components/PhotoGallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OnelineAchievementPage from "./components/Gallery/OnelineAchievementPage";
import PublicationPage from "./components/Gallery/PusblicationPage";
import CampusTimePage from "./components/Gallery/CampusTimePage";
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
      
      <Route exact path="/photogallery/onelineachievement" component={OnelineAchievementPage} />
      <Route exact path="/photogallery/publication" component={PublicationPage} />
      <Route exact path="/photogallery/campustime" component={CampusTimePage} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
