import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <>
            <div className={s.blockPicture}>
                <img
                    src="https://sun9-65.userapi.com/impg/c857736/v857736321/1034e2/DywLDwd6CeA.jpg?size=807x325&quality=96&sign=2d19ba00a905cdbe81732042935997de&type=album"
                    alt=""/>
            </div >
            <div className={s.description}>ava+decription</div>
        </>
    );
};

