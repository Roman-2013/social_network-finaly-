import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {ProfilePropsType} from '../Profile';

export const MyPosts: React.FC<ProfilePropsType> = ({postData, addPost}) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)


    const addPostHandler = () => {
        if (addPost && newPostElement.current) {
            addPost(newPostElement.current.value)
            newPostElement.current.value=''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>

            {postData?.map(el => {
                return <Post key={el.id} likesCount={el.likesCount} message={el.message}/>
            })}

        </div>
    );
};

