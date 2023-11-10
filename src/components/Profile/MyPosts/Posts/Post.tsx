import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-917.jpg" alt=""/>
            Post 1
            <div>Like</div>
        </div>
    );
};

