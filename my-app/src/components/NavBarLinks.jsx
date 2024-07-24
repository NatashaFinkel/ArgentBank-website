import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./Image";

function NavBarLinks({ navClassName, navId, navDirection, navImgClassName, navImgSrc, navImgAlt, navIcon, navPId, Navtxt, navOnClick }) {
    return (
        <NavLink className={navClassName} id={navId} to={navDirection} onClick= {navOnClick}
        >
            <Image imgClassName={navImgClassName} imgSrc={navImgSrc} imgAlt={navImgAlt} />
            <i className={navIcon}></i>
            <p id={navPId}>{Navtxt}</p>
        </NavLink>
    )
}


export default NavBarLinks;