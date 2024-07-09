import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../reducers/authentificationSlice.js";

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user) || {};
    const { isAuthenticated } = user;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginAsync({ email, password }));
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="userName">Username</label
                        ><input type="email" id="userName" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="on" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" value={password} autoComplete="on" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button className="sign-in-button" onClick={handleLogin} type="submit">Sign in</button>
                    {isAuthenticated && <p>You are logged in!</p>}
                </form>
            </section>
        </main>
    );
}

export default SignInPage;