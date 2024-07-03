import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./Image";

function NavBarLinks({ navClassName, navDirection, navPId, navImgClassName, navImgSrc,navImgAlt, navIcon }) {
    return (
        <NavLink className={navClassName} to={navDirection}>
            <Image imgClassName={navImgClassName} imgSrc={navImgSrc} imgAlt={navImgAlt} /> 
            <i className={navIcon}></i>
            <p id={navPId}></p>
        </NavLink>
    )
}

export default NavBarLinks;