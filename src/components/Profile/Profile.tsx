import React from 'react';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileAPI} from '../../state/profileReducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {useAppDispatch} from '../../state/reduxStore';
import {useDispatch} from 'react-redux';



export const Profile:React.FC<{updateProfileStatusTC:(status:string)=>void, status:string,profile:  null| ProfileAPI }> = ({profile,status,updateProfileStatusTC}) => {

    return (
        <div>
            {
                !profile
                    ? <Preloader/>
                    :  <ProfileInfo updateProfileStatusTC={updateProfileStatusTC} status={status} profile={profile}/>
            }

            <MyPostsContainer/>
        </div>
    );
};


