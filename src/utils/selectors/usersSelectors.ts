import {AppRootStateType} from '../../state/reduxStore';

export const getItems=(state:AppRootStateType)=>{
    return state.Users.items
}
export const getTotalCount=(state:AppRootStateType)=>{
    return state.Users.totalCount
}

export const getError=(state:AppRootStateType)=>{
    return state.Users.error
}
export const getCurrentPage=(state:AppRootStateType)=>{
    return state.Users.currentPage
}
export const getIsFetching=(state:AppRootStateType)=>{
    return state.Users.isFetching
}
export const getFollowingInProgress=(state:AppRootStateType)=>{
    return state.Users.followingInProgress
}

