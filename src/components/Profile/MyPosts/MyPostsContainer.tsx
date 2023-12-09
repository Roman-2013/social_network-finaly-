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



export const MyPostsContainer=connect(mapStateToProps, {
    addPostAC:addPostAC,
    updateNewPostText:updateNewPostTextAC
})(MyPosts)
