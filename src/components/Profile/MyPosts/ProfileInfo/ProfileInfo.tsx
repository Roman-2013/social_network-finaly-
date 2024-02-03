import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileAPI} from '../../../../state/profileReducer';
import {ProfileStatusWithHooks} from '../../ProfileStatus/ProfileStatusWithHooks';


export const ProfileInfo: React.FC<{
    updateProfileStatusTC: (status: string) => void,
    status: string,
    profile: ProfileAPI,
    isOwner: boolean,
    savePhotoTC: (photo: any) => void,
    photos: string
}> = ({profile, status, updateProfileStatusTC, isOwner, savePhotoTC, photos}) => {

    const onMainPhoto = (value: any | null) => {
        savePhotoTC(value)

    }

    return (
        <>
            <div className={s.blockPicture}>
                <img
                    src="https://sun9-65.userapi.com/impg/c857736/v857736321/1034e2/DywLDwd6CeA.jpg?size=807x325&quality=96&sign=2d19ba00a905cdbe81732042935997de&type=album"
                    alt=""/>

            </div>
            <div className={s.description}>
                <div>{profile.aboutMe}</div>
                <div>{profile.fullName}</div>
                <div>
                    <img alt={'image'} src={photos}/>
                    {isOwner ||
                        <input onChange={(e) => onMainPhoto(e.target.files ? e.target.files[0] : '')} type="file"/>}
                    <ProfileStatusWithHooks updateProfileStatusTC={updateProfileStatusTC} status={status}/>
                </div>
            </div>
        </>
    );
};

