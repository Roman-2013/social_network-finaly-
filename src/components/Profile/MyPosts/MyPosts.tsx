import React from 'react';
import s from './MyPosts.module.css'
import { Post } from './Posts/Post';

export const MyPosts = () => {
    return (
        <div>
            <div>My post</div>
            <textarea ></textarea>
            <button>Add post</button>
          <Post  like={15} message={'Hi, how are you'}/>
          <Post like={20} message ={`It's my first post`}/>
        </div>
    );
};

