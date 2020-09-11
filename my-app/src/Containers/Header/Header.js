import React from 'react';
import classes from './Header.module.scss'
import image from '../../images/logo192.png'


 const Header=()=>{
    return (
        <header className={classes.header}>
            <img  className={classes.image} src={image} alt="Logo"/>
        </header>
    )
}
export default Header;