import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {logout} from '../../features/userSlice'

import './Subscribe.css'

function Subscribe() {
    
    const dispatch = useDispatch();

    function signOut(){
        dispatch(logout())
    }

    const contentArray = ["No commitments, cancel anytime.", "Everything on Netflix for one low price.", "Unlimited viewing on all your devices.", "new string"]

    return (
        <div className="subscribeScreen flex justify-center">
                <div className="subscribeScreen-nav flex aling-center s-between">
                    <img 
                        className="loginScreen-logo"
                        src="./getflix.png" 
                        alt="netflix"
                        />
                    <button onClick={() => signOut()}className="loginScreen-button"> Sign Out
                    </button>
                </div>
                <div className="subscribe-content flex flex-column align-center justify-center">
                    <div className="mtb-30 flex flex-column align-center justify-center">
                        <h6>You do not have a subscription</h6>
                        <h2>Choose your plan.</h2>
                    </div>
                   
                    <div className="mtb-20">
                        {contentArray.map(content => (
                            <div className="flex" key={content[0]}>                        
                                <svg className="mr-10" fill="#008e8e"><path d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path></svg> 
                                <span>{content}</span>
                            </div>
                        ))}
                    </div>
                <Link className="mtb-30 subscribe-link" to='/profile'><button >Go to Profile</button></Link>
                </div>
        </div>
    )
}

export default Subscribe
