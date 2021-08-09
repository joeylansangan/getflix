import React from 'react'
import './SignUpScreen.css';

function SignUpScreen() {

    const register = (e) => {
        e.preventDefault();
    }

    const signIn = (e) => {
        e.preventDefault();
    }
    return (
        <div className="signUpScreen">
            <form>
                {/* <img src="./screens.svg" alt="screens" width="60%"/> */}
                <h1 className="txt-left mtb-20">Sign In</h1>
                <input className="mtb-5"placeholder="Email Address" type="email" /> 
                <input className="mtb-5"placeholder="Password" type="email" /> 
                <button className="mtb-20 signUp-submit pointer"type="submit" onClick={signIn}>Sign In</button>
                <div className="flex align-center">
                    <input className="mr-5" type="checkbox" value="remember" />
                    <label className="checkbox-label" >Remember me</label>
                </div>

                <span className="txt-left mtb-30 gray">New to Netflix? <span className="signUpNow pointer" onClick={register}> Sign Up now.</span></span>
            </form>
        </div>
    )
}

export default SignUpScreen
