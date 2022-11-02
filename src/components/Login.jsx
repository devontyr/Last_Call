// import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script';
import React, { useEffect, useCallback, useRef, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function Login(props) {
    const childRef = useRef();
    const [childState, setChildState] = useState(0);

    function handleChange(e) {
        // console.log()
        props.setName(e);
    }
    return (
        <div>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded.name);
                    handleChange(decoded.name);
                    // props.setSignedIn(true)
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </div>
    );
}

export default Login;
