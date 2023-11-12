import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink className={({isActive})=>isActive?s.active:s.item} to={'/profile'}>Profile</NavLink></div>
            <div><NavLink className={({isActive})=>isActive?s.active:s.item} to={'/message'}>Messages</NavLink></div>
            <div><NavLink className={({isActive})=>isActive?s.active:s.item} to={'/news'}>News</NavLink></div>
            <div><NavLink className={({isActive})=>isActive?s.active:s.item} to={'/music'}>Music</NavLink></div>
            <div><NavLink className={({isActive})=>isActive?s.active:s.item} to={'/settings'}>Settings</NavLink></div>
        </nav>
    );
};

