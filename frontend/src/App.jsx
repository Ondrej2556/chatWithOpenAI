import './ChatApp.css';
import ParticlesBg from 'particles-bg'
import Form from './components/Form';
import ChatApp from './components/ChatApp'
import Navigation from './components/Navigation'
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
    <h1>Chat With Famous People</h1>
    {loggedIn ? <><Navigation /> <ChatApp /> </>: <Form setLoggedIn={setLoggedIn}/>}
    <ParticlesBg  num={150} type="cobweb" bg={true} />
    </>
  )
}

export default App;
