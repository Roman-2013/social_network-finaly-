import React from 'react';
import s from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import {AppRootStateType} from './state/reduxStore';
import {DialogsActionType} from './state/dialogsReducer';
import {ProfileActionType} from './state/profileReducer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavBarContainer} from './components/Navbar/NavBarContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderAPIContainer} from './components/Header/HeaderContainer';
import Login from './components/Login/login';

export type StatePropsType = {
    state: AppRootStateType
    dispatch: (action: DialogsActionType | ProfileActionType) => void
}


export const App = () => {


    return (
        <div className={s.appWrapper}>
            <HeaderAPIContainer/>
            <NavBarContainer/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path={'/'} element={<DialogsContainer/>}/>
                    <Route path={'/message/*'} element={<DialogsContainer/>}/>
                    <Route path={'/profile/:id?'} element={<ProfileContainer/>}/>
                    <Route path={'/users/*'} element={<UsersContainer/>}/>

                    <Route path={'/login'} element={<Login/>}/>

                </Routes>

            </div>
        </div>
    );
}


