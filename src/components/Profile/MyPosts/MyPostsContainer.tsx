import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';
import {AppStoreType} from '../../../state/reduxStore';
import {StoreContext} from '../../../StoreContext';


export const MyPostsContainer = () => {



    return (
        <StoreContext.Consumer>
            {
            (store: AppStoreType) => {

                const addPostHandler = () => {
                    store.dispatch(addPostAC())
                    store.dispatch(updateNewPostTextAC(''))

                }

                const onChangeHandler = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return <MyPosts
                    postData={store.getState().ProfilePage.postData}
                    newPostText={store.getState().ProfilePage.newPostText}
                    addPostAC={addPostHandler}
                    updateNewPostText={(text) => onChangeHandler(text)}/>
            }


        }
        </StoreContext.Consumer>
    );
};

