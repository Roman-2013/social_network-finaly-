import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../img/anime-male-avatar_950633-914.avif';
import {userType} from '../../state/usersReducer';
import {NavLink} from 'react-router-dom';



type UsersProps={
    totalCount: number
    items: userType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    currentPage: number
    onPageChanged: (currentPage: number) => void
}




export const Users:React.FC<UsersProps  > = ({onPageChanged,totalCount,unFollow,follow,items,currentPage}) => {

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
                    <NavLink to={'/profile/'+el.id}>
                           <img className={s.img} src={el.photos.small ? el.photos.small : userPhoto} alt=""/>
                    </NavLink>

                </div>
                <div>
                {el.followed
                    ? <button onClick={() => unFollow(el.id)}>Unfollow</button>
                    : <button onClick={() => follow(el.id)}>Follow</button>}


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

