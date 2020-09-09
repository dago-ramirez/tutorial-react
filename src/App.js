import React from 'react';
import './styles/index.css'

import Welcome from './components/Welcome';
import Clock from './components/Clock';
import ActionLink from './components/ActionLink';
import Toggle from './components/Toggle';
import Greeting from './components/Greeting';
import TailWindCard from './components/TailWindCard';

function App() {
  return (
    <div className="App container mx-auto px-4">
      <h1>Welcome to (the jungle) React</h1>
      <Welcome name="Dago" />
      <Clock increment={1} />
      <Clock increment={2} />
      <ActionLink />
      <Toggle />
      <Greeting isLoggedIn={true} />
      <TailWindCard />
    </div>
  );
}

export default App;