import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import './Login.css';



const Login = () => {

    const [isTrue, setIsTrue] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { error, handleGoogleLogin, createUserAccount, loginUsingEmailPassword, handleError } = useAuth();

    // console.log(user);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleRegister = () => {
        if (!name) {
            handleError("Please, provide your name");
            return;
        }
        if (!email) {
            handleError("Please, provide your email");
            return;
        }
        if (!password) {
            handleError("Please, provide your password");
            return;
        }
        else {
            createUserAccount(name, email, password);
        }

    }

    const handleLogin = () => {
        loginUsingEmailPassword(email, password);
    }



    return (
        <div>
            <div className="login-container py-5 text-light text-center">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="login-form">

                            {/* toggle login, register form */}

                            {
                                isTrue ? (
                                    <div>
                                        <h2 className="">Login Here</h2>
                                        <form className="pt-3">
                                            <input onBlur={handleEmail} className="rounded" type="email" name="" id="" placeholder="Email" required />
                                            <br />
                                            <input onBlur={handlePassword} className="rounded" type="password" name="" id="" placeholder="Password" required />
                                            <br />
                                        </form>

                                        {
                                            error && <p className="text-danger">{error}</p>
                                        }
                                        <button onClick={() => handleLogin()} className="login-btn mb-3 btn btn-light login-register-btn">login</button>
                                        <p ><small>Don't have account? <span style={{ cursor: 'pointer' }} className="text-primary" onClick={() => { setIsTrue(false) }}>Click Here</span></small> </p>

                                    </div>
                                ) : (
                                    <div>
                                        <h2 className="">Register Here</h2>
                                        <form className="pt-3">
                                            <input onBlur={handleName} className="rounded" type="text" placeholder="Name" required />
                                            <br />
                                            <input onBlur={handleEmail} className="rounded" type="email" name="" id="" placeholder="Email" required />
                                            <br />
                                            <input onBlur={handlePassword} className="rounded" type="password" name="" id="" placeholder="Password" required />
                                            <br />
                                        </form>
                                        {
                                            error && <p className="text-danger">{error}</p>
                                        }
                                        <button onClick={() => handleRegister()} className="login-btn my-3 btn btn-light login-register-btn">Register</button>
                                        <p ><small>Already have an account? <span style={{ cursor: 'pointer' }} className="text-primary" onClick={() => { setIsTrue(true) }}>Click Here</span></small> </p>

                                    </div>
                                )
                            }

                            <div className="hr-tag">
                                <hr />
                                <p className="or">OR</p>
                            </div>

                            <p>Login with</p>
                            <div>
                                <button className=" btn btn-primary" onClick={handleGoogleLogin} style={{ color: 'white' }}>Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;