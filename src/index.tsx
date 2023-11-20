import {state, subscribe} from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {PostPropsType} from './components/Profile/MyPosts/Posts/Post';
import {DialogsItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from './components/Dialogs/Message/Message';
import {NavBarPropsPage} from './components/Navbar/NavBar';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './state/state';


export type StateType = {
    profilePage: { postData: PostPropsType[], newPostText:string }
    dialogsPage: { dialogsData: DialogsItemPropsType[], messagesData: MessagePropsType[],messageText:string }
    siteBar: NavBarPropsPage
}

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                updateNewPostText={updateNewPostText}
                addPost={addPost}
                state={state}
                updateNewMessageText={updateNewMessageText}
                addMessage={addMessage}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}



rerenderEntireTree(state)

subscribe(rerenderEntireTree)