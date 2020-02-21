import React from 'react';
import classes from "./Menu.module.css"
const Menu = () => {
    return(
        <div className = {classes.navBar}>
        <ul className ={classes.allMenu}>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li className = {classes.settings}>Settings</li>
        </ul>
        </div>
    )
}
export default Menu;
