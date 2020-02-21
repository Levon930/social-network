import React from 'react';
import User from './User/User';
import classes from'./Content.module.css';
import Posts from './Posts/Post';
import Wall from './User/Wall/Wall';



const Content = () => {
return(
    <main className = {classes.contents}>
        <img src='https://cameralabs.org/media/lab15/post/03-15/22/krasivye-goroda-Afriki_1.jpg' className = {classes.photo}/>
        <div className = {classes.userProp}>
        <User/>
        </div>
        <Posts/>
       <Wall/>
       <Wall/>
       <Wall/>
       <Wall/>
       <Wall/>
       <Wall/>
        
    </main>
)
}
export default Content;