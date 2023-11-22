import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {ProfilePropsType} from '../Profile';
import {addPostAC, updateNewPostTextAC} from '../../../state/state';



export const MyPosts: React.FC<ProfilePropsType> = ({dispatch,newPostText,postData}) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)


    const addPostHandler = () => {
        dispatch(addPostAC())

    }

    const onChangeHandler=()=>{
        if(newPostElement.current){
            dispatch(updateNewPostTextAC(newPostElement.current.value))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onChangeHandler} value={newPostText} ref={newPostElement}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>

            {postData.map(el => {
                return <Post key={el.id} likesCount={el.likesCount} message={el.message}/>
            })}

        </div>
    );
};

