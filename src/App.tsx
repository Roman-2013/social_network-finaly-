import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/Navbar/NavBar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {StateType} from './index';
import {ActionType} from './state/state';

export type StatePropsType = {
    state: StateType
    dispatch:(action:ActionType)=>void
}


export const App: React.FC<StatePropsType> = ({dispatch,state}) => {
    const {profilePage, dialogsPage, siteBar} = state
    const {postData,newPostText} = profilePage
    const {dialogsData, messagesData,messageText} = dialogsPage
    const {friendsData} = siteBar

    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar friendsData={friendsData}/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path={'/'} element={<Profile  newPostText={newPostText} dispatch={dispatch} postData={postData}/>}/>
                    <Route path={'/message/*'} element={<Dialogs
                        messagesData={messagesData}
                        dialogsData={dialogsData}
                        messageText={messageText}
                        dispatch={dispatch}
                    />}/>
                    <Route path={'/profile/*'} element={<Profile dispatch={dispatch} newPostText={newPostText} postData={postData}/>}/>

                </Routes>

            </div>
        </div>
    );
}
