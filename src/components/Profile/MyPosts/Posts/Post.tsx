import React from 'react';
import s from './Post.module.css'

export type PostPropsType={
    message:string
    likesCount:number
    id?:number
}

export const Post:React.FC<PostPropsType> = ({likesCount,message}) => {
    return (
        <div className={s.item}>
            <img src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-917.jpg" alt=""/>
            {message}
            <div>{`${likesCount} Like`}</div>
        </div>
    );
};

