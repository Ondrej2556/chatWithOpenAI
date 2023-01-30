import { useState } from "react";
import { FaChevronRight, FaLock, FaUserAlt } from "react-icons/fa";

const RegisterForm = ({setIsRegistered})=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [badCredentials, setBadCredentials] = useState(false);


    const handleRegister = (e) =>{
        e.preventDefault()

        if(username === "" || password === ""){
            setBadCredentials(true)
        }else{
        fetch('http://localhost:6999/register', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({username: username, password: password})
                        })
                            .then(res => res.json())
                            .catch(err => console.log("Sorry, there was an error: ", err))
            }
    }
    return(
        <div className="App">
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                    <h2 style={{color:"black"}}>Register</h2>
                        <form className="login">
                            {badCredentials&&<label style={{color: "red", fontSize: "20px"}}>Missing username and/or password</label>}
                            <div className="login__field">
                                <i className="login__icon"><FaUserAlt /></i>
                                <input onChange={(e)=> setUsername(e.target.value)} type="text" className="login__input" placeholder="User name" />
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaLock /></i>
                                <input onChange={(e)=> setPassword(e.target.value)} type="password" className="login__input" placeholder="Password" />
                            </div>
                            <button  onClick={handleRegister} className="button login__submit">
                                <span className="button__text">Register!</span>
                                <i className="button__icon"><FaChevronRight /></i>
                            </button>
                            <button onClick={(e)=>{e.preventDefault(); setIsRegistered(true)}} className="button login__submit">
                                <span className="button__text">Already registered?</span>
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
export default RegisterForm;