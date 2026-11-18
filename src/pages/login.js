import React from "react";
import {useAuth} from "../auth/AuthProvider";


const LoginPage = () => {
    const {login} = useAuth();
    return (
        <>
            <button onClick={() => login()}>Log In</button>
        </>
    )
}

export default LoginPage;
