import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img-5.jpg";
import img6 from "../assets/images/img-6.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Product Details</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Paper Laminated Bag Brown"
              path="/"
              color="Brown"
              size="10*50, 25*30"
              material="jute"
              rate="3000"
            />
            <CardItem
              src={img4}
              text="Paper Laminated Bag White"
              path="/"
              color="White"
              size="20*40"
              material="jute"
              rate="2000"
            />
            <CardItem
              src={img5}
              text="Paper Laminated Bag Red"
              path="/"
              color="Red"
              size="10*50, 25*30"
              material="jute"
              rate="1000"
            />
            <CardItem
              src={img6}
              text="Paper Laminated Bag Green"
              path="/"
              color="Green"
              size="15*50, 25*30"
              material="jute"
              rate="5000"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
