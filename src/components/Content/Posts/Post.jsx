import React from 'react';
import classes from './Posts.module.css'
const Posts = () => {
    return(
        <div className = {classes.posts}>
            <p >My posts</p >
            
            <textarea placeholder='your post' className = {classes.yourPost}/>

           
            <input type = 'button' value = 'Send' className = {classes.send}/>
            
        </div>
    )
   
}
export default Posts;