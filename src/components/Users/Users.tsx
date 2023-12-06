import React from 'react';
import s from './Users.module.css'
import axios from 'axios';
import {userType} from '../../state/usersReducer';
import userPhoto from '../../img/anime-male-avatar_950633-914.avif'

export type UsersPropsType = {
    items: userType[],
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
}


export class Users extends React.Component<UsersPropsType> {



componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=100')
        .then(el => {
            this.props.setUsers(el.data.items)
        })
}

    render() {
        return (
            <div>
                {
                    this.props.items?.map(el => {
                        return <div key={el.id}>
        <span>
            <div>
                <img className={s.img} src={el.photos.small ? el.photos.small : userPhoto} alt=""/>
            </div>
            <div>
                {el.followed
                    ? <button onClick={() => this.props.unFollow(el.id)}>Unfollow</button>
                    : <button onClick={() => this.props.follow(el.id)}>Follow</button>}


            </div>
        </span>
                            <span>
            <span>
                <div>{el.name}</div>
                <div>{el.status}</div>
            </span>
        </span>
                        </div>
                    })
                }
            </div>
        );
    }
}
