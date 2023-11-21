import {store} from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {PostPropsType} from './components/Profile/MyPosts/Posts/Post';
import {DialogsItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from './components/Dialogs/Message/Message';
import {NavBarPropsPage} from './components/Navbar/NavBar';


export type StateType = {
    profilePage: { postData: PostPropsType[], newPostText: string }
    dialogsPage: { dialogsData: DialogsItemPropsType[], messagesData: MessagePropsType[], messageText: string }
    siteBar: NavBarPropsPage
}

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                dispatch={store.dispatch.bind(store)}
                state={state}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)