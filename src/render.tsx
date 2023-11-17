import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {PostPropsType} from './components/Profile/MyPosts/Posts/Post';
import {DialogsItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from './components/Dialogs/Message/Message';
import {NavBarPropsPage} from './components/Navbar/NavBar';


export type StateType = {
    profilePage: { postData: PostPropsType[] }
    dialogsPage: { dialogsData: DialogsItemPropsType[], messagesData: MessagePropsType[] }
    siteBar: NavBarPropsPage
}

export const rerenderEntireTree = (state: StateType, addPost: (postMessage: string | undefined) => void) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} state={state}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

