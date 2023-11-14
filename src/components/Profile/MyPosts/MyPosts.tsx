import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <Post like={15} message={'Hi, how are you'}/>
            <Post like={20} message={`It's my first post`}/>
        </div>
    );
};

