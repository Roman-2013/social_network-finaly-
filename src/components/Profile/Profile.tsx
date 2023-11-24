import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Posts/Post';
import {ActionType} from '../../state/state';

export type ProfilePropsType={
    postData: PostPropsType[]
    newPostText:string
    dispatch:(action:ActionType)=>void
}

export const Profile:React.FC<ProfilePropsType> = ({dispatch,newPostText,postData}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={dispatch}  newPostText={newPostText}  postData={postData}/>
        </div>
    );
};

