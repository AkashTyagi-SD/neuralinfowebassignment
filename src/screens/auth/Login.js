import React,{Fragment} from 'react'
import {useHistory} from 'react-router-dom';
function Login() {
    const history=useHistory();
    return (
        <Fragment>
            <h1>Login Page</h1>
            <button onClick={()=>{history.push("/home")}}>Login</button>
        </Fragment>
    )
}

export default Login
