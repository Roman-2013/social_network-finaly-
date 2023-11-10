import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/Navbar/NavBar';
import {Profile} from './components/Profile/Profile';

export const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}
