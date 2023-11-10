import React from 'react';
import s from './Post.module.css'

type Post={
    message:string
    like:number
}

export const Post:React.FC<Post> = ({like,message}) => {
    return (
        <div className={s.item}>
            <img src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-917.jpg" alt=""/>
            {message}
            <div>{`${like} Like`}</div>
        </div>
    );
};

