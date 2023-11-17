import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Posts/Post';

export type ProfilePropsType={
    addPost:()=>void
    postData: PostPropsType[]
    newPostText:string
    updateNewPostText:(newPost:string)=>void
}

export const Profile:React.FC<ProfilePropsType> = ({updateNewPostText,newPostText,postData,addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={updateNewPostText} newPostText={newPostText} addPost={addPost} postData={postData}/>
        </div>
    );
};

