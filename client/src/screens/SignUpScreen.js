import React, {useState, useRef} from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {

    // const [screen, setScreen] = useState(true);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => alert(error.message))
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => alert(error.message));
    }
    return (
        <div className="signUpScreen">
                <form>
                    <div className="flex">
                        <h1 className="txt-left mtb-20">Sign In</h1>
                    </div>
                    <input ref={emailRef} className="mtb-5 white" placeholder="Email Address" type="email" /> 
                    <input ref={passwordRef} className="mtb-5 white" placeholder="Password" type="password" /> 
                    <button className="mtb-20 signUp-submit pointer"type="submit" onClick={signIn}>Sign In</button>
                    <div className="flex align-center">
                        <input className="mr-5" type="checkbox" value="remember" />
                        <label className="checkbox-label" >Remember me</label>
                    </div>

                    <span className="txt-left mtb-30 gray">New to Getflix? <span className="signUpNow pointer" onClick={register}> Sign Up now</span></span>
                </form>
        </div>
    )
}

export default SignUpScreen
