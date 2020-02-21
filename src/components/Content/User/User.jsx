import React from 'react';
import classes from '../Content.module.css'
import UserData from './UserData';
const User = () => {
    return(
        <div className = {classes.userProp}>
            <img src = 'https://img.faceyourmanga.com/mangatars/1/873/1873552/large_1751979.png' class = {classes.avatar}/>
            <UserData/>
        </div>
    )
}
export default User;