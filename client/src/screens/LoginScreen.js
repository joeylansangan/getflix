import React, { useState } from 'react'
import { AiOutlineRight } from "react-icons/ai";

import './LoginScreen.css'

import SignUpScreen from './SignUpScreen'

function LoginScreen() {

    const [signIn, setSignIn] = useState(false)

    return (
        <div className="loginScreen">
            <div className="loginScreen-bg flex align-center justify-center">
                <div className="loginScreen-nav flex aling-center s-between">
                    <img 
                        className="loginScreen-logo"
                        src="./getflix.png" 
                        alt="netflix"
                        />
                    <button onClick={() => setSignIn(true)}className="loginScreen-button"> Sign In
                    </button>
                </div>
                <div className="loginScreen-content flex flex-column align-center justify-center">
                    {signIn ? (<SignUpScreen /> ) : (
                        <>
                            <h1 className="mtb-20 txt-center">Unlimited movies, TV shows, and more.</h1>
                            <h2 className="mtb-20 txt-center">Watch anywhere. Cancel anytime.</h2>
                            <h3 className="mtb-20 txt-center">Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen-input">
                                <form className="flex align-center justify-center">
                                    <input className="loginScreen-inputBox" type="email" placeholder="Email Address" />
                                    <button 
                                        onClick={() => setSignIn(true)}
                                        className="loginScreen-signin flex"
                                    >
                                    GET STARTED <AiOutlineRight className="ml-10"/></button>
                                </form>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default LoginScreen
