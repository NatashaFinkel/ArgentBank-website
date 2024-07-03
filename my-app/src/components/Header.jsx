import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import headerImg from "../img/argentBankLogo.png";
import NavBarLinks from "./NavBarLinks";

function Header() {
    const location = useLocation();

    useEffect(() => {
        const userNameAndIcon = document.getElementById("userNameAndIcon");

        if (location.pathname === "/user") {
            userNameAndIcon.textContent = "Tony";
        } else {
            userNameAndIcon.textContent = "Sign in";
        }

    }, [location.pathname]);

    return (
        <nav className="main-nav">
            <NavBarLinks navClassName="main-nav-logo" navDirection="/" navImgClassName="main-nav-logo-image" navImgSrc={headerImg} navImgAlt="Argent Bank Logo" />
            <div>
                <NavBarLinks navClassName="main-nav-item"
                    navDirection="/sign-in" navIcon="fa fa-user-circle nav-user-icon" navPId="userNameAndIcon" />
            </div>
        </nav>
    )
}

export default Header;