import React from 'react';
import s from './Users.module.css'
import {RootObject} from '../../state/usersReducer';

export type UsersPropsType = {
    users: RootObject,
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: RootObject) => void

}


export const Users: React.FC<UsersPropsType> = ({users, unFollow, follow, setUsers}) => {

    if(!users.users){
        setUsers(
            {
                users: [
                    {
                        id: 1,
                        photo: 'https://img.freepik.com/premium-photo/anime-male-avatar_950633-914.jpg',
                        followed: false,
                        fullName: 'Roman',
                        status: 'dimych is bos',
                        location: {city: 'minsk', country: 'Belarus'}
                    },
                    {
                        id: 2,
                        photo: 'https://img.freepik.com/premium-photo/anime-male-avatar_950633-914.jpg',
                        followed: true,
                        fullName: 'Sacha',
                        status: 'dimych is bos',
                        location: {city: 'Moscow', country: 'Russia'}
                    },
                    {
                        id: 3,
                        photo: 'https://img.freepik.com/premium-photo/anime-male-avatar_950633-914.jpg',
                        followed: false,
                        fullName: 'Ilya',
                        status: 'dimych is bos',
                        location: {city: 'Kiev', country: 'Ukraine'}
                    },
                ]
            }
        )
    }


        return (
            <div>
                {
                    users.users?.map(el => {
                        return <div key={el.id}>
        <span>
            <div>
                <img className={s.img} src={el.photo} alt=""/>
            </div>
            <div>
                {el.followed
                    ? <button onClick={() => unFollow(el.id)}>Unfollow</button>
                    : <button onClick={() => follow(el.id)}>Follow</button>}


            </div>
        </span>
                            <span>
            <span>
                <div>{el.fullName}</div>
                <div>{el.status}</div>
            </span>
            <span>
                <div>{el.location.city}</div>
                <div>{el.location.country}</div>
            </span>
        </span>
                        </div>
                    })
                }
            </div>
        );
    }
;

