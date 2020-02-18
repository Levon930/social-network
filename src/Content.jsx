import React from 'react';
import User from './User';
import classes from'./Content.module.css'
import UserData from './UserData';
const Content = () => {
return(
    <main className = {classes.contents}>
        <img src='https://cameralabs.org/media/lab15/post/03-15/22/krasivye-goroda-Afriki_1.jpg' className = {classes.photo}/>
        <div className = {classes.userProp}>
        <User/>
        <UserData/>
        </div>
    </main>
)
}
export default Content;