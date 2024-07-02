import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./Image";

function NavBarLinks({ navClassName, navDirection, navImgClassName, navImgSrc,navImgAlt, navIcon, navTxtContent }) {
    return (
        <NavLink className={navClassName} to={navDirection}>
            <Image imgClassName={navImgClassName} imgSrc={navImgSrc} imgAlt={navImgAlt} /> 
            <i className={navIcon}></i>
            <p>{navTxtContent}</p>
        </NavLink>
    )
}

export default NavBarLinks;