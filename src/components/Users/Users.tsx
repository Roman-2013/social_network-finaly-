import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../img/anime-male-avatar_950633-914.avif';
import {userType} from '../../state/usersReducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';



type UsersProps={
    totalCount: number
    items: userType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    currentPage: number
    onPageChanged: (currentPage: number) => void
    followingInProgress:number[]
    followingInProgressAC:(id:number,inProgress:boolean)=>void
}




export const Users:React.FC<UsersProps  > = ({followingInProgressAC,followingInProgress,onPageChanged,totalCount,unFollow,follow,items,currentPage}) => {

    const pagesCount = Math.ceil(totalCount / 100)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            <div>
                {pages.map(p => <span
                        onClick={(e) => onPageChanged(p)}
                        className={p === currentPage ? s.selected : ''}
                        key={p}
                    >
        {p}
        </span>
                )}

            </div>
            {
                items?.map(el => {
                    return <div key={el.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${el.id}`}>
                           <img className={s.img} src={el.photos.small ? el.photos.small : userPhoto} alt=""/>
                    </NavLink>

                </div>
                <div>
                {el.followed
                    ? <button disabled={followingInProgress.some(userID=>userID===el.id)} onClick={() => {
                        followingInProgressAC(el.id,true)
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{withCredentials:true})
                            .then(res=>{
                                if(res.data.resultCode===0){
                                    unFollow(el.id)
                                }
                                followingInProgressAC(el.id,false)
                            })

                    }
                    }>Unfollow</button>
                    : <button disabled={followingInProgress.some(userID=>userID===el.id)}  onClick={() => {
                        followingInProgressAC(el.id,true)
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{userId:el.id},{withCredentials:true})
                            .then(res=>{
                                if(res.data.resultCode===0){
                                    follow(el.id)
                                }
                                followingInProgressAC(el.id,false)
                            })
                    }}>Follow</button>}


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
};

