import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";
import "./TinderCards.css";
import api from "../../api";

export default function TinderCards() {
  const [people, setPeople] = useState([]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  //Piece of code which runs based on a condition
  useEffect(() => {
    //runs once when component loads
    //this loads our people collection from our firebase cloudstore
    //take the snapshot of our collection and go through each document and grab the data within each one
    //sets to our state
    async function fetchData(){
        const req = api.get
    }
    //this will run once if the depency is blank
    //otherwise it will run every time the state specified changes
  }, [people]);

  return (
    <div className="tinderCards_cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir)=>swiped(dir, person.name)}
          onCardLeftScreen={()=>outOfFrame(person.name)}
        >
          <div
            style={{ backgroundImage: `url(${person.imgUrl})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
