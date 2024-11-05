import React from 'react';
import './perfil.css';

export const Perfil = ({ type, seen, userName, perfilePic }) => {
    return (
        <div className={`perfil_contenedor ${type}`}>
            <div className="perfil_img-contenedor" style={{ borderColor: seen ? 'gray' : 'violet', borderWidth: '4px', borderStyle: 'solid' }}>
                <img src={perfilePic} alt="Perfil" className="perfil_img" />
            </div>
            <p className="perfil_nombre_usuario">{userName}</p>
        </div>
    );
};
