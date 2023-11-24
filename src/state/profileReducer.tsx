import {StateType} from '../index';
import {ActionType} from './state';
import {PostPropsType} from '../components/Profile/MyPosts/Posts/Post';


export const ProfileReducer = (state:  { postData: PostPropsType[], newPostText: string }, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            state.postData.push({id: 5, message: state.newPostText, likesCount: 0})
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newPost
            return state
        }
        default:
            return state
    }
}




export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export let updateNewPostTextAC = (newPost: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newPost
    }as const
}

export  type ProfileActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
