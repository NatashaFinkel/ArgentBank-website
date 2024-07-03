import React from "react";
import { useLocation } from "react-router-dom";
import headerImg from "../img/argentBankLogo.png";
import NavBarLinks from "./NavBarLinks";

function Header() {
    const location = useLocation();
    const locationPathName = location.pathname;

    console.log(locationPathName);
    return (
        <nav className="main-nav">
            <NavBarLinks navClassName="main-nav-logo" navDirection="/" navImgClassName="main-nav-logo-image" navImgSrc={headerImg} navImgAlt="Argent Bank Logo" />
            <div className="user-name-div">
                <NavBarLinks navClassName="main-nav-item"
                    navDirection="/sign-in" navId="anonymous-user" navIcon="fa fa-user-circle nav-user-icon" navPId="userNameAndIcon" Navtxt="Sign in" />

                <NavBarLinks navClassName="main-nav-item signOut-btn"
                    navDirection="/" navIcon="fa fa-sign-out signOut-icon" id="signOut-btn" Navtxt="Sign Out" />
            </div>
        </nav >
    )
}

export default Header;