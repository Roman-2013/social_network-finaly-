import React from 'react';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileAPI} from '../../state/profileReducer';
import {Preloader} from '../../common/Preloader/Preloader';



export const Profile:React.FC<{ profile:  null| ProfileAPI }> = ({profile}) => {
    return (
        <div>
            {
                !profile
                    ? <Preloader/>
                    :  <ProfileInfo profile={profile}/>
            }

            <MyPostsContainer/>
        </div>
    );
};

