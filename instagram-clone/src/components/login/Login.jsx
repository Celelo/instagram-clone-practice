import React, { useState } from "react";
import style from './Login.module.css';
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

export const Login = ({ setIsRegister, setIsLoggeding }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [typePassword, setTypePasssword] = useState('password');

    const user = {
        usuario: 'celeste',
        contraseña: 'luci123'
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const datos = {
            usuario: userName,
            contraseña: password
        };

        // Verificación de usuario
        if (datos.usuario === user.usuario && datos.contraseña === user.contraseña) {
            setIsLoggeding(true);
        } else {
            alert('Los datos ingresados no son correctos');
        }
    };

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmitForm}>
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

                <input type="submit" value='Iniciar sesión' />
            </form>

            <p className={style.register_legend}>
                ¿Aún no tienes cuenta?
                <a
                    href="#"
                    className={style.register_btn}
                    onClick={(e) => {
                        e.preventDefault();
                        setIsRegister(false);
                    }}>
                    Registrarse
                </a>
            </p>
        </div>
    );
};
