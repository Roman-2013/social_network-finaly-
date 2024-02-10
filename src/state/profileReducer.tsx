import {PostPropsType} from '../components/Profile/MyPosts/Posts/Post';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './reduxStore';

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
    ' facebook': string
    ' website': string
    ' vk': string
    ' twitter': string
    ' instagram': string
    ' youtube': string
    ' github': string
    'mainLink': string
}
export type ProfileAPIPhotos = {
    small: string;
    large: string;
}


type ProfileReducer = {
    postData: PostPropsType[],
    profile: ProfileAPI,
    status: string
}

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'COOL', likesCount: 21},
        {id: 4, message: 'LUCKY MAN', likesCount: 50},
    ],
    profile: {} as ProfileAPI,
    status: ''
}


export const ProfileReducer = (state: ProfileReducer = initialState, action: ProfileActionType): ProfileReducer => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                postData: [...state.postData, {id: Math.random(), message: action.profileText, likesCount: 0}]
            }
        }
        case 'SET-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'DELETE-POST': {
            return {...state, postData: state.postData.filter(el => el.id !== action.postID)}
        }
        case 'SET-PHOTO': {
            return {...state, profile: {...state.profile, photos: {...state.profile.photos, large: action.photo}}}
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

export const addPostAC = (profileText: string) => {
    return {
        type: 'ADD-POST', profileText
    } as const
}

export const deletedPostAC = (postID: number) => {
    return {
        type: 'DELETE-POST', postID
    } as const
}

export const setPhotoAC = (photo: string) => {
    return {
        type: 'SET-PHOTO', photo
    } as const
}

//TC
export const setProfileTC = (profileId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.setProfile(profileId)
    dispatch(setProfileAC(res.data))
}

export const getProfileStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}
export const updateProfileStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateProfileStatusTC(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export const savePhotoTC = (photo: any) => async (dispatch: Dispatch) => {
    const res = await profileAPI.setPhoto(photo)
    if (res.data.resultCode === 0) {
        dispatch(setPhotoAC(res.data.data.photos.large))
    }
}

export const saveProfileTC = (profile: ProfileAPI) => async (dispatch: ThunkDispatch<ProfileReducer, unknown, ProfileActionType>,getState:()=>AppRootStateType) => {

   const userId=getState().Auth.id as number
    const res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(setProfileTC(userId))
    }
}


export  type ProfileActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof setProfileAC> |
    ReturnType<typeof setStatusAC> |
    ReturnType<typeof deletedPostAC> |
    ReturnType<typeof setPhotoAC>

