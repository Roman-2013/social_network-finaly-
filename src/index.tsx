import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {PostPropsType} from './components/Profile/MyPosts/Posts/Post';
import {DialogsItemPropsType} from './components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from './components/Dialogs/Message/Message';
import {NavBarPropsPage} from './components/Navbar/NavBar';
import {store} from './state/reduxStore';
import {Provider} from 'react-redux';


export type StateType = {
    profilePage: { postData: PostPropsType[], newPostText: string }
    dialogsPage: { dialogsData: DialogsItemPropsType[], messagesData: MessagePropsType[], messageText: string }
    siteBar: NavBarPropsPage
}
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
            <AppContainer/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );


