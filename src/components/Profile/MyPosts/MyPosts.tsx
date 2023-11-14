import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';

export const MyPosts = () => {

    const postData=[
        {id:1,message:'Hi, how are you',lekesCount:15},
        {id:2,message:'It\'s my first post',lekesCount:20},
        {id:2,message:'COOL',lekesCount:20},
        {id:2,message:'LUCKY MAN',lekesCount:20},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            {postData.map(el=>{
                return   <Post key={el.id} like={el.lekesCount} message={el.message}/>
            })}

        </div>
    );
};

