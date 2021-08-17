import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { AiFillCaretDown} from "react-icons/ai";

import './Nav.css';

function Nav(){

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return(
        <div className={`nav ${show && "nav-black"}`}>
            <div className="nav-contents flex s-between align-center">
                <div className="flex align-center">
                    <img 
                        onClick={() => history.push("/")}
                        className='nav-logo mr-30'
                        src="./getflix.png" 
                        alt="netflix"
                    />
                    <a href="/" className="nav-browse mr-20 flex align-end s-between">Browse<AiFillCaretDown className="ml-10"/></a>
                   
                </div>
                <img 
                    onClick={() => history.push("/profile")}
                    className='nav-avatar'
                    src="https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06" 
                    alt="avatar"
                    />
            </div>

            
        </div>
    )
}

export default Nav;