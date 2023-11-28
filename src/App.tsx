import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/Navbar/NavBar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {AppRootStateType} from './state/reduxStore';
import {DialogsActionType} from './state/dialogsReducer';
import {ProfileActionType} from './state/profileReducer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

export type StatePropsType = {
    state: AppRootStateType
    dispatch: (action: DialogsActionType | ProfileActionType) => void
}


export const App: React.FC<StatePropsType> = ({state, dispatch}) => {
    const {Dialog, SiteBar, ProfilePage} = state
    const {postData, newPostText} = ProfilePage
    const {dialogsData, messagesData, messageText} = Dialog
    const {friendsData} = SiteBar
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar friendsData={friendsData}/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path={'/'}
                           element={<Profile newPostText={newPostText} dispatch={dispatch} postData={postData}/>}/>
                    <Route path={'/message/*'} element={<DialogsContainer
                        messagesData={messagesData}
                        dialogsData={dialogsData}
                        messageText={messageText}
                        dispatch={dispatch}
                    />}/>
                    <Route path={'/profile/*'}
                           element={<Profile dispatch={dispatch} newPostText={newPostText} postData={postData}/>}/>

                </Routes>

            </div>
        </div>
    );
}
