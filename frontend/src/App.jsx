import './app.css';
import { useState,useRef, useEffect } from 'react';
import rockProfilePicture from './images/theRock.png'
import mrBeanProfilePicture from './images/mrBean.png'

function App() {
  const [message, setMessage] = useState("");
  const [messageArray, setMessageArray] = useState([{
    message:" You can ask me anything you want :)",
    name: "Dwayne Johnson",
    srcImage: rockProfilePicture
  }]);

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [messageArray]);

  const handleClick = ()=>{
    setMessageArray([...messageArray, message]);
  }

  return (
    <div className="App">
      <h1>Chat with Dwayne Johnson</h1>
      <div className='chat' ref={divRef}>
        {messageArray.map((data, index) => {
        return (
              <div className="oneMessage" key={index}>
                  <div className="msgHeader">
                    <img src={data.srcImage} width="40vw" height="40vh"/>
                    <h5 >{data.name}</h5>
                  </div>
                  <p>{data.message}</p>
              </div>
              )
      })}
      </div>
      <div className="inputs">
      <input  onChange={(e)=>setMessage({message:e.target.value, name:"user", srcImage:mrBeanProfilePicture})}/>
      <button onClick={handleClick} className='button'>CHAT!</button>
      </div>
      
    </div>
  )
}

export default App
