import React, { Component } from 'react';
import './App.css';

import {PhysiciansList} from "./components/PhysiciansList";
import { AppointmentsList } from './components/AppointmentsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhysiciansList />
        <AppointmentsList />
      </div>
    );
  }
}

export default App;
