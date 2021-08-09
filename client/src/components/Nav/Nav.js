import React, { useEffect, useState } from 'react';
import { AiFillCaretDown} from "react-icons/ai";

import './Nav.css';

function Nav(){

    const [show, handleShow] = useState(false);
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
                        className='nav-logo mr-30'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        alt="netflix"
                    />
                    <a href="/" className="nav-browse mr-20 flex align-end s-between">Browse<AiFillCaretDown className="ml-10"/></a>
                   
                </div>
                <img 
                        className='nav-avatar'
                        src="https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg" 
                        alt="avatar"
                    />
            </div>

            
        </div>
    )
}

export default Nav;