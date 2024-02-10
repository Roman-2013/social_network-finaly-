import React from 'react';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileAPI} from '../../state/profileReducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {useAppDispatch} from '../../state/reduxStore';
import {useDispatch} from 'react-redux';


export const Profile: React.FC<{
    isOwner:boolean,
    updateProfileStatusTC: (status: string) => void,
    status: string,
    profile: null | ProfileAPI,
    savePhotoTC:(photo:any)=>void,
    photos:string,
    saveProfile:any
}> = ({profile,saveProfile, status, updateProfileStatusTC,isOwner,savePhotoTC,photos}) => {

    return (
        <div>
            {
                !profile
                    ? <Preloader/>
                    : <ProfileInfo saveProfile={saveProfile} photos={photos} savePhotoTC={savePhotoTC} isOwner={isOwner} updateProfileStatusTC={updateProfileStatusTC} status={status} profile={profile}/>
            }

            <MyPostsContainer/>
        </div>
    );
};


