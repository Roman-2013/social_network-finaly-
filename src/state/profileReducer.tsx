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
    profile: ProfileAPI | null,
    status: string
}

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'COOL', likesCount: 21},
        {id: 4, message: 'LUCKY MAN', likesCount: 50},
    ],
    profile: null,
    status: ''

}


export const ProfileReducer = (state: ProfileReducer = initialState, action: ProfileActionType): ProfileReducer => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state, postData: [...state.postData, {id: Math.random(), message: action.profileText, likesCount: 0}]}
        }
        case 'SET-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS', status
    } as const
}
export const setProfileAC = (profile: ProfileAPI) => {
    return {
        type: 'SET-PROFILE', profile
    } as const
}

export const addPostAC = (profileText:string) => {
    return {
        type: 'ADD-POST',profileText
    } as const
}

//TC
export const setProfileTC = (profileId: number) => (dispatch: Dispatch) => {
    profileAPI.setProfile(profileId)
        .then(res => {
            dispatch(setProfileAC(res.data))
        })
}

export const getProfileStatusTC=(userId:number)=>(dispatch:Dispatch)=>{
    profileAPI.getStatus(userId)
        .then(res=>{
            dispatch(setStatusAC(res.data))
        })
}
export const updateProfileStatusTC=(status:string)=>(dispatch:Dispatch)=>{
    profileAPI.updateProfileStatusTC(status)
        .then(res=>{
            if(res.data.resultCode===0){
               dispatch(setStatusAC(status))
            }

        })
}




export  type ProfileActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof setProfileAC> |
    ReturnType<typeof setStatusAC>

