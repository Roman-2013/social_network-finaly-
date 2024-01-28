import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../img/anime-male-avatar_950633-914.avif';
import {NavLink} from 'react-router-dom';


type UsersProps = {
    followed: boolean
    status: null | string
    name: string
    id: number
    photoSmall: null | string
    followingInProgress: number[]
    followUnfollowTC: (userID: number, status: boolean) => void
}


export const User: React.FC<UsersProps> = ({
                                               id,
                                               photoSmall,
                                               followed,
                                               followingInProgress,
                                               followUnfollowTC,
                                               status, name
                                           }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${id}`}>
                           <img className={s.img} src={photoSmall ? photoSmall : userPhoto} alt=""/>
                    </NavLink>

                </div>
                <div>
                {followed
                    ? <button
                        disabled={followingInProgress.some(userID => userID === id)}
                        onClick={() => followUnfollowTC(id, false)}
                    >
                        Unfollow
                    </button>
                    : <button
                        disabled={followingInProgress.some(userID => userID === id)}
                        onClick={() => followUnfollowTC(id, true)}
                    >
                        Follow
                    </button>}
            </div>
            </span>
            <span>
            <span>
                <div>{name}</div>
            <div>{status}</div>
            </span>
            </span>
        </div>
    );
};

