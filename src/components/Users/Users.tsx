import React from 'react';
import s from './Users.module.css'
import axios from 'axios';
import {usersType, userType} from '../../state/usersReducer';
import userPhoto from '../../img/anime-male-avatar_950633-914.avif'

export type UsersPropsType = {
    totalCount:number
    error:string|null
    items: userType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: usersType) => void
    setCurrentPage:(currentPage:number)=>void
    currentPage:number
}


export class Users extends React.Component<UsersPropsType> {



componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=100`)
        .then(el => {
            this.props.setUsers(el.data)
        })
}

onPageChanged(e:number){
    this.props.setCurrentPage(e)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=100`)
        .then(el => {
            this.props.setUsers(el.data)
        })
}

    render() {
        const pagesCount=Math.ceil(this.props.totalCount/100)
        let pages=[]
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p=> <span
                        onClick={()=>this.onPageChanged(p)}
                        className={ p===this.props.currentPage?s.selected:''}
                        key={p}
                    >
                        {p}
                    </span>
                    )}

                </div>
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
