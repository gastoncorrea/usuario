import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Iconos = ({icon, css}) => {
    return (
       <FontAwesomeIcon icon={icon} className={css} />
    );
};

export default Iconos;