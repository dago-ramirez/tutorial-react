import React from 'react';

import Welcome from './components/Welcome';
import Clock from './components/Clock';
import ActionLink from './components/ActionLink';
import Toggle from './components/Toggle';
import Greeting from './components/Greeting';
import TailWindCard from './components/TailWindCard';
import LoginControl from './components/LoginControl';
import Mailbox from './components/Mailbox';
import { Page } from './components/WarningBanner';
import NumberList from './components/NumberList';
import Blog from './components/Blog';
import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import Calculator from './components/temperature-calculator/Calculator ';
import Example from './components/hooks/Example';

const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function App() {
  return (
    <div className="App container mx-10 mt-20 px-4">
      <h1>Welcome to (the jungle) React</h1>
      <Welcome name="Dago" />
      <Clock increment={1} />
      <ActionLink />
      <Greeting isLoggedIn={true} />
      <Toggle />
      <LoginControl />
      <TailWindCard />
      <Mailbox unreadMessages={messages} />
      <Page />
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
      <NameForm />
      <EssayForm />
      <Calculator />
      <Example />
    </div>
  );
}

export default App;