import React from 'react';
import classes from './Wall.module.css'

const Wall = () => {
    return(
        <div className = {classes.wallIm}>
           <img src = 'https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg'></img>
           <p>posts posts</p>
           <div>like</div>
            
        </div>
    )
}
export default Wall;