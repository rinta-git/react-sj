import React from "react";
import "./Hero.css";
// import { Button } from "./Button";
import imghome from "../assets/images/img-home.jpg"

function Herojs() {
  return (
    <>
    <div className="hero-container">
      <img className="Hero-Bg" src={imghome} alt="welcome" />
      <h1>Quality Meets Affordability</h1>
      <p>What are you waiting for?</p>
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          GET STARTED
        </Button>
      </div> */}
    </div>
    </>
  );
}

export default Herojs;
