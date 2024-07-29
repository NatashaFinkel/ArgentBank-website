import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import EditName from "../components/EditName";
import Account from "../components/Account";
import { editedName, fetchProfile } from "../Redux/reducers/profileSlice";

function ProfilePage() {
    const dispatch = useDispatch();
    const isBeingEdited = useSelector((state) => state.profile.isBeingEdited);
    const name = useSelector((state) => state.profile.name);
    const token = useSelector((state) => state.authentication.token);

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile(token));
        }
    }, [dispatch, token]);

    const handleEditBtn = () => {
        dispatch(editedName());
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back <br />{name.firstName} {name.lastName}!</h1>
                {isBeingEdited ? (
                    <EditName />
                ) : (
                    <Button btnClassName="edit-button" btnTxt="Edit Name" btnOnClick={handleEditBtn} />
                )}
            </div>

            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    )
}

export default ProfilePage;

