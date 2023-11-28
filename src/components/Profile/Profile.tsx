import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Posts/Post';
import {DialogsActionType} from '../../state/dialogsReducer';
import {ProfileActionType} from '../../state/profileReducer';

export type ProfilePropsType={
    postData: PostPropsType[]
    newPostText:string
    dispatch:(action:DialogsActionType | ProfileActionType)=>void
}

export const Profile:React.FC<ProfilePropsType> = ({dispatch,newPostText,postData}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={dispatch}  newPostText={newPostText}  postData={postData}/>
        </div>
    );
};

