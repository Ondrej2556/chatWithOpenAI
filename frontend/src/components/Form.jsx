import { useState } from "react";
import { FaChevronRight, FaLock, FaUserAlt } from "react-icons/fa";

const Form = ({setLoggedIn})=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e) =>{
        e.preventDefault()

        fetch('http://localhost:6999/login', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({username: username, password: password})
                        })
                            .then(res => res.json())
                            .then(res =>{
                                if(res === username){
                                    setLoggedIn(true);
                                }
                            })
                            .catch(err => console.error("There was an error", err))
            
    }

    return(
        <div className="App">
          <h1>Chat With Famous People</h1>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon"><FaUserAlt /></i>
                                <input onChange={(e)=> setUsername(e.target.value)} type="text" className="login__input" placeholder="User name" />
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaLock /></i>
                                <input onChange={(e)=> setPassword(e.target.value)} type="password" className="login__input" placeholder="Password" />
                            </div>
                            <button onClick={handleClick} className="button login__submit">
                                <span className="button__text">Log In To Continue</span>
                                <i className="button__icon"><FaChevronRight /></i>
                            </button>				
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
        </div>
      )
}

export default Form;