import React from "react";
import web from "../images/home.gif"
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () =>{
  return(
    <>
    <Common name="Grow your business with"
      imgsrc={web} visit="/photogallery"
      btname="Get Started" />
    </>
  );
};
export default Home;
