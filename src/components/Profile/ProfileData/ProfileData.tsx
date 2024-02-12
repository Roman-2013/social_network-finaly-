import React from 'react';
import s from '../MyPosts/ProfileInfo/ProfileInfo.module.css';
import {ProfileStatusWithHooks} from '../ProfileStatus/ProfileStatusWithHooks';
import {ProfileAPI} from '../../../state/profileReducer';

type ProfileDataPropsType = {
    isOwner: boolean
    onMainPhoto: (value: any | null) => void
    updateProfileStatusTC: (status: string) => void,
    photos: string
    profile: ProfileAPI,
    status: string,

}


export const ProfileData: React.FC<ProfileDataPropsType & { activateEditMode: (value: boolean) => void }> = ({
                                                                                                                  isOwner,
                                                                                                                  onMainPhoto,
                                                                                                                  updateProfileStatusTC,
                                                                                                                  photos,
                                                                                                                  profile,
                                                                                                                  status,
                                                                                                                  activateEditMode
                                                                                                              }) => {
    return (
        <div className={s.description}>
            {isOwner || <div>
                <button onClick={() => activateEditMode(true)}>edit</button>
            </div>}
            <img alt={'image'} src={photos}/>
            {isOwner || <input onChange={(e) => onMainPhoto(e.target.files ? e.target.files[0] : '')} type="file"/>}
            <ProfileStatusWithHooks updateProfileStatusTC={updateProfileStatusTC} status={status}/>
            <div><b>Name:</b> {profile.fullName}</div>
            <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profile.lookingForAJob &&
                <div><b>
                    Looking for a job
                    description:</b> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'no content'}
                </div>
            }
            <div><b>About me:</b> {profile.aboutMe ? profile.aboutMe : 'no content'}</div>
            <div><b>Contact</b> : {profile.contacts ? Object.keys(profile.contacts).map(el => {
                return <div className={s.contacts}><b>{el}</b> : {(profile.contacts as {
                    [key: string]: string
                })[el] || '-'}</div>
            }) : ''}</div>

            <div>

            </div>
        </div>
    )
}