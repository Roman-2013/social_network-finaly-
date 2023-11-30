import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {AppRootStateType} from './state/reduxStore';
import {DialogsActionType} from './state/dialogsReducer';
import {ProfileActionType} from './state/profileReducer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavBarContainer} from './components/Navbar/NavBarContainer';

export type StatePropsType = {
    state: AppRootStateType
    dispatch: (action: DialogsActionType | ProfileActionType) => void
}


export const App = () => {

    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBarContainer />
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path={'/'} element={<Profile/>}/>
                    <Route path={'/message/*'} element={<DialogsContainer/>}/>
                    <Route path={'/profile/*'} element={<Profile/>}/>

                </Routes>

            </div>
        </div>
    );
}
