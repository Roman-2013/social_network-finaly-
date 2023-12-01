import {PostPropsType} from '../components/Profile/MyPosts/Posts/Post';

type ProfileReducer = {
    postData: PostPropsType[],
    newPostText: string
}

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'COOL', likesCount: 21},
        {id: 4, message: 'LUCKY MAN', likesCount: 50},
    ],
    newPostText: ''
}


export const ProfileReducer = (state: ProfileReducer = initialState, action: ProfileActionType):ProfileReducer => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state,postData:[...state.postData,{id: 5, message: state.newPostText, likesCount: 0}]}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state,newPostText:action.newPost}
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
    } as const
}

export  type ProfileActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
