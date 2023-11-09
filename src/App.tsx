import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header';
import {NavBar} from './components/NavBar';
import {Profile} from './components/Profile';

export const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}
