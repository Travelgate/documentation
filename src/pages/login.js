import React from "react";
import {useAuth} from "../auth/AuthProvider";


const LoginPage = () => {
    const {login, loginState} = useAuth();
    return (
        <>
            <button onClick={() => login()} disabled={loginState === 'pending'}>Log In</button>
            {loginState === 'error' && <p role="alert">Sign in failed. Please try again.</p>}
        </>
    )
}

export default LoginPage;
