import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileAPI} from '../../../../state/profileReducer';
import userPhoto from './../../../../img/anime-male-avatar_950633-914.avif'


export const ProfileInfo:React.FC<{profile:  ProfileAPI}> = ({profile}) => {
    return (
        <>
            <div className={s.blockPicture}>
                <img
                    src="https://sun9-65.userapi.com/impg/c857736/v857736321/1034e2/DywLDwd6CeA.jpg?size=807x325&quality=96&sign=2d19ba00a905cdbe81732042935997de&type=album"
                    alt=""/>

            </div >
            <div className={s.description}>
                <div>{profile.aboutMe}</div>
               <div>{profile.fullName}</div>
              <div>
                  <img src={profile.photos.small===null?userPhoto:profile.photos.small}/>
              </div>
            </div>
        </>
    );
};

