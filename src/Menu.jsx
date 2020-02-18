import React from 'react';
import classes from "./Menu.module.css"
const Menu = () => {
    return(
        <ul className = {classes.navBar}>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li className = {classes.settings}>Settings</li>
        </ul>
    )
}
export default Menu;
