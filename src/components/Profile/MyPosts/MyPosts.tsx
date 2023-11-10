import React from 'react';
import s from './MyPosts.module.css'
import { Post } from './Posts/Post';

export const MyPosts = () => {
    return (
        <div>
            <div>My post</div>
            <textarea ></textarea>
            <button>Add post</button>
          <Post/>
          <Post/>
          <Post/>
        </div>
    );
};

