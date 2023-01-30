import { useState } from "react";
import { FaChevronRight, FaLock, FaUserAlt } from "react-icons/fa";

const logInForm = ({setLoggedIn, setIsRegistered})=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [badCredentials, setBadCredentials] = useState(false);

    const handleLogin = (e) =>{
        e.preventDefault()

        fetch('http://localhost:6999/login', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({username: username, password: password})
                        })
                            .then(res => res.json())
                            .then(res =>{
                                res === username ? setLoggedIn(true) : setBadCredentials(true);
                            })
                            .catch(err => console.log("Sorry, there was an error: ", err))
            
    }

    return(
        <div className="App">
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                    <h2 style={{color:"black"}}>Login</h2>
                        <form className="login">
                            {badCredentials&&<label style={{color: "red", fontSize: "20px"}}>Bad username and/or password</label>}
                            <div className="login__field">
                                <i className="login__icon"><FaUserAlt /></i>
                                <input onChange={(e)=> setUsername(e.target.value)} type="text" className="login__input" placeholder="User name" />
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaLock /></i>
                                <input onChange={(e)=> setPassword(e.target.value)} type="password" className="login__input" placeholder="Password" />
                            </div>
                            <button onClick={handleLogin} className="button login__submit">
                                <span className="button__text">Log In To Continue</span>
                                <i className="button__icon"><FaChevronRight /></i>
                            </button>
                            <button onClick={(e)=>{e.preventDefault(); setIsRegistered(false)}} className="button login__submit">
                                <span className="button__text">Register</span>
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
export default logInForm;