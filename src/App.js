import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <Title headline="" />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
