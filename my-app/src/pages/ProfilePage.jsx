import React from "react";
import Button from "../components/Button";
import Account from "../components/Account";

function ProfilePage() {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
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