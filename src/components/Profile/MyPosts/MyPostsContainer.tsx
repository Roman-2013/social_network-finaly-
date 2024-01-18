import {addPostAC} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';
import {AppRootStateType} from '../../../state/reduxStore';
import {connect} from 'react-redux';


const   mapStateToProps=(state:AppRootStateType)=>{
    return{
        postData:state.ProfilePage.postData,
    }
}



export const MyPostsContainer=connect(mapStateToProps, {
    addPostAC:addPostAC,
})(MyPosts)
