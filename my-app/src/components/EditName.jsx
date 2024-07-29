import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { cancelEditedName, saveNewUserName } from "../Redux/reducers/profileSlice";

const EditName = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authentication.token);
    const firstName = useSelector((state) => state.profile.name.firstName);
    const lastName = useSelector((state) => state.profile.name.lastName);

    const userId = useSelector((state) => state.profile.name.id);
    const [newUserName, setNewUserName] = useState('');

    const handleNameSave = () => {
        dispatch(saveNewUserName({ userName: newUserName, userId: userId, token: token }));
    };

    const handleCancelNameClick = () => {
        dispatch(cancelEditedName());
    };

    return (
        <div className="edit-name-form">
            <p className="edit-name-form-title">Edit user info</p>
            <div>
                <label htmlFor="user-name-input">User name:</label>
                <input
                    type="text"
                    className="edit-name-imput"
                    id="user-name-input"
                    name="userName"
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

                <button className="save-or-cancel-button" onClick={handleCancelNameClick}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditName;