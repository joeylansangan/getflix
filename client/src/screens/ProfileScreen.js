import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import Nav from '../components/Nav/Nav';
import './ProfileScreen.css';
import { auth } from '../firebase';
import Plans from '../components/Plans/Plans';

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
                        <Plans/>
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
    )
}

export default ProfileScreen
