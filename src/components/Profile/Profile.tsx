import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Posts/Post';
import {AnyAction} from 'redux';

export type ProfilePropsType={
    postData: PostPropsType[]
    newPostText:string
    dispatch:(action:AnyAction)=>void
}

export const Profile:React.FC<ProfilePropsType> = ({dispatch,newPostText,postData}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={dispatch}  newPostText={newPostText}  postData={postData}/>
        </div>
    );
};

