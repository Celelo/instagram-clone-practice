import { useState } from "react";
import App from "../App.jsx"
import './loginWrapper.css';
import { Login } from "./login/Login.jsx";
import { Register } from "./login/Register.jsx"

export const LoginWrapper = () => {
    const [isLoggeding, setIsLoggeding] = useState(true)
    const [userName, setUserName] = useState('')
    const [isRegister, setIsRegister] = useState(true); 

    const handleLogin = () => {
        setIsLoggeding(true)
        setUserName('Cele')
    }

    if (isLoggeding) {
        return <App userName={userName} setIsLoggeding={setIsLoggeding}/>
    } else {
        return (
            <>
            {isRegister ? <Login setIsRegister={setIsRegister} 
            setIsLoggeding={setIsLoggeding}/>
            : <Register  setIsRegister={setIsRegister} setIsLoggeding={setIsLoggeding} />}
            {/* <a href="#" className="login_link" onClick= {handleLogin }>Iniciar sesion</a> */}
            </>
        )
    }
}