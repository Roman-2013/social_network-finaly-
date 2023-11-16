import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {AppPropsType} from '../../../App';

export const MyPosts:React.FC<AppPropsType> = ({postData}) => {

    let newPostElement=useRef<HTMLTextAreaElement>(null)


const addPost=()=>{
        alert(newPostElement.current?.value)
}

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            {postData?.map(el=>{
                return   <Post key={el.id}   likesCount={el.likesCount} message={el.message}/>
            })}

        </div>
    );
};

