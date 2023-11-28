import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {PostPropsType} from './components/Profile/MyPosts/Posts/Post';
import {DialogsItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from './components/Dialogs/Message/Message';
import {NavBarPropsPage} from './components/Navbar/NavBar';
import {AppRootStateType, store} from './state/reduxStore';


export type StateType = {
    profilePage: { postData: PostPropsType[], newPostText: string }
    dialogsPage: { dialogsData: DialogsItemPropsType[], messagesData: MessagePropsType[], messageText: string }
    siteBar: NavBarPropsPage
}

export const rerenderEntireTree = (state: AppRootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state} dispatch={store.dispatch}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(()=>{
    rerenderEntireTree(store.getState())
})