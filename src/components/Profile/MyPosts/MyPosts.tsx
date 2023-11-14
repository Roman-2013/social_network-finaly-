import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {AppPropsType} from '../../../App';

export const MyPosts:React.FC<AppPropsType> = ({postData}) => {
    console.log(postData)
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            {postData?.map(el=>{
                return   <Post key={el.id}   likesCount={el.likesCount} message={el.message}/>
            })}

        </div>
    );
};

