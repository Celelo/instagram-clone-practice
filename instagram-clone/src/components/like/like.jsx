
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Like = ({ meGusta, onClick, contador }) => {
    return (
        <>
            <FontAwesomeIcon
                icon={faHeart}
                style={{ color: meGusta ? 'red' : 'gray' }}
                onClick={onClick}
            />
            <span>{contador}</span>
        </>
    );
};
