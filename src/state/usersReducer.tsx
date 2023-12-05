
export type RootObject = {
	users: RootObjectUsers[];
}
export type RootObjectUsersLocation = {
	city: string;
	country: string;
}
export type RootObjectUsers = {
	id: number;
	photo: string;
	followed: boolean;
	fullName: string;
	status: string;
	location: RootObjectUsersLocation;
}




export const usersReducer = (state: RootObject= {} as RootObject , action: UsersActionType) => {
    switch (action.type) {
        case 'FOLLOW':{
            return {...state,users:[...state.users.map(el=>el.id===action.userId ? {...el,followed:true}:el)]}
        }
        case 'UN-FOLLOW':{
            return {...state,users:[...state.users.map(el=>el.id===action.userId ? {...el,followed:false}:el)]}
        }
        case 'SET-USERS':{
                return {...state,users: action.users.users}
        }
        default:
            return state
    }
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
export const setUsersAC=(users:RootObject)=>{
    return {
type :'SET-USERS',users
    }as const
}

export type UsersActionType=
    ReturnType<typeof followAC>|
    ReturnType<typeof unFollowAC>|
    ReturnType<typeof setUsersAC>
