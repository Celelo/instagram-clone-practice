import React, { useState } from 'react';
import { Perfil } from "../perfil/Perfil.jsx"; // Importación correcta con letra mayúscula
import { Like } from "../like/like.jsx"; // Asegúrate de que la ruta es correcta
import gatito from '../../assets/gatito6.jpg';  // Imagen existente

export const Post = ({ type, seen, userName, profilPic }) => {
    const [meGusta, setMeGusta] = useState(false);
    const [contador, setContador] = useState(0);

    const handleLikeClick = () => {
        setMeGusta(!meGusta);
        setContador(meGusta ? contador - 1 : contador + 1);  // Maneja el contador de likes
    };

    return (
        <div className="post_container">
            <Perfil 
                type={type}  // Asegúrate de que las props son correctas
                seen={seen}
                userName={userName}
                perfilePic={profilPic}
            />
            <img src={gatito} alt="Post content" className="post_image" /> {/* Imagen existente */}
            <div className="post_interactions">
                <Like meGusta={meGusta} onClick={handleLikeClick} contador={contador} />
                <p>{userName}</p>
            </div>
        </div>
    );
};
