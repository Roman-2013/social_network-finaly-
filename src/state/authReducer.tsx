export type DataType={
    id: number|null
    email: string|null
    login: string|null
    isFetching:boolean
}


type AuthType = {
    resultCode: number
    messages: string[]
    fieldsErrors:string[]
    data: DataType
}


const initialState={
    id: null,
    email: null,
    login: null,
    isFetching:false

}


export const authReducer = (state: DataType=initialState, action: AuthActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':{
            return {...state,...action.data,isFetching:true}
        }
        default:
            return state
    }
}

export const setUserDataAC=(data:DataType)=>{
    return {
        type:'SET-USER-DATA',data
    }as const
}


export type AuthActionType = ReturnType<typeof setUserDataAC>

