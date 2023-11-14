import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import {PostPropsType} from './MyPosts/Posts/Post';
import { AppPropsType } from '../../App';

export const Profile:React.FC<AppPropsType> = ({postData}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
};

