import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileAPI} from '../../../../state/profileReducer';
import {ProfileStatusWithHooks} from '../../ProfileStatus/ProfileStatusWithHooks';
import {FormProfileDataType, ProfileDataForm} from '../../ProfileDataForm/ProfileDataForm';
import {ProfileData} from '../../ProfileData/ProfileData';


export const ProfileInfo: React.FC<{
    updateProfileStatusTC: (status: string) => void,
    status: string,
    saveProfile: any,
    profile: ProfileAPI,
    isOwner: boolean,
    savePhotoTC: (photo: any) => void,
    photos: string
}> = ({saveProfile, profile, status, updateProfileStatusTC, isOwner, savePhotoTC, photos}) => {

    const [editMode, setEditMode] = useState(false)


    const onMainPhoto = (value: any | null) => {
        savePhotoTC(value)
    }
    const activateEditMoode = (value: boolean) => {
        setEditMode(value)
    }

    const onSubmit = (value: FormProfileDataType) => {
        saveProfile(value)
            .then(() => {
                setEditMode(false)
            })
    }


    return (
        <>
            <div className={s.blockPicture}>
                <img
                    src="https://sun9-65.userapi.com/impg/c857736/v857736321/1034e2/DywLDwd6CeA.jpg?size=807x325&quality=96&sign=2d19ba00a905cdbe81732042935997de&type=album"
                    alt="image"/>
            </div>
            {editMode
                ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                : <ProfileData activateEditMode={activateEditMoode} status={status} isOwner={isOwner}
                               onMainPhoto={onMainPhoto} profile={profile}
                               photos={photos} updateProfileStatusTC={updateProfileStatusTC}/>
            }

        </>
    );
};






