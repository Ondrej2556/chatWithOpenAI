import { useState } from "react";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

const Form = ({setLoggedIn})=>{
    const [isRegistered, setIsRegistered] = useState(true); 

    return(
        <>
        {isRegistered 
        ? 
        <LogInForm setLoggedIn={setLoggedIn} setIsRegistered={setIsRegistered}/> 
        : 
        <RegisterForm setIsRegistered={setIsRegistered}/>}
        </>
      )
}

export default Form;