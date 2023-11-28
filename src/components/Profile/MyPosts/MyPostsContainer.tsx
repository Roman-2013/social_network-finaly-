import React from 'react';
import {ProfilePropsType} from '../Profile';
import {addPostAC, updateNewPostTextAC} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';


export const MyPostsContainer: React.FC<ProfilePropsType> = ({dispatch,newPostText,postData}) => {

    const addPostHandler = () => {
        dispatch(addPostAC())
        dispatch(updateNewPostTextAC(''))

    }

    const onChangeHandler=(text:string)=>{
        dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            postData={postData}
            newPostText={newPostText}
            addPostAC={addPostHandler}
            updateNewPostText={(text)=>onChangeHandler(text)}/>
    );
};

