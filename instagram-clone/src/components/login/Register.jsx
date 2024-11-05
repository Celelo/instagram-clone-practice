// import style from './Login.module.css';
import { useState } from "react";
import style from './Login.module.css';
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

export const Register = ({setIsRegister, setIsLoggeding}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setrepeatPassword] = useState('');
    const [typePassword, setTypePasssword] = useState('password');
    const [isValid, setIsValid] = useState('false')

    const handleRegister = (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            setIsValid(true)
        } else {
            setIsValid(false)
            alert('las contraseñas no coinciden')
        }
        if (userName !== '' && email !== '' && password !== '') {
            setIsValid(true)
        } else {
            setIsValid(false)
            alert('por favor complete todos los campos')
        }
        if (isValid) {
            alert('se ha registrado con exito')
            setIsLoggeding(true)
            setIsRegister(true)
        }
    }

    return (
        <> <h2>Registrarse</h2>
        <form onSubmit={handleRegister}>
            <div className={style.input_container}>
                <label htmlFor="name">Nombre de usuario</label>
                <input
                    type="text"
                    placeholder="Ej:cele"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className={style.input_container}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="cele@gmail.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={style.input_container}>
                <label htmlFor="pin">Contraseña</label>
                <input
                    type={typePassword}
                    id="pin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className={style.wiew_password}>
                    {typePassword === 'password'
                        ? <IoMdEye onClick={() => setTypePasssword('text')} />
                        : <IoIosEyeOff onClick={() => setTypePasssword('password')} />
                    }
                </span>
            </div>

            <div className={style.input_container}>
                <label htmlFor="pinRepit">Repetir contraseña</label>
                <input
                    type={typePassword}
                    id="pinRepit"
                    value={repeatPassword}
                    onChange={(e) => setrepeatPassword(e.target.value)}
                />
                <span className={style.wiew_password}>
                    {typePassword === 'password'
                        ? <IoMdEye onClick={() => setrepeatPassword('text')} />
                        : <IoIosEyeOff onClick={() => setrepeatPassword('repeatPassword')} />
                    }
                </span>
            </div>

            <input type="submit" value='Iniciar sesión' />
        </form>
            <p className={style.register_legend}>
                ¿Ya tienes cuenta?
            <a href="#" className={style.register_btn} onClick={() => setIsRegister(true)}>
                Iniciar sesión
            </a>
            </p>
        </>
    );
};
