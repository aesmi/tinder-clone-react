import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../../firebase';
import './TinderCards.css';

export default function TinderCards() {
    const [people, setPeople] = useState([
    ]);

    //Piece of code which runs based on a condition
    useEffect(() => {
        //runs once when component loads
        //this loads our people collection from our firebase cloudstore
        //take the snapshot of our collection and go through each document and grab the data within each one
        //sets to our state
        database.collection('people').onSnapshot(snapshot => (setPeople(snapshot.docs.map(doc => doc.data()))));
        //this will run once if the depency is blank
        //otherwise it will run every time the state specified changes
    }, [people]);

    return (
        <div className="tinderCards_cardContainer">
            {people.map(person => (<TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>))}
        </div>
    )
}
