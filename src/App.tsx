import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {NavBar} from './components/NavBar';
import {Profile} from './components/Profile';

export const App = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}
