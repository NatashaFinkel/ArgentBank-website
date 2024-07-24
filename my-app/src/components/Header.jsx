import React from "react";
import { useDispatch, useSelector } from "react-redux";
import headerImg from "../img/argentBankLogo.png";
import NavBarLinks from "./NavBarLinks";
import { logout } from "../Redux/reducers/authenticationSlice.js";

function Header() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authentication.token);
    const firstName = useSelector((state) => state.profile.name.firstName);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="main-nav">
            <NavBarLinks navClassName="main-nav-logo" navDirection="/" navImgClassName="main-nav-logo-image" navImgSrc={headerImg} navImgAlt="Argent Bank Logo" />
            <div className="user-name-div">
                {token ? (
                    <>
                        <NavBarLinks navClassName="main-nav-item"
                            navDirection="/sign-in" navId="anonymous-user" navIcon="fa fa-user-circle nav-user-icon" navPId="userNameAndIcon" Navtxt={firstName} />

                        <NavBarLinks navClassName="main-nav-item signOut-btn"
                            navDirection="/sign-in" navIcon="fa fa-sign-out signOut-icon" navId="signOut-btn" Navtxt="Sign Out" navOnClick={handleLogout} />
                    </>
                ) : (
                    <NavBarLinks navClassName="main-nav-item"
                        navDirection="/sign-in" navId="anonymous-user" navIcon="fa fa-user-circle nav-user-icon" navPId="userNameAndIcon" Navtxt="sign in" />
                )}
            </div>
        </nav >
    );
};

export default Header;