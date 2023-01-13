import './ChatApp.css';
import ParticlesBg from 'particles-bg'
import Form from './components/Form';
import ChatApp from './components/ChatApp'


function App() {
  return (
    <>
    <Form />
    {/* <ChatApp /> */}
    <ParticlesBg  num={150} type="cobweb" bg={true} />
    </>
  )
}

export default App;
