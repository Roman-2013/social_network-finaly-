import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post, PostPropsType} from './Posts/Post';

type MyPostsType={
    updateNewPostText:(text:string)=>void
    addPostAC:()=>void
    postData:PostPropsType[]
    newPostText:string
}

export const MyPosts: React.FC<MyPostsType> = ({updateNewPostText,addPostAC,postData,newPostText}) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)


    const odnAddPost = () => {
        addPostAC()
    }

    const onChangeHandler=()=>{
        if(newPostElement.current){
            updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onChangeHandler} value={newPostText} ref={newPostElement}/>
            </div>
            <div>
                <button onClick={odnAddPost}>Add post</button>
            </div>

            {postData.map(el => {
                return <Post id={el.id} key={el.id} likesCount={el.likesCount} message={el.message}/>

            })}

        </div>
    );
};

