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
            <input
                type="text"
                name="userName"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
            />

            <input
                type="text"
                name="firstName"
                value={firstName}
                disabled
            />
            <input
                type="text"
                name="lastName"
                value={lastName}
                disabled
            />

            <div className="button-group">
                <button className="save-button" onClick={handleNameSave}>
                    Save
                </button>

                <button className="cancel-button" onClick={handleCancelNameClick}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditName;