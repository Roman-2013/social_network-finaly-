import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/Navbar/NavBar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {PostPropsType} from './components/Profile/MyPosts/Posts/Post';
import {DialogsItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from './components/Dialogs/Message/Message';

export type AppPropsType = {
    postData?: PostPropsType[]
    messagesData?: MessagePropsType[]
    dialogsData?: DialogsItemPropsType[]
}
export const App: React.FC<AppPropsType> = ({postData,messagesData,dialogsData}) => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path={'/'} element={<Profile postData={postData}/>}/>
                    <Route path={'/message/*'} element={<Dialogs
                        messagesData={messagesData}
                        dialogsData={dialogsData}
                    />}/>
                    <Route path={'/profile/*'} element={<Profile postData={postData}/>}/>

                </Routes>

            </div>
        </div>
    );
}
