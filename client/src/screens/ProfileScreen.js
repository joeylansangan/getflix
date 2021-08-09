import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import Nav from '../components/Nav/Nav';
import './ProfileScreen.css';
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen flex align-center justify-center">
            <Nav /> 
            <div className="profileScreen-body flex flex-column align-center justify-center">
                <h1>Edit Profile</h1>
                <div className="profileScreen-info flex tb-20 align-center">
                    <img 
                        className="profileScreen-avatar mr-20"
                        src="https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"
                        alt="avatar"
                    />
                    <div className="profileScreen-details">
                        <h3 className="profileScreen-user">{user.email}</h3>
                        <h2 className="mb-20">Plans (Current Plan: Premium)</h2>
                        <div className="profileScreen-plans tb-20">
                            <span >Renewal date: 09/21/2021 </span>
                            <div className="profileScreen-plan">
                                <div className="flex flex-column">
                                    <span>Netflix Standard</span>
                                    <span>1080p</span>
                                </div>
                                <button className="plan-subscribe">Subscribe</button>
                            </div>
                            <div className="profileScreen-plan">
                                <div className="flex flex-column">
                                    <span>Netflix Basic</span>
                                    <span>480p</span>
                                </div>
                                <button className="plan-subscribe">Subscribe</button>
                            </div>
                            <div className="profileScreen-plan">
                                <div className="flex flex-column">
                                    <span>Netflix Premium</span>
                                    <span>4k+HDR</span>
                                </div>
                                <button className="plan-current bold">Current Package</button>
                            </div>
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen-signOut mt-10 bold"
                            >
                            Sign Out
                            </button>
                        </div>
                    </div>
                </div>
              

            </div>
        </div>
    )
}

export default ProfileScreen
