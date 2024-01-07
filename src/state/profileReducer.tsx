import {PostPropsType} from '../components/Profile/MyPosts/Posts/Post';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

export type ProfileAPI = {
	aboutMe: string;
	contacts: ProfileAPIContacts;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: ProfileAPIPhotos;
}
export type ProfileAPIContacts = {
	facebook: string;
	website?: any;
	vk: string;
	twitter: string;
	instagram: string;
	youtube?: any;
	github: string;
	mainLink?: any;
}
export type ProfileAPIPhotos = {
	small: string;
	large: string;
}





type ProfileReducer = {
    postData: PostPropsType[],
    newPostText: string
    profile:ProfileAPI |null
}

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'COOL', likesCount: 21},
        {id: 4, message: 'LUCKY MAN', likesCount: 50},
    ],
    newPostText: '',
    profile:null
}


export const ProfileReducer = (state: ProfileReducer= initialState, action: ProfileActionType):ProfileReducer => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state,postData:[...state.postData,{id: 5, message: state.newPostText, likesCount: 0}]}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state,newPostText:action.newPost}
        }
        case 'SET-PROFILE': {
            return {...state,profile:action.profile}
        }
        default:
            return state
    }
}

export const setProfileAC=(profile:ProfileAPI)=>{
    return {
       type :'SET-PROFILE', profile
    }as const
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextAC = (newPost: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newPost
    } as const
}


//TC
export const setProfileTC=(profileId:string)=>(dispatch:Dispatch)=>{
    profileAPI.setProfile(profileId)
        .then(res => {
          dispatch(setProfileAC(res.data))
        })
}

export  type ProfileActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>|
    ReturnType<typeof setProfileAC>

