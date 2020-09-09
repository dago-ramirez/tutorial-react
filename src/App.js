import React from 'react';

import Welcome from './components/Welcome';
import Clock from './components/Clock';
import ActionLink from './components/ActionLink';
import Toggle from './components/Toggle';
import Greeting from './components/Greeting';
import TailWindCard from './components/TailWindCard';
import LoginControl from './components/LoginControl';

function App() {
  return (
    <div className="App container mx-auto px-4">
      <h1>Welcome to (the jungle) React</h1>
      <Welcome name="Dago" />
      <Clock increment={1} />
      <ActionLink />
      <Toggle />
      <Greeting isLoggedIn={true} />
      <LoginControl />
      <TailWindCard />
    </div>
  );
}

export default App;