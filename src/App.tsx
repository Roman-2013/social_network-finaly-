import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/Navbar/NavBar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {StateType} from './render';

export type StatePropsType = {
    state: StateType
    addPost:(postMessage:string|undefined)=>void
}


export const App: React.FC<StatePropsType> = ({state,addPost}) => {
    const {profilePage, dialogsPage, siteBar} = state
    const {postData} = profilePage
    const {dialogsData, messagesData} = dialogsPage
    const {friendsData} = siteBar

    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar friendsData={friendsData}/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path={'/'} element={<Profile addPost={addPost} postData={postData}/>}/>
                    <Route path={'/message/*'} element={<Dialogs
                        messagesData={messagesData}
                        dialogsData={dialogsData}
                    />}/>
                    <Route path={'/profile/*'} element={<Profile addPost={addPost} postData={postData}/>}/>

                </Routes>

            </div>
        </div>
    );
}
