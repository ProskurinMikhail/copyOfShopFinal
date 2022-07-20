import React, { useState } from 'react';
import './App.css';
import Header  from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { BodyA, BodyB, HminiA, HminiB, HminiC} from './Body';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <HminiA></HminiA>
        <BodyA></BodyA>
        <BodyA></BodyA>
        <HminiB></HminiB>
        <BodyB></BodyB>
        <HminiC></HminiC>
      </Router>
    </div>
  )
}

export default App;
