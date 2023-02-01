import { useState } from "react";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

const Form = ({setLoggedIn})=>{
    const [isRegistered, setIsRegistered] = useState(true); 

    return(
        <>
        <h1>Chat With Famous People</h1>
        {isRegistered 
        ? 
        <LogInForm setLoggedIn={setLoggedIn} setIsRegistered={setIsRegistered}/> 
        : 
        <RegisterForm setLoggedIn={setLoggedIn} setIsRegistered={setIsRegistered}/>}
        </>
      )
}

export default Form;