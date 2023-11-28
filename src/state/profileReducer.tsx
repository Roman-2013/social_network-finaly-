import {PostPropsType} from '../components/Profile/MyPosts/Posts/Post';

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'COOL', likesCount: 21},
        {id: 4, message: 'LUCKY MAN', likesCount: 50},
    ],
    newPostText: ''
}


export const ProfileReducer = (state: {
    postData: PostPropsType[],
    newPostText: string
} = initialState, action: ProfileActionType) => {
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
    } as const
}

export  type ProfileActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
