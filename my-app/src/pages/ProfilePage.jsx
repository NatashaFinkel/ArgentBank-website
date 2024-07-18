import React from "react";
import Button from "../components/Button";
import Account from "../components/Account";
import Header from "../components/Header";

function ProfilePage({ userFirstName, userLastName, checkBalance, savingsBalance, creditCardBalance }) {

    userFirstName = "Luke"
    userLastName = "Skywalker";

    checkBalance = "2,082.79";
    savingsBalance = "10,928.42";
    creditCardBalance = "184.30";

    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1 id="user-name">Welcome back<br />{userFirstName + userLastName}</h1>
                    <Button btnClassName="edit-button" btnTxt="Edit Name" />
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account title="Argent Bank Checking (x8349)" amount={checkBalance} description="Available Balance" id="check-balance" />
                <Account title="Argent Bank Savings (x6712)" amount={savingsBalance} description="Available Balance" id="savings-balance" />
                <Account title="Argent Bank Credit Card (x8349)" amount={creditCardBalance} description="Current Balance" id="credit-card-balance" />
            </main>
        </div>
    )
}

export default ProfilePage;