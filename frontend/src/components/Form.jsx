import { FaChevronRight, FaLock, FaUserAlt } from "react-icons/fa";

const Form = ()=>{
    return(
        <div className="App">
          <h1>Chat With Famous People</h1>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon"><FaUserAlt /></i>
                                <input type="text" className="login__input" placeholder="User name / Email" />
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaLock /></i>
                                <input type="password" className="login__input" placeholder="Password" />
                            </div>
                            <button className="button login__submit">
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