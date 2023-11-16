import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Posts/Post';

export type ProfilePropsType={
    addPost?:(postMessage:string|undefined)=>void
    postData?: PostPropsType[]
}

export const Profile:React.FC<ProfilePropsType> = ({postData,addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={addPost} postData={postData}/>
        </div>
    );
};

