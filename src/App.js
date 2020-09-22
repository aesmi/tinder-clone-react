import React from 'react';
import { Header, SwipeButtons, TinderCards, Chats, ChatScreen, Profile } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
            <Route path="/profile">
              <Header backButton="/" />
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
