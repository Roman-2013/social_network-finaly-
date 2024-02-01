import {userAPI} from '../api/api';
import {Dispatch} from 'redux';

export type userType = {
    name: string
    id: number
    uniqueUrlName: null | number
    photos: { small: null | string, large: null | string }
    status: null | string
    followed: boolean
}


export type usersType = {
    items: userType[]
    totalCount: number,
    error: string | null
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    usersOnThePage:number
}
const initialState = {usersOnThePage:11,currentPage: 1, isFetching: false, followingInProgress: [] as Array<number>} as usersType


export const usersReducer = (state: usersType = initialState, action: UsersActionType) => {
    switch (action.type) {
        case 'UNIVERSAL-FOLLOW': {
            return {
                ...state,
                items: [...state.items.map(el => el.id === action.userId ? {...el, followed: action.status} : el)]
            }
        }
        case 'SET-USERS': {
            return {...state, ...action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'CHANGE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.inProgress ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(el => el != action.id)
            }
        }
        default:
            return state
    }
}

export const followingInProgressAC = (id: number, inProgress: boolean) => {
    return {
        type: 'FOLLOWING-IN-PROGRESS', inProgress, id
    } as const
}


export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE', currentPage
    } as const
}
export const followUniversalAC = (userId: number, status: boolean) => {
    debugger
    return {
        type: 'UNIVERSAL-FOLLOW', userId, status
    } as const
}

export const setUsersAC = (users: usersType) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export const changeIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'CHANGE-IS-FETCHING', isFetching
    } as const
}
//TC
export const getUsersTC = (currentPage: number, usersOnThePage:number) => async (dispatch: Dispatch) => {
    currentPage !== 1
        ? dispatch(setCurrentPageAC(currentPage))
        : dispatch(setCurrentPageAC(1))
    dispatch(changeIsFetchingAC(true))
    const res = await userAPI.getUsers(currentPage,usersOnThePage)
    dispatch(setUsersAC(res))
    dispatch(changeIsFetchingAC(false))
}
export const followUnfollowTC = (userID: number, status: boolean) => async (dispatch: Dispatch) => {
    dispatch(followingInProgressAC(userID, true))
    let res;
    if (status) {
        res = await userAPI.follow(userID)
    } else {
        res = await userAPI.unFollow(userID)
    }
    if (res.data.resultCode === 0) {
        dispatch(followUniversalAC(userID, status))
    }
    dispatch(followingInProgressAC(userID, false))
}

//Type
export type UsersActionType =
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof changeIsFetchingAC> |
    ReturnType<typeof followingInProgressAC> |
    ReturnType<typeof followUniversalAC>


