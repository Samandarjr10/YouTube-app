import React from "react";
import "./Login.scss"

import { Context } from "../../Context/Authenticated"

import Input from "@mui/material/Input"

function Login() {
    const { setToken } = React.useContext(Context);

    const handleSubmit = evt => {
        evt.preventDefault();

        const {user_email, user_password} = evt.target.elements;

        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(
                {
                    email: user_email.value.trim(),
                    password: user_password.value.trim()
                })
        }).then(response => response.json())
        .then(data => setToken(data?.token))
    }

    return <div className="pt-3 ps-3">
        <form className="text-start" method="post" onSubmit={handleSubmit}>
            <Input fullWidth="true" color="info" type="email" name="user_email" defaultValue="eve.holt@reqres.in"/>
            <Input fullWidth="true" type="password" color="info" name="user_password" defaultValue="cityslicka"/>
            <button className="btn btn-outline-primary">Log In</button>
        </form>
    </div>
}

export default Login