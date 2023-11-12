import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/Navbar/NavBar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';

export const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.appWrapperContent}>
                <Routes>
                   <Route path={'/'} element={<Profile/>}/>
                   <Route path={'/message/*'} element={<Dialogs/>}/>
                   <Route path={'/profile/*'} element={ <Profile/>}/>

                </Routes>

            </div>
        </div>
    );
}
