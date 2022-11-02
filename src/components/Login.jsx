import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script';
import React, {useEffect} from 'react';



function Login() {
    const handleLogin = async googleData => {
        const res = await fetch("/api/v1/auth/google", {
            method: "POST",
            body: JSON.stringify({
            token: googleData.tokenId
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json()
        // store returned user somehow
      }
    // useEffect(() => {
    // const initClient = () => {
    //         gapi.client.init({
    //         clientId: clientId,
    //         scope: ''
    //     });
    //     };
    // });


    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return (
    // <GoogleLogin
    //     clientId={clientId}
    //     buttonText="Sign in with Google"
    //     onSuccess={onSuccess}
    //     onFailure={onFailure}
    //     cookiePolicy={'single_host_origin'}
    //     isSignedIn={true}
    // />
    <div>
    <GoogleLogin
    clientId="596749184708-9paaqi0f7cqqqrd1tv1iht4kk6hb280b.apps.googleusercontent.com"
    buttonText="Log in with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
/>

</div>

    )
}

export default Login;