import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {NavBar, NavBarPropsPage} from './components/Navbar/NavBar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {PostPropsType} from './components/Profile/MyPosts/Posts/Post';
import {DialogsItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from './components/Dialogs/Message/Message';

type StatePropsType = {
    state: StateLocalType
    addPost:(postMessage:string|undefined)=>void
}
type StateLocalType = {
    profilePage: { postData: PostPropsType[] }
    dialogsPage: { dialogsData: DialogsItemPropsType[], messagesData: MessagePropsType[] }
    siteBar: NavBarPropsPage
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
