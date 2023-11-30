import React from 'react';
import {addPostAC, ProfileActionType, updateNewPostTextAC} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';
import {AppRootStateType, AppStoreType} from '../../../state/reduxStore';
import {connect} from 'react-redux';
import {DialogsActionType} from '../../../state/dialogsReducer';


const   mapStateToProps=(state:AppRootStateType)=>{
    return{
        postData:state.ProfilePage.postData,
        newPostText:state.ProfilePage.newPostText,
    }
}

const  mapDispatchToProps=(dispatch:(action:DialogsActionType | ProfileActionType)=>void)=>{
    return{
        addPostAC:()=>{
            dispatch(addPostAC())
            dispatch(updateNewPostTextAC(''))
        } ,
        updateNewPostText:(text: string)=>{
            dispatch(updateNewPostTextAC(text))
        }
    }
}



export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
