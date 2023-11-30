import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Posts/Post';
import {DialogsActionType} from '../../state/dialogsReducer';
import {ProfileActionType} from '../../state/profileReducer';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

export type ProfilePropsType={
    postData: PostPropsType[]
    newPostText:string
    dispatch:(action:DialogsActionType | ProfileActionType)=>void
}

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

