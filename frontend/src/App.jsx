import './app.css';
import { useState,useRef, useEffect } from 'react';
import rockProfilePicture from './images/theRock.png'
import mrBeanProfilePicture from './images/mrBean.png'
import ParticlesBg from 'particles-bg'

function App() {
  const [message, setMessage] = useState({});
  const [messageArray, setMessageArray] = useState([{
    message:" You can ask me anything you want :)",
    name: "Dwayne Johnson",
    srcImage: rockProfilePicture
    },
  ]);


  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [messageArray]);




  const handleClick = ()=>{
    const messInput = document.getElementById('messInput');
    //Check if input is not empty
    if(messInput.value.trim().length > 0 ){
      setMessageArray(prevArray => ([...prevArray, message]));
      getData()
      messInput.value="";
    }
  }

  //send server data and recieve respons with text from bot
  async function getData(){
    const data = { message: message.message };
      let api = await fetch('http://localhost:6999/',{
                      method: 'POST', 
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(data),
                    })
      let apijson = await api.json();
      
      const botResponse ={
        message: apijson.text,
        name: "Dwayne Johnson",
        srcImage: rockProfilePicture
      }
      setMessageArray(prevArray => ([...prevArray, botResponse]));

  }
  
  return (
    <div className="App">
      <h1>Chat with Dwayne Johnson</h1>
      <div className='chat' ref={divRef}>
      {messageArray.map((data, index) => {
      return (
            <div className="oneMessage" key={index}>
                <div className="msgHeader">
                  <img src={data.srcImage} width="50vw" height="50vh"/>
                  <h5 >{data.name}</h5>
                </div>
                <p>{data.message}</p>
            </div>
            )
      })}
      </div>
      <div className="inputs">
      <input id="messInput" onChange={(e)=>setMessage({message:e.target.value,name:"user",srcImage:mrBeanProfilePicture})} placeholder="ASK ME ANYTHING"/>
      <button onClick={handleClick} id="button">CHAT!</button>
      </div>
      <ParticlesBg  num={50} type="cobweb" bg={true} />
    </div>
  )
}

export default App
