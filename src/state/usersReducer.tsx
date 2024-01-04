
// export type RootObject = {
// 	users: RootObjectUsers[];
// }
// export type RootObjectUsersLocation = {
// 	city: string;
// 	country: string;
// }
// export type RootObjectUsers = {
// 	id: number;
// 	photo: string;
// 	followed: boolean;
// 	fullName: string;
// 	status: string;
// 	location: RootObjectUsersLocation;
// }




export type userType={
    name:string
    id:number
    uniqueUrlName:null|number
    photos:{small:null|string,large:null|string}
    status:null|string
    followed:boolean
}


export type usersType={
    items:userType[]
    totalCount: number,
    error: string|null
    currentPage:number
    isFetching:boolean
    followingInProgress:Array<number>
}
const initialState={currentPage:45,isFetching:false,followingInProgress:[]as Array<number>}as usersType




export const usersReducer = (state: usersType= initialState  , action: UsersActionType) => {
    switch (action.type) {
        case 'FOLLOW':{
            return {...state,items:[...state.items.map(el=>el.id===action.userId ? {...el,followed:true}:el)]}
        }
        case 'UN-FOLLOW':{
            return {...state,items:[...state.items.map(el=>el.id===action.userId ? {...el,followed:false}:el)]}
        }
        case 'SET-USERS':{
                return {...state,... action.users}
        }
        case 'SET-CURRENT-PAGE':{
            return {...state,currentPage:action.currentPage}
        }
        case 'CHANGE-IS-FETCHING':{
            return {...state,isFetching:action.isFetching}
        }
        case 'FOLLOWING-IN-PROGRESS':{
          return {
              ...state,followingInProgress:action.inProgress?[...state.followingInProgress,action.id]:state.followingInProgress.filter(el=>el!=action.id)
          }
        }
        default:
            return state
    }
}

export const followingInProgressAC=(id:number,inProgress:boolean)=>{
    return {
      type: 'FOLLOWING-IN-PROGRESS', inProgress,id
    }as const
}

export const setCurrentPageAC=(currentPage:number)=>{
    return{
        type:'SET-CURRENT-PAGE',currentPage
    }as const
}

export const followAC=(userId:number)=>{
    return {
        type :'FOLLOW',userId
    }as  const
}

export const unFollowAC=(userId:number)=>{
    return {
        type :'UN-FOLLOW',userId
    }as  const
}
export const setUsersAC=(users:usersType)=>{
    return {
type :'SET-USERS',users
    }as const
}
export const changeIsFetchingAC=(isFetching:boolean)=>{
    return {
        type :'CHANGE-IS-FETCHING',isFetching
    }as const
}


export type UsersActionType=
    ReturnType<typeof followAC>|
    ReturnType<typeof unFollowAC>|
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof changeIsFetchingAC>|
    ReturnType<typeof followingInProgressAC>


