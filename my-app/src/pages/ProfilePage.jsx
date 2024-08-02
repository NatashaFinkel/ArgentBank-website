import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Account from "../components/Account";
import { editedName, fetchProfile } from "../Redux/reducers/profileSlice";
import { useState } from "react";
import { cancelEditedName, saveNewUserName } from "../Redux/reducers/profileSlice";

function ProfilePage() {
    const dispatch = useDispatch();
    const isBeingEdited = useSelector((state) => state.profile.isBeingEdited);
    const name = useSelector((state) => state.profile.name);
    const token = useSelector((state) => state.authentication.token);
    const firstName = useSelector((state) => state.profile.name.firstName);
    const lastName = useSelector((state) => state.profile.name.lastName);
    const userId = useSelector((state) => state.profile.name.id);
    const [newUserName, setNewUserName] = useState('');

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile(token));
        }
    }, [dispatch, token]);

    const handleEditBtn = () => {
        dispatch(editedName());
    };

    const handleNameSave = () => {
        dispatch(saveNewUserName({ userName: newUserName, userId: userId, token: token }))
            .then(() => {
                dispatch(fetchProfile(token));
            })
            .then(() => {
                dispatch(cancelEditedName());
            })
            .catch((error) => {
                console.error('Failed to save new userName:', error);
            });
    };

    const handleCancelNameClick = () => {
        dispatch(cancelEditedName());
    };

    return (
        <main className="main bg-dark">
            <div className="header">

                {isBeingEdited ? (
                    <div className="edit-name-form">
                        <p className="edit-name-form-title">Edit user info</p>
                        <div>
                            <label htmlFor="user-name-input">User name:</label>
                            <input
                                type="text"
                                className="edit-name-imput"
                                id="user-name-input"
                                name="userName"
                                autoComplete="off"
                                value={newUserName}
                                onChange={(e) => setNewUserName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="first-name-input">First name:</label>
                            <input
                                type="text"
                                className="edit-name-imput"
                                id="first-name-input"
                                name="firstName"
                                value={firstName}
                                disabled
                            />
                        </div>

                        <div>
                            <label htmlFor="last-name-input">Last name:</label>
                            <input
                                type="text"
                                className="edit-name-imput"
                                id="last-name-input"
                                name="lastName"
                                value={lastName}
                                disabled
                            />
                        </div>

                        <div className="button-group">
                            <button className="save-or-cancel-button" onClick={handleNameSave}>
                                Save
                            </button>

                            <button className="save-or-cancel-button"
                                onClick={handleCancelNameClick}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>Welcome back <br />{name.firstName} {name.lastName}!</h1>
                        <Button btnClassName="edit-button" btnTxt="Edit Name" btnOnClick={handleEditBtn} />
                    </div>
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