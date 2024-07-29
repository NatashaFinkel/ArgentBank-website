import {React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../Redux/reducers/profileSlice.js";
import headerImg from "../img/argentBankLogo.png";
import NavBarLinks from "./NavBarLinks";
import { logout } from "../Redux/reducers/authenticationSlice.js";

function Header() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authentication.token);
    const firstName = useSelector((state) => state.profile.name.firstName);

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile(token));
        }
    }, [dispatch, token]);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {token ? (
                <>
                    <nav className="main-nav">
                        <NavBarLinks navClassName="main-nav-logo" navDirection="/" navImgClassName="main-nav-logo-image" navImgSrc={headerImg} navImgAlt="Argent Bank Logo" />
                        <div className="user-name-div">

                            <NavBarLinks navClassName="main-nav-item"
                                navId="anonymous-user" navIcon="fa fa-user-circle nav-user-icon" navPId="userNameAndIcon" Navtxt={firstName} />

                            <NavBarLinks navClassName="main-nav-item signOut-btn"
                                navDirection="/" navIcon="fa fa-sign-out signOut-icon" navId="signOut-btn" Navtxt="Sign Out" navOnClick={handleLogout} />
                        </div>
                    </nav>
                </>
            ) : (

                <nav className="main-nav">
                    <NavBarLinks navClassName="main-nav-logo" navDirection="/" navImgClassName="main-nav-logo-image" navImgSrc={headerImg} navImgAlt="Argent Bank Logo" />

                    <div className="user-name-div">
                        <NavBarLinks navClassName="main-nav-item"
                            navDirection="/login" navId="anonymous-user" navIcon="fa fa-user-circle nav-user-icon" navPId="userNameAndIcon" Navtxt="sign in" />
                    </div>
                </nav>
            )}
        </div>
    );

}

export default Header;