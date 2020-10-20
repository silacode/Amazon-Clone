import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from "../Firebase";

function Login(){
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) =>{
        event.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch(e => alert(e.message));

    }

    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth=>{
            history.push("/");
        })
        .catch(e=>alert(e.message));
    }

    

    return(
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
                    alt="Logo"
                />
            </Link>
            
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input name="email" onChange={event=>setEmail(event.target.value)} value={email} type="email"></input>
                    <h5>Password</h5>
                    <input onChange={event=>setPassword(event.target.value)} name="password" type="password"></input>
                    <button value={password} onClick={login} type="submit">Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className="regester" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;