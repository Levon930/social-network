import React from 'react';
import classes from '../Content.module.css'
const UserData = () => {
    return(
        <div className = {classes.DaTa}>
            <h2>Lev Har</h2>
            <p>Date of birth: 26 Mart</p>
            <p>City: Sevan </p>
            <p>WebSite: <a>https://www.facebook.com/</a></p>
        </div>
    )
}
export default UserData;
