import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/Navbar/NavBar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {StateType} from './index';

export type StatePropsType = {
    state: StateType
    addPost:()=>void
    updateNewPostText:(newPost:string)=>void
    updateNewMessageText:(newMessage:string)=>void
    addMessage:()=>void
}


export const App: React.FC<StatePropsType> = ({updateNewMessageText,addMessage,updateNewPostText,state,addPost}) => {
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
                    <Route path={'/'} element={<Profile updateNewPostText={updateNewPostText} newPostText={newPostText} addPost={addPost} postData={postData}/>}/>
                    <Route path={'/message/*'} element={<Dialogs
                        messagesData={messagesData}
                        dialogsData={dialogsData}
                        messageText={messageText}
                        updateNewMessageText={updateNewMessageText}
                        addMessage={addMessage}
                    />}/>
                    <Route path={'/profile/*'} element={<Profile updateNewPostText={updateNewPostText} newPostText={newPostText} addPost={addPost} postData={postData}/>}/>

                </Routes>

            </div>
        </div>
    );
}
