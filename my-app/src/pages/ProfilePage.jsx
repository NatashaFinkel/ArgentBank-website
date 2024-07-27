import { React, useEffect } from "react";
//import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../Redux/reducers/profileSlice";
import Button from "../components/Button";
import Account from "../components/Account";

function ProfilePage() {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.profile.name);
    const token = useSelector((state) => state.authentication.token);

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile(token));
        }
    }, [dispatch, token]);


    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back <br />{name.firstName} {name.lastName}!</h1>
                <Button btnClassName="edit-button" btnTxt="Edit Name" />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    )
}

export default ProfilePage;