import React from "react";
import headerImg from "../img/argentBankLogo.png";
import NavBarLinks from "./NavBarLinks";

function Header() {
    return (
        <nav className="main-nav">
            <NavBarLinks navClassName="main-nav-logo" navDirection="/" navImgClassName="main-nav-logo-image" navImgSrc={headerImg} navImgAlt="Argent Bank Logo" />
            <div>
                <NavBarLinks navClassName="main-nav-item" 
                navDirection="/sign-in" navIcon="fa fa-user-circle nav-user-icon" navTxtContent="Sign In" />
            </div>
        </nav>
    )
}

export default Header;